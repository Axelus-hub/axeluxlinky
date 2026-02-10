// LinkTree God Mode - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('LinkTree God Mode initialized');
    
    // State aplikasi
    const appState = {
        profile: {
            name: 'John Doe',
            bio: 'Digital Creator | Content Strategist | Building the future of social connections',
            image: null,
            verified: true,
            headerStyle: 'simple'
        },
        links: [
            { id: 1, title: 'My Portfolio', url: 'https://portfolio.example.com', enabled: true, highlighted: false, pinned: false, clicks: 0, folder: 'none' },
            { id: 2, title: 'YouTube Channel', url: 'https://youtube.com/@example', enabled: true, highlighted: true, pinned: false, clicks: 0, folder: 'social' },
            { id: 3, title: 'Instagram', url: 'https://instagram.com/example', enabled: true, highlighted: false, pinned: true, clicks: 0, folder: 'social' }
        ],
        design: {
            themeColor: '#3a86ff',
            font: 'Poppins',
            buttonStyle: 'rounded',
            background: 'solid',
            darkMode: false
        },
        social: {
            instagram: true,
            tiktok: true,
            youtube: true,
            facebook: false,
            twitter: true,
            whatsapp: false,
            telegram: false,
            discord: false,
            snapchat: false,
            pinterest: false,
            linkedin: true,
            github: true,
            spotify: false,
            email: true,
            website: true
        },
        analytics: {
            totalClicks: 0,
            mostClicked: 0,
            lastReset: new Date().toISOString()
        },
        branding: {
            hideLogo: false,
            customFooter: '',
            favicon: ''
        },
        animation: {
            linkAnimation: 'none',
            pageTransition: 'none'
        },
        customCSS: '',
        lastSaved: new Date().toISOString()
    };
    
    // Elemen DOM utama
    const elements = {
        // Navigation
        sidebarNavItems: document.querySelectorAll('.sidebar-nav li'),
        mobileNavBtns: document.querySelectorAll('.mobile-nav-btn'),
        contentSections: document.querySelectorAll('.content-section'),
        
        // Profile
        profileName: document.getElementById('profileName'),
        profileBio: document.getElementById('profileBio'),
        verifiedBadge: document.getElementById('verifiedBadge'),
        headerStyle: document.getElementById('headerStyle'),
        profileImage: document.getElementById('profileImage'),
        profileImagePreview: document.getElementById('profileImagePreview'),
        uploadImageBtn: document.getElementById('uploadImageBtn'),
        removeImageBtn: document.getElementById('removeImageBtn'),
        
        // Links
        linksList: document.getElementById('linksList'),
        addLinkBtn: document.getElementById('addLinkBtn'),
        linkFolder: document.getElementById('linkFolder'),
        linkSchedule: document.getElementById('linkSchedule'),
        scheduleSettings: document.getElementById('scheduleSettings'),
        scheduleStart: document.getElementById('scheduleStart'),
        scheduleEnd: document.getElementById('scheduleEnd'),
        
        // Design
        themeColor: document.getElementById('themeColor'),
        fontSelector: document.getElementById('fontSelector'),
        buttonStyle: document.getElementById('buttonStyle'),
        backgroundType: document.getElementById('backgroundType'),
        backgroundSettings: document.getElementById('backgroundSettings'),
        darkModeToggle: document.getElementById('darkModeToggle'),
        
        // Social
        socialIconsGrid: document.getElementById('socialIconsGrid'),
        
        // Analytics
        totalClicks: document.getElementById('totalClicks'),
        mostClicked: document.getElementById('mostClicked'),
        activeLinks: document.getElementById('activeLinks'),
        linksStats: document.getElementById('linksStats'),
        resetAnalyticsBtn: document.getElementById('resetAnalyticsBtn'),
        clicksChart: document.getElementById('clicksChart'),
        clicksDetails: document.getElementById('clicksDetails'),
        
        // Branding
        hideLogo: document.getElementById('hideLogo'),
        customFooter: document.getElementById('customFooter'),
        favicon: document.getElementById('favicon'),
        
        // Animation
        linkAnimation: document.getElementById('linkAnimation'),
        pageTransition: document.getElementById('pageTransition'),
        
        // QR Code
        qrcodeUrl: document.getElementById('qrcodeUrl'),
        qrcodePreview: document.getElementById('qrcodePreview'),
        generateQrBtn: document.getElementById('generateQrBtn'),
        downloadQrBtn: document.getElementById('downloadQrBtn'),
        
        // Custom CSS
        customCss: document.getElementById('customCss'),
        applyCssBtn: document.getElementById('applyCssBtn'),
        
        // Export
        exportHtmlBtn: document.getElementById('exportHtmlBtn'),
        viewSourceBtn: document.getElementById('viewSourceBtn'),
        addShareBtn: document.getElementById('addShareBtn'),
        exportJsonBtn: document.getElementById('exportJsonBtn'),
        importJsonBtn: document.getElementById('importJsonBtn'),
        importJson: document.getElementById('importJson'),
        resetToDefaultBtn: document.getElementById('resetToDefaultBtn'),
        
        // Modal
        linkModal: document.getElementById('linkModal'),
        sourceModal: document.getElementById('sourceModal'),
        modalCloseBtns: document.querySelectorAll('.modal-close'),
        cancelLinkBtn: document.getElementById('cancelLinkBtn'),
        saveLinkBtn: document.getElementById('saveLinkBtn'),
        
        // Form modal link
        modalTitle: document.getElementById('modalTitle'),
        linkTitle: document.getElementById('linkTitle'),
        linkUrl: document.getElementById('linkUrl'),
        linkEnabled: document.getElementById('linkEnabled'),
        linkHighlighted: document.getElementById('linkHighlighted'),
        linkPinned: document.getElementById('linkPinned'),
        linkIndex: document.getElementById('linkIndex'),
        
        // Source code modal
        sourceCode: document.getElementById('sourceCode'),
        copySourceBtn: document.getElementById('copySourceBtn'),
        closeSourceBtn: document.getElementById('closeSourceBtn'),
        
        // Preview
        previewProfileImg: document.getElementById('previewProfileImg'),
        previewName: document.getElementById('previewName'),
        previewBio: document.getElementById('previewBio'),
        previewLinksContainer: document.getElementById('previewLinksContainer'),
        
        // Header buttons
        previewBtn: document.getElementById('previewBtn'),
        exportBtn: document.getElementById('exportBtn'),
        resetBtn: document.getElementById('resetBtn'),
        
        // Toast
        toast: document.getElementById('toast'),
        
        // Footer
        autoSaveStatus: document.getElementById('autoSaveStatus'),
        lastSaved: document.getElementById('lastSaved')
    };
    
    // Chart instance
    let clicksChartInstance = null;
    
    // Inisialisasi aplikasi
    function initApp() {
        console.log('Initializing app...');
        
        // Load data dari localStorage jika ada
        loadFromLocalStorage();
        
        // Setup event listeners
        setupEventListeners();
        
        // Render initial data
        renderProfile();
        renderLinks();
        renderSocialIcons();
        renderAnalytics();
        updatePreview();
        
        // Setup auto-save
        setupAutoSave();
        
        // Update last saved time
        updateLastSaved();
        
        console.log('App initialization complete');
    }
    
    // Setup semua event listeners
    function setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Navigation
        elements.sidebarNavItems.forEach(item => {
            item.addEventListener('click', () => switchSection(item.dataset.section));
        });
        
        elements.mobileNavBtns.forEach(btn => {
            btn.addEventListener('click', () => switchSection(btn.dataset.section));
        });
        
        // Profile
        elements.profileName.addEventListener('input', updateProfile);
        elements.profileBio.addEventListener('input', updateProfile);
        elements.verifiedBadge.addEventListener('change', updateProfile);
        elements.headerStyle.addEventListener('change', updateProfile);
        elements.uploadImageBtn.addEventListener('click', () => elements.profileImage.click());
        elements.profileImage.addEventListener('change', handleImageUpload);
        elements.removeImageBtn.addEventListener('click', removeProfileImage);
        
        // Links
        elements.addLinkBtn.addEventListener('click', openAddLinkModal);
        elements.linkFolder.addEventListener('change', updateLinksFolder);
        elements.linkSchedule.addEventListener('change', toggleScheduleSettings);
        
        // Design
        elements.themeColor.addEventListener('input', updateDesign);
        elements.fontSelector.addEventListener('change', updateDesign);
        elements.buttonStyle.addEventListener('change', updateDesign);
        elements.backgroundType.addEventListener('change', updateBackgroundSettings);
        elements.darkModeToggle.addEventListener('change', toggleDarkMode);
        
        // Analytics
        elements.resetAnalyticsBtn.addEventListener('click', resetAnalytics);
        
        // Branding
        elements.hideLogo.addEventListener('change', updateBranding);
        elements.customFooter.addEventListener('input', updateBranding);
        elements.favicon.addEventListener('input', updateBranding);
        
        // Animation
        elements.linkAnimation.addEventListener('change', updateAnimation);
        elements.pageTransition.addEventListener('change', updateAnimation);
        
        // QR Code
        elements.generateQrBtn.addEventListener('click', generateQRCode);
        elements.downloadQrBtn.addEventListener('click', downloadQRCode);
        
        // Custom CSS
        elements.applyCssBtn.addEventListener('click', applyCustomCSS);
        
        // Export
        elements.exportHtmlBtn.addEventListener('click', exportAsHTML);
        elements.viewSourceBtn.addEventListener('click', viewSourceCode);
        elements.addShareBtn.addEventListener('click', addShareButton);
        elements.exportJsonBtn.addEventListener('click', exportAsJSON);
        elements.importJsonBtn.addEventListener('click', () => elements.importJson.click());
        elements.importJson.addEventListener('change', importFromJSON);
        elements.resetToDefaultBtn.addEventListener('click', resetToDefault);
        
        // Modal
        elements.modalCloseBtns.forEach(btn => {
            btn.addEventListener('click', closeAllModals);
        });
        
        elements.cancelLinkBtn.addEventListener('click', () => {
            elements.linkModal.classList.remove('active');
        });
        
        elements.saveLinkBtn.addEventListener('click', saveLink);
        
        // Source code modal
        elements.copySourceBtn.addEventListener('click', copySourceCode);
        elements.closeSourceBtn.addEventListener('click', () => {
            elements.sourceModal.classList.remove('active');
        });
        
        // Header buttons
        elements.previewBtn.addEventListener('click', showPreview);
        elements.exportBtn.addEventListener('click', showExportOptions);
        elements.resetBtn.addEventListener('click', resetApp);
        
        // Click outside modal to close
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeAllModals();
            }
        });
        
        console.log('Event listeners setup complete');
    }
    
    // Navigation functions
    function switchSection(sectionId) {
        console.log(`Switching to section: ${sectionId}`);
        
        // Update navigation highlights
        elements.sidebarNavItems.forEach(item => {
            if (item.dataset.section === sectionId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        elements.mobileNavBtns.forEach(btn => {
            if (btn.dataset.section === sectionId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Show selected section
        elements.contentSections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        
        // Special handling for certain sections
        if (sectionId === 'clicks') {
            renderClicksChart();
        }
        
        // Save state
        saveToLocalStorage();
    }
    
    // Profile functions
    function renderProfile() {
        console.log('Rendering profile...');
        
        elements.profileName.value = appState.profile.name;
        elements.profileBio.value = appState.profile.bio;
        elements.verifiedBadge.checked = appState.profile.verified;
        elements.headerStyle.value = appState.profile.headerStyle;
        
        // Update preview image
        if (appState.profile.image) {
            elements.profileImagePreview.innerHTML = `<img src="${appState.profile.image}" alt="Profile">`;
            elements.previewProfileImg.src = appState.profile.image;
        } else {
            elements.profileImagePreview.innerHTML = '<i class="fas fa-user-circle"></i>';
            elements.previewProfileImg.src = '';
        }
        
        elements.previewName.textContent = appState.profile.name;
        elements.previewBio.textContent = appState.profile.bio;
    }
    
    function updateProfile() {
        console.log('Updating profile...');
        
        appState.profile.name = elements.profileName.value;
        appState.profile.bio = elements.profileBio.value;
        appState.profile.verified = elements.verifiedBadge.checked;
        appState.profile.headerStyle = elements.headerStyle.value;
        
        renderProfile();
        updatePreview();
        saveToLocalStorage();
    }
    
    function handleImageUpload(e) {
        console.log('Handling image upload...');
        
        const file = e.target.files[0];
        if (!file) return;
        
        if (!file.type.match('image.*')) {
            showToast('Please select an image file', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(event) {
            appState.profile.image = event.target.result;
            renderProfile();
            updatePreview();
            saveToLocalStorage();
            showToast('Profile image updated successfully', 'success');
        };
        
        reader.readAsDataURL(file);
    }
    
    function removeProfileImage() {
        console.log('Removing profile image...');
        
        appState.profile.image = null;
        renderProfile();
        updatePreview();
        saveToLocalStorage();
        showToast('Profile image removed', 'info');
    }
    
    // Link management functions
    function renderLinks() {
        console.log('Rendering links...');
        
        // Clear current links
        elements.linksList.innerHTML = '';
        elements.previewLinksContainer.innerHTML = '';
        
        // Sort links: pinned first, then by id
        const sortedLinks = [...appState.links].sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return a.id - b.id;
        });
        
        // Render links in dashboard
        sortedLinks.forEach((link, index) => {
            const linkItem = document.createElement('div');
            linkItem.className = 'link-item';
            linkItem.dataset.id = link.id;
            linkItem.draggable = true;
            
            if (!link.enabled) {
                linkItem.style.opacity = '0.6';
            }
            
            if (link.highlighted) {
                linkItem.style.borderLeftColor = '#ffd166';
            }
            
            linkItem.innerHTML = `
                <div class="link-info">
                    <div class="link-title">
                        ${link.title}
                        ${link.pinned ? '<i class="fas fa-thumbtack" style="margin-left: 5px; color: #3a86ff;"></i>' : ''}
                        ${link.highlighted ? '<i class="fas fa-star" style="margin-left: 5px; color: #ffd166;"></i>' : ''}
                        ${!link.enabled ? '<span style="margin-left: 5px; color: #ef476f; font-size: 0.8rem;">(Disabled)</span>' : ''}
                    </div>
                    <div class="link-url">${link.url}</div>
                </div>
                <div class="link-actions">
                    <button class="link-action-btn edit-link" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="link-action-btn delete-link" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="link-action-btn toggle-link" title="${link.enabled ? 'Disable' : 'Enable'}">
                        <i class="fas fa-power-off"></i>
                    </button>
                    <button class="link-action-btn drag-handle" title="Drag to reorder">
                        <i class="fas fa-arrows-alt"></i>
                    </button>
                </div>
            `;
            
            elements.linksList.appendChild(linkItem);
            
            // Render in preview
            if (link.enabled) {
                const previewLink = document.createElement('div');
                previewLink.className = 'preview-link-item';
                previewLink.textContent = link.title;
                previewLink.addEventListener('click', () => handleLinkClick(link.id));
                
                if (link.highlighted) {
                    previewLink.style.background = 'linear-gradient(135deg, #ffd166, #ffb347)';
                    previewLink.style.color = 'white';
                    previewLink.style.fontWeight = 'bold';
                }
                
                elements.previewLinksContainer.appendChild(previewLink);
            }
            
            // Add event listeners for this link
            setTimeout(() => {
                const linkElement = elements.linksList.querySelector(`[data-id="${link.id}"]`);
                if (linkElement) {
                    linkElement.querySelector('.edit-link').addEventListener('click', () => openEditLinkModal(link.id));
                    linkElement.querySelector('.delete-link').addEventListener('click', () => deleteLink(link.id));
                    linkElement.querySelector('.toggle-link').addEventListener('click', () => toggleLinkEnabled(link.id));
                    linkElement.querySelector('.drag-handle').addEventListener('mousedown', () => startDrag(link.id));
                    
                    // Drag and drop events
                    linkElement.addEventListener('dragstart', handleDragStart);
                    linkElement.addEventListener('dragover', handleDragOver);
                    linkElement.addEventListener('drop', handleDrop);
                    linkElement.addEventListener('dragend', handleDragEnd);
                }
            }, 10);
        });
        
        // Update active links count
        const activeLinks = appState.links.filter(link => link.enabled).length;
        elements.activeLinks.textContent = activeLinks;
    }
    
    function openAddLinkModal() {
        console.log('Opening add link modal...');
        
        elements.modalTitle.textContent = 'Add New Link';
        elements.linkTitle.value = '';
        elements.linkUrl.value = '';
        elements.linkEnabled.checked = true;
        elements.linkHighlighted.checked = false;
        elements.linkPinned.checked = false;
        elements.linkIndex.value = '-1';
        
        elements.linkModal.classList.add('active');
    }
    
    function openEditLinkModal(linkId) {
        console.log(`Opening edit modal for link ID: ${linkId}`);
        
        const link = appState.links.find(l => l.id === linkId);
        if (!link) return;
        
        elements.modalTitle.textContent = 'Edit Link';
        elements.linkTitle.value = link.title;
        elements.linkUrl.value = link.url;
        elements.linkEnabled.checked = link.enabled;
        elements.linkHighlighted.checked = link.highlighted;
        elements.linkPinned.checked = link.pinned;
        elements.linkIndex.value = appState.links.findIndex(l => l.id === linkId);
        
        elements.linkModal.classList.add('active');
    }
    
    function saveLink() {
        console.log('Saving link...');
        
        const title = elements.linkTitle.value.trim();
        const url = elements.linkUrl.value.trim();
        const enabled = elements.linkEnabled.checked;
        const highlighted = elements.linkHighlighted.checked;
        const pinned = elements.linkPinned.checked;
        const index = parseInt(elements.linkIndex.value);
        
        if (!title || !url) {
            showToast('Please fill in both title and URL', 'error');
            return;
        }
        
        // Validate URL
        if (!isValidUrl(url)) {
            showToast('Please enter a valid URL (include http:// or https://)', 'error');
            return;
        }
        
        if (index === -1) {
            // Add new link
            const newLink = {
                id: Date.now(),
                title,
                url,
                enabled,
                highlighted,
                pinned,
                clicks: 0,
                folder: elements.linkFolder.value
            };
            
            appState.links.push(newLink);
            showToast('Link added successfully', 'success');
        } else {
            // Update existing link
            appState.links[index] = {
                ...appState.links[index],
                title,
                url,
                enabled,
                highlighted,
                pinned
            };
            showToast('Link updated successfully', 'success');
        }
        
        renderLinks();
        updatePreview();
        saveToLocalStorage();
        
        elements.linkModal.classList.remove('active');
    }
    
    function deleteLink(linkId) {
        console.log(`Deleting link ID: ${linkId}`);
        
        if (!confirm('Are you sure you want to delete this link?')) return;
        
        const index = appState.links.findIndex(link => link.id === linkId);
        if (index !== -1) {
            appState.links.splice(index, 1);
            renderLinks();
            updatePreview();
            saveToLocalStorage();
            showToast('Link deleted successfully', 'success');
        }
    }
    
    function toggleLinkEnabled(linkId) {
        console.log(`Toggling enabled state for link ID: ${linkId}`);
        
        const link = appState.links.find(l => l.id === linkId);
        if (link) {
            link.enabled = !link.enabled;
            renderLinks();
            updatePreview();
            saveToLocalStorage();
            showToast(`Link ${link.enabled ? 'enabled' : 'disabled'}`, 'info');
        }
    }
    
    function updateLinksFolder() {
        console.log('Updating links folder...');
        
        const folder = elements.linkFolder.value;
        // In a real app, you would update which folder is being viewed
        showToast(`Viewing links in: ${folder === 'none' ? 'All Links' : folder}`, 'info');
    }
    
    function toggleScheduleSettings() {
        console.log('Toggling schedule settings...');
        
        const show = elements.linkSchedule.checked;
        elements.scheduleSettings.classList.toggle('hidden', !show);
        
        if (show) {
            showToast('Link scheduling enabled', 'info');
        }
    }
    
    function handleLinkClick(linkId) {
        console.log(`Link clicked: ${linkId}`);
        
        const link = appState.links.find(l => l.id === linkId);
        if (!link || !link.enabled) return;
        
        // Increment click count
        link.clicks++;
        appState.analytics.totalClicks++;
        
        // Update most clicked
        const maxClicks = Math.max(...appState.links.map(l => l.clicks));
        appState.analytics.mostClicked = maxClicks;
        
        // Update analytics display
        renderAnalytics();
        
        // Save state
        saveToLocalStorage();
        
        // In a real app, this would open the link
        // For demo purposes, we'll just show a message
        showToast(`Opening: ${link.title}`, 'info');
        
        // Simulate opening link in new tab
        setTimeout(() => {
            window.open(link.url, '_blank');
        }, 500);
    }
    
    // Drag and drop functions
    let draggedItem = null;
    
    function startDrag(linkId) {
        // This function is just for UI feedback
        console.log(`Starting drag for link ID: ${linkId}`);
    }
    
    function handleDragStart(e) {
        draggedItem = this;
        this.classList.add('dragging');
        
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }
    
    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        
        const afterElement = getDragAfterElement(elements.linksList, e.clientY);
        const draggable = document.querySelector('.dragging');
        
        if (afterElement == null) {
            elements.linksList.appendChild(draggable);
        } else {
            elements.linksList.insertBefore(draggable, afterElement);
        }
    }
    
    function handleDrop(e) {
        e.preventDefault();
        console.log('Drop handled');
    }
    
    function handleDragEnd() {
        this.classList.remove('dragging');
        
        // Update link order in appState
        const linkElements = elements.linksList.querySelectorAll('.link-item');
        const newOrder = [];
        
        linkElements.forEach(element => {
            const linkId = parseInt(element.dataset.id);
            const link = appState.links.find(l => l.id === linkId);
            if (link) {
                newOrder.push(link);
            }
        });
        
        appState.links = newOrder;
        saveToLocalStorage();
        showToast('Link order updated', 'success');
        
        draggedItem = null;
    }
    
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.link-item:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
    
    // Design functions
    function updateDesign() {
        console.log('Updating design...');
        
        appState.design.themeColor = elements.themeColor.value;
        appState.design.font = elements.fontSelector.value;
        appState.design.buttonStyle = elements.buttonStyle.value;
        
        // Apply CSS variables
        document.documentElement.style.setProperty('--primary-color', appState.design.themeColor);
        document.body.style.fontFamily = appState.design.font;
        
        // Update button styles
        const buttons = document.querySelectorAll('.btn, .preview-link-item');
        buttons.forEach(btn => {
            btn.className = btn.className.replace(/btn-style-\w+/g, '');
            btn.classList.add(`btn-style-${appState.design.buttonStyle}`);
        });
        
        saveToLocalStorage();
        showToast('Design updated', 'success');
    }
    
    function updateBackgroundSettings() {
        console.log('Updating background settings...');
        
        const type = elements.backgroundType.value;
        appState.design.background = type;
        
        let html = '';
        
        switch (type) {
            case 'solid':
                html = '<input type="color" id="backgroundColor" value="#ffffff">';
                break;
            case 'gradient':
                html = `
                    <div class="gradient-controls">
                        <input type="color" id="gradientColor1" value="#3a86ff">
                        <input type="color" id="gradientColor2" value="#8338ec">
                        <select id="gradientDirection">
                            <option value="to right">To Right</option>
                            <option value="to bottom">To Bottom</option>
                            <option value="135deg">Diagonal</option>
                        </select>
                    </div>
                `;
                break;
            case 'image':
                html = `
                    <input type="file" id="backgroundImage" accept="image/*">
                    <div class="image-options">
                        <select id="backgroundSize">
                            <option value="cover">Cover</option>
                            <option value="contain">Contain</option>
                        </select>
                    </div>
                `;
                break;
            case 'pattern':
                html = `
                    <select id="patternSelect">
                        <option value="dots">Dots</option>
                        <option value="grid">Grid</option>
                        <option value="lines">Lines</option>
                    </select>
                `;
                break;
        }
        
        elements.backgroundSettings.innerHTML = html;
        
        // Add event listeners for dynamic controls
        setTimeout(() => {
            const backgroundColor = document.getElementById('backgroundColor');
            const gradientColor1 = document.getElementById('gradientColor1');
            const gradientColor2 = document.getElementById('gradientColor2');
            const gradientDirection = document.getElementById('gradientDirection');
            const backgroundImage = document.getElementById('backgroundImage');
            
            if (backgroundColor) {
                backgroundColor.addEventListener('input', applyBackground);
            }
            
            if (gradientColor1 && gradientColor2 && gradientDirection) {
                gradientColor1.addEventListener('input', applyBackground);
                gradientColor2.addEventListener('input', applyBackground);
                gradientDirection.addEventListener('change', applyBackground);
            }
            
            if (backgroundImage) {
                backgroundImage.addEventListener('change', handleBackgroundImageUpload);
            }
        }, 10);
        
        applyBackground();
        saveToLocalStorage();
    }
    
    function applyBackground() {
        console.log('Applying background...');
        
        const type = elements.backgroundType.value;
        let backgroundValue = '';
        
        switch (type) {
            case 'solid':
                const color = document.getElementById('backgroundColor')?.value || '#ffffff';
                backgroundValue = color;
                document.body.style.background = color;
                break;
            case 'gradient':
                const color1 = document.getElementById('gradientColor1')?.value || '#3a86ff';
                const color2 = document.getElementById('gradientColor2')?.value || '#8338ec';
                const direction = document.getElementById('gradientDirection')?.value || 'to right';
                backgroundValue = `linear-gradient(${direction}, ${color1}, ${color2})`;
                document.body.style.background = backgroundValue;
                break;
            case 'image':
                // Background image already handled
                break;
            case 'pattern':
                const pattern = document.getElementById('patternSelect')?.value || 'dots';
                // Apply pattern via CSS class
                document.body.className = document.body.className.replace(/pattern-\w+/g, '');
                document.body.classList.add(`pattern-${pattern}`);
                break;
        }
        
        saveToLocalStorage();
    }
    
    function handleBackgroundImageUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        if (!file.type.match('image.*')) {
            showToast('Please select an image file', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(event) {
            document.body.style.backgroundImage = `url(${event.target.result})`;
            document.body.style.backgroundSize = document.getElementById('backgroundSize')?.value || 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
            
            showToast('Background image updated', 'success');
            saveToLocalStorage();
        };
        
        reader.readAsDataURL(file);
    }
    
    function toggleDarkMode() {
        console.log('Toggling dark mode...');
        
        const isDarkMode = elements.darkModeToggle.checked;
        appState.design.darkMode = isDarkMode;
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        
        saveToLocalStorage();
        showToast(`Dark mode ${isDarkMode ? 'enabled' : 'disabled'}`, 'info');
    }
    
    // Social icons functions
    function renderSocialIcons() {
        console.log('Rendering social icons...');
        
        const socialPlatforms = [
            { id: 'instagram', name: 'Instagram', icon: 'fab fa-instagram', color: '#E1306C' },
            { id: 'tiktok', name: 'TikTok', icon: 'fab fa-tiktok', color: '#000000' },
            { id: 'youtube', name: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000' },
            { id: 'facebook', name: 'Facebook', icon: 'fab fa-facebook', color: '#1877F2' },
            { id: 'twitter', name: 'X / Twitter', icon: 'fab fa-twitter', color: '#1DA1F2' },
            { id: 'whatsapp', name: 'WhatsApp', icon: 'fab fa-whatsapp', color: '#25D366' },
            { id: 'telegram', name: 'Telegram', icon: 'fab fa-telegram', color: '#0088CC' },
            { id: 'discord', name: 'Discord', icon: 'fab fa-discord', color: '#7289DA' },
            { id: 'snapchat', name: 'Snapchat', icon: 'fab fa-snapchat', color: '#FFFC00' },
            { id: 'pinterest', name: 'Pinterest', icon: 'fab fa-pinterest', color: '#E60023' },
            { id: 'linkedin', name: 'LinkedIn', icon: 'fab fa-linkedin', color: '#0077B5' },
            { id: 'github', name: 'GitHub', icon: 'fab fa-github', color: '#333333' },
            { id: 'spotify', name: 'Spotify', icon: 'fab fa-spotify', color: '#1DB954' },
            { id: 'email', name: 'Email', icon: 'fas fa-envelope', color: '#EA4335' },
            { id: 'website', name: 'Website', icon: 'fas fa-globe', color: '#4285F4' }
        ];
        
        elements.socialIconsGrid.innerHTML = '';
        
        socialPlatforms.forEach(platform => {
            const isActive = appState.social[platform.id];
            
            const iconItem = document.createElement('div');
            iconItem.className = `social-icon-item ${isActive ? 'active' : ''}`;
            iconItem.dataset.platform = platform.id;
            
            iconItem.innerHTML = `
                <i class="${platform.icon}" style="color: ${isActive ? 'white' : platform.color};"></i>
                <span>${platform.name}</span>
            `;
            
            iconItem.addEventListener('click', () => toggleSocialIcon(platform.id));
            elements.socialIconsGrid.appendChild(iconItem);
        });
    }
    
    function toggleSocialIcon(platformId) {
        console.log(`Toggling social icon: ${platformId}`);
        
        appState.social[platformId] = !appState.social[platformId];
        renderSocialIcons();
        saveToLocalStorage();
        showToast(`${platformId.charAt(0).toUpperCase() + platformId.slice(1)} ${appState.social[platformId] ? 'enabled' : 'disabled'}`, 'info');
    }
    
    // Analytics functions
    function renderAnalytics() {
        console.log('Rendering analytics...');
        
        // Update stats
        elements.totalClicks.textContent = appState.analytics.totalClicks;
        elements.mostClicked.textContent = appState.analytics.mostClicked;
        
        const activeLinks = appState.links.filter(link => link.enabled).length;
        elements.activeLinks.textContent = activeLinks;
        
        // Update links stats
        elements.linksStats.innerHTML = '';
        
        appState.links.forEach(link => {
            const statItem = document.createElement('div');
            statItem.className = 'link-stat-item';
            
            statItem.innerHTML = `
                <span>${link.title}</span>
                <span>${link.clicks} clicks</span>
            `;
            
            elements.linksStats.appendChild(statItem);
        });
    }
    
    function renderClicksChart() {
        console.log('Rendering clicks chart...');
        
        if (!elements.clicksChart) return;
        
        const ctx = elements.clicksChart.getContext('2d');
        
        // Destroy existing chart
        if (clicksChartInstance) {
            clicksChartInstance.destroy();
        }
        
        // Sample data for chart
        const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const data = labels.map(() => Math.floor(Math.random() * 50) + 10);
        
        clicksChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Clicks per day',
                    data: data,
                    backgroundColor: 'rgba(58, 134, 255, 0.1)',
                    borderColor: appState.design.themeColor,
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    }
                }
            }
        });
        
        // Update clicks details
        renderClicksDetails();
    }
    
    function renderClicksDetails() {
        console.log('Rendering clicks details...');
        
        // Sort links by clicks (descending)
        const sortedLinks = [...appState.links].sort((a, b) => b.clicks - a.clicks);
        
        elements.clicksDetails.innerHTML = '';
        
        sortedLinks.forEach((link, index) => {
            const detailItem = document.createElement('div');
            detailItem.className = 'link-stat-item';
            
            detailItem.innerHTML = `
                <span>${index + 1}. ${link.title}</span>
                <span><strong>${link.clicks}</strong> clicks</span>
            `;
            
            elements.clicksDetails.appendChild(detailItem);
        });
    }
    
    function resetAnalytics() {
        console.log('Resetting analytics...');
        
        if (!confirm('Are you sure you want to reset all analytics data? This cannot be undone.')) return;
        
        // Reset all link clicks
        appState.links.forEach(link => {
            link.clicks = 0;
        });
        
        // Reset analytics totals
        appState.analytics.totalClicks = 0;
        appState.analytics.mostClicked = 0;
        appState.analytics.lastReset = new Date().toISOString();
        
        renderAnalytics();
        if (clicksChartInstance) {
            clicksChartInstance.destroy();
            clicksChartInstance = null;
        }
        
        saveToLocalStorage();
        showToast('Analytics data reset successfully', 'success');
    }
    
    // Branding functions
    function updateBranding() {
        console.log('Updating branding...');
        
        appState.branding.hideLogo = elements.hideLogo.checked;
        appState.branding.customFooter = elements.customFooter.value;
        appState.branding.favicon = elements.favicon.value;
        
        // Apply favicon if URL is valid
        if (appState.branding.favicon && isValidUrl(appState.branding.favicon)) {
            const favicon = document.querySelector('link[rel="icon"]');
            if (favicon) {
                favicon.href = appState.branding.favicon;
            }
        }
        
        saveToLocalStorage();
        showToast('Branding updated', 'success');
    }
    
    // Animation functions
    function updateAnimation() {
        console.log('Updating animation...');
        
        appState.animation.linkAnimation = elements.linkAnimation.value;
        appState.animation.pageTransition = elements.pageTransition.value;
        
        // Apply animation classes
        const previewLinks = document.querySelectorAll('.preview-link-item');
        previewLinks.forEach(link => {
            link.className = link.className.replace(/animation-\w+/g, '');
            if (appState.animation.linkAnimation !== 'none') {
                link.classList.add(`animation-${appState.animation.linkAnimation}`);
            }
        });
        
        saveToLocalStorage();
        showToast('Animation settings updated', 'success');
    }
    
    // QR Code functions
    function generateQRCode() {
        console.log('Generating QR code...');
        
        const url = elements.qrcodeUrl.value.trim();
        
        if (!url) {
            showToast('Please enter a URL for the QR code', 'error');
            return;
        }
        
        if (!isValidUrl(url)) {
            showToast('Please enter a valid URL (include http:// or https://)', 'error');
            return;
        }
        
        // In a real implementation, you would use a QR code library
        // For demo purposes, we'll create a simple representation
        elements.qrcodePreview.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="background: #000; width: 160px; height: 160px; margin: 0 auto 15px; position: relative;">
                    <!-- This would be the actual QR code -->
                    <div style="color: white; font-size: 12px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                        QR CODE<br>FOR:<br>${url.substring(0, 20)}...
                    </div>
                </div>
                <p style="font-size: 12px; color: #666;">Scan to visit: ${url.substring(0, 30)}...</p>
            </div>
        `;
        
        showToast('QR code generated successfully', 'success');
    }
    
    function downloadQRCode() {
        console.log('Downloading QR code...');
        
        if (!elements.qrcodeUrl.value.trim()) {
            showToast('Please generate a QR code first', 'error');
            return;
        }
        
        showToast('QR code download started', 'info');
        // In a real implementation, this would download the QR code image
    }
    
    // Custom CSS functions
    function applyCustomCSS() {
        console.log('Applying custom CSS...');
        
        const css = elements.customCss.value;
        appState.customCSS = css;
        
        // Remove existing custom style
        const existingStyle = document.getElementById('custom-css-style');
        if (existingStyle) {
            existingStyle.remove();
        }
        
        // Add new custom style
        if (css.trim()) {
            const style = document.createElement('style');
            style.id = 'custom-css-style';
            style.textContent = css;
            document.head.appendChild(style);
            showToast('Custom CSS applied successfully', 'success');
        } else {
            showToast('Custom CSS cleared', 'info');
        }
        
        saveToLocalStorage();
    }
    
    // Export functions
    function exportAsHTML() {
        console.log('Exporting as HTML...');
        
        // Generate HTML for LinkTree page
        const html = generateLinkTreeHTML();
        
        // Create download link
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'linktree-page.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('LinkTree HTML exported successfully', 'success');
    }
    
    function generateLinkTreeHTML() {
        // Generate a complete HTML page based on current settings
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appState.profile.name}'s LinkTree</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=${appState.design.font.replace(' ', '+')}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: '${appState.design.font}', sans-serif;
            background: ${getBackgroundCSS()};
            color: ${appState.design.darkMode ? '#f8f9fa' : '#333'};
            line-height: 1.6;
            min-height: 100vh;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .linktree-container {
            width: 100%;
            max-width: 400px;
            text-align: center;
        }
        
        .profile-section {
            margin-bottom: 2rem;
        }
        
        .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid ${appState.design.themeColor};
            margin-bottom: 1rem;
        }
        
        .profile-name {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
            color: ${appState.design.darkMode ? 'white' : '#333'};
        }
        
        .profile-bio {
            color: ${appState.design.darkMode ? '#ccc' : '#666'};
            margin-bottom: 0.5rem;
        }
        
        .verified-badge {
            color: #1da1f2;
            font-size: 1.2rem;
        }
        
        .links-section {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .link-item {
            display: block;
            padding: 1rem;
            background: ${appState.design.darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
            border-radius: ${appState.design.buttonStyle === 'pill' ? '50px' : '12px'};
            text-decoration: none;
            color: ${appState.design.darkMode ? 'white' : '#333'};
            font-weight: 500;
            transition: all 0.3s ease;
            border: 1px solid ${appState.design.darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        }
        
        .link-item:hover {
            background: ${appState.design.themeColor};
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .link-item.highlighted {
            background: linear-gradient(135deg, #ffd166, #ffb347);
            color: white;
            font-weight: bold;
        }
        
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: ${appState.design.darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${appState.design.darkMode ? 'white' : '#333'};
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .social-icon:hover {
            background: ${appState.design.themeColor};
            color: white;
            transform: translateY(-3px);
        }
        
        .footer {
            color: ${appState.design.darkMode ? '#aaa' : '#666'};
            font-size: 0.9rem;
            padding-top: 1rem;
            border-top: 1px solid ${appState.design.darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
        }
        
        ${appState.customCSS}
    </style>
</head>
<body>
    <div class="linktree-container">
        <div class="profile-section">
            ${appState.profile.image ? `<img src="${appState.profile.image}" alt="${appState.profile.name}" class="profile-image">` : `<div class="profile-image" style="background: #ddd; display: flex; align-items: center; justify-content: center;"><i class="fas fa-user" style="font-size: 3rem; color: #999;"></i></div>`}
            <h1 class="profile-name">${appState.profile.name} ${appState.profile.verified ? '<i class="fas fa-check-circle verified-badge"></i>' : ''}</h1>
            <p class="profile-bio">${appState.profile.bio}</p>
        </div>
        
        <div class="links-section">
            ${generateLinksHTML()}
        </div>
        
        <div class="social-icons">
            ${generateSocialIconsHTML()}
        </div>
        
        <div class="footer">
            ${appState.branding.customFooter || '© ' + new Date().getFullYear() + ' ' + appState.profile.name + '. All rights reserved.'}
            ${!appState.branding.hideLogo ? '<p style="margin-top: 5px; font-size: 0.8rem;">Made with LinkTree God Mode</p>' : ''}
        </div>
    </div>
    
    <script>
        // Simple click tracking
        document.querySelectorAll('.link-item').forEach(link => {
            link.addEventListener('click', function() {
                // In a real implementation, you would send analytics data to your server
                console.log('Link clicked:', this.textContent);
            });
        });
    </script>
</body>
</html>
        `;
    }
    
    function getBackgroundCSS() {
        // Return CSS for background based on settings
        switch (appState.design.background) {
            case 'gradient':
                return `linear-gradient(to right, ${appState.design.themeColor}, ${adjustColor(appState.design.themeColor, 40)})`;
            case 'solid':
                return appState.design.darkMode ? '#121212' : '#f5f7fa';
            default:
                return appState.design.darkMode ? '#121212' : '#f5f7fa';
        }
    }
    
    function generateLinksHTML() {
        // Generate HTML for links
        let html = '';
        const enabledLinks = appState.links.filter(link => link.enabled);
        
        enabledLinks.forEach(link => {
            const highlightedClass = link.highlighted ? 'highlighted' : '';
            html += `<a href="${link.url}" class="link-item ${highlightedClass}" target="_blank">${link.title}</a>`;
        });
        
        return html;
    }
    
    function generateSocialIconsHTML() {
        // Generate HTML for social icons
        let html = '';
        const socialPlatforms = [
            { id: 'instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' },
            { id: 'tiktok', icon: 'fab fa-tiktok', url: 'https://tiktok.com' },
            { id: 'youtube', icon: 'fab fa-youtube', url: 'https://youtube.com' },
            { id: 'facebook', icon: 'fab fa-facebook', url: 'https://facebook.com' },
            { id: 'twitter', icon: 'fab fa-twitter', url: 'https://twitter.com' },
            { id: 'whatsapp', icon: 'fab fa-whatsapp', url: 'https://wa.me' },
            { id: 'telegram', icon: 'fab fa-telegram', url: 'https://t.me' },
            { id: 'discord', icon: 'fab fa-discord', url: 'https://discord.com' },
            { id: 'snapchat', icon: 'fab fa-snapchat', url: 'https://snapchat.com' },
            { id: 'pinterest', icon: 'fab fa-pinterest', url: 'https://pinterest.com' },
            { id: 'linkedin', icon: 'fab fa-linkedin', url: 'https://linkedin.com' },
            { id: 'github', icon: 'fab fa-github', url: 'https://github.com' },
            { id: 'spotify', icon: 'fab fa-spotify', url: 'https://spotify.com' },
            { id: 'email', icon: 'fas fa-envelope', url: 'mailto:example@example.com' },
            { id: 'website', icon: 'fas fa-globe', url: 'https://example.com' }
        ];
        
        socialPlatforms.forEach(platform => {
            if (appState.social[platform.id]) {
                html += `<a href="${platform.url}" class="social-icon" target="_blank"><i class="${platform.icon}"></i></a>`;
            }
        });
        
        return html;
    }
    
    function viewSourceCode() {
        console.log('Viewing source code...');
        
        const html = generateLinkTreeHTML();
        elements.sourceCode.value = html;
        elements.sourceModal.classList.add('active');
    }
    
    function copySourceCode() {
        console.log('Copying source code...');
        
        elements.sourceCode.select();
        elements.sourceCode.setSelectionRange(0, 99999); // For mobile devices
        
        try {
            document.execCommand('copy');
            showToast('Source code copied to clipboard', 'success');
        } catch (err) {
            console.error('Failed to copy: ', err);
            showToast('Failed to copy source code', 'error');
        }
    }
    
    function addShareButton() {
        console.log('Adding share button...');
        
        showToast('Share button added to LinkTree page', 'success');
        // In a real implementation, this would add share functionality
    }
    
    function exportAsJSON() {
        console.log('Exporting as JSON...');
        
        // Create a clean export object
        const exportData = {
            profile: appState.profile,
            links: appState.links,
            design: appState.design,
            social: appState.social,
            branding: appState.branding,
            animation: appState.animation,
            customCSS: appState.customCSS,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        
        // Convert to JSON string
        const json = JSON.stringify(exportData, null, 2);
        
        // Create download link
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'linktree-template.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('Template exported as JSON', 'success');
    }
    
    function importFromJSON(e) {
        console.log('Importing from JSON...');
        
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const importedData = JSON.parse(event.target.result);
                
                // Validate the imported data
                if (!importedData.profile || !importedData.links) {
                    throw new Error('Invalid template file');
                }
                
                // Merge imported data with current state
                Object.keys(importedData).forEach(key => {
                    if (appState.hasOwnProperty(key) && key !== 'analytics') {
                        appState[key] = importedData[key];
                    }
                });
                
                // Reset analytics when importing
                appState.analytics.totalClicks = 0;
                appState.analytics.mostClicked = 0;
                appState.links.forEach(link => link.clicks = 0);
                
                // Re-render everything
                renderProfile();
                renderLinks();
                renderSocialIcons();
                renderAnalytics();
                updateDesign();
                updatePreview();
                
                // Apply custom CSS
                elements.customCss.value = appState.customCSS;
                applyCustomCSS();
                
                saveToLocalStorage();
                showToast('Template imported successfully', 'success');
                
                // Clear file input
                e.target.value = '';
            } catch (error) {
                console.error('Error importing template:', error);
                showToast('Error importing template. Please check the file format.', 'error');
            }
        };
        
        reader.readAsText(file);
    }
    
    function resetToDefault() {
        console.log('Resetting to default...');
        
        if (!confirm('Are you sure you want to reset all settings to default? This cannot be undone.')) return;
        
        // Reset appState to default
        const defaultState = {
            profile: {
                name: 'John Doe',
                bio: 'Digital Creator | Content Strategist | Building the future of social connections',
                image: null,
                verified: true,
                headerStyle: 'simple'
            },
            links: [
                { id: 1, title: 'My Portfolio', url: 'https://portfolio.example.com', enabled: true, highlighted: false, pinned: false, clicks: 0, folder: 'none' },
                { id: 2, title: 'YouTube Channel', url: 'https://youtube.com/@example', enabled: true, highlighted: true, pinned: false, clicks: 0, folder: 'social' },
                { id: 3, title: 'Instagram', url: 'https://instagram.com/example', enabled: true, highlighted: false, pinned: true, clicks: 0, folder: 'social' }
            ],
            design: {
                themeColor: '#3a86ff',
                font: 'Poppins',
                buttonStyle: 'rounded',
                background: 'solid',
                darkMode: false
            },
            social: {
                instagram: true,
                tiktok: true,
                youtube: true,
                facebook: false,
                twitter: true,
                whatsapp: false,
                telegram: false,
                discord: false,
                snapchat: false,
                pinterest: false,
                linkedin: true,
                github: true,
                spotify: false,
                email: true,
                website: true
            },
            analytics: {
                totalClicks: 0,
                mostClicked: 0,
                lastReset: new Date().toISOString()
            },
            branding: {
                hideLogo: false,
                customFooter: '',
                favicon: ''
            },
            animation: {
                linkAnimation: 'none',
                pageTransition: 'none'
            },
            customCSS: '',
            lastSaved: new Date().toISOString()
        };
        
        // Copy default state to appState
        Object.keys(defaultState).forEach(key => {
            appState[key] = JSON.parse(JSON.stringify(defaultState[key]));
        });
        
        // Re-render everything
        renderProfile();
        renderLinks();
        renderSocialIcons();
        renderAnalytics();
        updateDesign();
        updatePreview();
        
        // Reset form values
        elements.customCss.value = '';
        elements.customFooter.value = '';
        elements.favicon.value = '';
        elements.linkAnimation.value = 'none';
        elements.pageTransition.value = 'none';
        elements.hideLogo.checked = false;
        
        // Apply changes
        applyCustomCSS();
        updateBranding();
        updateAnimation();
        
        saveToLocalStorage();
        showToast('All settings reset to default', 'success');
    }
    
    // Preview functions
    function updatePreview() {
        console.log('Updating preview...');
        
        // Update profile in preview
        elements.previewName.textContent = appState.profile.name;
        elements.previewBio.textContent = appState.profile.bio;
        
        // Update profile image in preview
        if (appState.profile.image) {
            elements.previewProfileImg.src = appState.profile.image;
        } else {
            elements.previewProfileImg.src = '';
            elements.previewProfileImg.alt = 'Profile';
        }
        
        // Update links in preview (already done in renderLinks)
    }
    
    function showPreview() {
        console.log('Showing preview...');
        
        // Generate and open preview in new tab
        const html = generateLinkTreeHTML();
        const previewWindow = window.open();
        previewWindow.document.write(html);
        previewWindow.document.close();
        
        showToast('Preview opened in new tab', 'info');
    }
    
    function showExportOptions() {
        console.log('Showing export options...');
        
        // Switch to export section
        switchSection('export');
        showToast('Export options panel opened', 'info');
    }
    
    // Reset app function
    function resetApp() {
        console.log('Resetting app...');
        
        if (!confirm('Are you sure you want to reset everything? This will clear all data and cannot be undone.')) return;
        
        // Clear localStorage
        localStorage.removeItem('linktree-god-mode');
        
        // Reload page
        location.reload();
    }
    
    // LocalStorage functions
    function saveToLocalStorage() {
        console.log('Saving to localStorage...');
        
        try {
            localStorage.setItem('linktree-god-mode', JSON.stringify(appState));
            updateLastSaved();
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            showToast('Error saving data', 'error');
        }
    }
    
    function loadFromLocalStorage() {
        console.log('Loading from localStorage...');
        
        try {
            const saved = localStorage.getItem('linktree-god-mode');
            if (saved) {
                const parsed = JSON.parse(saved);
                
                // Merge saved data with current appState
                Object.keys(parsed).forEach(key => {
                    if (appState.hasOwnProperty(key)) {
                        // For links, we need to ensure they have all required properties
                        if (key === 'links') {
                            appState[key] = parsed[key].map(link => ({
                                id: link.id || Date.now() + Math.random(),
                                title: link.title || 'Untitled Link',
                                url: link.url || '#',
                                enabled: link.enabled !== undefined ? link.enabled : true,
                                highlighted: link.highlighted || false,
                                pinned: link.pinned || false,
                                clicks: link.clicks || 0,
                                folder: link.folder || 'none'
                            }));
                        } else {
                            appState[key] = parsed[key];
                        }
                    }
                });
                
                console.log('Data loaded from localStorage');
                showToast('Data loaded successfully', 'success');
            } else {
                console.log('No saved data found in localStorage');
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            showToast('Error loading saved data', 'error');
        }
    }
    
    function setupAutoSave() {
        console.log('Setting up auto-save...');
        
        // Auto-save on input changes
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                saveToLocalStorage();
            });
        });
        
        // Auto-save every 30 seconds
        setInterval(() => {
            saveToLocalStorage();
        }, 30000);
    }
    
    function updateLastSaved() {
        console.log('Updating last saved time...');
        
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        elements.lastSaved.textContent = `Last saved: ${timeString}`;
        
        // Show auto-save status briefly
        elements.autoSaveStatus.style.color = '#06d6a0';
        setTimeout(() => {
            elements.autoSaveStatus.style.color = '';
        }, 1000);
    }
    
    // Utility functions
    function showToast(message, type = 'info') {
        console.log(`Toast: ${message} (${type})`);
        
        elements.toast.textContent = message;
        elements.toast.className = 'toast';
        elements.toast.classList.add(type);
        elements.toast.classList.add('show');
        
        // Remove after 3 seconds
        setTimeout(() => {
            elements.toast.classList.remove('show');
        }, 3000);
    }
    
    function closeAllModals() {
        console.log('Closing all modals...');
        
        elements.linkModal.classList.remove('active');
        elements.sourceModal.classList.remove('active');
    }
    
    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }
    
    function adjustColor(color, amount) {
        // Simple function to adjust color brightness
        const hex = color.replace('#', '');
        const num = parseInt(hex, 16);
        const r = (num >> 16) + amount;
        const g = ((num >> 8) & 0x00FF) + amount;
        const b = (num & 0x0000FF) + amount;
        
        return '#' + (
            0x1000000 +
            (r < 255 ? r < 1 ? 0 : r : 255) * 0x10000 +
            (g < 255 ? g < 1 ? 0 : g : 255) * 0x100 +
            (b < 255 ? b < 1 ? 0 : b : 255)
        ).toString(16).slice(1);
    }
    
    // Initialize the app
    initApp();
});