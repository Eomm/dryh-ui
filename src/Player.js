import React from 'react';

import { Dice } from './Dice'
import { Question } from './Question'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Collapse from 'react-bootstrap/Collapse'

import './Player.css'


class Player extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      job: props.job,

      discipline: props.discipline || 3,
      madness: props.madness || 0,
      exhaustion: props.exhaustion || 0,

      fight: props.fight || 0,
      flight: props.flight || 0,

      showDetail: false
    }
  }

  toggleDetails() {
    this.setState({ showDetail: !this.state.showDetail })
  }

  handleChange(event, key) {
    this.setState({ [key]: event.target.value });
    if (this.props.onChange) {
      this.props.onChange(this)
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text>🏷</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text"
                value={this.state.name}
                onChange={(e) => { this.handleChange(e, 'name') }}
                placeholder="My Name is..." />
            </InputGroup>
            <br></br>
          </Col>
          <Col>
            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text>🛠</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="text"
                value={this.state.job}
                onChange={(e) => { this.handleChange(e, 'job') }}
                placeholder="and I am..." />
            </InputGroup>
            <br></br>
          </Col>
        </Row>

        <Row>
          <Dice name="Discipline" value={this.state.discipline} />
          <Dice name="Permanent Madness" value={this.state.madness} />
          <Dice name="Current Exhaustion" value={this.state.exhaustion} max={6} />
        </Row>

        <Row>
          <Dice name="Responses Fight?" value={this.state.fight} />
          <Dice name="or Flight?" value={this.state.flight} />
        </Row>

        <Row>
          <Col>
            <div
              className="hider"
              onClick={() => this.toggleDetails()}
            >
              <div className="border" />
              <p className="content">⇊</p>
              <div className="border" />
            </div>

            <Collapse in={this.state.showDetail}>
              <div id="questions-sheet">
                <Question>What’s been keeping you awake?</Question>
                <Question>What just happened to you?</Question>
                <Question>What’s on the surface?</Question>
                <Question>What lies beneath?</Question>
                <Question>What’s your path?</Question>
              </div>
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
  }
}

export { Player }