$RepoRoot = Resolve-Path "$PSScriptRoot\.."

$SrcPath = Join-Path $RepoRoot "src"
$DestPath = Join-Path $RepoRoot "docs"

if (!(Test-Path $DestPath)) {
    New-Item -ItemType Directory -Path $DestPath | Out-Null
}

# 2. Handle 'css', 'js', and 'pages'
$FlatFolders = @("css", "js", "pages")

foreach ($folderName in $FlatFolders) {
    $currentSrc = Join-Path $SrcPath $folderName
    if (Test-Path $currentSrc) {
        Write-Host "Copying contents of $folderName..."
        Copy-Item -Path "$currentSrc\*" -Destination $DestPath -Recurse -Force
    } else {
        Write-Warning "Could not find source: $currentSrc"
    }
}

# 3. Handle 'assets' folder
$AssetsSrc = Join-Path $SrcPath "assets"
if (Test-Path $AssetsSrc) {
    Write-Host "Copying 'assets' folder..."
    Copy-Item -Path $AssetsSrc -Destination $DestPath -Recurse -Force
}

Write-Host "Deployment Successful!" -ForegroundColor Green