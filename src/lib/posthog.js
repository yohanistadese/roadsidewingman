import posthog from 'posthog-js'

export function initPostHog() {
  if (typeof window === 'undefined' || !import.meta.env.VITE_POSTHOG_KEY) return
  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.posthog.com',
    autocapture: true,
    capture_pageview: false,
    capture_pageleave: true,
  })
}

export function trackPageView() {
  if (typeof window === 'undefined') return
  posthog.capture('roadsidewingman_page_view', { url: window.location.href })
}

export function trackEvent(event, properties = {}) {
  if (typeof window === 'undefined') return
  posthog.capture(`roadsidewingman_${event}`, properties)
}
