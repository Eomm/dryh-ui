
import React from 'react';

import { Player } from './Player'

import Container from 'react-bootstrap/Container';
import './MadCity.css';

class MadCity extends React.Component {
  render() {
    return (
      <Container className="p-3">
        <Player madness={3}></Player>
      </Container>
    );
  }
}

export { MadCity as App }