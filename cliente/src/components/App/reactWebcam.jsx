import React, { Component } from 'react'
import Webcam from 'react-webcam'

export default class extends Component {
  constructor (props) {
    super(props)
    this.imageSrc = null
    this.state = {
      image: null
    };
  }
  
  setRef = webcam => this.webcam = webcam

  capture = () =>  this.setState({image: this.webcam.getScreenshot()})

  render () {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user'
    }

    return (
      <div className='container2'>
        
        <p className='descripcion2'>
          The web video player built from the ground up for an HTML5 world using React library.
          ( <a href='https://github.com/mozmorris/react-webcam' target='_blank'>react-webcam</a> )
        </p>

        <div className='video3'>
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={550}
            videoConstraints={videoConstraints}
          />
        </div>
          <div className="marco">
            <p className="label">Tú foto</p>
            <img id='foto' src={this.state.image} alt="imagen"/>
          </div>
        <button id='btn1' onClick={this.capture}>Capture photo</button>
      </div>
    )
  }
}
