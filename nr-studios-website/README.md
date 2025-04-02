# N.R. Studios Website

A modern macOS-styled dark theme website for N.R. Studios, showcasing Roblox games, changelogs, and developer information.

## Features

- Modern dark macOS-inspired UI design
- Responsive layout for all devices
- Interactive navigation with smooth transitions
- Sections for Games, Changelogs, and About
- Game cards to showcase Roblox games
- Changelog tracking with visual tags
- Developer profile section
- Loading screen animation
- GitHub Pages ready deployment

## How to Use

1. Simply open the `index.html` file in your web browser to view the website
2. Edit the HTML content to add your own Roblox game information, changelogs, and about details
3. Add your game thumbnails to the `img` folder and update the image paths in the HTML
4. Customize colors and styling in the `css/styles.css` file as needed

## GitHub Pages Deployment

This website is ready to be deployed to GitHub Pages. To deploy:

1. Create a GitHub repository for your website
2. Push your code to the repository
3. Run the included `deploy.ps1` script (PowerShell) to prepare the deployment
4. Push to the gh-pages branch with: `git push origin gh-pages`
5. Go to your repository settings and enable GitHub Pages from the gh-pages branch
6. Your site will be available at `https://yourusername.github.io/repositoryname/`

## Customization

### Adding Game Cards

To add a new game card, copy and paste the existing game card structure in the games section and update:

```html
<div class="game-card">
    <div class="game-thumbnail">
        <img src="img/your-game-image.jpg" alt="Game Title">
    </div>
    <div class="game-info">
        <h3>Your Game Title</h3>
        <p class="game-description">Description of your Roblox game.</p>
        <div class="game-stats">
            <span><i class="fas fa-user"></i> Players: XXK+</span>
            <span><i class="fas fa-star"></i> Rating: X.X</span>
        </div>
        <a href="#" class="play-button">Play Now</a>
    </div>
</div>
```

### Adding Changelog Entries

To add a new changelog entry, copy and paste the existing changelog structure:

```html
<div class="changelog-entry">
    <div class="changelog-header">
        <h3>Game Title - vX.X.X</h3>
        <span class="changelog-date">Month Day, Year</span>
    </div>
    <ul class="changelog-list">
        <li><span class="tag add">Added</span> New feature description</li>
        <li><span class="tag fix">Fixed</span> Bug fix description</li>
        <li><span class="tag improve">Improved</span> Improvement description</li>
    </ul>
</div>
```

## Loading Screen

The website includes a custom loading screen that displays while the content is loading. You can:

1. Customize the loading animation in the CSS
2. Change the loading text in the HTML
3. Adjust the loading time in `main.js` (currently set to 1.5 seconds)

## Credits

- Font Awesome for icons
- Placeholder.com for placeholder images
