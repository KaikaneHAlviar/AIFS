$RepoRoot = Resolve-Path "$PSScriptRoot\.."
Set-Location $RepoRoot

Write-Host "Building with Vite into docs/ ..." -ForegroundColor Cyan

# optional: ensures deps are installed
if (!(Test-Path (Join-Path $RepoRoot "node_modules"))) {
  Write-Host "node_modules not found; installing dependencies..." -ForegroundColor Yellow
  npm install
}

npm run build

if ($LASTEXITCODE -ne 0) {
  Write-Error "Build failed. Aborting deploy."
  exit 1
}

Write-Host "Deployment build complete! docs/ is ready for GitHub Pages." -ForegroundColor Green
