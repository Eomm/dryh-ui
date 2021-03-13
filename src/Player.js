import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'


class Player extends React.PureComponent {

  constructor(prop) {
    super(prop)
    this.state = {
      discipline: prop.discipline || 3,
      madness: prop.madness || 0,
      exhaustion: prop.exhaustion || 0,

      fight: prop.fight || 0,
      flight: prop.flight || 0,

      showDetail: true
    }
  }

  toggleDetails() {
    this.setState({ showDetail: !this.state.showDetail })
  }

  manageDiscipline(event) {
    if (event.target.value < 0 || event.target.value > 3) {
      return
    }
    this.setState({ discipline: event.target.value })
  }

  render() {
    return (
      <Container className='main'>
        <Row>
          <Col>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text>🏷</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="My Name is..." />
            </InputGroup>
            <br></br>
          </Col>
          <Col>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text>🛠</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text" placeholder="and I am..." />
            </InputGroup>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label column="sm">Discipline</Form.Label>
          </Col>
          <Col >
            <Form.Control type="number" value={this.state.discipline} onChange={(v) => { this.manageDiscipline(v) }} size="sm" />
          </Col>

          <Col>
            <Form.Label column="sm">Permanent Madness</Form.Label>
          </Col>
          <Col>
            <Form.Control type="number" value={this.state.madness} size="sm" />
          </Col>

          <Col>
            <Form.Label column="sm">Current Exhaustion</Form.Label>
          </Col>
          <Col>
            <Form.Control type="number" value={this.state.exhaustion} size="sm" />
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label column="sm">Responses Fight?</Form.Label>
          </Col>
          <Col>
            <Form.Control type="number" value={this.state.fight} size="sm" />
          </Col>

          <Col>
            <Form.Label column="sm">or Flight?</Form.Label>
          </Col>
          <Col>
            <Form.Control type="number" value={this.state.flight} size="sm" />
          </Col>
        </Row>


        <Row>
          <Col>
            <Button
              onClick={() => this.toggleDetails()}
              aria-controls="text-sheet"
              aria-expanded={this.state.showDetail}
            >Toggle Details
           </Button>
            <Collapse in={this.state.showDetail}>
              <div id="text-sheet">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Collapse>
          </Col>
        </Row>
      </Container >
    );
  }
}

export { Player }