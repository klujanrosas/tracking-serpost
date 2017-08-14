import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux'

class TrackingResults extends Component {

  _renderTrackingInfo() {        
    if (!this.props.trackingInfo || this.props.trackingInfo.length < 1) {
      return (
        <tr>
          <th colSpan={2}>
            You haven't searched anything yet.
          </th>
        </tr>
      )
    }

    return this.props.trackingInfo.map((info, index) => {
      return (
        <tr key={info.time + Math.random()}>
          <th scope="row">{info.time}</th>
          <td>{info.event}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Table inverse>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {this._renderTrackingInfo()}
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = state => {
  return {
    trackingInfo: state.form.trackingInfo
  }
}

export default connect(mapStateToProps)(TrackingResults)
