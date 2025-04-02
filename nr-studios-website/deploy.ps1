# GitHub Pages deployment script for PowerShell
# Run this script to deploy your website to GitHub Pages

Write-Host "Starting GitHub Pages deployment..." -ForegroundColor Green

# Initialize git if not already done
if (-not (Test-Path -Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit"
}

# Create gh-pages branch if it doesn't exist
$currentBranch = git branch --show-current
$branchExists = git branch --list gh-pages

if (-not $branchExists) {
    Write-Host "Creating gh-pages branch..." -ForegroundColor Yellow
    git checkout -b gh-pages
} else {
    Write-Host "Switching to gh-pages branch..." -ForegroundColor Yellow
    git checkout gh-pages
}

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Update website content"

# Push to GitHub (uncomment when ready)
Write-Host "To push to GitHub, run:" -ForegroundColor Cyan
Write-Host "git push origin gh-pages" -ForegroundColor White

Write-Host "Deployment preparation completed!" -ForegroundColor Green
Write-Host "After pushing to GitHub, your site will be available at: https://github.com/KrgLxx1/nrstudios.github.io" -ForegroundColor Cyan

# Return to original branch
if ($currentBranch) {
    Write-Host "Returning to $currentBranch branch..." -ForegroundColor Yellow
    git checkout $currentBranch
}
