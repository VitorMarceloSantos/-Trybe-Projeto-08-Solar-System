import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../css/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div>
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="container-planets">
          {planets.map(({ name, image }) => ( // foi realizado a destruturação do objeto
            <PlanetCard
              planetName={ name } // o planetName deve ser escrito igual como está escrito no componete(PlanetCard) que está recebendo o valor
              planetImage={ image } // o planetImage deve ser escrito igual como está escrito no componete(PlanetCard) que está recebendo o valor
              key={ name }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
