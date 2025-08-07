// Service Worker Registration for Milimani Enterprises PWA
(function() {
  'use strict';

  // Check if service workers are supported
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in this browser');
    return;
  }

  // Register service worker after page load
  window.addEventListener('load', function() {
    registerServiceWorker();
  });

  async function registerServiceWorker() {
    try {
      console.log('Registering Service Worker...');
      
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      console.log('Service Worker registered successfully:', registration);

      // Handle service worker updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        console.log('New Service Worker found, installing...');

        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New service worker is available, show update notification
              console.log('New Service Worker installed, update available');
              showUpdateNotification(registration);
            } else {
              // Service worker is controlling the page for the first time
              console.log('Service Worker installed successfully for the first time');
            }
          }
        });
      });

      // Check for updates periodically
      setInterval(() => {
        registration.update();
      }, 60000); // Check every minute

      // Handle service worker messages
      navigator.serviceWorker.addEventListener('message', event => {
        console.log('Message from Service Worker:', event.data);
      });

      // Setup install prompt handling
      setupInstallPrompt();

    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }

  function showUpdateNotification(registration) {
    // You can customize this to show a user-friendly update notification
    const updateAvailable = confirm('A new version of Milimani Enterprises is available. Would you like to update now?');
    
    if (updateAvailable && registration.waiting) {
      registration.waiting.postMessage({type: 'SKIP_WAITING'});
      window.location.reload();
    }
  }

  // Install Prompt Functionality
  let deferredPrompt;
  let installButton;

  function setupInstallPrompt() {
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (event) => {
      console.log('Install prompt available');
      
      // Prevent the mini-infobar from appearing on mobile
      event.preventDefault();
      
      // Save the event so it can be triggered later
      deferredPrompt = event;
      
      // Show custom install button
      showInstallButton();
    });

    // Handle successful installation
    window.addEventListener('appinstalled', () => {
      console.log('Milimani Enterprises PWA installed successfully');
      hideInstallButton();
      deferredPrompt = null;
      
      // Analytics or user feedback can be added here
      trackInstallEvent();
    });
  }

  function showInstallButton() {
    // Create install button if it doesn't exist
    if (!installButton) {
      installButton = document.createElement('button');
      installButton.innerHTML = '📱 Install App';
      installButton.className = 'install-btn';
      installButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #143e45;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 25px;
        font-family: 'Sora', sans-serif;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        transition: all 0.3s ease;
        font-size: 14px;
      `;

      // Add hover effects
      installButton.addEventListener('mouseenter', () => {
        installButton.style.background = '#0f323a';
        installButton.style.transform = 'translateY(-2px)';
      });

      installButton.addEventListener('mouseleave', () => {
        installButton.style.background = '#143e45';
        installButton.style.transform = 'translateY(0)';
      });

      // Handle install button click
      installButton.addEventListener('click', handleInstallClick);
      
      // Add button to page
      document.body.appendChild(installButton);
    }

    installButton.style.display = 'block';
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
      if (installButton && deferredPrompt) {
        installButton.style.opacity = '0.7';
      }
    }, 10000);
  }

  function hideInstallButton() {
    if (installButton) {
      installButton.style.display = 'none';
    }
  }

  async function handleInstallClick() {
    if (!deferredPrompt) return;

    console.log('User clicked install button');

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log('User choice:', outcome);

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      trackInstallEvent('accepted');
    } else {
      console.log('User dismissed the install prompt');
      trackInstallEvent('dismissed');
    }

    // Reset the deferred prompt variable
    deferredPrompt = null;
    hideInstallButton();
  }

  function trackInstallEvent(action = 'completed') {
    // Analytics tracking can be implemented here
    console.log('Install event tracked:', action);
    
    // Example: Google Analytics event
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'pwa_install', {
        'event_category': 'engagement',
        'event_label': action
      });
    }
  }

  // Cleanup cache periodically
  function cleanupCache() {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'CLEANUP_CACHE'
      });
    }
  }

  // Clean up cache every hour
  setInterval(cleanupCache, 3600000);

  // Online/Offline status handling
  window.addEventListener('online', () => {
    console.log('App is back online');
    document.body.classList.remove('offline');
  });

  window.addEventListener('offline', () => {
    console.log('App is now offline');
    document.body.classList.add('offline');
  });

})();