const SimplePeer = require('simple-peer')
const SimpleWebsocket = require('simple-websocket')
const EventEmitter = require('events').EventEmitter
 
const peers = []  // list of all connected clients
const emitter = new EventEmitter()
 
module.exports = function () {
  const socket = new SimpleWebsocket('ws://localhost:3030')

  socket.on('close', function () { console.log('Socket closed') })
  socket.on('error', function (err) { 
    console.log('Socket error')
    console.log(err)
  })
  socket.on('connect', function () { console.log('Connected') })
 
  socket.on('data', function(data) {
    // This object handles the WebRTC connection for us.
    // We set initiator to false. This means we’re not the one initiating the 
    // connection, instead, we’re responding to a new connection
    // We also set trickle to false. This disables so called trickle ICE. 
    // ICE is a process in establishing a WebRTC connection, where the browser
    // tries to figure out the IP address and other necessary information.
    const rtc = new SimplePeer({ initiator: false, trickle: false })
 
    rtc.signal(data)  // active the generation of our own signal data
    rtc.on('signal', function(data) { socket.send(data) })
 
    // add the RTC connection to our list of connected peers.
    rtc.on('connect', function() { peers.push(rtc) })
 
    // listener of data event. This is fired whenever data is received from the WebRTC peer.
    rtc.on('data', function(msg) {
      emitter.emit('message', msg)
 
      //as host, we need to broadcast the data to the other peers
      peers.forEach(function(p) {
        if(p === rtc) { return }
        p.send(msg)
      })
    })

  })
 
  return {
    onReady: function(callback) {
      //the host is always "ready" although it may
      //not have any clients
      callback()
    },
 
    send: function(message) {
      peers.forEach(function(p) { p.send(message) })
    },
 
    onMessage: function(callback) {
      emitter.on('message', callback)
    }
  }
}
