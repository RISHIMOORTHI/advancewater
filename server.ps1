$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8080/')
$listener.Start()
Write-Host "Server running at http://localhost:8080/"
$root = "c:\Users\rishi\OneDrive\Desktop\water tank"
$mimeTypes = @{
  '.html' = 'text/html'
  '.css'  = 'text/css'
  '.js'   = 'application/javascript'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.svg'  = 'image/svg+xml'
}
while ($listener.IsListening) {
  $context = $listener.GetContext()
  $localPath = $context.Request.Url.LocalPath
  if ($localPath -eq '/') { $localPath = '/index.html' }
  $filePath = Join-Path $root $localPath.TrimStart('/')
  try {
    $ext = [System.IO.Path]::GetExtension($filePath)
    $contentType = $mimeTypes[$ext]
    if ($null -eq $contentType) { $contentType = 'application/octet-stream' }
    $bytes = [System.IO.File]::ReadAllBytes($filePath)
    $context.Response.ContentType = $contentType
    $context.Response.StatusCode = 200
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } catch {
    $context.Response.StatusCode = 404
  }
  $context.Response.Close()
}
