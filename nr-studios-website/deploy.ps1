#!/usr/bin/env pwsh
# GitHub Pages deployment script for N.R. Studios Website

# Set up variables
$deployDir = "deploy"
$sourceDir = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "Starting GitHub Pages deployment..." -ForegroundColor Green

# Ensure we're in the repository root
Set-Location $sourceDir
Set-Location ..

# Initialize git if needed
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Get current branch
$currentBranch = git symbolic-ref --short HEAD 2>$null

# Create and switch to gh-pages branch
Write-Host "Creating gh-pages branch..." -ForegroundColor Yellow
git checkout -B gh-pages

# Create a temporary deploy directory
if (Test-Path $deployDir) {
    Remove-Item -Recurse -Force $deployDir
}
New-Item -ItemType Directory -Path $deployDir | Out-Null

# Copy website files to the deploy directory
Copy-Item -Path "$sourceDir\*" -Destination $deployDir -Recurse -Exclude @("deploy.ps1", ".git", $deployDir)

# Create .nojekyll file to bypass Jekyll processing
New-Item -ItemType File -Path "$deployDir\.nojekyll" -Force | Out-Null

# Copy files from deploy directory to root for GitHub Pages
Get-ChildItem -Path $deployDir -Recurse | ForEach-Object {
    $targetPath = $_.FullName.Replace("$deployDir\", "")
    
    if ($_.PSIsContainer) {
        # Create directory if it doesn't exist
        if (-not (Test-Path $targetPath)) {
            New-Item -ItemType Directory -Path $targetPath | Out-Null
        }
    } else {
        # Copy file
        Copy-Item -Path $_.FullName -Destination $targetPath -Force
    }
}

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Update website content"

# Push to GitHub (uncomment when ready)
Write-Host "To push to GitHub, run:" -ForegroundColor Cyan
Write-Host "git push origin gh-pages -f" -ForegroundColor White

Write-Host "Deployment preparation completed!" -ForegroundColor Green
Write-Host "After pushing to GitHub, your site will be available at: https://krglxx1.github.io/nrstudios.github.io" -ForegroundColor Cyan

# Return to original branch
if ($currentBranch) {
    Write-Host "Returning to $currentBranch branch..." -ForegroundColor Yellow
    git checkout $currentBranch
}

# Clean up
if (Test-Path $deployDir) {
    Remove-Item -Recurse -Force $deployDir
}
