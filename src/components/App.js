import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Container, Col, Row } from 'reactstrap'
import NavBar from './NavBar'
import TrackingForm from './TrackingForm'
import TrackingResults from './TrackingResults'
import TrackingHistory from './TrackingHistory'

import { fetchCaptcha, captchaTextChanged, trackingNumberChanged, submitForm } from '../actions'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Row style={{ paddingTop: 15, marginLeft: 15, marginRight: 15}} >
          <Col sm={{ size: 3 }}>
            <TrackingHistory />
          </Col>
          <Col sm={{ size: 4, offset: 0 }}>
            <TrackingForm />
          </Col>
          <Col sm={{ size: 5, offset: 0 }}>
            <TrackingResults />
          </Col>
        </Row>
      </div>
    )
  }
}



export default App
