// N.R. Studios Website JavaScript

// Create falling stars animation
function createFallingStars() {
    const galaxyBackground = document.querySelector('.galaxy-background');
    
    // Function to create a single falling star
    function createStar() {
        const star = document.createElement('div');
        star.classList.add('falling-star');
        
        // Random positioning
        const startPositionX = Math.random() * window.innerWidth;
        const startPositionY = Math.random() * (window.innerHeight / 3); // Start in top third
        
        star.style.left = `${startPositionX}px`;
        star.style.top = `${startPositionY}px`;
        
        // Random size variation
        const size = Math.random() * 3 + 1; // Increased max size
        star.style.width = `${size}px`;
        star.style.height = `${size * (Math.random() * 10 + 15)}px`; // Longer trails
        
        // Random brightness
        const brightness = Math.random() * 30 + 70; // 70-100%
        star.style.filter = `brightness(${brightness}%)`;
        
        // Random animation duration
        const duration = Math.random() * 5 + 3; // 3-8 seconds
        star.style.animationDuration = `${duration}s`;
        
        // Random direction (angle)
        const angle = Math.random() * 30 - 15; // -15 to 15 degrees
        star.style.transform = `rotate(${angle}deg)`;
        
        // Add to the galaxy background
        galaxyBackground.appendChild(star);
        
        // Remove the star after animation completes
        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    }
    
    // Create stars at random intervals
    function scheduleStar() {
        const delay = Math.random() * 800 + 200; // 200-1000ms between stars (increased frequency)
        setTimeout(() => {
            createStar();
            scheduleStar(); // Schedule the next star
        }, delay);
    }
    
    // Start the animation system
    scheduleStar();
}

// Create cosmic elements like planets and nebulae
function createCosmicElements() {
    const galaxyBackground = document.querySelector('.galaxy-background');
    
    // Create nebula clouds
    for (let i = 0; i < 3; i++) {
        const nebula = document.createElement('div');
        nebula.classList.add('nebula');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        nebula.style.left = `${posX}%`;
        nebula.style.top = `${posY}%`;
        
        // Random size
        const size = Math.random() * 300 + 200;
        nebula.style.width = `${size}px`;
        nebula.style.height = `${size}px`;
        
        // Random hue
        const hue = Math.random() * 60 + 180; // Blues and purples
        nebula.style.background = `radial-gradient(circle at center, 
            hsla(${hue}, 100%, 70%, 0.1) 0%,
            hsla(${hue+20}, 100%, 60%, 0.05) 50%, 
            transparent 70%)`;
        
        // Random animation duration
        const animDuration = Math.random() * 60 + 60;
        nebula.style.animationDuration = `${animDuration}s`;
        
        galaxyBackground.appendChild(nebula);
    }
    
    // Create distant planets
    for (let i = 0; i < 2; i++) {
        const planet = document.createElement('div');
        planet.classList.add('distant-planet');
        
        // Random position
        const posX = Math.random() * 80 + 10;
        const posY = Math.random() * 80 + 10;
        planet.style.left = `${posX}%`;
        planet.style.top = `${posY}%`;
        
        // Random size
        const size = Math.random() * 40 + 10;
        planet.style.width = `${size}px`;
        planet.style.height = `${size}px`;
        
        // Random color
        const planetHue = Math.floor(Math.random() * 360);
        planet.style.boxShadow = `0 0 ${size/2}px hsla(${planetHue}, 100%, 70%, 0.5)`;
        
        // Random animation duration for pulsating
        const pulseDuration = Math.random() * 10 + 5;
        planet.style.animationDuration = `${pulseDuration}s`;
        
        galaxyBackground.appendChild(planet);
    }
    
    // Occasional comet effect
    function createComet() {
        const comet = document.createElement('div');
        comet.classList.add('comet');
        
        // Random start position
        const startPosX = Math.random() * window.innerWidth;
        const startPosY = -100; // Start above viewport
        
        comet.style.left = `${startPosX}px`;
        comet.style.top = `${startPosY}px`;
        
        // Set size and trail
        comet.style.width = '3px';
        comet.style.height = '150px';
        
        // Add to galaxy background
        galaxyBackground.appendChild(comet);
        
        // Remove after animation
        setTimeout(() => {
            comet.remove();
        }, 4000);
        
        // Schedule next comet
        const nextComet = Math.random() * 15000 + 5000; // 5-20 seconds
        setTimeout(createComet, nextComet);
    }
    
    // Start comet system
    setTimeout(createComet, 3000);
}

// Handle the loading screen
window.addEventListener('load', function() {
    // Start the background effects
    createFallingStars();
    createCosmicElements();
    
    // Simulate loading time (remove this for production or adjust as needed)
    setTimeout(function() {
        // Hide the loading screen
        document.querySelector('.loading-screen').classList.add('hidden');
        
        // After the transition is complete, remove it from the DOM
        setTimeout(function() {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 2500); // Longer loading time to showcase the animation
});

// Handle section navigation and transitions
document.addEventListener('DOMContentLoaded', function() {
    // Welcome overlay handling
    const enterButton = document.getElementById('enter-button');
    const welcomeOverlay = document.querySelector('.welcome-overlay');
    
    if (enterButton) {
        enterButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide the welcome overlay with a fade out effect
            welcomeOverlay.classList.add('hidden');
            
            // After the transition is complete, remove it from the DOM
            setTimeout(function() {
                welcomeOverlay.style.display = 'none';
            }, 800);
        });
    }
    
    // Get all navigation items and content sections
    const navItems = document.querySelectorAll('nav ul li');
    const sections = document.querySelectorAll('.section');
    
    // Navigation functionality - improved for smoother transitions
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const navLink = e.currentTarget.querySelector('a');
            if (!navLink) return;
            
            e.preventDefault(); // Prevent default anchor behavior
            
            if (e.currentTarget.classList.contains('active')) return;
            
            // Get the target section ID from the href attribute
            const targetId = navLink.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;
            
            // Remove active class from all nav items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked nav item
            e.currentTarget.classList.add('active');
            
            // Hide all sections first
            sections.forEach(section => {
                section.classList.remove('active');
                section.classList.remove('fade-in');
                section.style.display = 'none';
            });
            
            // Show only the target section
            targetSection.style.display = 'flex';
            targetSection.classList.add('active');
            targetSection.classList.add('fade-in');
        });
    });
    
    // Handle external links for social media and play buttons
    // Play buttons for games
    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the game title to determine which game to open
            const gameTitle = this.closest('.game-card').querySelector('h3').textContent.trim();
            let gameUrl = '';
            
            // Set the URL based on game title (you can replace these with actual URLs)
            if (gameTitle === 'Tactical Assault | Reborn') {
                gameUrl = 'https://www.roblox.com/games/114956146850303/Tactical-Assault-REBORN';
            } else if (gameTitle === 'Untitled Invincible Game') {
                gameUrl = 'https://www.roblox.com/games/86596231144232/UPD-UNTITLED-INVINCIBLE-GAME';
            } else {
                gameUrl = 'https://www.roblox.com/discover';
            }
            
            // Open in a new tab
            window.open(gameUrl, '_blank');
        });
    });
    
    // Social media links
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            let socialUrl = '';
            
            // Determine which social media based on the icon class
            if (this.querySelector('.fa-discord')) {
                socialUrl = 'https://discord.gg/zvcYZjCRa6';
            }
            
            // Open in a new tab if there's a valid URL
            if (socialUrl) {
                window.open(socialUrl, '_blank');
            }
        });
    });
    
    // Add hover glow effects to interactive elements
    const interactiveElements = document.querySelectorAll('.game-card, .changelog-entry, .play-button, .social-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('glow-effect');
        });
        
        element.addEventListener('mouseleave', function() {
            this.classList.remove('glow-effect');
        });
    });
    
    // Set initial section - show only Games section at start
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    const defaultSection = document.querySelector('#games');
    if (defaultSection) {
        defaultSection.style.display = 'flex';
        defaultSection.classList.add('active');
    }
});
