import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Dice extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      minValue: Number.isInteger(this.props.min) ? this.props.min : 0,
      maxValue: Number.isInteger(this.props.max) ? this.props.max : 3
    };
  }

  add(inc) {
    this.setDice({ target: { value: this.props.value + inc } })
  }

  setDice(event) {
    if (event.target.value < this.state.minValue
      || event.target.value > this.state.maxValue) {
      return
    }

    if (this.props.onChange) {
      console.log(event);
      this.props.onChange(event)
    }
  }

  render() {
    return (
      <>
        <Form.Label column="sm">{this.props.name}</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button size="sm" onClick={() => { this.add(-1) }}
              disabled={this.props.value === this.state.minValue}
              variant="secondary">➖</Button>
          </InputGroup.Prepend>
          <Form.Control type="number"
            value={this.props.value}
            onChange={(v) => { this.setDice(v) }}
            size="sm" />
          <InputGroup.Append>
            <Button size="sm" onClick={() => { this.add(1) }}
              disabled={this.props.value === this.state.maxValue}
              variant="primary">➕</Button>
          </InputGroup.Append>
        </InputGroup>
      </>
    )
  }
}

export { Dice }
