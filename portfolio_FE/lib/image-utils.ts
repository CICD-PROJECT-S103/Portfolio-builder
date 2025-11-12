// Helper to build a correct public image URL in both dev and production (GitHub Pages)
// - Accepts paths with or without a leading slash (e.g. "logo.png" or "/logo.png")
// - Leaves absolute URLs (http/https) and data URIs untouched
// - Avoids double prefixing with the basePath
export const getImagePath = (path: string): string => {
  if (!path) return ''

  // Pass through absolute URLs and data URIs
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) {
    return path
  }

  // Use globalThis to avoid requiring Node type defs in the browser
  const isProduction = (globalThis as any)?.process?.env?.NODE_ENV === 'production'
  const basePath = isProduction ? '/Portfolio-builder' : ''

  // If the incoming path is already prefixed with the basePath, strip it to prevent double prefix
  const dePrefixed = path.startsWith('/Portfolio-builder/')
    ? path.replace(/^\/Portfolio-builder\//, '/')
    : path

  // Ensure we have a single leading slash before joining
  const normalized = dePrefixed.startsWith('/') ? dePrefixed : `/${dePrefixed}`

  // Join basePath and normalized path (basePath never ends with '/'), keeping slashes correct
  return `${basePath}${normalized}`
}