import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Dice extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || 0,
      maxValue: Number.isInteger(this.props.max) ? this.props.max : 3
    };
  }

  add(inc) {
    this.setDice({ target: { value: this.state.value + inc } })
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
        <Form.Label column="sm">{this.props.name}</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button size="sm" onClick={() => { this.add(-1) }}
              variant="outline-secondary">➖</Button>
          </InputGroup.Prepend>
          <Form.Control type="number"
            value={this.state.value}
            onChange={(v) => { this.setDice(v) }}
            size="sm" />
          <InputGroup.Append>
            <Button size="sm" onClick={() => { this.add(1) }}
              ariant="outline-primary">➕</Button>
          </InputGroup.Append>
        </InputGroup>
      </>
    )
  }
}

export { Dice }
