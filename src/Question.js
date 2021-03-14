import React from 'react';

import Form from 'react-bootstrap/Form';

class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Form.Group >
        <Form.Label>{this.props.children}</Form.Label>
        <Form.Control as="textarea"
          rows={2}
          value={this.state.value}
          onChange={(e) => { this.handleChange(e) }}
        />
      </Form.Group>
    )
  }
}

export { Question }