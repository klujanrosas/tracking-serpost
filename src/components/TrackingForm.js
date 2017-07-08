import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Card } from 'reactstrap'
import { connect } from 'react-redux'
import { fetchCaptcha, captchaTextChanged, trackingNumberChanged, submitForm } from '../actions'

class TrackingForm extends Component {

  componentDidMount() {
    this.props.fetchCaptcha()
  }

  renderCaptcha() {
    if (!this.props.captcha) {
      return <div>Cargando ...</div>
    }
    return (
      <img className="img-fluid" src={this.props.captcha} alt=""/>
    )
  }

  onCaptchaTextChange(text) {
    this.props.captchaTextChanged(text.target.value)
  }

  onTrackingNumberTextChange(text) {
    this.props.trackingNumberChanged(text.target.value)
  }

  _handleFormSubmit(e) {
    e.preventDefault()
    this.props.submitForm({ captchaText: this.props.captchaText, trackingNumber: this.props.trackingNumber })
  }

  render() {
    return (
      <Card style={{ padding: 15, boxShadow: '6px 13px 46px -1px rgba(0,0,0,0.65)'}}>
        <Form>
          <FormGroup row>
            <Label for="trackingNumber" sm={2}>Tracking Number</Label>
            <Col sm={9} md={8}>
              <Input
                type="text"
                name="trackingNumber"
                id="trackingNumber"
                placeholder="RF708439738CN"
                value={this.props.trackingNumber}
                onChange={value => this.onTrackingNumberTextChange.bind(this)(value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="captchaText" sm={2}>Captcha</Label>
            <Col sm={{ size: 12, offset: 2}}>
                <Col sm={{ size: 9, offset: 2 }} md={{ offset: 2  }}>
                  {this.renderCaptcha()}             
                </Col>
                <br/>
                <Col sm={9} md={8}>
                  <Input
                    type="text"
                    name="captchaText"
                    id="captchaText"
                    placeholder="ABC123"
                    value={this.props.captchaText}
                    onChange={value => this.onCaptchaTextChange.bind(this)(value)} />
                  <FormText>
                    Enter the characters of the image above.
                  </FormText>
                </Col>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 9, offset: 2}} md={{ size: 8, offset: 2}}>
              <Button onClick={this._handleFormSubmit.bind(this)} color="primary" block>Track!</Button>
            </Col>
          </FormGroup>
        </Form>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { serpost, form } = state
  return {
    captcha: serpost.captcha,
    captchaText: form.captchaText,
    trackingNumber: form.trackingNumber
  }
}

export default connect(mapStateToProps, { fetchCaptcha, captchaTextChanged, trackingNumberChanged, submitForm })(TrackingForm)
