import React, { useState, Component, useEffect } from 'react'
import Head from 'next/head'

const JitsiComponent = () => {


  const startMeet = () => {
    const options = {
      roomName: 'bwb-bfqi-vmg',
      width: '100%',
      height: 500,
      configOverwrite: { prejoinPageEnabled: false },
      interfaceConfigOverwrite: {
        // overwrite interface properties
      },
      parentNode: document.querySelector('#jitsi-iframe'),
      userInfo: {
        displayName: 'Akash Verma'
      }
    }
    new window.JitsiMeetExternalAPI('meet.jit.si', options);


  }



  useEffect(() => {
    if (window.JitsiMeetExternalAPI) {
      startMeet();
    } else {
      alert('JitsiMeetExternalAPI not loaded');
    }
  }, [])


  return <>
    <header className="nav-bar">
      <p className="item-left heading">Jitsi React</p>
    </header>
    <script src='https://meet.jit.si/external_api.js'></script>
    <div id="jitsi-iframe"></div>
    <div className="item-center">
      <span>Custom Controls</span>
    </div>
    <div className="item-center">
    </div>

  </>


}

export default JitsiComponent;