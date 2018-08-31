import React, { Component } from 'react'
import Webcam from 'react-webcam'

export default class extends Component {
  state = { image: null }
  
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
          Reproductor de video web construido desde cero para un mundo HTML5.
          ( <a href='https://github.com/mozmorris/react-webcam' target='_blank'>react-webcam</a> )
        </p>

        <p className='descripcion2'>
          Se pueden usar los siguientes props:
        </p>
      
        <table>
        <thead>
          <tr>
            <th>ClassName</th>
            <th>Tipo</th>
            <th>Default</th>
            <th>Descripsión</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>audio</td>
            <td>booleano</td>
            <td>true</td>
            <td>activar / desactivar el audio</td>
          </tr>
          <tr>
            <td>height</td>
            <td>número</td>
            <td>480</td>
            <td>altura del elemento</td>
          </tr>
          <tr>
            <td>width</td>
            <td>número</td>
            <td>640</td>
            <td>ancho del elemento</td>
          </tr>
          <tr>
            <td>screenshotWidth</td>
            <td>número</td>
            <td></td>
            <td>ancho del screenshot</td>
          </tr>
          <tr>
            <td>style</td>
            <td>objeto</td>
            <td></td>
            <td>estilo pasado por props</td>
          </tr>
          <tr>
            <td>screenshotFormat</td>
            <td>string</td>
            <td>'image/webp'</td>
            <td>formato del screenshot</td>
          </tr>
          <tr>
            <td>onUserMedia</td>
            <td>función</td>
            <td>noop</td>
            <td>callback cuando el componente recibe una transmisión multimedia</td>
          </tr>
          <tr>
            <td>onUserMediaError</td>
            <td>función</td>
            <td>noop</td>
            <td>callback para cuando el componente no puede recibir un flujo de medios con MediaStreamError param</td>
          </tr>
          <tr>
            <td>screenshotQuality</td>
            <td>número</td>
            <td>0.92</td>
            <td>calidad del screemshot (0 a 1)</td>
          </tr>
          <tr>
            <td>audioConstraints</td>
            <td>objeto</td>
            <td></td>
            <td>MediaStreamConstraint (s) para el audio</td>
          </tr>
          <tr>
            <td>videoConstraints</td>
            <td>objeto</td>
            <td></td>
            <td>MediaStreamConstraints (s) para el video</td>
          </tr>
        </tbody>
        </table>


        <div className="containercamera">
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
              <img id='foto' src={this.state.image} alt="imagen" />
            </div>
          <button id='btn1' onClick={this.capture}>Capture photo</button>
        </div>
      </div>
    )
  }
}
