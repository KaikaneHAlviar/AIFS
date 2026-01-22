# Define the source and destination paths relative to the script location
$srcPath = Join-Path $PSScriptRoot "src"
$destPath = Join-Path $PSScriptRoot "docs"

# Ensure the docs directory exists before copying
if (!(Test-Path -Path $destPath)) {
    New-Item -ItemType Directory -Path $destPath | Out-Null
    Write-Host "Created missing destination folder: $destPath" -ForegroundColor Cyan
}

# 1. Copy contents of pages, css, and js directly into docs/
$flatFolders = @("pages", "css", "js")

foreach ($folder in $flatFolders) {
    $currentFolder = Join-Path $srcPath $folder
    if (Test-Path $currentFolder) {
        Write-Host "Deploying contents of $folder..." -ForegroundColor Green
        # Copy-Item contents (*) to the destination
        Copy-Item -Path "$currentFolder\*" -Destination $destPath -Recurse -Force
    } else {
        Write-Warning "Source folder not found: $currentFolder"
    }
}

# 2. Copy the assets folder itself into docs/
$assetsSrc = Join-Path $srcPath "assets"
if (Test-Path $assetsSrc) {
    Write-Host "Deploying assets folder..." -ForegroundColor Green
    # Removing the \* ensures the folder 'assets' is copied, not just its contents
    Copy-Item -Path $assetsSrc -Destination $destPath -Recurse -Force
}

Write-Host "Deployment to /docs complete!" -ForegroundColor White -BackgroundColor DarkGreen