import { DOMAIN } from './config/domain'

export function fromImageToURL(image: any) {
  if (!image) {
    return '/assets/loyalty/car-loan/car-1.png'
  }
  if (image.includes('assets')) {
    return image
  }
  if (image.indexOf('/') === 0) {
    return `${DOMAIN.URL}${image}`
  }

  return image
}
