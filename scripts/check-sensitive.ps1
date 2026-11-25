param(
  [switch]$AllVersions
)

$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
Push-Location $root

try {
  $activeVer = ''
  if (Test-Path 'VERSION') {
    $activeVer = (Get-Content 'VERSION' -Raw).Trim()
  }

  $issues = New-Object System.Collections.Generic.List[string]

  # 1. Ensure no .env files are tracked or staged
  $trackedEnv = git ls-files '.env' '.env.*' '*.pem' '*.key'
  foreach ($envFile in $trackedEnv) {
    if (-not [string]::IsNullOrWhiteSpace($envFile)) {
      $issues.Add("TRACKED_ENV: $envFile must not be tracked in Git")
    }
  }

  # 2. Collect non-ignored text files
  $allFiles = git ls-files --cached --others --exclude-standard | Sort-Object -Unique
  $binaryExt = '\.(png|jpe?g|webp|gif|svg|ico|woff2?|ttf|eot|pdf|zip|mp4|webm|mov|mp3|wav)$'
  $targetFiles = $allFiles | Where-Object {
    $f = $_
    if ($f -match $binaryExt) { return $false }
    if ($f -eq 'scripts/check-sensitive.ps1' -or $f -eq 'scripts/check-sensitive.sh') { return $false }
    if ($AllVersions) { return $true }
    if ($f -notmatch '^Versions/') { return $true }
    if ($activeVer -and $f -match ('^Versions/v' + [regex]::Escape($activeVer) + '/')) { return $true }
    return $false
  }

  # Build regexes without storing literal sensitive examples in prose
  $rules = @(
    @{ Name = 'GCP/Gemini Key'; Pattern = 'AQ\.[A-Za-z0-9_-]{6,}|AIza[A-Za-z0-9_-]{12,}' },
    @{ Name = 'OAuth/API Token'; Pattern = 'ya29\.[A-Za-z0-9_.-]{12,}|GOCSPX-[A-Za-z0-9_-]{12,}|gh[pou]_[A-Za-z0-9]{16,}|github_pat_[A-Za-z0-9_]{20,}|figd_[A-Za-z0-9_-]{16,}|AKIA[0-9A-Z]{16}' },
    @{ Name = 'OpenAI/Secret Key'; Pattern = 'sk-[A-Za-z0-9_-]{16,}' },
    @{ Name = 'Private Key'; Pattern = '-----BEGIN [A-Z ]+PRIVATE KEY-----' },
    @{ Name = 'Local Home Path'; Pattern = '(?:[A-Za-z](?::|%3A)[\\/])Users[\\/][^\\/<>\r\n"''\s]+|(?:^|[\s"''`(])/Users/[A-Za-z0-9._-]+/' },
    @{ Name = 'Workplace Cloud Path'; Pattern = 'OneDrive(?:%20|\s)-(?:%20|\s)[A-Za-z0-9._-]+|secom\.df\.gov\.br' },
    @{ Name = 'Private Drive URL'; Pattern = 'https?://drive\.google\.com/(?:file/d|drive/folders)/[A-Za-z0-9_-]+' },
    @{ Name = 'Personal Phone/WhatsApp'; Pattern = 'https?://wa\.me/\d+|\+55\s*\(?61\)?\s*9?\d{4}-?\d{4}' }
  )

  $scanned = 0
  foreach ($relPath in $targetFiles) {
    if (-not (Test-Path -LiteralPath $relPath -PathType Leaf)) { continue }
    $scanned += 1
    foreach ($rule in $rules) {
      $matches = Select-String -LiteralPath $relPath -Pattern $rule.Pattern
      foreach ($m in $matches) {
        $snippet = $m.Line.Trim()
        if ($snippet.Length -gt 100) { $snippet = $snippet.Substring(0, 100) + '...' }
        $issues.Add("[$($rule.Name)] ${relPath}:$($m.LineNumber) -> $snippet")
      }
    }
  }

  Write-Output "Scanned $scanned files (AllVersions=$AllVersions)."
  if ($issues.Count -gt 0) {
    Write-Output "[FAIL] Found $($issues.Count) sensitive data issue(s):"
    foreach ($issue in $issues) {
      Write-Output "  - $issue"
    }
    exit 1
  }

  Write-Output "[PASS] 0 sensitive data issues found."
  exit 0
} finally {
  Pop-Location
}
