import { asset } from './asset.js'

// Returns the YouTube video id for youtube.com/watch?v=…, youtu.be/…,
// /shorts/… and /embed/… links, or null for anything else.
export function getYouTubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/,
  )
  return match ? match[1] : null
}

// A video is either a file in public/ ('videos/demo.mp4') or a full URL.
export function videoSrc(video) {
  return /^https?:\/\//.test(video) ? video : asset(video)
}
