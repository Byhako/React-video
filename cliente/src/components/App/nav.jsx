import React, { Component } from 'react'
import './nav.styl'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render () {
    return (
      <header className='Header'>
        <nav>
          <p id='name'>Video</p>
          <ul>
            <li>
              <NavLink exact to='/' activeClassName='is-selected'>
                Tag Video
              </NavLink>
            </li>
            <li>
              <NavLink to='/html5' activeClassName='is-selected'>
                video-react
              </NavLink>
            </li>
            <li>
              <NavLink to='/webrtc' activeClassName='is-selected'>
                WebRTC
              </NavLink>
            </li>
            <li>
              <NavLink to='/webCamera' activeClassName='is-selected'>
                react-webcam
              </NavLink>
            </li>
            <li id='large'>
              <NavLink to='/cameraHtml' activeClassName='is-selected'>
                react-html5-camera
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
