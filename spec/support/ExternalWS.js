import { Server } from 'ws'
import { protoAPI } from 'utils'

export class ExternalWS {
  constructor(options = {}) {
    this.settings = {
      port: 1818,
      ...options
    }
  }

  start() {
    this.socket = new Server(this.settings)

    this.socket.on('connection', ws => {
      ws.on('message', message => this.onMessage(ws, message))
    })
  }

  stop() {
    if (this.socket) this.socket.close()
    this.socket = null
  }

  sendResponse(ws, message) {
    return ws.send(protoAPI.ServerMsg.encode(message).finish())
  }

  onMessage(ws, message) {
    const data = protoAPI.ClientMsg.decode(message)

    if (data.logon) {
      this.onLogonRequest(ws, data)
    } else {
      this.onUnknownMessage(ws, data)
    }
  }

  onLogonRequest(ws) {
    const logonResult = protoAPI.ServerMsg.create({
      logonResult: protoAPI.LogonResult.create({
        resultCode: protoAPI.LogonResult.ResultCode.SUCCESS
      })
    })

    this.sendResponse(ws, logonResult)
  }

  onUnknownMessage(ws) {
    this.sendResponse(ws, {})
  }
}
