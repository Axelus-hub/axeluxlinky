// ===== LINKTREE GOD MODE GENERATOR =====
// Version: 3.0.0
// Author: AxelLux
// Copyright: © 2024 AxelLux — All Rights Reserved

// ===== GLOBAL STATE =====
const state = {
    // Profile Data
    profile: {
        name: 'John Doe',
        bio: 'Digital Creator | Content Strategist 🚀\nBuilding awesome things on the internet ✨\nConnect with me below!',
        photo: null,
        verified: false,
        headerStyle: 'minimal'
    },
    
    // Links Data
    links: [],
    linkCounter: 0,
    
    // Design Settings
    design: {
        colors: {
            primary: '#667eea',
            secondary: '#764ba2',
            text: '#ffffff',
            background: '#0f172a'
        },
        font: {
            family: 'Inter',
            size: {
                title: '32px',
                body: '16px'
            },
            weight: '600'
        },
        background: {
            type: 'color',
            color: '#0f172a',
            gradient: 'default',
            image: null
        },
        buttons: {
            style: 'rounded',
            hoverEffect: true,
            shadowEffect: true,
            gradientEffect: false
        }
    },
    
    // Social Media Links
    social: {
        instagram: '',
        tiktok: '',
        youtube: '',
        twitter: '',
        facebook: '',
        whatsapp: '',
        telegram: '',
        discord: '',
        snapchat: '',
        pinterest: '',
        linkedin: '',
        github: '',
        spotify: '',
        email: '',
        website: ''
    },
    
    // Analytics
    analytics: {
        views: 1250,
        clicks: 850,
        uniqueVisitors: 750,
        clickRate: '68%',
        clicksData: [45, 52, 38, 65, 72, 58, 49],
        topLinks: []
    },
    
    // Advanced Settings
    advanced: {
        customCSS: '',
        hideLogo: false,
        shareButton: true,
        customFooter: '© 2024 Your Brand',
        metaTitle: '',
        metaDescription: '',
        favicon: ''
    },
    
    // UI State
    currentLink: null,
    isEditing: false,
    autoSave: true,
    darkMode: true
};

// ===== DOM ELEMENTS =====
const elements = {
    // Loading Screen
    loadingScreen: document.getElementById('loading-screen'),
    
    // Sidebar
    sidebar: document.getElementById('sidebar'),
    sidebarToggle: document.getElementById('sidebar-toggle'),
    
    // Mobile Tabs
    mobileTabs: document.getElementById('mobile-tabs'),
    
    // Content Sections
    contentSections: document.querySelectorAll('.content-section'),
    sectionNavItems: document.querySelectorAll('.nav-item'),
    mobileTabButtons: document.querySelectorAll('.mobile-tab'),
    
    // Profile Section
    profileNameDisplay: document.getElementById('profile-name-display'),
    profileAvatar: document.getElementById('profile-avatar'),
    profileUploadBox: document.getElementById('profile-upload-box'),
    profilePhotoInput: document.getElementById('profile-photo-input'),
    profilePreview: document.getElementById('profile-preview'),
    browsePhotoBtn: document.getElementById('browse-photo-btn'),
    cropProfileBtn: document.getElementById('crop-profile-btn'),
    removeProfileBtn: document.getElementById('remove-profile-btn'),
    displayName: document.getElementById('display-name'),
    profileBio: document.getElementById('profile-bio'),
    verifiedBadge: document.getElementById('verified-badge'),
    
    // Stats
    totalLinks: document.getElementById('total-links'),
    totalClicks: document.getElementById('total-clicks'),
    profileViews: document.getElementById('profile-views'),
    activeLinks: document.getElementById('active-links'),
    
    // Quick Actions
    quickAddLink: document.getElementById('quick-add-link'),
    quickUpload: document.getElementById('quick-upload'),
    quickPreview: document.getElementById('quick-preview'),
    quickExport: document.getElementById('quick-export'),
    quickReset: document.getElementById('quick-reset'),
    quickShare: document.getElementById('quick-share'),
    
    // Links Section
    addNewLink: document.getElementById('add-new-link'),
    createFolder: document.getElementById('create-folder'),
    importLinks: document.getElementById('import-links'),
    exportLinks: document.getElementById('export-links'),
    autoSort: document.getElementById('auto-sort'),
    searchLinks: document.getElementById('search-links'),
    linksList: document.getElementById('links-list'),
    recentLinksList: document.getElementById('recent-links-list'),
    
    // Link Modal
    linkModal: document.getElementById('link-modal'),
    closeLinkModal: document.getElementById('close-link-modal'),
    linkTitle: document.getElementById('link-title'),
    linkUrl: document.getElementById('link-url'),
    selectIconBtn: document.getElementById('select-icon-btn'),
    selectedIcon: document.getElementById('selected-icon'),
    linkDescription: document.getElementById('link-description'),
    scheduleToggle: document.getElementById('schedule-toggle'),
    scheduleTimes: document.getElementById('schedule-times'),
    startTime: document.getElementById('start-time'),
    endTime: document.getElementById('end-time'),
    linkEnabled: document.getElementById('link-enabled'),
    cancelLinkBtn: document.getElementById('cancel-link-btn'),
    saveLinkBtn: document.getElementById('save-link-btn'),
    
    // Design Section
    designTabBtns: document.querySelectorAll('.design-tab-btn'),
    designTabPanes: document.querySelectorAll('.tab-pane'),
    
    // Colors Tab
    colorPresets: document.querySelectorAll('.preset-option'),
    primaryColor: document.getElementById('primary-color'),
    secondaryColor: document.getElementById('secondary-color'),
    textColor: document.getElementById('text-color'),
    bgColor: document.getElementById('bg-color'),
    applyColors: document.getElementById('apply-colors'),
    
    // Fonts Tab
    fontFamily: document.getElementById('font-family'),
    titleSize: document.getElementById('title-size'),
    titleSizeValue: document.getElementById('title-size-value'),
    bodySize: document.getElementById('body-size'),
    bodySizeValue: document.getElementById('body-size-value'),
    weightButtons: document.querySelectorAll('.weight-btn'),
    
    // Background Tab
    bgTypeButtons: document.querySelectorAll('.bg-type-btn'),
    bgColorOptions: document.getElementById('bg-color-options'),
    bgGradientOptions: document.getElementById('bg-gradient-options'),
    bgImageOptions: document.getElementById('bg-image-options'),
    gradientPresets: document.querySelectorAll('.gradient-preset'),
    bgSolidColor: document.getElementById('bg-solid-color'),
    bgUploadBox: document.getElementById('bg-upload-box'),
    bgImageInput: document.getElementById('bg-image-input'),
    bgPosition: document.getElementById('bg-position'),
    
    // Buttons Tab
    styleOptions: document.querySelectorAll('.style-option'),
    hoverEffect: document.getElementById('hover-effect'),
    shadowEffect: document.getElementById('shadow-effect'),
    gradientEffect: document.getElementById('gradient-effect'),
    
    // Design Preview
    designPreview: document.getElementById('design-preview'),
    
    // Social Section
    socialInputs: document.querySelectorAll('.social-input'),
    socialAnimation: document.getElementById('social-animation'),
    socialNewTab: document.getElementById('social-new-tab'),
    socialTooltips: document.getElementById('social-tooltips'),
    
    // Analytics Section
    totalViews: document.getElementById('total-views'),
    totalClicksAnalytics: document.getElementById('total-clicks-analytics'),
    uniqueVisitors: document.getElementById('unique-visitors'),
    clickRate: document.getElementById('click-rate'),
    clicksChart: document.getElementById('clicks-chart'),
    topLinksList: document.getElementById('top-links-list'),
    exportAnalytics: document.getElementById('export-analytics'),
    resetAnalytics: document.getElementById('reset-analytics'),
    
    // Advanced Section
    generateQr: document.getElementById('generate-qr'),
    editCss: document.getElementById('edit-css'),
    mobilePreviewBtn: document.getElementById('mobile-preview'),
    shareButton: document.getElementById('share-button'),
    customFooter: document.getElementById('custom-footer'),
    hideLogo: document.getElementById('hide-logo'),
    metaTitle: document.getElementById('meta-title'),
    metaDescription: document.getElementById('meta-description'),
    faviconUrl: document.getElementById('favicon-url'),
    
    // Preview Section
    deviceButtons: document.querySelectorAll('.device-btn'),
    refreshPreview: document.getElementById('refresh-preview'),
    fullscreenPreview: document.getElementById('fullscreen-preview'),
    previewDevice: document.getElementById('preview-device'),
    livePreview: document.getElementById('live-preview'),
    pageSize: document.getElementById('page-size'),
    loadTime: document.getElementById('load-time'),
    mobileScore: document.getElementById('mobile-score'),
    seoScore: document.getElementById('seo-score'),
    
    // Export Section
    exportHtml: document.getElementById('export-html'),
    viewSource: document.getElementById('view-source'),
    exportJson: document.getElementById('export-json'),
    importJson: document.getElementById('import-json'),
    generateShareLink: document.getElementById('generate-share-link'),
    codeTabs: document.querySelectorAll('.code-tab'),
    htmlCode: document.getElementById('html-code'),
    cssCode: document.getElementById('css-code'),
    jsCode: document.getElementById('js-code'),
    copyAllCode: document.getElementById('copy-all-code'),
    downloadAllCode: document.getElementById('download-all-code'),
    
    // Modals
    qrModal: document.getElementById('qr-modal'),
    closeQrModal: document.getElementById('close-qr-modal'),
    qrCode: document.getElementById('qr-code'),
    downloadQr: document.getElementById('download-qr'),
    copyQr: document.getElementById('copy-qr'),
    
    cssModal: document.getElementById('css-modal'),
    closeCssModal: document.getElementById('close-css-modal'),
    customCss: document.getElementById('custom-css'),
    cancelCss: document.getElementById('cancel-css'),
    saveCss: document.getElementById('save-css'),
    
    mobileModal: document.getElementById('mobile-modal'),
    closeMobileModal: document.getElementById('close-mobile-modal'),
    mobilePreviewFrame: document.getElementById('mobile-preview-frame'),
    
    sourceModal: document.getElementById('source-modal'),
    closeSourceModal: document.getElementById('close-source-modal'),
    sourceTabs: document.querySelectorAll('.source-tab'),
    sourceHtml: document.getElementById('source-html'),
    sourceCss: document.getElementById('source-css'),
    sourceJs: document.getElementById('source-js'),
    copySource: document.getElementById('copy-source'),
    downloadSource: document.getElementById('download-source'),
    
    // Footer
    autoSaveStatus: document.getElementById('auto-save-status'),
    
    // Toast Container
    toastContainer: document.getElementById('toast-container')
};

// ===== UTILITY FUNCTIONS =====
class Utils {
    // Show Toast Notification
    static showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-times-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        toast.innerHTML = `
            <i class="toast-icon ${icons[type]}"></i>
            <div class="toast-content">
                <div class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
                <div class="toast-message">${message}</div>
            </div>
        `;
        
        elements.toastContainer.appendChild(toast);
        
        // Remove toast after 5 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }
    
    // Generate Random ID
    static generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    // Format Number with Commas
    static formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    // Debounce Function
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Validate URL
    static isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    }
    
    // Copy to Clipboard
    static copyToClipboard(text) {
        return navigator.clipboard.writeText(text)
            .then(() => true)
            .catch(() => {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                return true;
            });
    }
    
    // Download File
    static downloadFile(content, filename, type = 'text/plain') {
        const blob = new Blob([content], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// ===== INITIALIZATION =====
class App {
    static init() {
        console.log('🚀 LinkTree GOD MODE Generator v3.0.0');
        console.log('👤 Author: AxelLux');
        console.log('📅 Copyright: © 2024 AxelLux — All Rights Reserved');
        
        // Initialize all components
        this.initEvents();
        this.loadFromLocalStorage();
        this.updateUI();
        this.generatePreview();
        
        // Hide loading screen after 1.5 seconds
        setTimeout(() => {
            elements.loadingScreen.classList.add('hidden');
            Utils.showToast('LinkTree GOD MODE loaded successfully!', 'success');
        }, 1500);
        
        // Auto-save every 30 seconds
        if (state.autoSave) {
            setInterval(() => {
                this.saveToLocalStorage();
                elements.autoSaveStatus.textContent = 'ON';
                setTimeout(() => {
                    elements.autoSaveStatus.textContent = 'ON';
                }, 1000);
            }, 30000);
        }
    }
    
    // Initialize Event Listeners
    static initEvents() {
        // Sidebar Toggle
        elements.sidebarToggle?.addEventListener('click', () => {
            elements.sidebar.classList.toggle('active');
        });
        
        // Navigation
        elements.sectionNavItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.getAttribute('data-section');
                this.switchSection(section);
                if (window.innerWidth <= 1024) {
                    elements.sidebar.classList.remove('active');
                }
            });
        });
        
        // Mobile Tabs
        elements.mobileTabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const section = button.getAttribute('data-section');
                this.switchSection(section);
            });
        });
        
        // Profile Section
        elements.browsePhotoBtn?.addEventListener('click', () => {
            elements.profilePhotoInput.click();
        });
        
        elements.profilePhotoInput?.addEventListener('change', (e) => {
            this.handleProfilePhotoUpload(e);
        });
        
        elements.removeProfileBtn?.addEventListener('click', () => {
            this.removeProfilePhoto();
        });
        
        elements.displayName?.addEventListener('input', Utils.debounce(() => {
            state.profile.name = elements.displayName.value;
            elements.profileNameDisplay.textContent = state.profile.name;
            this.updateUI();
            this.generatePreview();
        }, 300));
        
        elements.profileBio?.addEventListener('input', Utils.debounce(() => {
            state.profile.bio = elements.profileBio.value;
            this.generatePreview();
        }, 300));
        
        elements.verifiedBadge?.addEventListener('change', () => {
            state.profile.verified = elements.verifiedBadge.checked;
            this.generatePreview();
        });
        
        // Header Style Selector
        document.querySelectorAll('.style-option[data-style]').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.style-option[data-style]').forEach(o => o.classList.remove('active'));
                option.classList.add('active');
                state.profile.headerStyle = option.getAttribute('data-style');
                this.generatePreview();
            });
        });
        
        // Quick Actions
        elements.quickAddLink?.addEventListener('click', () => {
            this.openLinkModal();
        });
        
        elements.quickPreview?.addEventListener('click', () => {
            this.switchSection('preview');
        });
        
        elements.quickExport?.addEventListener('click', () => {
            this.switchSection('export');
        });
        
        elements.quickReset?.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all analytics data?')) {
                this.resetAnalytics();
            }
        });
        
        elements.quickShare?.addEventListener('click', () => {
            this.generateShareableLink();
        });
        
        // Links Management
        elements.addNewLink?.addEventListener('click', () => {
            this.openLinkModal();
        });
        
        elements.createFolder?.addEventListener('click', () => {
            this.createFolder();
        });
        
        elements.importLinks?.addEventListener('click', () => {
            this.importLinksFromJson();
        });
        
        elements.exportLinks?.addEventListener('click', () => {
            this.exportLinksToJson();
        });
        
        elements.autoSort?.addEventListener('change', () => {
            state.autoSort = elements.autoSort.checked;
            if (state.autoSort) {
                this.sortLinks();
            }
        });
        
        elements.searchLinks?.addEventListener('input', Utils.debounce(() => {
            this.filterLinks(elements.searchLinks.value);
        }, 300));
        
        // Link Modal
        elements.closeLinkModal?.addEventListener('click', () => {
            this.closeLinkModal();
        });
        
        elements.cancelLinkBtn?.addEventListener('click', () => {
            this.closeLinkModal();
        });
        
        elements.saveLinkBtn?.addEventListener('click', () => {
            this.saveLink();
        });
        
        elements.scheduleToggle?.addEventListener('change', () => {
            const enabled = elements.scheduleToggle.checked;
            elements.startTime.disabled = !enabled;
            elements.endTime.disabled = !enabled;
        });
        
        // Design Section - Tabs
        elements.designTabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                this.switchDesignTab(tab);
            });
        });
        
        // Colors
        elements.colorPresets.forEach(preset => {
            preset.addEventListener('click', () => {
                document.querySelectorAll('.preset-option').forEach(p => p.classList.remove('active'));
                preset.classList.add('active');
                const presetName = preset.getAttribute('data-preset');
                this.applyColorPreset(presetName);
            });
        });
        
        elements.applyColors?.addEventListener('click', () => {
            this.applyCustomColors();
        });
        
        // Fonts
        elements.fontFamily?.addEventListener('change', () => {
            state.design.font.family = elements.fontFamily.value;
            this.generatePreview();
        });
        
        elements.titleSize?.addEventListener('input', () => {
            const value = elements.titleSize.value;
            elements.titleSizeValue.textContent = value + 'px';
            state.design.font.size.title = value + 'px';
            this.generatePreview();
        });
        
        elements.bodySize?.addEventListener('input', () => {
            const value = elements.bodySize.value;
            elements.bodySizeValue.textContent = value + 'px';
            state.design.font.size.body = value + 'px';
            this.generatePreview();
        });
        
        elements.weightButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.weight-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.design.font.weight = btn.getAttribute('data-weight');
                this.generatePreview();
            });
        });
        
        // Background
        elements.bgTypeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.getAttribute('data-type');
                this.switchBackgroundType(type);
            });
        });
        
        elements.gradientPresets.forEach(preset => {
            preset.addEventListener('click', () => {
                document.querySelectorAll('.gradient-preset').forEach(p => p.classList.remove('active'));
                preset.classList.add('active');
                state.design.background.gradient = preset.getAttribute('data-gradient');
                this.generatePreview();
            });
        });
        
        elements.bgSolidColor?.addEventListener('change', () => {
            state.design.background.color = elements.bgSolidColor.value;
            this.generatePreview();
        });
        
        // Buttons
        document.querySelectorAll('.style-option[data-style]').forEach(option => {
            option.addEventListener('click', () => {
                if (option.closest('.button-styles')) {
                    document.querySelectorAll('.style-option[data-style]').forEach(o => o.classList.remove('active'));
                    option.classList.add('active');
                    state.design.buttons.style = option.getAttribute('data-style');
                    this.updateDesignPreview();
                    this.generatePreview();
                }
            });
        });
        
        elements.hoverEffect?.addEventListener('change', () => {
            state.design.buttons.hoverEffect = elements.hoverEffect.checked;
            this.generatePreview();
        });
        
        elements.shadowEffect?.addEventListener('change', () => {
            state.design.buttons.shadowEffect = elements.shadowEffect.checked;
            this.generatePreview();
        });
        
        elements.gradientEffect?.addEventListener('change', () => {
            state.design.buttons.gradientEffect = elements.gradientEffect.checked;
            this.generatePreview();
        });
        
        // Social Media
        elements.socialInputs.forEach(input => {
            input.addEventListener('input', Utils.debounce(() => {
                const platform = input.closest('.social-card').getAttribute('data-platform');
                state.social[platform] = input.value;
                this.generatePreview();
            }, 300));
        });
        
        // Analytics
        elements.exportAnalytics?.addEventListener('click', () => {
            this.exportAnalyticsData();
        });
        
        elements.resetAnalytics?.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all analytics data? This cannot be undone.')) {
                this.resetAnalytics();
            }
        });
        
        // Advanced Features
        elements.generateQr?.addEventListener('click', () => {
            this.generateQrCode();
        });
        
        elements.editCss?.addEventListener('click', () => {
            this.openCssEditor();
        });
        
        elements.mobilePreviewBtn?.addEventListener('click', () => {
            this.openMobilePreview();
        });
        
        elements.shareButton?.addEventListener('change', () => {
            state.advanced.shareButton = elements.shareButton.checked;
            this.generatePreview();
        });
        
        elements.customFooter?.addEventListener('input', Utils.debounce(() => {
            state.advanced.customFooter = elements.customFooter.value;
            this.generatePreview();
        }, 300));
        
        elements.hideLogo?.addEventListener('change', () => {
            state.advanced.hideLogo = elements.hideLogo.checked;
            this.generatePreview();
        });
        
        // Preview Section
        elements.deviceButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const device = btn.getAttribute('data-device');
                this.switchPreviewDevice(device);
            });
        });
        
        elements.refreshPreview?.addEventListener('click', () => {
            this.generatePreview();
        });
        
        elements.fullscreenPreview?.addEventListener('click', () => {
            this.openFullscreenPreview();
        });
        
        // Export Section
        elements.exportHtml?.addEventListener('click', () => {
            this.exportAsHtml();
        });
        
        elements.viewSource?.addEventListener('click', () => {
            this.viewSourceCode();
        });
        
        elements.exportJson?.addEventListener('click', () => {
            this.exportAsJson();
        });
        
        elements.importJson?.addEventListener('click', () => {
            this.importFromJson();
        });
        
        elements.generateShareLink?.addEventListener('click', () => {
            this.generateShareableLink();
        });
        
        elements.codeTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const codeType = tab.getAttribute('data-code');
                this.switchCodeTab(codeType);
            });
        });
        
        elements.copyAllCode?.addEventListener('click', () => {
            this.copyAllCode();
        });
        
        elements.downloadAllCode?.addEventListener('click', () => {
            this.downloadAllCode();
        });
        
        // Modal Close Buttons
        elements.closeQrModal?.addEventListener('click', () => {
            elements.qrModal.classList.remove('active');
        });
        
        elements.closeCssModal?.addEventListener('click', () => {
            elements.cssModal.classList.remove('active');
        });
        
        elements.closeMobileModal?.addEventListener('click', () => {
            elements.mobileModal.classList.remove('active');
        });
        
        elements.closeSourceModal?.addEventListener('click', () => {
            elements.sourceModal.classList.remove('active');
        });
        
        // CSS Editor
        elements.cancelCss?.addEventListener('click', () => {
            elements.cssModal.classList.remove('active');
        });
        
        elements.saveCss?.addEventListener('click', () => {
            this.saveCustomCss();
        });
        
        // Source Code Modal
        elements.copySource?.addEventListener('click', () => {
            this.copySourceCode();
        });
        
        elements.downloadSource?.addEventListener('click', () => {
            this.downloadSourceCode();
        });
        
        // QR Code Modal
        elements.downloadQr?.addEventListener('click', () => {
            this.downloadQrCode();
        });
        
        elements.copyQr?.addEventListener('click', () => {
            this.copyQrCode();
        });
        
        // Source Tabs
        elements.sourceTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const sourceType = tab.getAttribute('data-source');
                this.switchSourceTab(sourceType);
            });
        });
        
        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }
        });
        
        // Handle keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + S to save
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                this.saveToLocalStorage();
                Utils.showToast('Project saved locally!', 'success');
            }
            
            // Escape to close modals
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal.active').forEach(modal => {
                    modal.classList.remove('active');
                });
            }
        });
    }
    
    // Switch Between Sections
    static switchSection(sectionId) {
        // Update active state in sidebar
        elements.sectionNavItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === sectionId) {
                item.classList.add('active');
            }
        });
        
        // Update active state in mobile tabs
        elements.mobileTabButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-section') === sectionId) {
                btn.classList.add('active');
            }
        });
        
        // Show selected section
        elements.contentSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });
        
        // Special handling for specific sections
        if (sectionId === 'preview') {
            this.generatePreview();
        } else if (sectionId === 'analytics') {
            this.updateAnalyticsChart();
        } else if (sectionId === 'export') {
            this.updateCodePreview();
        }
    }
    
    // Update UI Based on State
    static updateUI() {
        // Update stats
        if (elements.totalLinks) {
            elements.totalLinks.textContent = state.links.length;
        }
        
        if (elements.totalClicks) {
            elements.totalClicks.textContent = Utils.formatNumber(state.analytics.clicks);
        }
        
        if (elements.profileViews) {
            elements.profileViews.textContent = Utils.formatNumber(state.analytics.views);
        }
        
        if (elements.activeLinks) {
            const activeCount = state.links.filter(link => link.enabled !== false).length;
            elements.activeLinks.textContent = activeCount;
        }
        
        // Update links count in sidebar
        const linksCount = document.getElementById('links-count');
        if (linksCount) {
            linksCount.textContent = state.links.length;
        }
        
        // Update design preview
        this.updateDesignPreview();
    }
    
    // Update Design Preview
    static updateDesignPreview() {
        if (!elements.designPreview) return;
        
        const previewButton = elements.designPreview.querySelector('.preview-button');
        if (!previewButton) return;
        
        // Update button style based on settings
        previewButton.style.borderRadius = state.design.buttons.style === 'pill' ? '50px' : 
                                         state.design.buttons.style === 'glass' ? '12px' : '8px';
        
        if (state.design.buttons.gradientEffect) {
            previewButton.style.background = `linear-gradient(135deg, ${state.design.colors.primary}, ${state.design.colors.secondary})`;
        } else {
            previewButton.style.background = state.design.colors.primary;
        }
        
        if (state.design.buttons.shadowEffect) {
            previewButton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            previewButton.style.boxShadow = 'none';
        }
        
        if (state.design.buttons.hoverEffect) {
            previewButton.style.transition = 'all 0.3s ease';
        }
    }
}

// ===== PROFILE MANAGEMENT =====
class ProfileManager {
    // Handle Profile Photo Upload
    static handleProfilePhotoUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        if (!file.type.startsWith('image/')) {
            Utils.showToast('Please upload an image file', 'error');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            state.profile.photo = e.target.result;
            this.updateProfilePhotoPreview();
            App.generatePreview();
            Utils.showToast('Profile photo uploaded successfully!', 'success');
        };
        reader.readAsDataURL(file);
    }
    
    // Update Profile Photo Preview
    static updateProfilePhotoPreview() {
        if (state.profile.photo && elements.profilePreview) {
            elements.profilePreview.src = state.profile.photo;
            elements.profilePreview.style.display = 'block';
            elements.profileAvatar.innerHTML = `<img src="${state.profile.photo}" alt="Profile">`;
        } else {
            elements.profilePreview.style.display = 'none';
            elements.profileAvatar.innerHTML = '<i class="fas fa-user-circle"></i>';
        }
    }
    
    // Remove Profile Photo
    static removeProfilePhoto() {
        state.profile.photo = null;
        elements.profilePhotoInput.value = '';
        this.updateProfilePhotoPreview();
        App.generatePreview();
        Utils.showToast('Profile photo removed', 'warning');
    }
}

// ===== LINKS MANAGEMENT =====
class LinksManager {
    // Open Link Modal
    static openLinkModal(linkId = null) {
        elements.linkModal.classList.add('active');
        state.isEditing = !!linkId;
        state.currentLink = linkId;
        
        if (linkId) {
            // Editing existing link
            const link = state.links.find(l => l.id === linkId);
            if (link) {
                elements.linkTitle.value = link.title || '';
                elements.linkUrl.value = link.url || '';
                elements.linkDescription.value = link.description || '';
                elements.linkEnabled.checked = link.enabled !== false;
                elements.scheduleToggle.checked = !!link.schedule;
                
                if (link.schedule) {
                    elements.startTime.value = link.schedule.start || '';
                    elements.endTime.value = link.schedule.end || '';
                }
                
                // Update icon
                if (link.icon) {
                    elements.selectedIcon.innerHTML = `<i class="${link.icon}"></i>`;
                }
            }
        } else {
            // Adding new link
            elements.linkTitle.value = '';
            elements.linkUrl.value = '';
            elements.linkDescription.value = '';
            elements.linkEnabled.checked = true;
            elements.scheduleToggle.checked = false;
            elements.startTime.value = '';
            elements.endTime.value = '';
            elements.selectedIcon.innerHTML = '<i class="fas fa-link"></i>';
        }
    }
    
    // Close Link Modal
    static closeLinkModal() {
        elements.linkModal.classList.remove('active');
        state.isEditing = false;
        state.currentLink = null;
    }
    
    // Save Link
    static saveLink() {
        const title = elements.linkTitle.value.trim();
        const url = elements.linkUrl.value.trim();
        const description = elements.linkDescription.value.trim();
        const enabled = elements.linkEnabled.checked;
        const hasSchedule = elements.scheduleToggle.checked;
        const startTime = elements.startTime.value;
        const endTime = elements.endTime.value;
        const icon = elements.selectedIcon.querySelector('i').className;
        
        // Validation
        if (!title) {
            Utils.showToast('Please enter a link title', 'error');
            return;
        }
        
        if (!url) {
            Utils.showToast('Please enter a URL', 'error');
            return;
        }
        
        if (!Utils.isValidUrl(url) && !url.startsWith('mailto:') && !url.startsWith('tel:')) {
            Utils.showToast('Please enter a valid URL', 'error');
            return;
        }
        
        const linkData = {
            id: state.currentLink || Utils.generateId(),
            title,
            url: url.startsWith('http') ? url : `https://${url}`,
            description,
            enabled,
            icon,
            date: new Date().toISOString(),
            clicks: 0
        };
        
        if (hasSchedule && startTime && endTime) {
            linkData.schedule = { start: startTime, end: endTime };
        }
        
        if (state.isEditing) {
            // Update existing link
            const index = state.links.findIndex(l => l.id === state.currentLink);
            if (index !== -1) {
                state.links[index] = { ...state.links[index], ...linkData };
                Utils.showToast('Link updated successfully!', 'success');
            }
        } else {
            // Add new link
            state.links.unshift(linkData);
            Utils.showToast('Link added successfully!', 'success');
        }
        
        this.closeLinkModal();
        this.renderLinks();
        App.updateUI();
        App.generatePreview();
    }
    
    // Delete Link
    static deleteLink(linkId) {
        if (confirm('Are you sure you want to delete this link?')) {
            state.links = state.links.filter(link => link.id !== linkId);
            this.renderLinks();
            App.updateUI();
            App.generatePreview();
            Utils.showToast('Link deleted', 'warning');
        }
    }
    
    // Toggle Link Status
    static toggleLinkStatus(linkId) {
        const link = state.links.find(l => l.id === linkId);
        if (link) {
            link.enabled = !link.enabled;
            this.renderLinks();
            App.generatePreview();
            Utils.showToast(`Link ${link.enabled ? 'enabled' : 'disabled'}`, 'info');
        }
    }
    
    // Pin/Unpin Link
    static togglePinLink(linkId) {
        const link = state.links.find(l => l.id === linkId);
        if (link) {
            link.pinned = !link.pinned;
            if (state.autoSort) {
                this.sortLinks();
            }
            this.renderLinks();
            Utils.showToast(`Link ${link.pinned ? 'pinned' : 'unpinned'}`, 'info');
        }
    }
    
    // Highlight/Unhighlight Link
    static toggleHighlightLink(linkId) {
        const link = state.links.find(l => l.id === linkId);
        if (link) {
            link.highlighted = !link.highlighted;
            this.renderLinks();
            Utils.showToast(`Link ${link.highlighted ? 'highlighted' : 'unhighlighted'}`, 'info');
        }
    }
    
    // Move Link Up
    static moveLinkUp(linkId) {
        const index = state.links.findIndex(l => l.id === linkId);
        if (index > 0) {
            [state.links[index], state.links[index - 1]] = [state.links[index - 1], state.links[index]];
            this.renderLinks();
            App.generatePreview();
        }
    }
    
    // Move Link Down
    static moveLinkDown(linkId) {
        const index = state.links.findIndex(l => l.id === linkId);
        if (index < state.links.length - 1) {
            [state.links[index], state.links[index + 1]] = [state.links[index + 1], state.links[index]];
            this.renderLinks();
            App.generatePreview();
        }
    }
    
    // Sort Links (pinned first, then by date)
    static sortLinks() {
        state.links.sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return new Date(b.date) - new Date(a.date);
        });
    }
    
    // Filter Links by Search Query
    static filterLinks(query) {
        const allLinks = document.querySelectorAll('.link-item');
        const searchTerm = query.toLowerCase();
        
        allLinks.forEach(link => {
            const title = link.querySelector('.link-title').textContent.toLowerCase();
            const url = link.querySelector('.link-url').textContent.toLowerCase();
            const description = link.querySelector('.link-description')?.textContent.toLowerCase() || '';
            
            if (title.includes(searchTerm) || url.includes(searchTerm) || description.includes(searchTerm)) {
                link.style.display = '';
            } else {
                link.style.display = 'none';
            }
        });
    }
    
    // Create Folder
    static createFolder() {
        const folderName = prompt('Enter folder name:');
        if (!folderName) return;
        
        const folder = {
            id: Utils.generateId(),
            type: 'folder',
            title: folderName,
            links: [],
            date: new Date().toISOString()
        };
        
        state.links.unshift(folder);
        this.renderLinks();
        App.updateUI();
        Utils.showToast('Folder created!', 'success');
    }
    
    // Render Links List
    static renderLinks() {
        if (!elements.linksList) return;
        
        elements.linksList.innerHTML = '';
        
        if (state.links.length === 0) {
            elements.linksList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-link fa-3x"></i>
                    <h4>No Links Yet</h4>
                    <p>Add your first link to get started!</p>
                    <button class="btn-primary" id="add-first-link">
                        <i class="fas fa-plus"></i> Add First Link
                    </button>
                </div>
            `;
            
            document.getElementById('add-first-link')?.addEventListener('click', () => {
                this.openLinkModal();
            });
            return;
        }
        
        state.links.forEach(link => {
            if (link.type === 'folder') {
                this.renderFolder(link);
            } else {
                this.renderLinkItem(link);
            }
        });
        
        // Also update recent links
        this.renderRecentLinks();
    }
    
    // Render Link Item
    static renderLinkItem(link) {
        const linkElement = document.createElement('div');
        linkElement.className = `link-item ${link.pinned ? 'pinned' : ''} ${link.highlighted ? 'highlighted' : ''}`;
        linkElement.innerHTML = `
            <div class="link-header">
                <div class="link-title">
                    <i class="${link.icon || 'fas fa-link'} link-icon"></i>
                    ${link.title}
                </div>
                <div class="link-status ${link.enabled === false ? 'inactive' : 'active'}">
                    ${link.enabled === false ? 'Disabled' : 'Active'}
                </div>
            </div>
            <div class="link-url">${link.url}</div>
            ${link.description ? `<div class="link-description">${link.description}</div>` : ''}
            <div class="link-meta">
                <span><i class="fas fa-calendar"></i> ${new Date(link.date).toLocaleDateString()}</span>
                <span><i class="fas fa-mouse-pointer"></i> ${link.clicks || 0} clicks</span>
                ${link.schedule ? `<span><i class="fas fa-clock"></i> ${link.schedule.start} - ${link.schedule.end}</span>` : ''}
            </div>
            <div class="link-actions">
                <button class="link-btn edit" data-id="${link.id}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="link-btn delete" data-id="${link.id}">
                    <i class="fas fa-trash"></i> Delete
                </button>
                <button class="link-btn pin" data-id="${link.id}">
                    <i class="fas fa-thumbtack"></i> ${link.pinned ? 'Unpin' : 'Pin'}
                </button>
                <button class="link-btn highlight" data-id="${link.id}">
                    <i class="fas fa-star"></i> ${link.highlighted ? 'Unhighlight' : 'Highlight'}
                </button>
                <button class="link-btn move-up" data-id="${link.id}">
                    <i class="fas fa-arrow-up"></i> Up
                </button>
                <button class="link-btn move-down" data-id="${link.id}">
                    <i class="fas fa-arrow-down"></i> Down
                </button>
            </div>
        `;
        
        elements.linksList.appendChild(linkElement);
        
        // Add event listeners to buttons
        linkElement.querySelector('.edit').addEventListener('click', () => {
            this.openLinkModal(link.id);
        });
        
        linkElement.querySelector('.delete').addEventListener('click', () => {
            this.deleteLink(link.id);
        });
        
        linkElement.querySelector('.pin').addEventListener('click', () => {
            this.togglePinLink(link.id);
        });
        
        linkElement.querySelector('.highlight').addEventListener('click', () => {
            this.toggleHighlightLink(link.id);
        });
        
        linkElement.querySelector('.move-up').addEventListener('click', () => {
            this.moveLinkUp(link.id);
        });
        
        linkElement.querySelector('.move-down').addEventListener('click', () => {
            this.moveLinkDown(link.id);
        });
    }
    
    // Render Folder
    static renderFolder(folder) {
        const folderElement = document.createElement('div');
        folderElement.className = 'link-item folder';
        folderElement.innerHTML = `
            <div class="link-header">
                <div class="link-title">
                    <i class="fas fa-folder link-icon"></i>
                    ${folder.title}
                </div>
                <div class="link-status">
                    ${folder.links.length} links
                </div>
            </div>
            <div class="folder-content">
                ${folder.links.length === 0 ? 
                    '<p class="empty-folder">No links in this folder</p>' : 
                    folder.links.map(link => `
                        <div class="folder-link">
                            <i class="${link.icon || 'fas fa-link'}"></i>
                            <span>${link.title}</span>
                        </div>
                    `).join('')
                }
            </div>
            <div class="link-actions">
                <button class="link-btn edit" data-id="${folder.id}">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="link-btn delete" data-id="${folder.id}">
                    <i class="fas fa-trash"></i> Delete
                </button>
                <button class="link-btn add" data-id="${folder.id}">
                    <i class="fas fa-plus"></i> Add Link
                </button>
            </div>
        `;
        
        elements.linksList.appendChild(folderElement);
    }
    
    // Render Recent Links
    static renderRecentLinks() {
        if (!elements.recentLinksList) return;
        
        const recentLinks = [...state.links]
            .filter(link => link.type !== 'folder')
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 5);
        
        if (recentLinks.length === 0) {
            elements.recentLinksList.innerHTML = '<p class="empty-state">No links yet</p>';
            return;
        }
        
        elements.recentLinksList.innerHTML = recentLinks.map(link => `
            <div class="recent-link">
                <i class="${link.icon || 'fas fa-link'}"></i>
                <div class="recent-link-info">
                    <div class="recent-link-title">${link.title}</div>
                    <div class="recent-link-url">${link.url}</div>
                </div>
                <div class="recent-link-clicks">${link.clicks || 0} clicks</div>
            </div>
        `).join('');
    }
    
    // Import Links from JSON
    static importLinksFromJson() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (Array.isArray(data)) {
                        state.links = data;
                        this.renderLinks();
                        App.updateUI();
                        App.generatePreview();
                        Utils.showToast(`${data.length} links imported successfully!`, 'success');
                    } else {
                        Utils.showToast('Invalid JSON format', 'error');
                    }
                } catch (error) {
                    Utils.showToast('Error reading JSON file', 'error');
                }
            };
            reader.readAsText(file);
        };
        
        input.click();
    }
    
    // Export Links to JSON
    static exportLinksToJson() {
        const data = JSON.stringify(state.links, null, 2);
        const filename = `linktree-links-${new Date().toISOString().split('T')[0]}.json`;
        Utils.downloadFile(data, filename, 'application/json');
        Utils.showToast('Links exported successfully!', 'success');
    }
}

// ===== DESIGN CUSTOMIZATION =====
class DesignManager {
    // Switch Design Tab
    static switchDesignTab(tabId) {
        // Update active tab button
        elements.designTabBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active');
            }
        });
        
        // Show selected tab pane
        elements.designTabPanes.forEach(pane => {
            pane.classList.remove('active');
            if (pane.id === `${tabId}-tab`) {
                pane.classList.add('active');
            }
        });
    }
    
    // Apply Color Preset
    static applyColorPreset(presetName) {
        const presets = {
            default: {
                primary: '#667eea',
                secondary: '#764ba2',
                text: '#ffffff',
                background: '#0f172a'
            },
            dark: {
                primary: '#1a1a2e',
                secondary: '#16213e',
                text: '#ffffff',
                background: '#0f172a'
            },
            light: {
                primary: '#f8f9fa',
                secondary: '#e9ecef',
                text: '#212529',
                background: '#ffffff'
            },
            neon: {
                primary: '#ff00ff',
                secondary: '#00ffff',
                text: '#ffffff',
                background: '#000000'
            }
        };
        
        if (presets[presetName]) {
            state.design.colors = { ...presets[presetName] };
            
            // Update color pickers
            if (elements.primaryColor) elements.primaryColor.value = state.design.colors.primary;
            if (elements.secondaryColor) elements.secondaryColor.value = state.design.colors.secondary;
            if (elements.textColor) elements.textColor.value = state.design.colors.text;
            if (elements.bgColor) elements.bgColor.value = state.design.colors.background;
            
            App.generatePreview();
            Utils.showToast(`${presetName} color preset applied`, 'success');
        }
    }
    
    // Apply Custom Colors
    static applyCustomColors() {
        state.design.colors.primary = elements.primaryColor.value;
        state.design.colors.secondary = elements.secondaryColor.value;
        state.design.colors.text = elements.textColor.value;
        state.design.colors.background = elements.bgColor.value;
        
        App.generatePreview();
        Utils.showToast('Custom colors applied!', 'success');
    }
    
    // Switch Background Type
    static switchBackgroundType(type) {
        state.design.background.type = type;
        
        // Update active button
        elements.bgTypeButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-type') === type) {
                btn.classList.add('active');
            }
        });
        
        // Show corresponding options
        const bgOptions = [elements.bgColorOptions, elements.bgGradientOptions, elements.bgImageOptions];
        bgOptions.forEach(option => {
            option?.classList.remove('active');
        });
        
        if (type === 'color' && elements.bgColorOptions) {
            elements.bgColorOptions.classList.add('active');
        } else if (type === 'gradient' && elements.bgGradientOptions) {
            elements.bgGradientOptions.classList.add('active');
        } else if (type === 'image' && elements.bgImageOptions) {
            elements.bgImageOptions.classList.add('active');
        }
        
        App.generatePreview();
    }
}

// ===== ANALYTICS =====
class AnalyticsManager {
    // Initialize Analytics
    static init() {
        this.updateAnalyticsDisplay();
        this.updateTopLinks();
    }
    
    // Update Analytics Display
    static updateAnalyticsDisplay() {
        if (elements.totalViews) {
            elements.totalViews.textContent = Utils.formatNumber(state.analytics.views);
        }
        
        if (elements.totalClicksAnalytics) {
            elements.totalClicksAnalytics.textContent = Utils.formatNumber(state.analytics.clicks);
        }
        
        if (elements.uniqueVisitors) {
            elements.uniqueVisitors.textContent = Utils.formatNumber(state.analytics.uniqueVisitors);
        }
        
        if (elements.clickRate) {
            elements.clickRate.textContent = state.analytics.clickRate;
        }
    }
    
    // Update Analytics Chart
    static updateAnalyticsChart() {
        if (!elements.clicksChart || !window.Chart) return;
        
        const ctx = elements.clicksChart.getContext('2d');
        
        // Destroy existing chart if it exists
        if (elements.clicksChart.chart) {
            elements.clicksChart.chart.destroy();
        }
        
        // Create new chart
        elements.clicksChart.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Clicks',
                    data: state.analytics.clicksData,
                    borderColor: state.design.colors.primary,
                    backgroundColor: `${state.design.colors.primary}20`,
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    }
                }
            }
        });
    }
    
    // Update Top Links
    static updateTopLinks() {
        if (!elements.topLinksList) return;
        
        const topLinks = [...state.links]
            .filter(link => link.type !== 'folder')
            .sort((a, b) => (b.clicks || 0) - (a.clicks || 0))
            .slice(0, 5);
        
        if (topLinks.length === 0) {
            elements.topLinksList.innerHTML = '<p class="empty-state">No clicks yet</p>';
            return;
        }
        
        elements.topLinksList.innerHTML = topLinks.map((link, index) => `
            <div class="top-link">
                <div class="top-link-rank">${index + 1}</div>
                <div class="top-link-info">
                    <div class="top-link-title">${link.title}</div>
                    <div class="top-link-url">${link.url}</div>
                </div>
                <div class="top-link-stats">
                    <div class="top-link-clicks">${link.clicks || 0} clicks</div>
                    <div class="top-link-percentage">${Math.round((link.clicks || 0) / state.analytics.clicks * 100) || 0}%</div>
                </div>
            </div>
        `).join('');
    }
    
    // Track Click (Simulated for demo)
    static trackClick(linkId) {
        const link = state.links.find(l => l.id === linkId);
        if (link) {
            link.clicks = (link.clicks || 0) + 1;
            state.analytics.clicks++;
            state.analytics.views++;
            
            // Update click rate
            state.analytics.clickRate = `${Math.round((state.analytics.clicks / state.analytics.views) * 100)}%`;
            
            // Update clicks data (simulate daily data)
            const today = new Date().getDay();
            state.analytics.clicksData[today] = (state.analytics.clicksData[today] || 0) + 1;
            
            this.updateAnalyticsDisplay();
            this.updateTopLinks();
            this.updateAnalyticsChart();
            
            // Save to localStorage
            App.saveToLocalStorage();
        }
    }
    
    // Export Analytics Data
    static exportAnalyticsData() {
        const data = {
            analytics: state.analytics,
            links: state.links.map(link => ({
                title: link.title,
                url: link.url,
                clicks: link.clicks || 0,
                enabled: link.enabled
            })),
            exportDate: new Date().toISOString()
        };
        
        const json = JSON.stringify(data, null, 2);
        const filename = `linktree-analytics-${new Date().toISOString().split('T')[0]}.json`;
        Utils.downloadFile(json, filename, 'application/json');
        Utils.showToast('Analytics data exported!', 'success');
    }
    
    // Reset Analytics
    static resetAnalytics() {
        state.analytics = {
            views: 0,
            clicks: 0,
            uniqueVisitors: 0,
            clickRate: '0%',
            clicksData: [0, 0, 0, 0, 0, 0, 0],
            topLinks: []
        };
        
        // Reset link clicks
        state.links.forEach(link => {
            link.clicks = 0;
        });
        
        this.updateAnalyticsDisplay();
        this.updateTopLinks();
        this.updateAnalyticsChart();
        App.updateUI();
        
        Utils.showToast('Analytics data reset successfully!', 'success');
    }
}

// ===== PREVIEW & EXPORT =====
class PreviewManager {
    // Generate Live Preview
    static generatePreview() {
        if (!elements.livePreview) return;
        
        const startTime = Date.now();
        
        // Generate HTML for preview
        const html = this.generateHtml();
        const doc = elements.livePreview.contentDocument || elements.livePreview.contentWindow.document;
        
        doc.open();
        doc.write(html);
        doc.close();
        
        // Add click tracking to links
        const links = doc.querySelectorAll('a');
        links.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const linkId = state.links[index]?.id;
                if (linkId) {
                    AnalyticsManager.trackClick(linkId);
                    // In real implementation, this would redirect
                    // window.open(link.href, '_blank');
                }
            });
        });
        
        // Update preview stats
        const endTime = Date.now();
        const loadTime = endTime - startTime;
        const pageSize = new Blob([html]).size / 1024; // KB
        
        if (elements.loadTime) {
            elements.loadTime.textContent = `${loadTime}ms`;
        }
        
        if (elements.pageSize) {
            elements.pageSize.textContent = `${pageSize.toFixed(2)} KB`;
        }
        
        // Calculate mobile score (simulated)
        const mobileScore = Math.min(100, 100 - (pageSize * 0.1));
        if (elements.mobileScore) {
            elements.mobileScore.textContent = `${mobileScore.toFixed(0)}%`;
        }
        
        // Calculate SEO score (simulated)
        const seoScore = state.profile.name && state.profile.bio && state.links.length > 0 ? 95 : 70;
        if (elements.seoScore) {
            elements.seoScore.textContent = `${seoScore}%`;
        }
    }
    
    // Generate HTML for Export
    static generateHtml() {
        const { profile, links, design, social, advanced } = state;
        
        // Filter enabled links
        const enabledLinks = links.filter(link => link.enabled !== false && link.type !== 'folder');
        
        // Generate social icons HTML
        const socialIcons = Object.entries(social)
            .filter(([_, url]) => url.trim())
            .map(([platform, url]) => {
                const icons = {
                    instagram: 'fab fa-instagram',
                    tiktok: 'fab fa-tiktok',
                    youtube: 'fab fa-youtube',
                    twitter: 'fab fa-twitter',
                    facebook: 'fab fa-facebook',
                    whatsapp: 'fab fa-whatsapp',
                    telegram: 'fab fa-telegram',
                    discord: 'fab fa-discord',
                    snapchat: 'fab fa-snapchat',
                    pinterest: 'fab fa-pinterest',
                    linkedin: 'fab fa-linkedin',
                    github: 'fab fa-github',
                    spotify: 'fab fa-spotify',
                    email: 'fas fa-envelope',
                    website: 'fas fa-globe'
                };
                
                return `
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-icon ${platform}" title="${platform}">
                        <i class="${icons[platform]}"></i>
                    </a>
                `;
            }).join('');
        
        // Generate links HTML
        const linksHtml = enabledLinks.map(link => `
            <a href="${link.url}" class="link ${link.highlighted ? 'highlighted' : ''} ${link.pinned ? 'pinned' : ''}" 
               target="_blank" rel="noopener noreferrer">
                <div class="link-content">
                    <i class="${link.icon || 'fas fa-link'}"></i>
                    <div class="link-text">
                        <div class="link-title">${link.title}</div>
                        ${link.description ? `<div class="link-description">${link.description}</div>` : ''}
                    </div>
                </div>
                <i class="fas fa-external-link-alt link-arrow"></i>
            </a>
        `).join('');
        
        // Get background style
        let backgroundStyle = '';
        switch (design.background.type) {
            case 'color':
                backgroundStyle = `background: ${design.background.color};`;
                break;
            case 'gradient':
                const gradients = {
                    default: `linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary})`,
                    sunset: 'linear-gradient(135deg, #ff6b6b, #ffd166)',
                    ocean: 'linear-gradient(135deg, #2193b0, #6dd5ed)',
                    forest: 'linear-gradient(135deg, #1e9600, #fff200)'
                };
                backgroundStyle = `background: ${gradients[design.background.gradient] || gradients.default};`;
                break;
            case 'image':
                if (design.background.image) {
                    backgroundStyle = `background: url('${design.background.image}') center/cover no-repeat;`;
                }
                break;
        }
        
        // Get button style
        let buttonStyle = '';
        switch (design.buttons.style) {
            case 'pill':
                buttonStyle = 'border-radius: 50px;';
                break;
            case 'glass':
                buttonStyle = `
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                `;
                break;
            case 'flat':
                buttonStyle = 'border-radius: 0;';
                break;
            default: // rounded
                buttonStyle = 'border-radius: 8px;';
        }
        
        // Add button effects
        if (design.buttons.gradientEffect) {
            buttonStyle += `background: linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary});`;
        } else {
            buttonStyle += `background: ${design.colors.primary};`;
        }
        
        if (design.buttons.shadowEffect) {
            buttonStyle += 'box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);';
        }
        
        if (design.buttons.hoverEffect) {
            buttonStyle += 'transition: all 0.3s ease;';
        }
        
        // Get header style
        let headerStyle = '';
        switch (profile.headerStyle) {
            case 'modern':
                headerStyle = `
                    padding: 3rem 2rem;
                    ${backgroundStyle}
                `;
                break;
            case 'glass':
                headerStyle = `
                    padding: 3rem 2rem;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                `;
                break;
            case 'gradient':
                headerStyle = `
                    padding: 3rem 2rem;
                    background: linear-gradient(135deg, ${design.colors.primary}, ${design.colors.secondary});
                `;
                break;
            default: // minimal
                headerStyle = 'padding: 2rem 1rem;';
        }
        
        // Generate HTML
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${advanced.metaTitle || profile.name + ' | LinkTree'}</title>
    <meta name="description" content="${advanced.metaDescription || profile.bio.substring(0, 160)}">
    ${advanced.favicon ? `<link rel="icon" href="${advanced.favicon}">` : ''}
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=${design.font.family.replace(' ', '+')}:wght@${design.font.weight}&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: '${design.font.family}', sans-serif;
            background: ${design.colors.background};
            color: ${design.colors.text};
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
        }
        
        .container {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
        }
        
        .header {
            text-align: center;
            ${headerStyle}
            border-radius: ${profile.headerStyle === 'minimal' ? '0' : '16px 16px 0 0'};
            margin-bottom: ${profile.headerStyle === 'minimal' ? '2rem' : '0'};
        }
        
        .profile-photo {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 1.5rem;
            border: 4px solid ${design.colors.primary};
        }
        
        .profile-photo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .profile-name {
            font-size: ${design.font.size.title};
            font-weight: ${design.font.weight};
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        
        .verified-badge {
            color: #1DA1F2;
            font-size: 1.2em;
        }
        
        .profile-bio {
            font-size: ${design.font.size.body};
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 2rem;
            white-space: pre-line;
        }
        
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        
        .social-icon {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: white;
            text-decoration: none;
            transition: transform 0.3s ease;
        }
        
        .social-icon:hover {
            transform: translateY(-3px);
        }
        
        .links {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.25rem 1.5rem;
            text-decoration: none;
            color: white;
            ${buttonStyle}
        }
        
        .link:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }
        
        .link.highlighted {
            border: 2px solid ${design.colors.primary};
        }
        
        .link.pinned {
            border-left: 4px solid gold;
        }
        
        .link-content {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex: 1;
        }
        
        .link-content i {
            font-size: 1.5rem;
        }
        
        .link-text {
            flex: 1;
        }
        
        .link-title {
            font-weight: 600;
            font-size: 1.1rem;
            margin-bottom: 0.25rem;
        }
        
        .link-description {
            font-size: 0.9rem;
            opacity: 0.8;
        }
        
        .link-arrow {
            opacity: 0.7;
        }
        
        .footer {
            text-align: center;
            padding: 1.5rem;
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.9rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            width: 100%;
        }
        
        ${!advanced.hideLogo ? `
        .footer::before {
            content: '🌲 LinkTree';
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.8);
        }
        ` : ''}
        
        ${advanced.shareButton ? `
        .share-button {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: ${design.colors.primary};
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            z-index: 100;
        }
        
        .share-button:hover {
            transform: scale(1.1);
        }
        ` : ''}
        
        /* Responsive Design */
        @media (max-width: 480px) {
            .profile-photo {
                width: 100px;
                height: 100px;
            }
            
            .profile-name {
                font-size: calc(${design.font.size.title} * 0.8);
            }
            
            .link {
                padding: 1rem 1.25rem;
            }
            
            ${advanced.shareButton ? `
            .share-button {
                bottom: 1rem;
                right: 1rem;
            }
            ` : ''}
        }
        
        /* Custom CSS */
        ${advanced.customCSS}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            ${profile.photo ? `
            <div class="profile-photo">
                <img src="${profile.photo}" alt="${profile.name}">
            </div>
            ` : `
            <div class="profile-photo" style="background: ${design.colors.primary}; display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-user fa-3x" style="color: white;"></i>
            </div>
            `}
            
            <h1 class="profile-name">
                ${profile.name}
                ${profile.verified ? '<i class="fas fa-check-circle verified-badge"></i>' : ''}
            </h1>
            
            <div class="profile-bio">${profile.bio.replace(/\n/g, '<br>')}</div>
            
            ${socialIcons ? `
            <div class="social-icons">
                ${socialIcons}
            </div>
            ` : ''}
        </div>
        
        ${linksHtml ? `
        <div class="links">
            ${linksHtml}
        </div>
        ` : `
        <div class="empty-state" style="text-align: center; padding: 3rem 1rem; opacity: 0.7;">
            <i class="fas fa-link fa-3x" style="margin-bottom: 1rem;"></i>
            <h3>No Links Yet</h3>
            <p>Check back soon for updates!</p>
        </div>
        `}
        
        <div class="footer">
            ${advanced.customFooter || '© 2024 LinkTree'}
        </div>
    </div>
    
    ${advanced.shareButton ? `
    <div class="share-button" onclick="sharePage()">
        <i class="fas fa-share-alt"></i>
    </div>
    ` : ''}
    
    <script>
        // Share functionality
        function sharePage() {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: window.location.href
                });
            } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        }
        
        // Add click animations
        document.querySelectorAll('.link').forEach(link => {
            link.addEventListener('click', function(e) {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
        
        // Add parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 20 - 10;
            const y = (e.clientY / window.innerHeight) * 20 - 10;
            document.querySelector('.container').style.transform = 
                \`perspective(1000px) rotateY(\${x}deg) rotateX(\${-y}deg)\`;
        });
    </script>
</body>
</html>
        `;
    }
    
    // Switch Preview Device
    static switchPreviewDevice(device) {
        if (!elements.previewDevice) return;
        
        elements.deviceButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-device') === device) {
                btn.classList.add('active');
            }
        });
        
        switch (device) {
            case 'tablet':
                elements.previewDevice.style.maxWidth = '768px';
                elements.previewDevice.style.height = '1024px';
                break;
            case 'mobile':
                elements.previewDevice.style.maxWidth = '375px';
                elements.previewDevice.style.height = '667px';
                break;
            default: // desktop
                elements.previewDevice.style.maxWidth = '100%';
                elements.previewDevice.style.height = '600px';
        }
    }
    
    // Open Fullscreen Preview
    static openFullscreenPreview() {
        const html = this.generateHtml();
        const newWindow = window.open('', '_blank');
        newWindow.document.write(html);
        newWindow.document.close();
    }
    
    // Open Mobile Preview
    static openMobilePreview() {
        elements.mobileModal.classList.add('active');
        
        // Generate HTML for mobile preview
        const html = this.generateHtml();
        const doc = elements.mobilePreviewFrame.contentDocument || 
                   elements.mobilePreviewFrame.contentWindow.document;
        
        doc.open();
        doc.write(html);
        doc.close();
    }
    
    // Generate QR Code
    static generateQrCode() {
        elements.qrModal.classList.add('active');
        
        // Generate a demo URL (in real implementation, this would be the actual URL)
        const demoUrl = 'https://linktree.example.com/' + state.profile.name.toLowerCase().replace(/\s+/g, '-');
        
        // Clear previous QR code
        elements.qrCode.innerHTML = '';
        
        // Generate QR code
        QRCode.toCanvas(elements.qrCode, demoUrl, {
            width: 200,
            height: 200,
            color: {
                dark: state.design.colors.primary,
                light: '#ffffff'
            }
        }, (error) => {
            if (error) {
                Utils.showToast('Error generating QR code', 'error');
                console.error(error);
            }
        });
    }
    
    // Download QR Code
    static downloadQrCode() {
        const canvas = elements.qrCode.querySelector('canvas');
        if (!canvas) return;
        
        const link = document.createElement('a');
        link.download = `qrcode-${state.profile.name.toLowerCase().replace(/\s+/g, '-')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        Utils.showToast('QR code downloaded!', 'success');
    }
    
    // Copy QR Code
    static copyQrCode() {
        const canvas = elements.qrCode.querySelector('canvas');
        if (!canvas) return;
        
        canvas.toBlob((blob) => {
            const item = new ClipboardItem({ 'image/png': blob });
            navigator.clipboard.write([item])
                .then(() => Utils.showToast('QR code copied to clipboard!', 'success'))
                .catch(() => Utils.showToast('Failed to copy QR code', 'error'));
        });
    }
}

// ===== EXPORT MANAGER =====
class ExportManager {
    // Update Code Preview
    static updateCodePreview() {
        const html = PreviewManager.generateHtml();
        
        // Extract CSS from HTML
        const cssMatch = html.match(/<style>([\s\S]*?)<\/style>/);
        const css = cssMatch ? cssMatch[1] : '';
        
        // Extract JS from HTML
        const jsMatch = html.match(/<script>([\s\S]*?)<\/script>/);
        const js = jsMatch ? jsMatch[1] : '';
        
        // Clean HTML (remove style and script tags)
        const cleanHtml = html
            .replace(/<style>[\s\S]*?<\/style>/g, '')
            .replace(/<script>[\s\S]*?<\/script>/g, '');
        
        // Update code displays
        if (elements.htmlCode) {
            elements.htmlCode.querySelector('code').textContent = cleanHtml;
        }
        
        if (elements.cssCode) {
            elements.cssCode.querySelector('code').textContent = css;
        }
        
        if (elements.jsCode) {
            elements.jsCode.querySelector('code').textContent = js;
        }
        
        // Also update source modal
        if (elements.sourceHtml) {
            elements.sourceHtml.querySelector('code').textContent = cleanHtml;
        }
        
        if (elements.sourceCss) {
            elements.sourceCss.querySelector('code').textContent = css;
        }
        
        if (elements.sourceJs) {
            elements.sourceJs.querySelector('code').textContent = js;
        }
    }
    
    // Switch Code Tab
    static switchCodeTab(codeType) {
        elements.codeTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-code') === codeType) {
                tab.classList.add('active');
            }
        });
        
        const codeElements = [elements.htmlCode, elements.cssCode, elements.jsCode];
        codeElements.forEach(el => el?.classList.remove('active'));
        
        if (codeType === 'html' && elements.htmlCode) {
            elements.htmlCode.classList.add('active');
        } else if (codeType === 'css' && elements.cssCode) {
            elements.cssCode.classList.add('active');
        } else if (codeType === 'js' && elements.jsCode) {
            elements.jsCode.classList.add('active');
        }
    }
    
    // Switch Source Tab
    static switchSourceTab(sourceType) {
        elements.sourceTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('data-source') === sourceType) {
                tab.classList.add('active');
            }
        });
        
        const sourceElements = [elements.sourceHtml, elements.sourceCss, elements.sourceJs];
        sourceElements.forEach(el => el?.classList.remove('active'));
        
        if (sourceType === 'html' && elements.sourceHtml) {
            elements.sourceHtml.classList.add('active');
        } else if (sourceType === 'css' && elements.sourceCss) {
            elements.sourceCss.classList.add('active');
        } else if (sourceType === 'js' && elements.sourceJs) {
            elements.sourceJs.classList.add('active');
        }
    }
    
    // Copy All Code
    static copyAllCode() {
        const html = elements.htmlCode?.querySelector('code').textContent || '';
        const css = elements.cssCode?.querySelector('code').textContent || '';
        const js = elements.jsCode?.querySelector('code').textContent || '';
        
        const allCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${state.profile.name} | LinkTree</title>
    <style>${css}</style>
</head>
<body>
${html}
<script>${js}</script>
</body>
</html>`;
        
        Utils.copyToClipboard(allCode)
            .then(() => Utils.showToast('All code copied to clipboard!', 'success'));
    }
    
    // Download All Code
    static downloadAllCode() {
        const html = PreviewManager.generateHtml();
        const filename = `linktree-${state.profile.name.toLowerCase().replace(/\s+/g, '-')}.html`;
        Utils.downloadFile(html, filename, 'text/html');
        Utils.showToast('HTML file downloaded!', 'success');
    }
    
    // Export as HTML
    static exportAsHtml() {
        const html = PreviewManager.generateHtml();
        const filename = `linktree-${state.profile.name.toLowerCase().replace(/\s+/g, '-')}.html`;
        Utils.downloadFile(html, filename, 'text/html');
        Utils.showToast('HTML file exported successfully!', 'success');
    }
    
    // View Source Code
    static viewSourceCode() {
        this.updateCodePreview();
        elements.sourceModal.classList.add('active');
        this.switchSourceTab('html');
    }
    
    // Copy Source Code
    static copySourceCode() {
        const activeTab = document.querySelector('.source-tab.active');
        if (!activeTab) return;
        
        const sourceType = activeTab.getAttribute('data-source');
        let code = '';
        
        if (sourceType === 'html') {
            code = elements.sourceHtml?.querySelector('code').textContent || '';
        } else if (sourceType === 'css') {
            code = elements.sourceCss?.querySelector('code').textContent || '';
        } else if (sourceType === 'js') {
            code = elements.sourceJs?.querySelector('code').textContent || '';
        }
        
        Utils.copyToClipboard(code)
            .then(() => Utils.showToast(`${sourceType.toUpperCase()} code copied!`, 'success'));
    }
    
    // Download Source Code
    static downloadSourceCode() {
        const activeTab = document.querySelector('.source-tab.active');
        if (!activeTab) return;
        
        const sourceType = activeTab.getAttribute('data-source');
        let code = '';
        let filename = '';
        
        if (sourceType === 'html') {
            code = elements.sourceHtml?.querySelector('code').textContent || '';
            filename = `linktree-${state.profile.name.toLowerCase().replace(/\s+/g, '-')}.html`;
        } else if (sourceType === 'css') {
            code = elements.sourceCss?.querySelector('code').textContent || '';
            filename = `linktree-${state.profile.name.toLowerCase().replace(/\s+/g, '-')}.css`;
        } else if (sourceType === 'js') {
            code = elements.sourceJs?.querySelector('code').textContent || '';
            filename = `linktree-${state.profile.name.toLowerCase().replace(/\s+/g, '-')}.js`;
        }
        
        Utils.downloadFile(code, filename, 'text/plain');
        Utils.showToast(`${sourceType.toUpperCase()} file downloaded!`, 'success');
    }
    
    // Export as JSON
    static exportAsJson() {
        const exportData = {
            profile: state.profile,
            links: state.links,
            design: state.design,
            social: state.social,
            advanced: state.advanced,
            exportDate: new Date().toISOString(),
            version: '3.0.0'
        };
        
        const json = JSON.stringify(exportData, null, 2);
        const filename = `linktree-${state.profile.name.toLowerCase().replace(/\s+/g, '-')}.json`;
        Utils.downloadFile(json, filename, 'application/json');
        Utils.showToast('Project exported as JSON!', 'success');
    }
    
    // Import from JSON
    static importFromJson() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    // Validate data structure
                    if (!data.profile || !data.links) {
                        throw new Error('Invalid project file');
                    }
                    
                    // Import data
                    state.profile = { ...state.profile, ...data.profile };
                    state.links = data.links || [];
                    state.design = { ...state.design, ...data.design };
                    state.social = { ...state.social, ...data.social };
                    state.advanced = { ...state.advanced, ...data.advanced };
                    
                    // Update UI
                    ProfileManager.updateProfilePhotoPreview();
                    LinksManager.renderLinks();
                    DesignManager.applyCustomColors();
                    App.updateUI();
                    App.generatePreview();
                    
                    Utils.showToast('Project imported successfully!', 'success');
                } catch (error) {
                    console.error('Import error:', error);
                    Utils.showToast('Error importing project file', 'error');
                }
            };
            reader.readAsText(file);
        };
        
        input.click();
    }
    
    // Generate Shareable Link
    static generateShareableLink() {
        // In a real implementation, this would upload to a server and return a URL
        // For demo purposes, we'll create a data URL
        
        const exportData = {
            profile: state.profile,
            links: state.links,
            design: state.design,
            social: state.social,
            advanced: state.advanced,
            exportDate: new Date().toISOString()
        };
        
        const json = JSON.stringify(exportData);
        const dataUrl = `data:application/json;base64,${btoa(json)}`;
        
        // Copy to clipboard
        Utils.copyToClipboard(dataUrl)
            .then(() => Utils.showToast('Shareable link copied to clipboard!', 'success'))
            .catch(() => {
                // Fallback: show the data URL
                prompt('Copy this link to share:', dataUrl);
            });
    }
}

// ===== CSS EDITOR =====
class CssEditor {
    // Open CSS Editor
    static openCssEditor() {
        elements.cssModal.classList.add('active');
        elements.customCss.value = state.advanced.customCSS;
    }
    
    // Save Custom CSS
    static saveCustomCss() {
        state.advanced.customCSS = elements.customCss.value;
        elements.cssModal.classList.remove('active');
        App.generatePreview();
        Utils.showToast('Custom CSS saved!', 'success');
    }
}

// ===== LOCAL STORAGE =====
class StorageManager {
    // Save to Local Storage
    static saveToLocalStorage() {
        try {
            const saveData = {
                profile: state.profile,
                links: state.links,
                design: state.design,
                social: state.social,
                analytics: state.analytics,
                advanced: state.advanced,
                lastSave: new Date().toISOString()
            };
            
            localStorage.setItem('linktreeGodMode', JSON.stringify(saveData));
            return true;
        } catch (error) {
            console.error('Save error:', error);
            return false;
        }
    }
    
    // Load from Local Storage
    static loadFromLocalStorage() {
        try {
            const saved = localStorage.getItem('linktreeGodMode');
            if (!saved) return false;
            
            const data = JSON.parse(saved);
            
            // Load data with fallbacks
            state.profile = { ...state.profile, ...data.profile };
            state.links = data.links || [];
            state.design = { ...state.design, ...data.design };
            state.social = { ...state.social, ...data.social };
            state.analytics = { ...state.analytics, ...data.analytics };
            state.advanced = { ...state.advanced, ...data.advanced };
            
            return true;
        } catch (error) {
            console.error('Load error:', error);
            return false;
        }
    }
}

// ===== INITIALIZE APP =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    App.init();
    ProfileManager.updateProfilePhotoPreview();
    LinksManager.renderLinks();
    DesignManager.updateAnalyticsChart();
    AnalyticsManager.init();
    ExportManager.updateCodePreview();
    
    // Make functions available globally for event handlers
    window.App = App;
    window.ProfileManager = ProfileManager;
    window.LinksManager = LinksManager;
    window.DesignManager = DesignManager;
    window.AnalyticsManager = AnalyticsManager;
    window.PreviewManager = PreviewManager;
    window.ExportManager = ExportManager;
    window.CssEditor = CssEditor;
    window.StorageManager = StorageManager;
    window.Utils = Utils;
    
    console.log('✅ All systems initialized successfully!');
});