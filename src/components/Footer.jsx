import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div id="text-desenvolvedor">
            <p>
              Desenvolvido por
              {' '}
              <a href="https://github.com/VitorMarceloSantos" target="_blank" rel="external noreferrer">Vitor Marcelo - Turma 23 - B</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
