import React, { Component }  from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import { fetchHistory, loadHistoryInfo } from '../actions'
import StyledCard from './StyledCard'

class TrackingHistory extends Component {

  componentDidMount() {
    this.props.fetchHistory()
  }

  _onSubmitHandle(item) {
    this.props.loadHistoryInfo(item)
  }

  _renderHistory() {
    if (this.props.history.length < 1) {
      return <div>No packages saved.</div>
    }

    return this.props.history.map((item, index) => {
      return (
        <StyledCard
          key={index}
          title={item.tracking_number}
          content={item.description}
          onSubmit={this._onSubmitHandle.bind(this, item)}
        />
      )
    })
  }

  render() {
    return (
      <div style={{ height: 600, overflow: 'auto' }}>
        {this._renderHistory()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    history: state.history
  }
}

export default connect(mapStateToProps, { fetchHistory, loadHistoryInfo })(TrackingHistory)
