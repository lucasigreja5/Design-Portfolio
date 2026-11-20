param(
  [int]$Port = 4173
)

$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$prefix = "http://localhost:$Port/"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()

Write-Host "Serving $root"
Write-Host "Portfolio:      $prefix"
Write-Host "Design System:  ${prefix}design-system.html"
Write-Host "Press Ctrl+C to stop."

$mime = @{
  '.html'  = 'text/html; charset=utf-8'
  '.css'   = 'text/css; charset=utf-8'
  '.js'    = 'application/javascript; charset=utf-8'
  '.json'  = 'application/json; charset=utf-8'
  '.svg'   = 'image/svg+xml'
  '.png'   = 'image/png'
  '.jpg'   = 'image/jpeg'
  '.jpeg'  = 'image/jpeg'
  '.webp'  = 'image/webp'
  '.woff2' = 'font/woff2'
  '.md'    = 'text/markdown; charset=utf-8'
}

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $reqPath = $ctx.Request.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrEmpty($reqPath)) { $reqPath = 'index.html' }

    $safeRel = $reqPath -replace '/', '\'
    $filePath = [System.IO.Path]::GetFullPath((Join-Path $root $safeRel))

    if (-not $filePath.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
      $ctx.Response.StatusCode = 403
    } elseif (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
      $ctx.Response.ContentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $ctx.Response.StatusCode = 404
    }
    $ctx.Response.Close()
  }
} finally {
  $listener.Stop()
}
