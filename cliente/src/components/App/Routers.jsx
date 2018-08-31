import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './nav'
import videoReact from './videoReact'
import WebRtc from './webrtc'
import ReactWebcam from './reactWebcam'
import Html5Camera from './html5Camera'
import Javascript from './javascript'

class AppRouter extends Component {
  render () {
    return (
      <BrowserRouter>
        <Fragment>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path='/html5' component={videoReact} />
          <Route exact path='/webrtc' component={WebRtc} />
          <Route exact path='/webCamera' component={ReactWebcam} />
          <Route exact path='/cameraHtml' component={Html5Camera} />
          <Route exact path='/javascript' component={Javascript} />
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default AppRouter
