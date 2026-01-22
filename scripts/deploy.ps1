# 1. Establish the Repo Root
# $PSScriptRoot is the folder where this script lives (AIFS/scripts)
# We go up ONE level to reach the AIFS root
$RepoRoot = Resolve-Path "$PSScriptRoot\.."

$SrcPath = Join-Path $RepoRoot "src"
$DestPath = Join-Path $RepoRoot "docs"

Write-Host "--- Deployment Started ---" -ForegroundColor Cyan
Write-Host "Targeting Root: $RepoRoot"
Write-Host "Source:         $SrcPath"
Write-Host "Destination:    $DestPath"
Write-Host "--------------------------"

# Ensure the docs directory exists
if (!(Test-Path $DestPath)) {
    New-Item -ItemType Directory -Path $DestPath | Out-Null
}

# 2. Handle 'css', 'js', and 'pages' (Copy CONTENTS only)
$FlatFolders = @("css", "js", "pages")

foreach ($folderName in $FlatFolders) {
    $currentSrc = Join-Path $SrcPath $folderName
    if (Test-Path $currentSrc) {
        Write-Host "Copying contents of $folderName..."
        # \* ensures files like index.html go into /docs/ directly
        Copy-Item -Path "$currentSrc\*" -Destination $DestPath -Recurse -Force
    } else {
        Write-Warning "Could not find source: $currentSrc"
    }
}

# 3. Handle 'assets' (Copy the FOLDER itself)
$AssetsSrc = Join-Path $SrcPath "assets"
if (Test-Path $AssetsSrc) {
    Write-Host "Copying 'assets' folder..."
    # No wildcard means the 'assets' folder is created inside 'docs'
    Copy-Item -Path $AssetsSrc -Destination $DestPath -Recurse -Force
}

Write-Host "Deployment Successful!" -ForegroundColor Green