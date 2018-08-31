import React, { Component } from 'react'
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import persona from '../../images/persona.png'

export default class App extends Component {
  state = { image: persona }

  onTakePhoto (dataUri) {
    console.log('takePhoto')
    this.setState({image: dataUri})
  }

  onCameraError (error) {
    console.error('onCameraError', error)
  }

  onCameraStart (stream) {
    console.log('onCameraStart')
  }

  onCameraStop () {
    console.log('onCameraStop')
  }

  render () {
    return (
      <div className='container2'>

        <p className='descripcion2'>
          El primer objetivo de este paquete proviene de la necesidad de obtener
          mismo aspecto de una aplicación de cámara móvil nativa, pero con un
          componente de React. No podemos controlar el tamaño del video.
          ( <a href='https://github.com/mabelanger/react-html5-camera-photo' target='_blank'>react-html5-camera-photo</a> )
        </p>

        <p className='descripcion2'>
          Se pueden usar los siguientes props:
        </p>

        <table>
          <thead>
            <tr>
              <th>Propiedad</th>
              <th>Tipo</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>onCameraStart(): (opcional)</td>
              <td>evento</td>
              <td>callback llamado cuando se inicia la cámara.</td>
            </tr>
            <tr>
              <td>onCameraStop(): (opcional)</td>
              <td>evento</td>
              <td>callback llamado cuando se detiene la cámara.</td>
            </tr>
            <tr>
              <td>onCameraError(error): (opcional)</td>
              <td>evento</td>
              <td>callback llamado con el objeto de error como parámetro cuando se produce un error al abrir la cámara. A menudo el permiso.</td>
            </tr>
            <tr>
              <td>onTakePhoto(dataUri): (requerido)</td>
              <td>evento</td>
              <td>función llamada cuando se toma una foto. el dataUri se pasa como un parámetro.</td>
            </tr>
            <tr>
              <td>idealFacingMode: (opcional) (dinámico)</td>
              <td>string</td>
              <td>El modo ideal de la cámara, el entorno o el usuario, el predeterminado es el predeterminado del navegador. Use la constante FACING_MODES para obtener la cadena correcta. Ejemplo: FACING_MODES.ENVIRONMENT o FACING_MODES.USER</td>
            </tr>
            <tr>
              <td>idealResolution: (opcional) (dinámico)</td>
              <td>objeto</td>
              <td>Objeto de la resolución ideal de la cámara, &#123;ancho&#58;entero , alto&#58;entero&#125;, el valor predeterminado es el predeterminado del navegador.</td>
            </tr>
            <tr>
              <td>isMaxResolution: (opcional) (dinámico)</td>
              <td>booleano</td>
              <td>Si es verdadero, la cámara comenzará con su propia resolución máxima, el valor predeterminado es falso.</td>
            </tr>
            <tr>
              <td>isImageMirror: (opcional)</td>
              <td>booleano</td>
              <td>Si es verdadero, la imagen de la cámara será espejo, el valor predeterminado es verdadero.</td>
            </tr>
            <tr>
              <td>isDisplayStartCameraError: (opcional)</td>
              <td>booleano</td>
              <td>Si es verdadero, si la cámara comienza con un error, mostrará el error entre la etiqueta h1 en la parte superior del componente. Es útil para notificar al usuario sobre el error de permiso, el valor predeterminado es verdadero.</td>
            </tr>
            <tr>
              <td>sizeFactor: (opcional)</td>
              <td>número</td>
              <td>Número de la resolución del factor. Por ejemplo, un sizeFactor de 1 obtiene la misma resolución de la cámara, mientras que sizeFactor de 0.5 obtiene la mitad de la resolución de la cámara. SizeFactor puede estar entre el rango de] 0, 1] y el valor predeterminado es 1.</td>
            </tr>
            <tr>
              <td>imageType:: (opcional)</td>
              <td>string</td>
              <td>Cadena utilizada para obtener el tipo de imagen deseado entre jpg o png. para especificar el tipo de imagen use la constante IMAGE_TYPES, por ejemplo para especificar el formato jpg use IMAGE_TYPES.JPG. El tipo de imagen predeterminado es png. Use la constante IMAGE_TYPES para obtener el tipo de imagen correcto. Ejemplo :. IMAGE_TYPES.JPG o IMAGE_TYPES.PNG</td>
            </tr>
            <tr>
              <td>imageCompression:: (opcional)</td>
              <td>número</td>
              <td>Número utilizado para obtener la compresión deseada cuando se selecciona jpg. elija una compresión entre [0, 1], 1 es máximo, 0 es mínimo. El valor predeterminado imageCompression es 0.92.
</td>
            </tr>
          </tbody>
        </table>

        <div className="containercamera">
          <div className='video1'>
            <Camera
              onTakePhoto={(dataUri) => { this.onTakePhoto(dataUri) }}
              onCameraError={(error) => { this.onCameraError(error) }}
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              idealResolution={{width: 640, height: 480}}
              imageType={IMAGE_TYPES.JPG}
              imageCompression={0.97}
              isMaxResolution={false}
              isImageMirror={false}
              isDisplayStartCameraError={true}
              sizeFactor={1}
              onCameraStart={(stream) => { this.onCameraStart(stream) }}
              onCameraStop={() => { this.onCameraStop() }}
              className='camarahtml5'
            />
          </div>

          <div className="marco1">
            <p className="label">Tú foto</p>
            <img id='foto' src={this.state.image} alt="imagen" />
          </div>
        </div>
      </div>
    )
  }
}
