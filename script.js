// ============ GLOBAL STATE ============
const state = {
    // Profile
    profileMedia: null,
    profileMediaType: null,
    profileBorder: {
        width: 3,
        color: '#ff85a1',
        style: 'solid',
        radius: 15,
        shadow: 5
    },
    
    // Colors
    colors: {
        text: '#ffffff',
        background: 'glass',
        button: 'pink',
        primary: '#ff85a1',
        secondary: '#85a7ff',
        accent: '#85ffc7',
        title: '#ff85a1'
    },
    
    // Glass effects
    glassEffects: {
        opacity: 85,
        blur: 8,
        brightness: 100,
        saturation: 100
    },
    
    // Background
    background: {
        type: 'galaxy',
        video: null,
        blur: 8,
        opacity: 85
    },
    
    // Links
    links: [],
    linkCounter: 0,
    
    // Title
    title: {
        text: 'My Awesome LinkTree',
        size: '2rem',
        color: '#ff85a1'
    },
    
    // UI State
    currentIcon: null,
    selectedIcon: 'fas fa-link'
};

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 LinkTree 3D Pro MAX ULTRA v4.0.0 LOADED');
    
    // Initialize all components
    initColorPickers();
    initSocialGrid();
    initBackgroundGallery();
    initButtonStyles();
    initEventListeners();
    addFirstLink();
    updateStats();
    
    // Auto-save state
    loadSavedState();
    setInterval(saveState, 10000); // Auto-save every 10 seconds
    
    console.log('✅ All systems ready!');
});

// ============ INIT FUNCTIONS ============
function initColorPickers() {
    // Text colors
    const textColors = [
        '#ffffff', '#000000', '#ff85a1', '#85a7ff', '#85ffc7', 
        '#c285ff', '#ffb385', '#ff4757', '#00d2ff', '#ffd700',
        '#00ff88', '#ff3366', '#9933ff', '#00ffff', '#ff00ff'
    ];
    
    createColorPicker('text-color-picker', textColors, state.colors.text, (color) => {
        state.colors.text = color;
        generatePreview();
        showToast('Text color updated!', 'success');
    });
    
    // Border colors
    const borderColors = [
        '#ff85a1', '#85a7ff', '#85ffc7', '#ffd700', '#ff3366',
        '#00ff88', '#9933ff', '#00ffff', '#ffffff', '#000000',
        '#ff00ff', '#00ff00', '#0000ff', '#ffff00', '#ff8800'
    ];
    
    createColorPicker('border-color-picker', borderColors, state.profileBorder.color, (color) => {
        state.profileBorder.color = color;
        updateProfileBorderPreview();
        generatePreview();
        showToast('Border color updated!', 'success');
    });
    
    // Background colors
    const bgColors = [
        '#0d0a0b', '#161013', '#1a1a2e', '#16213e', '#0f3460',
        '#1e5128', '#4e3620', '#3d0000', '#2d4059', '#1c6758'
    ];
    
    createColorPicker('bg-color-picker', bgColors, '#0d0a0b', (color) => {
        document.documentElement.style.setProperty('--bg-primary', color);
        generatePreview();
        showToast('Background color updated!', 'success');
    });
}

function createColorPicker(containerId, colors, selectedColor, callback) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    colors.forEach(color => {
        const div = document.createElement('div');
        div.className = 'color-option';
        div.style.background = color;
        div.title = color;
        
        if (color === selectedColor) {
            div.classList.add('active');
        }
        
        div.addEventListener('click', () => {
            container.querySelectorAll('.color-option').forEach(el => el.classList.remove('active'));
            div.classList.add('active');
            callback(color);
        });
        
        container.appendChild(div);
    });
}

function initSocialGrid() {
    const platforms = [
        // Social Media
        { name: 'WhatsApp', icon: 'fab fa-whatsapp', color: '#25D366' },
        { name: 'Instagram', icon: 'fab fa-instagram', color: '#E4405F' },
        { name: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000' },
        { name: 'TikTok', icon: 'fab fa-tiktok', color: '#000000' },
        { name: 'Telegram', icon: 'fab fa-telegram', color: '#0088CC' },
        { name: 'GitHub', icon: 'fab fa-github', color: '#181717' },
        { name: 'Twitter/X', icon: 'fab fa-twitter', color: '#1DA1F2' },
        { name: 'Facebook', icon: 'fab fa-facebook', color: '#1877F2' },
        { name: 'LinkedIn', icon: 'fab fa-linkedin', color: '#0A66C2' },
        { name: 'Discord', icon: 'fab fa-discord', color: '#5865F2' },
        { name: 'Snapchat', icon: 'fab fa-snapchat', color: '#FFFC00' },
        { name: 'Reddit', icon: 'fab fa-reddit', color: '#FF4500' },
        { name: 'Pinterest', icon: 'fab fa-pinterest', color: '#E60023' },
        { name: 'Twitch', icon: 'fab fa-twitch', color: '#9146FF' },
        { name: 'Spotify', icon: 'fab fa-spotify', color: '#1DB954' },
        { name: 'Apple Music', icon: 'fab fa-apple', color: '#000000' },
        { name: 'SoundCloud', icon: 'fab fa-soundcloud', color: '#FF3300' },
        { name: 'Dribbble', icon: 'fab fa-dribbble', color: '#EA4C89' },
        { name: 'Behance', icon: 'fab fa-behance', color: '#1769FF' },
        { name: 'Medium', icon: 'fab fa-medium', color: '#000000' },
        
        // Website & Apps
        { name: 'Website', icon: 'fas fa-globe', color: '#4285F4' },
        { name: 'Portfolio', icon: 'fas fa-briefcase', color: '#34A853' },
        { name: 'Blog', icon: 'fas fa-blog', color: '#FBBC05' },
        { name: 'Shop', icon: 'fas fa-shopping-cart', color: '#EA4335' },
        { name: 'Store', icon: 'fas fa-store', color: '#FF6B35' },
        { name: 'Etsy', icon: 'fab fa-etsy', color: '#F56400' },
        { name: 'Amazon', icon: 'fab fa-amazon', color: '#FF9900' },
        { name: 'PayPal', icon: 'fab fa-paypal', color: '#003087' },
        { name: 'Cash App', icon: 'fas fa-money-bill-wave', color: '#00D632' },
        
        // Contact
        { name: 'Email', icon: 'fas fa-envelope', color: '#D44638' },
        { name: 'Phone', icon: 'fas fa-phone', color: '#34A853' },
        { name: 'SMS', icon: 'fas fa-comment-sms', color: '#25D366' },
        { name: 'Location', icon: 'fas fa-map-marker-alt', color: '#4285F4' },
        { name: 'Calendar', icon: 'fas fa-calendar', color: '#EA4335' },
        { name: 'Event', icon: 'fas fa-calendar-alt', color: '#FBBC05' },
        
        // Files & Docs
        { name: 'PDF', icon: 'fas fa-file-pdf', color: '#FF0000' },
        { name: 'Document', icon: 'fas fa-file-alt', color: '#4285F4' },
        { name: 'Spreadsheet', icon: 'fas fa-file-excel', color: '#34A853' },
        { name: 'Presentation', icon: 'fas fa-file-powerpoint', color: '#EA4335' },
        { name: 'Image', icon: 'fas fa-file-image', color: '#FBBC05' },
        { name: 'Video', icon: 'fas fa-file-video', color: '#9933CC' },
        { name: 'Audio', icon: 'fas fa-file-audio', color: '#FF6600' },
        { name: 'Zip', icon: 'fas fa-file-archive', color: '#666666' },
        { name: 'Code', icon: 'fas fa-file-code', color: '#000000' },
        
        // Creative
        { name: 'Camera', icon: 'fas fa-camera', color: '#000000' },
        { name: 'Music', icon: 'fas fa-music', color: '#FF3366' },
        { name: 'Video', icon: 'fas fa-video', color: '#9933FF' },
        { name: 'Paint', icon: 'fas fa-paint-brush', color: '#FFAA00' },
        { name: 'Photo', icon: 'fas fa-image', color: '#00CCFF' },
        { name: 'Design', icon: 'fas fa-palette', color: '#FF66CC' },
        { name: 'Game', icon: 'fas fa-gamepad', color: '#00FF88' },
        
        // Transportation
        { name: 'Car', icon: 'fas fa-car', color: '#FF3333' },
        { name: 'Plane', icon: 'fas fa-plane', color: '#3366FF' },
        { name: 'Train', icon: 'fas fa-train', color: '#FF6600' },
        { name: 'Bus', icon: 'fas fa-bus', color: '#00CC66' },
        { name: 'Bike', icon: 'fas fa-bicycle', color: '#FFAA00' },
        { name: 'Walking', icon: 'fas fa-walking', color: '#9933FF' },
        
        // Food & Drink
        { name: 'Food', icon: 'fas fa-utensils', color: '#FF6666' },
        { name: 'Coffee', icon: 'fas fa-coffee', color: '#996633' },
        { name: 'Drink', icon: 'fas fa-glass-martini', color: '#00CCFF' },
        { name: 'Pizza', icon: 'fas fa-pizza-slice', color: '#FF6600' },
        { name: 'Burger', icon: 'fas fa-hamburger', color: '#FF3300' },
        
        // Health & Fitness
        { name: 'Heart', icon: 'fas fa-heart', color: '#FF3366' },
        { name: 'Medical', icon: 'fas fa-heartbeat', color: '#FF0000' },
        { name: 'Hospital', icon: 'fas fa-hospital', color: '#FFFFFF', style: 'background: #FF3366;' },
        { name: 'Fitness', icon: 'fas fa-dumbbell', color: '#00FF88' },
        { name: 'Running', icon: 'fas fa-running', color: '#FFAA00' },
        { name: 'Swimming', icon: 'fas fa-swimmer', color: '#3366FF' },
        
        // Education
        { name: 'School', icon: 'fas fa-school', color: '#9933FF' },
        { name: 'University', icon: 'fas fa-university', color: '#FF6600' },
        { name: 'Book', icon: 'fas fa-book', color: '#FFAA00' },
        { name: 'Graduation', icon: 'fas fa-graduation-cap', color: '#00CCFF' },
        { name: 'Science', icon: 'fas fa-flask', color: '#00FF88' },
        { name: 'Math', icon: 'fas fa-calculator', color: '#FF3366' },
        
        // Business
        { name: 'Business', icon: 'fas fa-briefcase', color: '#996633' },
        { name: 'Money', icon: 'fas fa-money-bill-wave', color: '#00CC66' },
        { name: 'Chart', icon: 'fas fa-chart-line', color: '#3366FF' },
        { name: 'Growth', icon: 'fas fa-chart-bar', color: '#FF6600' },
        { name: 'Target', icon: 'fas fa-bullseye', color: '#FF3366' },
        { name: 'Lightbulb', icon: 'fas fa-lightbulb', color: '#FFAA00' },
        
        // Technology
        { name: 'Code', icon: 'fas fa-code', color: '#000000' },
        { name: 'Laptop', icon: 'fas fa-laptop', color: '#666666' },
        { name: 'Mobile', icon: 'fas fa-mobile-alt', color: '#333333' },
        { name: 'Database', icon: 'fas fa-database', color: '#3366FF' },
        { name: 'Server', icon: 'fas fa-server', color: '#00CC66' },
        { name: 'Cloud', icon: 'fas fa-cloud', color: '#00CCFF' },
        { name: 'WiFi', icon: 'fas fa-wifi', color: '#FF6600' },
        { name: 'Bluetooth', icon: 'fab fa-bluetooth', color: '#3366FF' },
        
        // Weather
        { name: 'Sun', icon: 'fas fa-sun', color: '#FFAA00' },
        { name: 'Moon', icon: 'fas fa-moon', color: '#6666FF' },
        { name: 'Cloud', icon: 'fas fa-cloud', color: '#CCCCCC' },
        { name: 'Rain', icon: 'fas fa-cloud-rain', color: '#3366FF' },
        { name: 'Snow', icon: 'fas fa-snowflake', color: '#FFFFFF', style: 'background: #00CCFF;' },
        { name: 'Wind', icon: 'fas fa-wind', color: '#66CCFF' },
        
        // Animals
        { name: 'Cat', icon: 'fas fa-cat', color: '#FF6600' },
        { name: 'Dog', icon: 'fas fa-dog', color: '#996633' },
        { name: 'Fish', icon: 'fas fa-fish', color: '#3366FF' },
        { name: 'Bird', icon: 'fas fa-dove', color: '#FFFFFF', style: 'background: #FFAA00;' },
        { name: 'Horse', icon: 'fas fa-horse', color: '#993300' },
        
        // Travel
        { name: 'Map', icon: 'fas fa-map', color: '#FF3333' },
        { name: 'Compass', icon: 'fas fa-compass', color: '#FF6600' },
        { name: 'Mountain', icon: 'fas fa-mountain', color: '#996633' },
        { name: 'Tree', icon: 'fas fa-tree', color: '#00CC66' },
        { name: 'Camping', icon: 'fas fa-campground', color: '#993300' },
        { name: 'Beach', icon: 'fas fa-umbrella-beach', color: '#00CCFF' },
        
        // Time
        { name: 'Clock', icon: 'fas fa-clock', color: '#000000' },
        { name: 'Stopwatch', icon: 'fas fa-stopwatch', color: '#FF3366' },
        { name: 'Hourglass', icon: 'fas fa-hourglass', color: '#996633' },
        { name: 'Calendar', icon: 'fas fa-calendar-day', color: '#FF6600' },
        { name: 'Birthday', icon: 'fas fa-birthday-cake', color: '#FF3366' },
        
        // Security
        { name: 'Lock', icon: 'fas fa-lock', color: '#FF3333' },
        { name: 'Key', icon: 'fas fa-key', color: '#FFAA00' },
        { name: 'Shield', icon: 'fas fa-shield-alt', color: '#3366FF' },
        { name: 'Fingerprint', icon: 'fas fa-fingerprint', color: '#9933FF' },
        
        // Shopping
        { name: 'Shopping Bag', icon: 'fas fa-shopping-bag', color: '#FF3366' },
        { name: 'Gift', icon: 'fas fa-gift', color: '#FF3333' },
        { name: 'Tag', icon: 'fas fa-tag', color: '#00CC66' },
        { name: 'Ticket', icon: 'fas fa-ticket-alt', color: '#FF6600' },
        { name: 'Coupon', icon: 'fas fa-receipt', color: '#9933FF' },
        
        // Communication
        { name: 'Chat', icon: 'fas fa-comment', color: '#3366FF' },
        { name: 'Comments', icon: 'fas fa-comments', color: '#00CCFF' },
        { name: 'Message', icon: 'fas fa-envelope-open-text', color: '#FF6600' },
        { name: 'Notification', icon: 'fas fa-bell', color: '#FFAA00' },
        { name: 'Announcement', icon: 'fas fa-bullhorn', color: '#FF3366' },
        
        // Tools
        { name: 'Toolbox', icon: 'fas fa-toolbox', color: '#996633' },
        { name: 'Wrench', icon: 'fas fa-wrench', color: '#666666' },
        { name: 'Screwdriver', icon: 'fas fa-screwdriver', color: '#333333' },
        { name: 'Hammer', icon: 'fas fa-hammer', color: '#993300' },
        { name: 'Pencil', icon: 'fas fa-pencil-alt', color: '#3366FF' },
        { name: 'Eraser', icon: 'fas fa-eraser', color: '#FFFFFF', style: 'background: #FF3366;' },
        
        // Arrows & Navigation
        { name: 'Arrow Up', icon: 'fas fa-arrow-up', color: '#00CC66' },
        { name: 'Arrow Down', icon: 'fas fa-arrow-down', color: '#FF3366' },
        { name: 'Arrow Left', icon: 'fas fa-arrow-left', color: '#FFAA00' },
        { name: 'Arrow Right', icon: 'fas fa-arrow-right', color: '#3366FF' },
        { name: 'Home', icon: 'fas fa-home', color: '#FF6600' },
        { name: 'Sign Out', icon: 'fas fa-sign-out-alt', color: '#FF3333' },
        { name: 'Sign In', icon: 'fas fa-sign-in-alt', color: '#00CC66' },
        
        // Miscellaneous
        { name: 'Star', icon: 'fas fa-star', color: '#FFAA00' },
        { name: 'Heart', icon: 'fas fa-heart', color: '#FF3366' },
        { name: 'Thumbs Up', icon: 'fas fa-thumbs-up', color: '#00CC66' },
        { name: 'Fire', icon: 'fas fa-fire', color: '#FF6600' },
        { name: 'Magic', icon: 'fas fa-magic', color: '#9933FF' },
        { name: 'Rocket', icon: 'fas fa-rocket', color: '#FF3366' },
        { name: 'Crown', icon: 'fas fa-crown', color: '#FFAA00' },
        { name: 'Trophy', icon: 'fas fa-trophy', color: '#FFAA00' },
        { name: 'Medal', icon: 'fas fa-medal', color: '#FFAA00' },
        { name: 'Flag', icon: 'fas fa-flag', color: '#FF3333' },
        { name: 'Gem', icon: 'fas fa-gem', color: '#00CCFF' },
        { name: 'Diamond', icon: 'fas fa-gem', color: '#00FFFF' }
    ];
    
    const container = document.getElementById('social-media-grid');
    platforms.forEach(platform => {
        const div = document.createElement('div');
        div.className = 'social-icon';
        div.innerHTML = `<i class="${platform.icon}"></i><span>${platform.name}</span>`;
        
        if (platform.style) {
            div.style = platform.style;
        }
        
        div.addEventListener('click', () => {
            addLink({
                title: platform.name,
                url: '',
                icon: platform.icon,
                description: ''
            });
            showToast(`${platform.name} added!`, 'success');
        });
        
        container.appendChild(div);
    });
}

function initBackgroundGallery() {
    const backgrounds = [
        { name: 'Galaxy', icon: 'fas fa-star', gradient: 'linear-gradient(135deg, #000428 0%, #004e92 100%)' },
        { name: 'Nebula', icon: 'fas fa-cloud-moon', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
        { name: 'Sunset', icon: 'fas fa-sun', gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ffd166 100%)' },
        { name: 'Dark', icon: 'fas fa-moon', color: '#000000' },
        { name: 'Ocean', icon: 'fas fa-water', gradient: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)' },
        { name: 'Forest', icon: 'fas fa-tree', gradient: 'linear-gradient(135deg, #1e9600 0%, #fff200 100%)' },
        { name: 'Fire', icon: 'fas fa-fire', gradient: 'linear-gradient(135deg, #f46b45 0%, #eea849 100%)' },
        { name: 'Ice', icon: 'fas fa-snowflake', gradient: 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)' },
        { name: 'Neon', icon: 'fas fa-lightbulb', gradient: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)' },
        { name: 'Rainbow', icon: 'fas fa-rainbow', gradient: 'linear-gradient(135deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0000ff, #9900ff)' },
        { name: 'Space', icon: 'fas fa-rocket', gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)' },
        { name: 'Candy', icon: 'fas fa-candy-cane', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)' }
    ];
    
    const container = document.getElementById('bg-gallery-main');
    backgrounds.forEach((bg, index) => {
        const div = document.createElement('div');
        div.className = 'bg-option' + (index === 0 ? ' active' : '');
        div.style.background = bg.gradient || bg.color;
        div.setAttribute('data-bg-type', bg.name.toLowerCase());
        div.setAttribute('title', bg.name);
        
        div.innerHTML = `<i class="${bg.icon}"></i>`;
        
        div.addEventListener('click', () => {
            container.querySelectorAll('.bg-option').forEach(el => el.classList.remove('active'));
            div.classList.add('active');
            state.background.type = bg.name.toLowerCase();
            generatePreview();
            showToast(`${bg.name} background selected!`, 'success');
        });
        
        container.appendChild(div);
    });
}

function initButtonStyles() {
    const buttonStyles = [
        { name: 'Pink', color: 'pink', gradient: 'linear-gradient(135deg, var(--pink-neon), #ff6b9d)' },
        { name: 'Blue', color: 'blue', gradient: 'linear-gradient(135deg, var(--accent-blue), #6b8fff)' },
        { name: 'Green', color: 'green', gradient: 'linear-gradient(135deg, var(--accent-green), #6bffb8)' },
        { name: 'Purple', color: 'purple', gradient: 'linear-gradient(135deg, var(--accent-purple), #9933ff)' },
        { name: 'Orange', color: 'orange', gradient: 'linear-gradient(135deg, var(--accent-orange), #ff9d6b)' },
        { name: 'Red', color: 'red', gradient: 'linear-gradient(135deg, var(--accent-red), #ff3366)' },
        { name: 'Yellow', color: 'yellow', gradient: 'linear-gradient(135deg, var(--accent-yellow), #ffd700)' },
        { name: 'Teal', color: 'teal', gradient: 'linear-gradient(135deg, var(--accent-teal), #00ffcc)' },
        { name: 'Cyan', color: 'cyan', gradient: 'linear-gradient(135deg, var(--accent-cyan), #00ffff)' },
        { name: 'Black', color: 'black', gradient: 'linear-gradient(135deg, #000000, #333333)' },
        { name: 'White', color: 'white', gradient: 'linear-gradient(135deg, #ffffff, #cccccc)', textColor: '#000000' },
        { name: 'Gold', color: 'gold', gradient: 'linear-gradient(135deg, #ffd700, #ffaa00)' }
    ];
    
    const container = document.querySelector('.button-style-grid');
    buttonStyles.forEach(style => {
        const div = document.createElement('div');
        div.className = 'button-style' + (style.color === 'pink' ? ' active' : '');
        div.setAttribute('data-button-style', style.color);
        div.setAttribute('title', style.name);
        
        div.innerHTML = `
            <i class="fas fa-cube"></i>
            <span>${style.name}</span>
        `;
        
        if (style.textColor) {
            div.style.color = style.textColor;
        }
        
        div.addEventListener('click', () => {
            container.querySelectorAll('.button-style').forEach(el => el.classList.remove('active'));
            div.classList.add('active');
            state.colors.button = style.color;
            generatePreview();
            showToast(`Button style: ${style.name}`, 'success');
        });
        
        container.appendChild(div);
    });
}

// ============ EVENT LISTENERS ============
function initEventListeners() {
    // Mobile tabs
    document.querySelectorAll('.mobile-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            document.querySelectorAll('.mobile-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.mobile-tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');
            
            if (tabName === 'preview') {
                generatePreview();
            }
        });
    });
    
    // Upload tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const uploadType = btn.dataset.upload;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.upload-tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`upload-${uploadType}`).classList.add('active');
        });
    });
    
    // File uploads
    document.getElementById('upload-zone-image').addEventListener('click', () => document.getElementById('file-input-image').click());
    document.getElementById('upload-zone-video').addEventListener('click', () => document.getElementById('file-input-video').click());
    document.getElementById('upload-zone-gif').addEventListener('click', () => document.getElementById('file-input-gif').click());
    document.getElementById('bg-video-upload-zone').addEventListener('click', () => document.getElementById('bg-video-upload').click());
    document.getElementById('bg-back-upload-zone').addEventListener('click', () => document.getElementById('bg-back-upload').click());
    
    // Browse buttons
    document.getElementById('browse-image-btn').addEventListener('click', () => document.getElementById('file-input-image').click());
    document.getElementById('browse-video-btn').addEventListener('click', () => document.getElementById('file-input-video').click());
    document.getElementById('browse-gif-btn').addEventListener('click', () => document.getElementById('file-input-gif').click());
    document.getElementById('bg-video-browse-btn').addEventListener('click', () => document.getElementById('bg-video-upload').click());
    
    // File inputs
    document.getElementById('file-input-image').addEventListener('change', (e) => handleFileUpload(e, 'image'));
    document.getElementById('file-input-video').addEventListener('change', (e) => handleFileUpload(e, 'video'));
    document.getElementById('file-input-gif').addEventListener('change', (e) => handleFileUpload(e, 'gif'));
    document.getElementById('bg-video-upload').addEventListener('change', handleBgVideoUpload);
    document.getElementById('bg-back-upload').addEventListener('change', handleBgUpload);
    
    // URL loading
    document.getElementById('load-url-btn').addEventListener('click', loadFromURL);
    document.getElementById('test-url-btn').addEventListener('click', testURL);
    
    // Profile actions
    document.getElementById('edit-profile-btn').addEventListener('click', editProfile);
    document.getElementById('crop-profile-btn').addEventListener('click', cropProfile);
    document.getElementById('filter-profile-btn').addEventListener('click', filterProfile);
    document.getElementById('remove-profile-btn').addEventListener('click', removeProfileMedia);
    
    // Link management
    document.getElementById('add-link-btn').addEventListener('click', addCustomLink);
    document.getElementById('quick-add-btn').addEventListener('click', quickAddLink);
    document.getElementById('import-links-btn').addEventListener('click', importLinks);
    document.getElementById('clear-links-btn').addEventListener('click', clearLinks);
    
    // Generation & export
    document.getElementById('generate-btn').addEventListener('click', generatePreview);
    document.getElementById('start-preview-btn').addEventListener('click', generatePreview);
    document.getElementById('view-code-btn').addEventListener('click', showCodeModal);
    document.getElementById('download-btn').addEventListener('click', downloadHTML);
    document.getElementById('save-project-btn').addEventListener('click', saveProject);
    document.getElementById('share-btn').addEventListener('click', shareProject);
    document.getElementById('reset-btn').addEventListener('click', resetProject);
    
    // Modals
    document.getElementById('close-modal-btn').addEventListener('click', closeCodeModal);
    document.getElementById('close-modal-btn2').addEventListener('click', closeCodeModal);
    document.getElementById('copy-code-btn').addEventListener('click', copyCode);
    document.getElementById('download-code-btn').addEventListener('click', downloadCode);
    
    // Icon selector
    document.getElementById('open-icon-selector').addEventListener('click', openIconSelector);
    document.getElementById('close-icon-modal-btn').addEventListener('click', closeIconModal);
    document.getElementById('close-icon-modal-btn2').addEventListener('click', closeIconModal);
    document.getElementById('select-icon-btn').addEventListener('click', selectIcon);
    document.getElementById('icon-search').addEventListener('input', searchIcons);
    
    // Background video controls
    document.getElementById('bg-video-play').addEventListener('click', () => {
        const video = document.getElementById('video-bg-preview');
        video.play();
        showToast('Background video playing', 'success');
    });
    
    document.getElementById('bg-video-pause').addEventListener('click', () => {
        const video = document.getElementById('video-bg-preview');
        video.pause();
        showToast('Background video paused', 'warning');
    });
    
    document.getElementById('bg-video-stop').addEventListener('click', () => {
        const video = document.getElementById('video-bg-preview');
        video.pause();
        video.currentTime = 0;
        showToast('Background video stopped', 'warning');
    });
    
    document.getElementById('bg-video-remove').addEventListener('click', () => {
        state.background.video = null;
        document.getElementById('video-bg-preview-container').style.display = 'none';
        document.getElementById('video-bg-preview').src = '';
        generatePreview();
        showToast('Background video removed', 'success');
    });
    
    // Camera
    document.getElementById('start-camera-btn').addEventListener('click', startCamera);
    document.getElementById('stop-camera-btn').addEventListener('click', stopCamera);
    document.getElementById('capture-btn').addEventListener('click', capturePhoto);
    
    // Color pickers
    document.getElementById('custom-primary-color').addEventListener('change', (e) => {
        state.colors.primary = e.target.value;
    });
    
    document.getElementById('custom-secondary-color').addEventListener('change', (e) => {
        state.colors.secondary = e.target.value;
    });
    
    document.getElementById('custom-accent-color').addEventListener('change', (e) => {
        state.colors.accent = e.target.value;
    });
    
    document.getElementById('apply-custom-colors').addEventListener('click', applyCustomColors);
    
    // Title customization
    document.getElementById('update-title-btn').addEventListener('click', () => {
        state.title.text = document.getElementById('page-title').value;
        generatePreview();
        showToast('Page title updated!', 'success');
    });
    
    document.getElementById('title-size').addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('title-size-value').textContent = value + 'rem';
        state.title.size = value + 'rem';
        generatePreview();
    });
    
    document.getElementById('title-color').addEventListener('change', (e) => {
        state.title.color = e.target.value;
        generatePreview();
    });
    
    // Border controls
    document.getElementById('border-width').addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('border-width-value').textContent = value + 'px';
        state.profileBorder.width = parseInt(value);
        updateProfileBorderPreview();
        generatePreview();
    });
    
    document.getElementById('border-custom-color').addEventListener('change', (e) => {
        state.profileBorder.color = e.target.value;
        updateProfileBorderPreview();
        generatePreview();
        showToast('Border color updated!', 'success');
    });
    
    document.getElementById('border-radius').addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('border-radius-value').textContent = value + 'px';
        state.profileBorder.radius = parseInt(value);
        updateProfileBorderPreview();
        generatePreview();
    });
    
    document.getElementById('border-shadow').addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('border-shadow-value').textContent = value + 'px';
        state.profileBorder.shadow = parseInt(value);
        updateProfileBorderPreview();
        generatePreview();
    });
    
    // Border styles
    document.querySelectorAll('.border-style').forEach(style => {
        style.addEventListener('click', (e) => {
            document.querySelectorAll('.border-style').forEach(s => s.classList.remove('active'));
            style.classList.add('active');
            state.profileBorder.style = style.dataset.style;
            updateProfileBorderPreview();
            generatePreview();
            showToast(`Border style: ${style.dataset.style}`, 'success');
        });
    });
    
    // Border radius presets
    document.querySelectorAll('[data-radius]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const radius = e.target.dataset.radius;
            document.getElementById('border-radius').value = radius;
            document.getElementById('border-radius-value').textContent = radius + 'px';
            state.profileBorder.radius = parseInt(radius);
            updateProfileBorderPreview();
            generatePreview();
            showToast(`Border radius: ${radius}px`, 'success');
        });
    });
    
    // Background effects
    document.getElementById('blur-effect').addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('blur-value').textContent = value + 'px';
        state.background.blur = value;
        generatePreview();
    });
    
    document.getElementById('opacity-effect').addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('opacity-value').textContent = value + '%';
        state.background.opacity = value;
        generatePreview();
    });
    
    document.getElementById('saturation-effect').addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('saturation-value').textContent = value + '%';
        state.glassEffects.saturation = value;
        generatePreview();
    });
    
    // Glass effects
    document.getElementById('glass-opacity').addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('glass-opacity-value').textContent = value + '%';
        state.glassEffects.opacity = value;
        generatePreview();
    });
    
    document.getElementById('glass-blur').addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('glass-blur-value').textContent = value + 'px';
        state.glassEffects.blur = value;
        generatePreview();
    });
    
    document.getElementById('glass-brightness').addEventListener('input', (e) => {
        const value = e.target.value;
        document.getElementById('glass-brightness-value').textContent = value + '%';
        state.glassEffects.brightness = value;
        generatePreview();
    });
    
    // Background text buttons
    document.querySelectorAll('[data-bg-text]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            state.colors.background = e.target.dataset.bgText;
            generatePreview();
            showToast(`Text background: ${e.target.dataset.bgText}`, 'success');
        });
    });
    
    // Glass presets
    document.querySelectorAll('[data-preset]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const preset = e.target.dataset.preset;
            let opacity = 85, blur = 8, brightness = 100, saturation = 100;
            
            switch(preset) {
                case 'frosted': opacity = 70; blur = 15; brightness = 110; saturation = 120; break;
                case 'clear': opacity = 90; blur = 5; brightness = 100; saturation = 100; break;
                case 'dark': opacity = 60; blur = 10; brightness = 80; saturation = 90; break;
                case 'vibrant': opacity = 80; blur = 8; brightness = 120; saturation = 150; break;
            }
            
            document.getElementById('glass-opacity').value = opacity;
            document.getElementById('glass-blur').value = blur;
            document.getElementById('glass-brightness').value = brightness;
            document.getElementById('saturation-effect').value = saturation;
            
            document.getElementById('glass-opacity-value').textContent = opacity + '%';
            document.getElementById('glass-blur-value').textContent = blur + 'px';
            document.getElementById('glass-brightness-value').textContent = brightness + '%';
            document.getElementById('saturation-value').textContent = saturation + '%';
            
            state.glassEffects = { opacity, blur, brightness, saturation };
            generatePreview();
            showToast(`Glass preset: ${preset}`, 'success');
        });
    });
    
    // Color presets
    document.querySelectorAll('[data-preset]').forEach(btn => {
        if (btn.dataset.preset && ['neon', 'dark', 'pastel', 'sunset'].includes(btn.dataset.preset)) {
            btn.addEventListener('click', (e) => {
                const preset = e.target.dataset.preset;
                applyColorPreset(preset);
            });
        }
    });
    
    // Input events for auto-update
    document.getElementById('profile-name').addEventListener('input', () => {
        updateStats();
        setTimeout(generatePreview, 500);
    });
    
    document.getElementById('profile-desc').addEventListener('input', () => {
        updateStats();
        setTimeout(generatePreview, 500);
    });
    
    document.getElementById('footer-text').addEventListener('input', () => {
        setTimeout(generatePreview, 500);
    });
    
    // Drag and drop
    setupDragAndDrop();
}

// ============ CORE FUNCTIONS ============
function handleFileUpload(event, type) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Check file size
    const maxSize = type === 'video' ? 200 * 1024 * 1024 : 100 * 1024 * 1024;
    if (file.size > maxSize) {
        showToast(`File too large! Max ${type === 'video' ? '200MB' : '100MB'}`, 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        state.profileMedia = e.target.result;
        state.profileMediaType = type;
        
        const preview = document.getElementById('profile-preview');
        const img = document.getElementById('profile-img-preview');
        const video = document.getElementById('profile-video-preview');
        
        preview.style.display = 'block';
        
        if (type === 'video') {
            img.style.display = 'none';
            video.style.display = 'block';
            video.src = e.target.result;
            video.load();
            video.play().catch(e => console.log('Autoplay prevented'));
        } else {
            video.style.display = 'none';
            img.style.display = 'block';
            img.src = e.target.result;
        }
        
        updateProfileBorderPreview();
        updateStats();
        generatePreview();
        showToast(`${type} uploaded successfully!`, 'success');
    };
    
    reader.onerror = function() {
        showToast('Error reading file!', 'error');
    };
    
    reader.readAsDataURL(file);
}

function handleBgVideoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Check file size
    if (file.size > 200 * 1024 * 1024) {
        showToast('Video too large! Max 200MB', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        state.background.video = e.target.result;
        
        const previewContainer = document.getElementById('video-bg-preview-container');
        const video = document.getElementById('video-bg-preview');
        
        previewContainer.style.display = 'block';
        video.src = e.target.result;
        video.load();
        video.play().catch(e => console.log('Autoplay prevented'));
        
        generatePreview();
        showToast('Background video uploaded!', 'success');
    };
    
    reader.onerror = function() {
        showToast('Error reading video file!', 'error');
    };
    
    reader.readAsDataURL(file);
}

function handleBgUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        // Set as custom background
        const bgDivs = document.querySelectorAll('.bg-option');
        if (bgDivs.length > 0) {
            bgDivs.forEach(div => div.classList.remove('active'));
        }
        
        // Create new background option
        const container = document.getElementById('bg-gallery-main');
        const div = document.createElement('div');
        div.className = 'bg-option active';
        div.style.backgroundImage = `url(${e.target.result})`;
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center';
        div.setAttribute('data-bg-type', 'custom');
        div.setAttribute('title', 'Custom Background');
        div.innerHTML = '<i class="fas fa-image"></i>';
        
        div.addEventListener('click', () => {
            container.querySelectorAll('.bg-option').forEach(el => el.classList.remove('active'));
            div.classList.add('active');
            state.background.type = 'custom';
            state.background.custom = e.target.result;
            generatePreview();
            showToast('Custom background selected!', 'success');
        });
        
        container.appendChild(div);
        
        generatePreview();
        showToast('Custom background uploaded!', 'success');
    };
    
    reader.readAsDataURL(file);
}

function loadFromURL() {
    const url = document.getElementById('url-input').value.trim();
    if (!url) {
        showToast('Please enter a URL!', 'error');
        return;
    }
    
    // Validate URL
    try {
        new URL(url);
    } catch {
        showToast('Invalid URL format!', 'error');
        return;
    }
    
    state.profileMedia = url;
    state.profileMediaType = 'image';
    
    const preview = document.getElementById('profile-preview');
    const img = document.getElementById('profile-img-preview');
    const video = document.getElementById('profile-video-preview');
    
    preview.style.display = 'block';
    video.style.display = 'none';
    img.style.display = 'block';
    img.src = url;
    
    updateProfileBorderPreview();
    generatePreview();
    showToast('Image loaded from URL!', 'success');
}

function testURL() {
    const url = document.getElementById('url-input').value.trim();
    if (!url) {
        showToast('Please enter a URL!', 'error');
        return;
    }
    
    showToast('Testing URL...', 'info');
    
    // Create test image
    const testImg = new Image();
    testImg.onload = function() {
        showToast('URL is valid and accessible!', 'success');
    };
    testImg.onerror = function() {
        showToast('URL is not accessible!', 'error');
    };
    testImg.src = url;
}

function removeProfileMedia() {
    state.profileMedia = null;
    state.profileMediaType = null;
    document.getElementById('profile-preview').style.display = 'none';
    generatePreview();
    showToast('Profile media removed!', 'success');
}

function addFirstLink() {
    addLink({
        title: 'My Awesome Website',
        url: 'https://example.com',
        icon: 'fas fa-globe',
        description: 'Visit my personal website'
    });
}

function addCustomLink() {
    state.linkCounter++;
    addLink({
        title: `Cool Link ${state.linkCounter}`,
        url: '',
        icon: 'fas fa-link',
        description: 'Link description...'
    });
    showToast('New link added!', 'success');
}

function quickAddLink() {
    const title = prompt('Enter link title:', 'My Awesome Link');
    if (!title) return;
    
    let url = prompt('Enter URL:', 'https://');
    if (!url) return;
    
    if (!url.startsWith('http')) {
        url = 'https://' + url;
    }
    
    const description = prompt('Enter description (optional):', '');
    
    state.linkCounter++;
    addLink({ 
        title, 
        url, 
        icon: 'fas fa-link',
        description: description || ''
    });
    showToast('Quick link added!', 'success');
}

function addLink(data) {
    const linkId = Date.now(); // Unique ID
    const link = { ...data, id: linkId };
    state.links.push(link);
    
    const item = document.createElement('div');
    item.className = 'link-item';
    item.id = `link-${linkId}`;
    
    item.innerHTML = `
        <div class="link-header">
            <span>LINK #${state.links.length}</span>
            <div class="link-controls">
                <button class="edit-link-btn" data-id="${linkId}" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-link-btn" data-id="${linkId}" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="move-up-btn" data-id="${linkId}" title="Move Up">
                    <i class="fas fa-arrow-up"></i>
                </button>
                <button class="move-down-btn" data-id="${linkId}" title="Move Down">
                    <i class="fas fa-arrow-down"></i>
                </button>
            </div>
        </div>
        <div style="margin-bottom: 10px;">
            <input type="text" class="link-title form-input" placeholder="Link Title" value="${data.title}" style="width: 100%; margin-bottom: 8px;">
            <input type="url" class="link-url form-input" placeholder="https://example.com" value="${data.url}" style="width: 100%; margin-bottom: 8px;">
            <textarea class="link-description-input" placeholder="Link description (optional)">${data.description || ''}</textarea>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
            <select class="link-icon-select form-select" style="flex: 1;">
                <option value="fas fa-link">Default Link</option>
                <option value="fab fa-whatsapp">WhatsApp</option>
                <option value="fab fa-instagram">Instagram</option>
                <option value="fab fa-youtube">YouTube</option>
                <option value="fab fa-tiktok">TikTok</option>
                <option value="fab fa-github">GitHub</option>
                <option value="fab fa-twitter">Twitter/X</option>
                <option value="fab fa-facebook">Facebook</option>
                <option value="fab fa-linkedin">LinkedIn</option>
                <option value="fas fa-globe">Website</option>
                <option value="fas fa-envelope">Email</option>
                <option value="fas fa-phone">Phone</option>
                <option value="fas fa-shopping-cart">Shop</option>
                <option value="fas fa-music">Music</option>
                <option value="fas fa-video">Video</option>
                <option value="fas fa-image">Image</option>
                <option value="fas fa-file-pdf">PDF</option>
                <option value="fas fa-download">Download</option>
            </select>
            <div style="width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: rgba(255, 133, 161, 0.1); border-radius: 8px;">
                <i class="${data.icon}" style="color: var(--pink-neon); font-size: 18px;"></i>
            </div>
            <button class="btn-3d btn-secondary choose-icon-btn" data-id="${linkId}" style="padding: 8px 12px; font-size: 0.7rem;">
                <i class="fas fa-icons"></i> Choose Icon
            </button>
        </div>
    `;
    
    // Set selected icon
    const select = item.querySelector('.link-icon-select');
    Array.from(select.options).forEach(option => {
        if (option.value === data.icon) {
            option.selected = true;
        }
    });
    
    document.getElementById('links-list').appendChild(item);
    
    // Add event listeners
    const linkIdFinal = linkId;
    
    item.querySelector('.edit-link-btn').addEventListener('click', () => {
        const titleInput = item.querySelector('.link-title');
        titleInput.focus();
        titleInput.select();
        showToast(`Editing: ${titleInput.value}`, 'info');
    });
    
    item.querySelector('.delete-link-btn').addEventListener('click', () => {
        item.style.transform = 'translateX(-100%)';
        item.style.opacity = '0';
        setTimeout(() => {
            item.remove();
            state.links = state.links.filter(l => l.id != linkIdFinal);
            updateStats();
            generatePreview();
            showToast('Link removed!', 'success');
        }, 300);
    });
    
    item.querySelector('.move-up-btn').addEventListener('click', () => {
        moveLinkUp(linkIdFinal);
    });
    
    item.querySelector('.move-down-btn').addEventListener('click', () => {
        moveLinkDown(linkIdFinal);
    });
    
    item.querySelector('.choose-icon-btn').addEventListener('click', () => {
        state.currentIcon = linkIdFinal;
        openIconSelector();
    });
    
    item.querySelector('.link-title').addEventListener('input', (e) => {
        const link = state.links.find(l => l.id === linkIdFinal);
        if (link) link.title = e.target.value;
        updateStats();
        generatePreview();
    });
    
    item.querySelector('.link-url').addEventListener('input', (e) => {
        const link = state.links.find(l => l.id === linkIdFinal);
        if (link) link.url = e.target.value;
        updateStats();
        generatePreview();
    });
    
    item.querySelector('.link-description-input').addEventListener('input', (e) => {
        const link = state.links.find(l => l.id === linkIdFinal);
        if (link) link.description = e.target.value;
        updateStats();
        generatePreview();
    });
    
    item.querySelector('.link-icon-select').addEventListener('change', (e) => {
        const link = state.links.find(l => l.id === linkIdFinal);
        if (link) {
            link.icon = e.target.value;
            item.querySelector('.fa-lg, .fab, .fas').className = link.icon;
        }
        generatePreview();
    });
    
    updateStats();
    generatePreview();
}

function moveLinkUp(linkId) {
    const index = state.links.findIndex(l => l.id === linkId);
    if (index > 0) {
        // Swap in array
        [state.links[index], state.links[index - 1]] = [state.links[index - 1], state.links[index]];
        
        // Swap in DOM
        const container = document.getElementById('links-list');
        const items = Array.from(container.children);
        const itemIndex = items.findIndex(item => item.id === `link-${linkId}`);
        
        if (itemIndex > 0) {
            container.insertBefore(items[itemIndex], items[itemIndex - 1]);
        }
        
        generatePreview();
        showToast('Link moved up!', 'success');
    }
}

function moveLinkDown(linkId) {
    const index = state.links.findIndex(l => l.id === linkId);
    if (index < state.links.length - 1) {
        // Swap in array
        [state.links[index], state.links[index + 1]] = [state.links[index + 1], state.links[index]];
        
        // Swap in DOM
        const container = document.getElementById('links-list');
        const items = Array.from(container.children);
        const itemIndex = items.findIndex(item => item.id === `link-${linkId}`);
        
        if (itemIndex < items.length - 1) {
            container.insertBefore(items[itemIndex + 1], items[itemIndex]);
        }
        
        generatePreview();
        showToast('Link moved down!', 'success');
    }
}

function importLinks() {
    const json = prompt('Paste links JSON:');
    if (!json) return;
    
    try {
        const links = JSON.parse(json);
        if (Array.isArray(links)) {
            // Clear existing links
            state.links = [];
            document.getElementById('links-list').innerHTML = '';
            
            // Add new links
            links.forEach(link => {
                addLink(link);
            });
            
            showToast(`${links.length} links imported!`, 'success');
        } else {
            showToast('Invalid links format!', 'error');
        }
    } catch (e) {
        showToast('Invalid JSON!', 'error');
    }
}

function clearLinks() {
    if (confirm('Are you sure you want to clear all links?')) {
        state.links = [];
        document.getElementById('links-list').innerHTML = '';
        updateStats();
        generatePreview();
        showToast('All links cleared!', 'success');
    }
}

function updateStats() {
    const links = state.links.length;
    document.getElementById('total-links').textContent = links;
    document.getElementById('preview-links').textContent = links;
    
    const nameLen = document.getElementById('profile-name').value.length;
    const descLen = document.getElementById('profile-desc').value.length;
    let totalChars = nameLen + descLen;
    
    // Add link text lengths
    state.links.forEach(link => {
        totalChars += (link.title?.length || 0);
        totalChars += (link.url?.length || 0);
        totalChars += (link.description?.length || 0);
    });
    
    document.getElementById('chars-count').textContent = totalChars;
    
    // Calculate approximate file size
    let fileSize = 0;
    if (state.profileMedia) {
        // Rough estimate: 1 character ≈ 1 byte, base64 adds ~33% overhead
        fileSize += state.profileMedia.length * 0.75;
    }
    fileSize += totalChars;
    
    // Add video background size estimate
    if (state.background.video) {
        fileSize += state.background.video.length * 0.75;
    }
    
    const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
    document.getElementById('file-size-count').textContent = fileSizeMB + ' MB';
    
    // Update preview stats
    document.getElementById('preview-effects').textContent = 8 + links;
    const performance = Math.max(70, 100 - links * 1.5);
    document.getElementById('preview-performance').textContent = performance.toFixed(0) + '%';
}

function updateProfileBorderPreview() {
    const borderPreview = document.getElementById('profile-border-preview');
    if (borderPreview) {
        borderPreview.style.borderWidth = state.profileBorder.width + 'px';
        borderPreview.style.borderColor = state.profileBorder.color;
        borderPreview.style.borderStyle = state.profileBorder.style;
        borderPreview.style.borderRadius = state.profileBorder.radius + 'px';
        borderPreview.style.boxShadow = `0 0 ${state.profileBorder.shadow}px ${state.profileBorder.color}`;
    }
}

// ============ PREVIEW GENERATION ============
function generatePreview() {
    showLoading(true);
    
    setTimeout(() => {
        const name = document.getElementById('profile-name').value || 'Axelux';
        const desc = document.getElementById('profile-desc').value;
        const footer = document.getElementById('footer-text').value || 'Axelux | LinkTree 3D Pro MAX ULTRA';
        
        // Get button gradient based on selected style
        const buttonGradients = {
            pink: 'linear-gradient(135deg, #ff85a1, #ff6b9d)',
            blue: 'linear-gradient(135deg, #85a7ff, #6b8fff)',
            green: 'linear-gradient(135deg, #85ffc7, #6bffb8)',
            purple: 'linear-gradient(135deg, #c285ff, #9933ff)',
            orange: 'linear-gradient(135deg, #ffb385, #ff9d6b)',
            red: 'linear-gradient(135deg, #ff3366, #ff0033)',
            yellow: 'linear-gradient(135deg, #ffd700, #ffaa00)',
            teal: 'linear-gradient(135deg, #00ffcc, #00cc99)',
            cyan: 'linear-gradient(135deg, #00ffff, #00cccc)',
            black: 'linear-gradient(135deg, #000000, #333333)',
            white: 'linear-gradient(135deg, #ffffff, #cccccc)',
            gold: 'linear-gradient(135deg, #ffd700, #ffaa00)'
        };
        
        const buttonGradient = buttonGradients[state.colors.button] || buttonGradients.pink;
        const buttonTextColor = state.colors.button === 'white' || state.colors.button === 'yellow' ? '#000000' : '#ffffff';
        
        // Get background based on selection
        let backgroundStyle = '';
        if (state.background.video) {
            backgroundStyle = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: -2;
            `;
        } else {
            const backgrounds = {
                galaxy: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
                nebula: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                sunset: 'linear-gradient(135deg, #ff6b6b 0%, #ffd166 100%)',
                dark: '#000000',
                ocean: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
                forest: 'linear-gradient(135deg, #1e9600 0%, #fff200 100%)',
                fire: 'linear-gradient(135deg, #f46b45 0%, #eea849 100%)',
                ice: 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)',
                neon: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
                rainbow: 'linear-gradient(135deg, #ff0000, #ff9900, #ffff00, #00ff00, #00ffff, #0000ff, #9900ff)',
                space: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
                candy: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)'
            };
            
            backgroundStyle = backgrounds[state.background.type] || backgrounds.galaxy;
        }
        
        // Get text background style
        const textBackgrounds = {
            glass: `
                background: rgba(22, 16, 19, ${state.glassEffects.opacity / 100});
                backdrop-filter: blur(${state.glassEffects.blur}px) brightness(${state.glassEffects.brightness}%);
                -webkit-backdrop-filter: blur(${state.glassEffects.blur}px) brightness(${state.glassEffects.brightness}%);
                border: 1px solid rgba(255, 255, 255, 0.1);
            `,
            solid: `
                background: rgba(22, 16, 19, 0.95);
                border: 1px solid rgba(255, 255, 255, 0.1);
            `,
            gradient: `
                background: linear-gradient(135deg, rgba(255, 133, 161, 0.1), rgba(133, 167, 255, 0.05));
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
            `,
            transparent: `
                background: transparent;
                border: 1px solid rgba(255, 255, 255, 0.1);
            `
        };
        
        const textBackground = textBackgrounds[state.colors.background] || textBackgrounds.glass;
        
        // Generate HTML
        const html = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${state.title.text}</title>
    <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@700&family=Plus+Jakarta+Sans:wght@400;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        :root {
            --pink-neon: ${state.colors.primary};
            --accent-blue: ${state.colors.secondary};
            --accent-green: ${state.colors.accent};
            --text-color: ${state.colors.text};
            --title-color: ${state.title.color};
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            ${state.background.video ? '' : `background: ${backgroundStyle};`}
            color: var(--text-color);
            font-family: 'Plus Jakarta Sans', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
            position: relative;
            overflow-x: hidden;
        }

        ${state.background.video ? `
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: -1;
        }
        
        #bg-video {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -2;
        }
        ` : ''}

        .container {
            width: 100%;
            max-width: 500px;
            ${textBackground}
            border-radius: ${state.profileBorder.radius}px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.36);
            position: relative;
            z-index: 1;
            backdrop-filter: blur(${state.background.blur}px);
            -webkit-backdrop-filter: blur(${state.background.blur}px);
        }

        .profile-media-container {
            width: 150px;
            height: 150px;
            margin: 0 auto 25px;
            position: relative;
        }

        .profile-media {
            width: 100%;
            height: 100%;
            border-radius: ${state.profileBorder.radius}px;
            overflow: hidden;
            border: ${state.profileBorder.width}px ${state.profileBorder.style} ${state.profileBorder.color};
            box-shadow: 0 0 ${state.profileBorder.shadow}px ${state.profileBorder.color};
        }

        .profile-media img, .profile-media video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        h1 {
            font-family: 'Syncopate', sans-serif;
            font-size: ${state.title.size};
            margin-bottom: 15px;
            color: var(--title-color);
            text-shadow: 0 0 10px rgba(255, 133, 161, 0.3);
        }

        .description {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 30px;
            opacity: 0.9;
        }

        .links {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 30px;
        }

        .link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: ${buttonGradient};
            padding: 18px 25px;
            border-radius: ${state.profileBorder.radius}px;
            text-decoration: none;
            color: ${buttonTextColor};
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            text-align: left;
        }

        .link:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .link-content {
            flex: 1;
            text-align: left;
        }

        .link-title {
            display: block;
            font-size: 1rem;
            font-weight: 700;
            color: ${buttonTextColor};
            margin-bottom: 5px;
        }

        .link-description {
            display: block;
            font-size: 0.8rem;
            opacity: 0.9;
            color: ${buttonTextColor};
        }

        .link-icon {
            font-size: 1.5rem;
            color: ${buttonTextColor};
            min-width: 40px;
            text-align: center;
        }

        footer {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.6);
            margin-top: 25px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 480px) {
            .container {
                padding: 20px;
            }
            
            .profile-media-container {
                width: 120px;
                height: 120px;
            }
            
            h1 {
                font-size: calc(${state.title.size} * 0.8);
            }
            
            .link {
                padding: 15px 20px;
            }
        }
    </style>
</head>
<body>
    ${state.background.video ? `
    <video id="bg-video" autoplay loop muted playsinline>
        <source src="${state.background.video}" type="video/mp4">
    </video>
    ` : ''}
    
    <div class="container">
        <div class="profile-media-container">
            <div class="profile-media">
                ${state.profileMedia ? 
                    (state.profileMediaType === 'video' ? 
                        `<video src="${state.profileMedia}" autoplay loop muted playsinline></video>` : 
                        `<img src="${state.profileMedia}" alt="${name}" onerror="this.style.display='none'">`
                    ) : 
                    `<div style="width: 100%; height: 100%; background: ${buttonGradient}; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 3rem; color: white;">
                        ${name.charAt(0).toUpperCase()}
                    </div>`
                }
            </div>
        </div>
        
        <h1>${name}</h1>
        <div class="description">${desc.replace(/\n/g, '<br>')}</div>
        
        <div class="links">
            ${state.links.filter(link => link.url && link.title).map(link => `
            <a href="${link.url}" target="_blank" class="link" rel="noopener noreferrer">
                <div class="link-content">
                    <span class="link-title">${link.title}</span>
                    ${link.description ? `<span class="link-description">${link.description}</span>` : ''}
                </div>
                <div class="link-icon">
                    <i class="${link.icon}"></i>
                </div>
            </a>`).join('')}
            
            ${state.links.length === 0 ? `
            <div class="link" style="background: rgba(255, 255, 255, 0.1); color: var(--text-color);">
                <div class="link-content">
                    <span class="link-title">Add your first link!</span>
                    <span class="link-description">Click "Add Link" in the editor</span>
                </div>
                <div class="link-icon">
                    <i class="fas fa-plus"></i>
                </div>
            </div>
            ` : ''}
        </div>
        
        <footer>${footer}</footer>
    </div>
    
    <script>
        // Background video autoplay
        const bgVideo = document.getElementById('bg-video');
        if (bgVideo) {
            bgVideo.play().catch(e => {
                console.log('Autoplay prevented, waiting for interaction');
                document.addEventListener('click', () => bgVideo.play(), { once: true });
            });
        }
        
        // Add click effects to links
        document.querySelectorAll('.link').forEach(link => {
            link.addEventListener('click', function(e) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
        
        // Add parallax effect
        document.addEventListener('mousemove', (e) => {
            const container = document.querySelector('.container');
            if (container) {
                const x = (e.clientX / window.innerWidth) * 20 - 10;
                const y = (e.clientY / window.innerHeight) * 20 - 10;
                container.style.transform = \`perspective(1000px) rotateY(\${x}deg) rotateX(\${-y}deg)\`;
            }
        });
    </script>
</body>
</html>`;
                
        // Update iframe
        const iframe = document.getElementById('preview-iframe');
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();
        
        // Update code modal
        document.getElementById('code-output').textContent = html;
        
        // Show preview
        document.getElementById('preview-placeholder').style.display = 'none';
        iframe.style.display = 'block';
        
        showLoading(false);
        showToast('Preview generated!', 'success');
        
    }, 800);
}

// ============ UI FUNCTIONS ============
function showLoading(show) {
    document.getElementById('preview-loading').style.display = show ? 'block' : 'none';
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function showCodeModal() {
    document.getElementById('code-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    showToast('Code view opened!', 'success');
}

function closeCodeModal() {
    document.getElementById('code-modal').style.display = 'none';
    document.body.style.overflow = '';
}

function copyCode() {
    const code = document.getElementById('code-output').textContent;
    navigator.clipboard.writeText(code).then(() => {
        showToast('Code copied to clipboard!', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Code copied!', 'success');
    });
}

function downloadCode() {
    const code = document.getElementById('code-output').textContent;
    const name = document.getElementById('profile-name').value || 'axelux';
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `linktree-${name.toLowerCase().replace(/\s+/g, '-')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('HTML file downloaded!', 'success');
}

function downloadHTML() {
    generatePreview();
    showToast('Generating download...', 'info');
    setTimeout(() => {
        const code = document.getElementById('code-output').textContent;
        const name = document.getElementById('profile-name').value || 'axelux';
        const blob = new Blob([code], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `linktree-pro-max-${name.toLowerCase().replace(/\s+/g, '-')}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Premium HTML downloaded!', 'success');
    }, 1000);
}

// ============ ICON SELECTOR ============
function openIconSelector() {
    const modal = document.getElementById('icon-modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Load icons if not already loaded
    if (!document.getElementById('icon-grid').children.length) {
        loadIcons();
    }
}

function closeIconModal() {
    document.getElementById('icon-modal').style.display = 'none';
    document.body.style.overflow = '';
}

function loadIcons() {
    const icons = [
        // Brand icons
        'fab fa-whatsapp', 'fab fa-instagram', 'fab fa-youtube', 'fab fa-tiktok', 'fab fa-telegram',
        'fab fa-github', 'fab fa-twitter', 'fab fa-facebook', 'fab fa-linkedin', 'fab fa-discord',
        'fab fa-snapchat', 'fab fa-reddit', 'fab fa-pinterest', 'fab fa-twitch', 'fab fa-spotify',
        'fab fa-apple', 'fab fa-android', 'fab fa-windows', 'fab fa-linux', 'fab fa-google',
        'fab fa-amazon', 'fab fa-paypal', 'fab fa-stripe', 'fab fa-shopify', 'fab fa-wordpress',
        
        // Solid icons
        'fas fa-home', 'fas fa-user', 'fas fa-users', 'fas fa-cog', 'fas fa-wrench',
        'fas fa-search', 'fas fa-bell', 'fas fa-envelope', 'fas fa-phone', 'fas fa-globe',
        'fas fa-map-marker', 'fas fa-calendar', 'fas fa-clock', 'fas fa-star', 'fas fa-heart',
        'fas fa-thumbs-up', 'fas fa-share', 'fas fa-download', 'fas fa-upload', 'fas fa-print',
        'fas fa-save', 'fas fa-trash', 'fas fa-edit', 'fas fa-plus', 'fas fa-minus',
        'fas fa-times', 'fas fa-check', 'fas fa-exclamation', 'fas fa-question', 'fas fa-info',
        'fas fa-camera', 'fas fa-video', 'fas fa-music', 'fas fa-film', 'fas fa-gamepad',
        'fas fa-book', 'fas fa-newspaper', 'fas fa-graduation-cap', 'fas fa-briefcase', 'fas fa-shopping-cart',
        'fas fa-credit-card', 'fas fa-money-bill', 'fas fa-chart-line', 'fas fa-chart-bar', 'fas fa-chart-pie',
        'fas fa-database', 'fas fa-server', 'fas fa-network-wired', 'fas fa-wifi', 'fas fa-bluetooth',
        'fas fa-cloud', 'fas fa-cloud-upload', 'fas fa-cloud-download', 'fas fa-code', 'fas fa-terminal',
        'fas fa-laptop', 'fas fa-mobile', 'fas fa-tablet', 'fas fa-desktop', 'fas fa-keyboard',
        'fas fa-mouse', 'fas fa-headphones', 'fas fa-microphone', 'fas fa-volume-up', 'fas fa-image',
        'fas fa-palette', 'fas fa-brush', 'fas fa-pencil-alt', 'fas fa-eraser', 'fas fa-crop',
        'fas fa-filter', 'fas fa-bolt', 'fas fa-fire', 'fas fa-water', 'fas fa-leaf',
        'fas fa-mountain', 'fas fa-tree', 'fas fa-umbrella-beach', 'fas fa-sun', 'fas fa-moon',
        'fas fa-cloud-sun', 'fas fa-cloud-rain', 'fas fa-snowflake', 'fas fa-wind', 'fas fa-temperature-high',
        'fas fa-car', 'fas fa-bus', 'fas fa-train', 'fas fa-plane', 'fas fa-ship',
        'fas fa-bicycle', 'fas fa-walking', 'fas fa-running', 'fas fa-swimmer', 'fas fa-dumbbell',
        'fas fa-football-ball', 'fas fa-basketball-ball', 'fas fa-baseball-ball', 'fas fa-volleyball-ball', 'fas fa-futbol',
        'fas fa-utensils', 'fas fa-coffee', 'fas fa-wine-glass', 'fas fa-cocktail', 'fas fa-beer',
        'fas fa-pizza-slice', 'fas fa-hamburger', 'fas fa-ice-cream', 'fas fa-cookie', 'fas fa-cake',
        'fas fa-heartbeat', 'fas fa-hospital', 'fas fa-ambulance', 'fas fa-pills', 'fas fa-syringe',
        'fas fa-stethoscope', 'fas fa-user-md', 'fas fa-plus-square', 'fas fa-minus-square', 'fas fa-times-circle',
        'fas fa-check-circle', 'fas fa-question-circle', 'fas fa-info-circle', 'fas fa-exclamation-circle', 'fas fa-exclamation-triangle',
        'fas fa-ban', 'fas fa-lock', 'fas fa-unlock', 'fas fa-key', 'fas fa-shield-alt',
        'fas fa-fingerprint', 'fas fa-qrcode', 'fas fa-barcode', 'fas fa-tag', 'fas fa-tags',
        'fas fa-shopping-bag', 'fas fa-shopping-basket', 'fas fa-gift', 'fas fa-gem', 'fas fa-crown',
        'fas fa-trophy', 'fas fa-medal', 'fas fa-flag', 'fas fa-rocket', 'fas fa-plane-departure',
        'fas fa-plane-arrival', 'fas fa-passport', 'fas fa-suitcase', 'fas fa-suitcase-rolling', 'fas fa-map',
        'fas fa-map-marked', 'fas fa-map-marked-alt', 'fas fa-compass', 'fas fa-directions', 'fas fa-road',
        'fas fa-sign', 'fas fa-traffic-light', 'fas fa-car-crash', 'fas fa-gas-pump', 'fas fa-wrench',
        'fas fa-tools', 'fas fa-hammer', 'fas fa-screwdriver', 'fas fa-ruler', 'fas fa-ruler-combined',
        'fas fa-weight', 'fas fa-balance-scale', 'fas fa-percentage', 'fas fa-calculator', 'fas fa-chalkboard',
        'fas fa-chalkboard-teacher', 'fas fa-school', 'fas fa-university', 'fas fa-graduation-cap', 'fas fa-certificate',
        'fas fa-language', 'fas fa-globe-americas', 'fas fa-globe-europe', 'fas fa-globe-asia', 'fas fa-globe-africa',
        'fas fa-comments', 'fas fa-comment', 'fas fa-comment-alt', 'fas fa-comment-dots', 'fas fa-comment-medical',
        'fas fa-smile', 'fas fa-frown', 'fas fa-meh', 'fas fa-grin', 'fas fa-grin-stars',
        'fas fa-grin-beam', 'fas fa-grin-beam-sweat', 'fas fa-grin-wink', 'fas fa-grin-tongue', 'fas fa-grin-tongue-wink',
        'fas fa-kiss', 'fas fa-kiss-beam', 'fas fa-kiss-wink-heart', 'fas fa-angry', 'fas fa-dizzy',
        'fas fa-flushed', 'fas fa-surprise', 'fas fa-tired', 'fas fa-sad-tear', 'fas fa-sad-cry'
    ];
    
    const container = document.getElementById('icon-grid');
    icons.forEach(iconClass => {
        const iconName = iconClass.replace('fab fa-', '').replace('fas fa-', '');
        const div = document.createElement('div');
        div.className = 'icon-option';
        div.setAttribute('data-icon', iconClass);
        div.innerHTML = `<i class="${iconClass}"></i><span>${iconName}</span>`;
        
        div.addEventListener('click', () => {
            container.querySelectorAll('.icon-option').forEach(el => el.classList.remove('active'));
            div.classList.add('active');
            state.selectedIcon = iconClass;
        });
        
        container.appendChild(div);
    });
}

function searchIcons() {
    const searchTerm = document.getElementById('icon-search').value.toLowerCase();
    const icons = document.querySelectorAll('.icon-option');
    
    icons.forEach(icon => {
        const iconName = icon.getAttribute('data-icon').toLowerCase();
        const displayName = icon.querySelector('span').textContent.toLowerCase();
        
        if (iconName.includes(searchTerm) || displayName.includes(searchTerm)) {
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }
    });
}

function selectIcon() {
    if (state.currentIcon && state.selectedIcon) {
        // Update the link with selected icon
        const link = state.links.find(l => l.id === state.currentIcon);
        if (link) {
            link.icon = state.selectedIcon;
            
            // Update in UI
            const linkElement = document.getElementById(`link-${state.currentIcon}`);
            if (linkElement) {
                linkElement.querySelector('.fa-lg, .fab, .fas').className = state.selectedIcon;
                const select = linkElement.querySelector('.link-icon-select');
                Array.from(select.options).forEach(option => {
                    option.selected = option.value === state.selectedIcon;
                });
            }
            
            generatePreview();
            showToast('Icon updated!', 'success');
        }
    }
    
    closeIconModal();
}

// ============ CAMERA FUNCTIONS ============
let cameraStream = null;

function startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                cameraStream = stream;
                const video = document.getElementById('camera-preview');
                video.srcObject = stream;
                video.style.display = 'block';
                video.play();
                
                document.getElementById('camera-controls').style.display = 'flex';
                document.getElementById('start-camera-btn').style.display = 'none';
                
                showToast('Camera started!', 'success');
            })
            .catch(err => {
                console.error('Camera error:', err);
                showToast('Cannot access camera: ' + err.message, 'error');
            });
    } else {
        showToast('Camera not supported on this device', 'error');
    }
}

function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
        
        const video = document.getElementById('camera-preview');
        video.srcObject = null;
        video.style.display = 'none';
        
        document.getElementById('camera-controls').style.display = 'none';
        document.getElementById('start-camera-btn').style.display = 'block';
        
        showToast('Camera stopped', 'warning');
    }
}

function capturePhoto() {
    const video = document.getElementById('camera-preview');
    const canvas = document.getElementById('photo-canvas');
    const context = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const dataUrl = canvas.toDataURL('image/png');
    
    // Set as profile image
    state.profileMedia = dataUrl;
    state.profileMediaType = 'image';
    
    const preview = document.getElementById('profile-preview');
    const img = document.getElementById('profile-img-preview');
    const videoElement = document.getElementById('profile-video-preview');
    
    preview.style.display = 'block';
    videoElement.style.display = 'none';
    img.style.display = 'block';
    img.src = dataUrl;
    
    updateProfileBorderPreview();
    generatePreview();
    
    // Stop camera after capture
    stopCamera();
    
    showToast('Photo captured!', 'success');
}

// ============ COLOR FUNCTIONS ============
function applyCustomColors() {
    // Update CSS variables
    document.documentElement.style.setProperty('--pink-neon', state.colors.primary);
    document.documentElement.style.setProperty('--accent-blue', state.colors.secondary);
    document.documentElement.style.setProperty('--accent-green', state.colors.accent);
    
    // Update state
    state.profileBorder.color = state.colors.primary;
    updateProfileBorderPreview();
    
    generatePreview();
    showToast('Custom colors applied!', 'success');
}

function applyColorPreset(preset) {
    let primary, secondary, accent;
    
    switch(preset) {
        case 'neon':
            primary = '#ff00ff';
            secondary = '#00ffff';
            accent = '#ffff00';
            break;
        case 'dark':
            primary = '#333333';
            secondary = '#666666';
            accent = '#999999';
            break;
        case 'pastel':
            primary = '#ffb6c1';
            secondary = '#b6e3ff';
            accent = '#c9ffb6';
            break;
        case 'sunset':
            primary = '#ff6b6b';
            secondary = '#ffd166';
            accent = '#06d6a0';
            break;
    }
    
    state.colors.primary = primary;
    state.colors.secondary = secondary;
    state.colors.accent = accent;
    
    // Update color pickers
    document.getElementById('custom-primary-color').value = primary;
    document.getElementById('custom-secondary-color').value = secondary;
    document.getElementById('custom-accent-color').value = accent;
    
    applyCustomColors();
    showToast(`${preset} color preset applied!`, 'success');
}

// ============ PROFILE EDITING ============
function editProfile() {
    showToast('Edit feature coming soon!', 'info');
    // Implement advanced editing modal here
}

function cropProfile() {
    showToast('Crop feature coming soon!', 'info');
    // Implement cropping functionality here
}

function filterProfile() {
    showToast('Filter feature coming soon!', 'info');
    // Implement filter functionality here
}

// ============ PROJECT MANAGEMENT ============
function saveProject() {
    const project = {
        profile: {
            media: state.profileMedia,
            mediaType: state.profileMediaType,
            name: document.getElementById('profile-name').value,
            desc: document.getElementById('profile-desc').value
        },
        border: state.profileBorder,
        colors: state.colors,
        glassEffects: state.glassEffects,
        background: state.background,
        title: state.title,
        links: state.links,
        footer: document.getElementById('footer-text').value
    };
    
    const json = JSON.stringify(project, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'linktree-project.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Project saved!', 'success');
}

function saveState() {
    const stateToSave = {
        profile: {
            media: state.profileMedia,
            mediaType: state.profileMediaType,
            name: document.getElementById('profile-name').value,
            desc: document.getElementById('profile-desc').value
        },
        border: state.profileBorder,
        colors: state.colors,
        glassEffects: state.glassEffects,
        background: state.background,
        title: state.title,
        links: state.links,
        footer: document.getElementById('footer-text').value
    };
    
    localStorage.setItem('linktreeProject', JSON.stringify(stateToSave));
}

function loadSavedState() {
    const saved = localStorage.getItem('linktreeProject');
    if (saved) {
        try {
            const project = JSON.parse(saved);
            
            // Load profile
            if (project.profile) {
                document.getElementById('profile-name').value = project.profile.name || '';
                document.getElementById('profile-desc').value = project.profile.desc || '';
                
                if (project.profile.media) {
                    state.profileMedia = project.profile.media;
                    state.profileMediaType = project.profile.mediaType;
                    
                    const preview = document.getElementById('profile-preview');
                    const img = document.getElementById('profile-img-preview');
                    const video = document.getElementById('profile-video-preview');
                    
                    preview.style.display = 'block';
                    
                    if (project.profile.mediaType === 'video') {
                        video.style.display = 'block';
                        img.style.display = 'none';
                        video.src = project.profile.media;
                        video.load();
                    } else {
                        video.style.display = 'none';
                        img.style.display = 'block';
                        img.src = project.profile.media;
                    }
                }
            }
            
            // Load border
            if (project.border) {
                state.profileBorder = project.border;
                updateProfileBorderPreview();
                
                // Update sliders
                document.getElementById('border-width').value = state.profileBorder.width;
                document.getElementById('border-width-value').textContent = state.profileBorder.width + 'px';
                document.getElementById('border-radius').value = state.profileBorder.radius;
                document.getElementById('border-radius-value').textContent = state.profileBorder.radius + 'px';
                document.getElementById('border-shadow').value = state.profileBorder.shadow;
                document.getElementById('border-shadow-value').textContent = state.profileBorder.shadow + 'px';
                document.getElementById('border-custom-color').value = state.profileBorder.color;
                
                // Update border style
                document.querySelectorAll('.border-style').forEach(style => {
                    style.classList.remove('active');
                    if (style.dataset.style === state.profileBorder.style) {
                        style.classList.add('active');
                    }
                });
            }
            
            // Load colors
            if (project.colors) {
                state.colors = project.colors;
                
                // Update color pickers
                document.getElementById('custom-primary-color').value = state.colors.primary;
                document.getElementById('custom-secondary-color').value = state.colors.secondary;
                document.getElementById('custom-accent-color').value = state.colors.accent;
                
                // Update button styles
                document.querySelectorAll('.button-style').forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.buttonStyle === state.colors.button) {
                        btn.classList.add('active');
                    }
                });
            }
            
            // Load glass effects
            if (project.glassEffects) {
                state.glassEffects = project.glassEffects;
                
                // Update sliders
                document.getElementById('glass-opacity').value = state.glassEffects.opacity;
                document.getElementById('glass-opacity-value').textContent = state.glassEffects.opacity + '%';
                document.getElementById('glass-blur').value = state.glassEffects.blur;
                document.getElementById('glass-blur-value').textContent = state.glassEffects.blur + 'px';
                document.getElementById('glass-brightness').value = state.glassEffects.brightness;
                document.getElementById('glass-brightness-value').textContent = state.glassEffects.brightness + '%';
                document.getElementById('saturation-effect').value = state.glassEffects.saturation;
                document.getElementById('saturation-value').textContent = state.glassEffects.saturation + '%';
            }
            
            // Load background
            if (project.background) {
                state.background = project.background;
                
                // Update background gallery
                document.querySelectorAll('.bg-option').forEach(option => {
                    option.classList.remove('active');
                    if (option.dataset.bgType === state.background.type) {
                        option.classList.add('active');
                    }
                });
                
                // Update sliders
                document.getElementById('blur-effect').value = state.background.blur;
                document.getElementById('blur-value').textContent = state.background.blur + 'px';
                document.getElementById('opacity-effect').value = state.background.opacity;
                document.getElementById('opacity-value').textContent = state.background.opacity + '%';
                
                // Load video background if exists
                if (state.background.video) {
                    const previewContainer = document.getElementById('video-bg-preview-container');
                    const video = document.getElementById('video-bg-preview');
                    
                    previewContainer.style.display = 'block';
                    video.src = state.background.video;
                    video.load();
                }
            }
            
            // Load title
            if (project.title) {
                state.title = project.title;
                document.getElementById('page-title').value = state.title.text;
                document.getElementById('title-size').value = parseFloat(state.title.size);
                document.getElementById('title-size-value').textContent = state.title.size;
                document.getElementById('title-color').value = state.title.color;
            }
            
            // Load links
            if (project.links) {
                state.links = project.links;
                document.getElementById('links-list').innerHTML = '';
                
                project.links.forEach(link => {
                    addLink(link);
                });
            }
            
            // Load footer
            if (project.footer) {
                document.getElementById('footer-text').value = project.footer;
            }
            
            updateStats();
            generatePreview();
            showToast('Project loaded from auto-save!', 'success');
            
        } catch (e) {
            console.error('Error loading saved state:', e);
        }
    }
}

function shareProject() {
    // Generate a shareable URL with project data
    const project = {
        profile: {
            name: document.getElementById('profile-name').value,
            desc: document.getElementById('profile-desc').value
        },
        border: state.profileBorder,
        colors: state.colors,
        title: state.title
    };
    
    const data = btoa(JSON.stringify(project));
    const url = `${window.location.origin}${window.location.pathname}?project=${encodeURIComponent(data)}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(url).then(() => {
        showToast('Shareable URL copied to clipboard!', 'success');
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Shareable URL copied!', 'success');
    });
}

function resetProject() {
    if (confirm('Are you sure you want to reset everything? This cannot be undone.')) {
        // Reset profile
        state.profileMedia = null;
        state.profileMediaType = null;
        document.getElementById('profile-preview').style.display = 'none';
        document.getElementById('profile-name').value = 'Axelux';
        document.getElementById('profile-desc').value = '🚀 Premium LinkTree with 3D effects, custom backgrounds, rich text editing, and advanced customization. Connect with me on social media! ✨';
        
        // Reset border
        state.profileBorder = {
            width: 3,
            color: '#ff85a1',
            style: 'solid',
            radius: 15,
            shadow: 5
        };
        
        updateProfileBorderPreview();
        
        // Reset colors
        state.colors = {
            text: '#ffffff',
            background: 'glass',
            button: 'pink',
            primary: '#ff85a1',
            secondary: '#85a7ff',
            accent: '#85ffc7',
            title: '#ff85a1'
        };
        
        // Reset glass effects
        state.glassEffects = {
            opacity: 85,
            blur: 8,
            brightness: 100,
            saturation: 100
        };
        
        // Reset background
        state.background = {
            type: 'galaxy',
            video: null,
            blur: 8,
            opacity: 85
        };
        
        // Reset title
        state.title = {
            text: 'My Awesome LinkTree',
            size: '2rem',
            color: '#ff85a1'
        };
        
        // Reset links
        state.links = [];
        document.getElementById('links-list').innerHTML = '';
        addFirstLink();
        
        // Reset UI elements
        document.getElementById('page-title').value = state.title.text;
        document.getElementById('footer-text').value = 'Axelux | LinkTree 3D Pro MAX ULTRA';
        
        // Reset video background
        document.getElementById('video-bg-preview-container').style.display = 'none';
        document.getElementById('video-bg-preview').src = '';
        
        // Reset all sliders and inputs
        resetAllControls();
        
        updateStats();
        generatePreview();
        showToast('Project reset successfully!', 'success');
    }
}

function resetAllControls() {
    // Border controls
    document.getElementById('border-width').value = 3;
    document.getElementById('border-width-value').textContent = '3px';
    document.getElementById('border-radius').value = 15;
    document.getElementById('border-radius-value').textContent = '15px';
    document.getElementById('border-shadow').value = 5;
    document.getElementById('border-shadow-value').textContent = '5px';
    document.getElementById('border-custom-color').value = '#ff85a1';
    
    // Border style
    document.querySelectorAll('.border-style').forEach(style => {
        style.classList.remove('active');
        if (style.dataset.style === 'solid') {
            style.classList.add('active');
        }
    });
    
    // Background effects
    document.getElementById('blur-effect').value = 8;
    document.getElementById('blur-value').textContent = '8px';
    document.getElementById('opacity-effect').value = 85;
    document.getElementById('opacity-value').textContent = '85%';
    document.getElementById('saturation-effect').value = 100;
    document.getElementById('saturation-value').textContent = '100%';
    
    // Glass effects
    document.getElementById('glass-opacity').value = 85;
    document.getElementById('glass-opacity-value').textContent = '85%';
    document.getElementById('glass-blur').value = 8;
    document.getElementById('glass-blur-value').textContent = '8px';
    document.getElementById('glass-brightness').value = 100;
    document.getElementById('glass-brightness-value').textContent = '100%';
    
    // Title
    document.getElementById('title-size').value = 2;
    document.getElementById('title-size-value').textContent = '2rem';
    document.getElementById('title-color').value = '#ff85a1';
    
    // Background gallery
    document.querySelectorAll('.bg-option').forEach((option, index) => {
        option.classList.remove('active');
        if (index === 0) option.classList.add('active');
    });
    
    // Button styles
    document.querySelectorAll('.button-style').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.buttonStyle === 'pink') {
            btn.classList.add('active');
        }
    });
    
    // Color pickers
    document.getElementById('custom-primary-color').value = '#ff85a1';
    document.getElementById('custom-secondary-color').value = '#85a7ff';
    document.getElementById('custom-accent-color').value = '#85ffc7';
    
    // Update color picker grids
    document.querySelectorAll('#text-color-picker .color-option').forEach((option, index) => {
        option.classList.remove('active');
        if (index === 0) option.classList.add('active'); // White
    });
    
    document.querySelectorAll('#border-color-picker .color-option').forEach((option, index) => {
        option.classList.remove('active');
        if (index === 0) option.classList.add('active'); // Pink
    });
}

// ============ DRAG AND DROP ============
function setupDragAndDrop() {
    const uploadZones = document.querySelectorAll('.upload-zone');
    
    uploadZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('drag-over');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                const parent = zone.closest('.upload-tab-content');
                
                if (parent) {
                    if (parent.id === 'upload-image' || file.type.startsWith('image/')) {
                        handleDroppedFile(file, 'image');
                    } else if (parent.id === 'upload-video' || file.type.startsWith('video/')) {
                        handleDroppedFile(file, 'video');
                    } else if (parent.id === 'upload-gif' || file.type === 'image/gif') {
                        handleDroppedFile(file, 'gif');
                    } else {
                        showToast('Unsupported file type!', 'error');
                    }
                }
            }
        });
    });
}

function handleDroppedFile(file, type) {
    const reader = new FileReader();
    reader.onload = function(e) {
        state.profileMedia = e.target.result;
        state.profileMediaType = type;
        
        const preview = document.getElementById('profile-preview');
        const img = document.getElementById('profile-img-preview');
        const video = document.getElementById('profile-video-preview');
        
        preview.style.display = 'block';
        
        if (type === 'video') {
            img.style.display = 'none';
            video.style.display = 'block';
            video.src = e.target.result;
            video.load();
            video.play().catch(e => console.log('Autoplay prevented'));
        } else {
            video.style.display = 'none';
            img.style.display = 'block';
            img.src = e.target.result;
        }
        
        updateProfileBorderPreview();
        updateStats();
        generatePreview();
        showToast(`${type} uploaded via drag & drop!`, 'success');
    };
    
    reader.readAsDataURL(file);
}

// ============ INITIAL SETUP COMPLETE ============
console.log('🎨 LinkTree 3D Pro MAX ULTRA initialized successfully!');
console.log('👤 Owner: Axelux');
console.log('💻 Developer: AxeluzzCoDe');
console.log('🚀 Version: 4.0.0');
console.log('✨ Features: 200+');

// Initial preview
setTimeout(generatePreview, 1000);