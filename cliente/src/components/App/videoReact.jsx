import React from 'react'
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react'


import "../../../node_modules/video-react/dist/video-react.css"
import './videoReact.styl'
import poster from "../../images/video2.jpg"


export default (props) => {
  return (
    <div className="container2">
      
      <p className="descripcion2">
        El reproductor de video web construido desde cero para un mundo HTML5 utilizando la biblioteca React.
        ( <a href="https://video-react.js.org/" target="_blank">Video React</a> )
      </p>

      <div className="video2">
        <Player
          playsInline={true}
          poster={poster}
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        >
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton
              rates={[5, 2, 1, 0.5, 0.1]}
              order={7.1}
            />
            <VolumeMenuButton enabled />
          </ControlBar>

        </Player>
      </div>

    </div>
  )
}