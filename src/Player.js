import React from 'react';

import { Dice } from './Dice'
import { Question } from './Question'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './Player.css'


class Player extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      name: props.name || '',
      job: props.job,

      discipline: props.discipline || 3,
      madness: props.madness || 0,
      exhaustion: props.exhaustion || 0,
      madnessExtra: 1,

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
  }

  rollDices() {
    const rolled = ['discipline',
      'madness',
      'exhaustion',
      'madnessExtra',
    ].map(diceColor => {
      let dices = this.state[diceColor]
      const results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
      while (dices > 0) {
        const random = randomD6()
        results[random]++
        dices--
      }
      return { diceColor, roll: results }
    })

    // Every six-sided die that shows a 1, 2, or 3 is counted as one success
    const winning = rolled
      .map(({ roll }) => roll[1] + roll[2] + roll[3])
      .reduce((a, b) => a + b)

    // If all numbers between two pools are equal, then 
    // use this guideline: Discipline beats Madness; Madness beats Exhaustion; 
    // Exhaustion beats Pain.
    const dominance = rolled.reduce(getDominance).diceColor

    if (this.props.onChange) {
      const out = `Rolled ${rolled.length} dices, ${winning} success. ${dominance} is dominant`
      this.props.onChange({
        player: this.state.name,
        text: out
      })
    }
  }


  render() {
    return (
      <Card className="mainBox">
        <Card.Header as="h5">
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
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Card.Body className="pl-0 pr-0 pb-2 pt-2">
          <Container fluid>
            <Row>
              <Col xs lg="2">
                <Dice name="Discipline" value={this.state.discipline}
                  onChange={(e) => { this.handleChange(e, 'discipline') }} />
              </Col>
              <Col xs lg="2">
                <Dice name="Permanent Madness" value={this.state.madness}
                  onChange={(e) => { this.handleChange(e, 'madness') }} />
              </Col>
              <Col xs lg="2">
                <Dice name="Madness" value={this.state.madnessExtra} min={1} max={6}
                  onChange={(e) => { this.handleChange(e, 'madnessExtra') }} />
              </Col>
              <Col xs lg="2">
                <Dice name="Current Exhaustion" value={this.state.exhaustion} max={6}
                  onChange={(e) => { this.handleChange(e, 'exhaustion') }} />
              </Col>
              <Col xs lg="3">
                <Dice name="Responses Fight?" value={this.state.fight}
                  onChange={(e) => { this.handleChange(e, 'fight') }} />
              </Col>
              <Col xs lg="3">
                <Dice name="or Flight?" value={this.state.flight}
                  onChange={(e) => { this.handleChange(e, 'flight') }} />
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Button size="sm" onClick={() => this.rollDices()}
                  variant="outline-primary">Roll 🎲</Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
        <Card.Footer className="text-muted">
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
              <Question><b>Exhaustion Talent MINOR</b></Question>
              <Question><b>Exhaustion Talent MAJOR</b></Question>
              <Question><b>Madness Talent</b></Question>
              <Question>What’s been keeping you awake?</Question>
              <Question>What just happened to you?</Question>
              <Question>What’s on the surface?</Question>
              <Question>What lies beneath?</Question>
              <Question>What’s your path?</Question>
            </div>
          </Collapse>

        </Card.Footer>
      </Card>



    );
  }
}

function getDominance(poolA, poolB) {
  for (let i = 6; i > 0; i--) {
    if (poolA.roll[i] > poolB.roll[i]) {
      return poolA
    } else if (poolA.roll[i] < poolB.roll[i]) {
      return poolB
    }
  }
  return poolA
}


function randomD6() {
  return Math.floor(Math.random() * 6) + 1
}

export { Player }
