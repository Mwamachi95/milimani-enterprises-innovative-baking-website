import { useState, useEffect } from 'react';

const PWAStatus = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOffline(true);
      setShowOfflineMessage(true);
      
      // Auto-hide offline message after 5 seconds
      setTimeout(() => {
        setShowOfflineMessage(false);
      }, 5000);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    setIsOffline(!navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Don't render anything if online and no message to show
  if (!showOfflineMessage && !isOffline) {
    return null;
  }

  return (
    <>
      {/* Offline Indicator */}
      {showOfflineMessage && (
        <div
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
            showOfflineMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="bg-dark-hunter-green text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="font-sora font-medium">
              {isOffline ? 'You are offline. Some features may be limited.' : 'Back online!'}
            </span>
            <button
              onClick={() => setShowOfflineMessage(false)}
              className="ml-2 text-white hover:text-gray-300 font-bold"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Offline CSS Styles */}
      <style jsx>{`
        body.offline {
          opacity: 0.95;
        }
        
        body.offline::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #f59e0b, transparent);
          animation: offline-pulse 2s ease-in-out infinite;
          z-index: 9999;
        }
        
        @keyframes offline-pulse {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .offline-indicator {
          position: fixed;
          bottom: 10px;
          left: 10px;
          background: #dc2626;
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .online-indicator {
          background: #059669;
        }
        
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
};

export default PWAStatus;