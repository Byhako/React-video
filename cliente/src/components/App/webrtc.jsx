import React from 'react'

export default (props) => {
  return (
    <div className='container2'>
      <p className='descripcion2'>
        WebRTC es una tecnología HTML5 para enviar datos de navegador a navegador,
         sin un viaje a través de un servidor. ¡Incluso es posible usarlo para
         video chat o BitTorrent en el navegador! Para conectar a dos personas
         a través de WebRTC, primero necesitamos intercambiar información
         para permitir que los navegadores hablen entre sí. Este proceso se
         llama señalización.
      </p>

      <p className='descripcion2'>
        El proceso básico de configuración de una nueva conexión WebRTC 
        funciona de la siguiente manera:
      </p>

      <ul>
        <li>El navegador A envía una señal de iniciación.</li>
        <li>El navegador B recibe señal, envía de vuelta su propia señal de respuesta.</li>
        <li>El navegador A recibe una respuesta y la usa para establecer una conexión.</li>
      </ul>

      <h2>Arquitectura WebRTC</h2>

      <p className="descripcion2">
        Al usar WebRTC, para enviar mensajes a múltiples clientes, necesita
        una conexión abierta para cada uno de ellos.
        Podemos manejar las conexiones entre personas que hablan de dos maneras:
      </p>

      <ul>
        <li>Una arquitectura cliente-servidor, donde un
        usuario actúa como servidor y todos los demás se conectan a ellos.</li>
        <li>Una arquitectura de malla, donde cada usuario se conecta con todos
        los demás usuarios.</li>
      </ul>

      <h3>
        El flujo básico para el host es este:
      </h3>

      <ul>
        <li>Establecemos una conexión WebSocket con el servidor de señal.</li>
        <li>Si recibimos datos del socket, es una señal para una nueva conexión WebRTC.</li>
        <li>Abrimos una conexión WebRTC utilizando la señal que recibimos,
        tomando nuestros propios datos de señal y enviándolos de vuelta a
        través del socket.</li>
        <li>En este punto, solo esperamos el evento connect. Cuando se dispara,
        la conexión de WebRTC está lista y la agregamos a nuestra lista de pares.</li>
        <li>Ahora podríamos cerrar el socket si quisiéramos, tenemos una
        conexión WebRTC de igual a igual. Sin embargo, vamos a mantenerlo
        abierto. Si lo cerramos, solo podemos admitir chats de 1 a 1.</li>
      </ul>








      <div className='video2'>
      </div>

    </div>
  )
}
