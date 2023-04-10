import React, { useState } from 'react';

import { FormatData } from './components/formatData';
import { FormatToCSV } from './components/formatToCSV';
import { MaxCoord } from './components/maxCoord';
import { PlanetInfo } from './components/planetInfo';
import { ReadFile } from './components/readFile';
import { RenderGrid } from './components/renderGrid';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import './App.css'

function App() {
  // Définition de variables
  const fileName = './planetsFull.txt';
  const [tagColorsEnabled, setTagColorsEnabled] = useState(true);

  // Appel de la fonction pour lire le fichier local  
  const file = ReadFile(fileName);
  // Appel de la fonction pour formatter le fichier au format CSV
  const csvFile = FormatToCSV(file);
  // Appel de la fonction qui structure les données
  const data = FormatData(csvFile);
  // Appel de la fonction pour avoir la coordonnée maximale
  const maxCoord = MaxCoord(csvFile);
  // Génération de la grille
  const grid = RenderGrid(data, maxCoord, tagColorsEnabled);

  return(
    <div>
      <div className="topButtons">
        <button className="button" onClick={() => setTagColorsEnabled(!tagColorsEnabled)}>
          {tagColorsEnabled ? 'Disable' : 'Enable'} Tag Colors
        </button>
      </div>
      <div>
        <TransformWrapper
          doubleClick={{disabled: true}}
          initialPositionX={-1586}
          initialPositionY={-2390}
          limitToBounds={false}
          initialScale={0.75}
          minPositionX={1}
          maxPositionX={6571}
          minPositionY={1}
          maxPositionY={7514}
          minScale={0.2}
          maxScale={4}
        >
          <TransformComponent>
            <table style={{width: "100%"}}>
            {/* <Container> */}
              {grid}
            {/* </Container> */}
            </table>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default App;