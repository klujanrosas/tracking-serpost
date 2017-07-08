import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Container, Col, Row } from 'reactstrap'
import NavBar from './NavBar'
import TrackingForm from './TrackingForm'
import TrackingResults from './TrackingResults'

import { fetchCaptcha, captchaTextChanged, trackingNumberChanged, submitForm } from '../actions'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Row style={{ paddingTop: 15}} >
          <Col sm={{ size: 5, push: 0, pull: 0, offset: 1 }}>
            <TrackingForm />
          </Col>
          <Col sm={{ size: 5, push: 0, pull: 0, offset: 0 }}>
            {/*You haven't searched anything yet.*/}
            <TrackingResults />
          </Col>
        </Row>
      </div>
    )
  }
}



export default App
