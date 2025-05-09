self.addEventListener('push', (event) => {
  let data = {
    title: 'New Update from Sqysh',
    body: 'Check out the latest features!',
    icon: '/images/logo.png', // Update with Sqysh icon
    badge: '/images/logo.png', // Update with Sqysh badge
    data: {
      url: 'https://sqysh.io' // Update with the Sqysh URL
    },
    requireInteraction: true,
    tag: `msg-${Date.now()}`,
    timestamp: Date.now(),
    renotify: false
  }

  if (event.data) {
    try {
      const payload = event.data.json()
      data = {
        ...data,
        ...payload
      }
    } catch {
      data.body = event.data.text() // fallback in case it’s not valid JSON
    }
  }

  const options = {
    body: data.body,
    icon: data.icon,
    badge: data.badge,
    data: data.data
  }

  event.waitUntil(self.registration.showNotification(data.title, options))
})

self.addEventListener('notificationclick', (event) => {
  const notificationData = event.notification.data

  if (notificationData && notificationData.url) {
    const url = notificationData.url

    event.waitUntil(
      clients.openWindow(url) // Open the URL in a new tab
    )
  }

  event.notification.close() // Close the notification after click
})
