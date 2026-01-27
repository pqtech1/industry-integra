# React Tracking Setup – Installation Guide

## One-File Setup (Simplest Method)

### Step 1: Create `trackingService.js`
```javascript
// src/services/trackingService.js
class TrackingService {
    constructor(config = {}) {
        // REQUIRED: Set these for your app
        this.crmApiUrl = config.apiUrl || 'https://techupgrad.in/crm/api/v1/track-visit';
        this.application = config.appName || 'REPLACE_WITH_YOUR_APP_NAME';
        
        // Internal tracking
        this.sessionStartTime = Date.now();
        this.visitorId = this.getVisitorId();
        this.isInitialized = false;
        
        // Duplicate prevention
        this.lastTrackedUrl = null;
        this.lastTrackedTime = 0;
        this.trackingCooldown = 2000; // 2 seconds
        this.isTracking = false;
    }

    getVisitorId() {
        let visitorId = localStorage.getItem('visitor_id');
        if (!visitorId) {
            visitorId = 'visitor_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('visitor_id', visitorId);
        }
        return visitorId;
    }

    async trackPageVisit() {
        const currentUrl = window.location.href;
        const currentTime = Date.now();
        
        if (this.isTracking) return;
        if (this.lastTrackedUrl === currentUrl &&
            (currentTime - this.lastTrackedTime) < this.trackingCooldown) return;
        
        this.isTracking = true;
        this.lastTrackedUrl = currentUrl;
        this.lastTrackedTime = currentTime;
        
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const params = {};
            urlParams.forEach((value, key) => {
                params[key] = value;
            });
            
            const payload = {
                domain: window.location.hostname,
                page_path: window.location.pathname,
                application: this.application,
                visitor_id: this.visitorId,
                ...params,
                referrer: document.referrer,
                screen_resolution: `${window.screen.width}x${window.screen.height}`,
                language: navigator.language,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                page_title: document.title,
            };

            const response = await fetch(this.crmApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            console.log(`${this.application}: Page tracked`, data.data?.tracking_id);
            return data;
        } catch (error) {
            console.error('Tracking error:', error);
        } finally {
            setTimeout(() => { this.isTracking = false; }, 500);
        }
    }

    init() {
        if (this.isInitialized) return;
        this.setupHistoryTracking();
        setTimeout(() => this.trackPageVisit(), 1000);
        this.isInitialized = true;
        console.log(`Tracking initialized for: ${this.application}`);
    }

    setupHistoryTracking() {
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;
        
        history.pushState = (...args) => {
            originalPushState.apply(history, args);
            setTimeout(() => this.trackPageVisit(), 300);
        };
        
        history.replaceState = (...args) => {
            originalReplaceState.apply(history, args);
            setTimeout(() => this.trackPageVisit(), 300);
        };
        
        window.addEventListener('popstate', () => {
            setTimeout(() => this.trackPageVisit(), 300);
        });
    }

    destroy() {
        this.isInitialized = false;
    }
}

export const trackingService = new TrackingService();
```

### Step 2: Create `TrackingListener.jsx`
```jsx
// src/components/TrackingListener.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackingService } from '../services/trackingService';

export default function TrackingListener() {
  const location = useLocation();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      trackingService.trackPageVisit();
    }, 400);
    
    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);
  
  return null;
}
```

### Step 3: Update `App.jsx`
```jsx
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { trackingService } from './services/trackingService';
import TrackingListener from './components/TrackingListener';

function App() {
  useEffect(() => {
    trackingService.init();
    return () => trackingService.destroy();
  }, []);
  
  return (
    <BrowserRouter basename="/your-app-name">
      <TrackingListener />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Configuration for Multiple Apps

### Industry Integra
```javascript
this.application = 'industry-integra';
```
```jsx
<BrowserRouter basename="/industry-integra">
```

### E-commerce Store
```javascript
this.application = 'ecommerce-store';
```
```jsx
<BrowserRouter basename="/shop">
```

### Blog Platform
```javascript
this.application = 'blog-platform';
```
```jsx
<BrowserRouter basename="/blog">
```

---

## Quick Checklist

1. Copy `trackingService.js` to `src/services/`
2. Copy `TrackingListener.jsx` to `src/components/`
3. Update application name
4. Initialize tracking in `App.jsx`

---

## Environment Variables (Optional)

`.env`
```env
REACT_APP_NAME="your-app-name"
REACT_APP_TRACKING_API="https://techupgrad.in/crm/api/v1/track-visit"
```

```javascript
this.crmApiUrl = process.env.REACT_APP_TRACKING_API;
this.application = process.env.REACT_APP_NAME;
```

---

## Backend Database Schema

```sql
page_visits (
  id,
  domain,
  application,
  page_path,
  query_params,
  campaign_id,
  lead_id,
  email,
  source,
  link_type,
  ip_address,
  user_agent,
  referrer,
  session_duration,
  created_at,
  updated_at
)
```

---

## Verification

Test URL:
```
https://yourapp.com/login?campaign_id=100&lead_id=999&email=test@test.com&source=google&link_type=login
```

Confirm:
- API request is sent
- Application name is correct
- Query parameters are stored

---

## Summary

This setup provides a reusable, production-ready page tracking solution for React applications that integrates directly with your Laravel CRM API. Copy once, configure per app, and deploy consistently across projects.

