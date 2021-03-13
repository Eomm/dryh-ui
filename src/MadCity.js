
import React from 'react';

import { Player } from './Player'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './MadCity.css';

class MadCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  addPlayer() {
    const players = this.state.players.slice();
    players.push(<Player />);
    this.setState({ players });
  }

  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container>
            <h3>Don&apos;t rest your head</h3>
            <Button variant="primary"
              onClick={() => this.addPlayer()}
            >
              Add Player <Badge variant="light">{this.state.players.length}</Badge>
            </Button>
          </Container>
        </Jumbotron>

        {this.state.players}
      </>
    );
  }
}

export { MadCity as App }