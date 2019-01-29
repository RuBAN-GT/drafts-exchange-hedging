import { WebAPI } from 'vendor/webapi'

export const protoAPI = WebAPI

/**
 * Encode message to buffer format
 * @param {Object} message
 * @returns {Buffer}
 */
export const encodeMessage = message => protoAPI.ClientMsg.encode(message).finish()

/**
 * Decode message from server with buffer format
 * @param {Buffer} message
 * @returns {ServerMsg}
 */
export const decodeMessage = message => (message ? protoAPI.ServerMsg.decode(message) : protoAPI.ServerMsg.create())
