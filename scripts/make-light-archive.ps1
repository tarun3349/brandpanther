# Light source archive (no node_modules / dist) - typically ~1-5 MB, under 25 MB for sharing or upload caps.
$ErrorActionPreference = "Stop"
$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$zipPath = Join-Path $Root "brand-panther-source-$stamp.zip"

$tempRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("bp-src-" + [guid]::NewGuid().ToString())
$staging = Join-Path $tempRoot "brand-panther"
New-Item -Path $staging -ItemType Directory -Force | Out-Null

function Copy-Thing {
  param([string]$RelativePath)
  $src = Join-Path $Root $RelativePath
  if (-not (Test-Path $src)) { return }
  $dst = Join-Path $staging $RelativePath
  $parent = Split-Path $dst -Parent
  if (-not (Test-Path $parent)) {
    New-Item -Path $parent -ItemType Directory -Force | Out-Null
  }
  Copy-Item -LiteralPath $src -Destination $dst -Recurse -Force
}

foreach ($d in @("src", "public")) { Copy-Thing $d }

foreach (
  $f in @(
    "index.html", "package.json", "package-lock.json",
    "vite.config.ts", "vitest.config.ts", "tailwind.config.ts",
    "postcss.config.js", "eslint.config.js", "components.json",
    "tsconfig.json", "tsconfig.app.json", "tsconfig.node.json", "README.md"
  )
) {
  Copy-Thing $f
}

if (Test-Path (Join-Path $Root ".vscode\extensions.json")) {
  Copy-Thing ".vscode\extensions.json"
}

Compress-Archive -Path $staging -DestinationPath $zipPath -Force
Remove-Item $tempRoot -Recurse -Force -ErrorAction SilentlyContinue

$mb = [math]::Round((Get-Item $zipPath).Length / 1MB, 3)
Write-Host "Created: $zipPath"
Write-Host "Size: $mb MB"
if ($mb -ge 25) {
  Write-Warning "Archive is >= 25 MB - check large files under src/ or public/"
  exit 1
}
