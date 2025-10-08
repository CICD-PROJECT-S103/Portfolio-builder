// Helper function to get the correct image path for both local and production
export const getImagePath = (path: string): string => {
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio-builder' : ''
  return `${basePath}${path}`
}