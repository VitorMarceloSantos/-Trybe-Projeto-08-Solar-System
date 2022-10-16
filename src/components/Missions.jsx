import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../css/Missions.css';

class Mission extends Component {
  render() {
    return (
      <div className="define-max">
        <Title headline="Missões" />
        <div data-testid="missions" className="container-missions">
          { missions.map(({ name, year, country, destination }) => (
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
              key={ name }
            />)) }
        </div>
      </div>
    );
  }
}

export default Mission;
