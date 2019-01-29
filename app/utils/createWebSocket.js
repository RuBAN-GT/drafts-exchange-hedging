import WebSocket from 'ws'

/**
 * Create WebSocket client
 *
 * @param {String} url
 * @returns {WebSocket}
 */
export const createWebSocket = url => new WebSocket(url)
