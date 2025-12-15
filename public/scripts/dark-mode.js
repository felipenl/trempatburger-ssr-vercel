function getTheme() {
  try {
    const theme = localStorage.getItem('ui:theme')
    if (
      theme === 'dark' ||
      ((!theme || theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  } catch (e) {
    console.error('Error applying dark mode preference:', e)
    // do nothing
  }
}

getTheme()
