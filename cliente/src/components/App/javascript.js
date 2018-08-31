import React, { Component } from 'react'
import persona from '../../images/persona.png'

export default class extends Component {
  constructor (props) {
    super(props)
    this.streaming = false
    this.video = React.createRef()
    this.canvas = React.createRef()
    this.photo = React.createRef()
    this.width = 320
    this.height = 0
    this.state = {}
    this.camera = null
  }

  componentDidMount () {
    const video = this.video.current
    const canvas = this.canvas.current
    const photo = this.photo.current
    //let self = this
    navigator.getMedia = (navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia)

    navigator.getMedia(
      {
        video: true,
        audio: false
      },
      function (stream) {
        //self.camera = stream
        if (navigator.mozGetUserMedia) {
          video.mozSrcObject = stream
        } else {
          const vendorURL = window.URL || window.webkitURL
          video.src = vendorURL.createObjectURL(stream)
        }
        video.play()
      },
      function (err) {
        console.log('An error occured! ' + err)
      }
    )
  }

  handleCanplay = () => {
    if (!this.streaming) {
      this.height = video.videoHeight / (video.videoWidth/this.width)
      video.setAttribute('width', this.width)
      video.setAttribute('height', this.height)
      canvas.setAttribute('width', this.width)
      canvas.setAttribute('height', this.height)
      this.streaming = true
    }
  }

  handleTakePhoto = (ev) => {
    canvas.width = this.width
    canvas.height = this.height
    canvas.getContext('2d').drawImage(video, 0, 0, this.width, this.height)
    const data = canvas.toDataURL('image/png')
    photo.setAttribute('src', data)
  }

  handleStopButton () {
    const MediaStream = window.MediaStream

    if (typeof MediaStream !== 'undefined' && !('stop' in MediaStream.prototype)) {
      MediaStream.prototype.stop = function() {
        this.getAudioTracks().forEach(function(track) {
            track.stop();
        })

        this.getVideoTracks().forEach(function(track) {
            track.stop()
        })
      }
    }
  }

  render () {
    return (
      <div className="container2">
        <p className="descripcion2">
          Lo primero que necesitas para acceder a la cámara web utilizando
          WebRTC es un elemento &#60;video&#62; y un elemento &#60;canvas&#62; en la página.
          El elemento de video recibe la secuencia desde WebRTC y el elemento
          canvas es utilizado para agarrar la imagen desde el video.
          También añadimos una imagen de relleno que luego será reemplazada con
          la toma capturada por la cámara web.
          ( <a href="https://developer.mozilla.org/es/docs/WebRTC/Taking_webcam_photos" target="_blank">camara con JS</a> )
        </p>
        
        <div id='contenedor'>
          <video id='video' ref={this.video} onCanPlay={this.handleCanplay} />
          <button id='startbutton' onClick={this.handleTakePhoto} >Take photo</button>
          <button id='stopbutton' onClick={this.handleStopButton} >Stop</button>
          <canvas id='canvas' ref={this.canvas} />
          <img src={persona} id='photo' alt='photo' ref={this.photo} />
        </div>
      </div>
    )
  }
}
