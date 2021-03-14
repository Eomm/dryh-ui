
import React from 'react';

import { Player } from './Player'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import './MadCity.css';
import { Row } from 'react-bootstrap';

class MadCity extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      gameEvents: []
    };
  }

  addPlayer() {
    const players = this.state.players.slice();
    players.push(<Player onChange={(evt) => this.playerUpdate('Player ' + players.length, evt)} />);
    this.setState({ players });
  }


  playerUpdate(player, message) {
    const gameEvents = this.state.gameEvents.slice();
    gameEvents.push(`${message.player || player}: ${message.text}`);
    this.setState({ gameEvents });
  }


  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container>
            <h3>Don&apos;t rest your head</h3>
            <p>This is a dashboard to ease the <a href="https://en.wikipedia.org/wiki/Don%27t_Rest_Your_Head">role-playing game sessions</a></p>
            <Row>
              <Col>
                <Button variant="primary"
                  onClick={() => this.addPlayer()}
                >
                  Add Player <Badge variant="light">{this.state.players.length}</Badge>
                </Button>
              </Col>
              <Col>
                <Form.Control as="select">
                  {this.state.players.map((player, i) => {
                    // TODO how to update the player name?
                    return (<option key={i}>{player.name || `Player ${i + 1}`}</option>)
                  })}
                </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control as="textarea"
                  rows={3}
                  plaintext
                  readOnly
                  value={this.state.gameEvents.join('\n')}
                />
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        {this.state.players}
      </>
    );
  }
}

export { MadCity as App }