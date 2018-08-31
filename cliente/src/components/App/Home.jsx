import React from 'react'

export default (props) => {
  return (
    <div className="container2">
      
      <p className="descripcion2">
        El elemento HTML "Video"  incorpora un reproductor multimedia que admite la reproducción de video en el documento. También puede usar "Video" para contenido de audio, pero el elemento "audio" puede proporcionar una experiencia de usuario más apropiada.
        ( <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video" target="_blank">Tag Video</a> )
      </p>

      <div className="video2">
        <video controls
         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
         width="500"
         height="330"
        >
          Sorry, your browser does not support embedded videos.
        </video>
      </div>

    </div>
  )
}