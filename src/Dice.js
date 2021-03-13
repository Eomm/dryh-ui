import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Dice extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || 0,
      maxValue: Number.isInteger(this.props.max) ? this.props.max : 3
    };
  }

  setDice(event) {
    if (event.target.value < 0 || event.target.value > this.state.maxValue) {
      return
    }
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <>
        <Col>
          <Form.Label column="sm">{this.props.name}</Form.Label>
        </Col>
        <Col>
          <Form.Control type="number"
            value={this.state.value}
            onChange={(v) => { this.setDice(v) }}
            size="sm" />
        </Col>
      </>
    )
  }
}

export { Dice }
