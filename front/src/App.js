import React, { useState } from 'react';

import { FormatData } from './components/formatData';
import { FormatToCSV } from './components/formatToCSV';
import { MaxCoord } from './components/maxCoord';
import { PlanetDetails } from './components/planetDetails';
import { ReadFile } from './components/readFile';
import { RenderGrid } from './components/renderGrid';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import './App.css'

function App() {
  // Définition de variables / fonctions nécessaires
  const fileName = './planetsFull.txt';
  const [tagColorsEnabled, setTagColorsEnabled] = useState(true);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  function handlePlanetClick(planetData) {
    setSelectedPlanet(planetData);
  }

  // Appel de la fonction pour lire le fichier local  
  const file = ReadFile(fileName);
  // Appel de la fonction pour formatter le fichier au format CSV
  const csvFile = FormatToCSV(file);
  // Appel de la fonction qui structure les données
  const data = FormatData(csvFile);
  // Appel de la fonction pour avoir la coordonnée maximale
  const maxCoord = MaxCoord(csvFile);
  // Génération de la grille
  const grid = RenderGrid(data, maxCoord, tagColorsEnabled, handlePlanetClick);

  return(
    <div>
      <div className="top">
        <button className="button" onClick={() => setTagColorsEnabled(!tagColorsEnabled)}>
          {tagColorsEnabled ? 'Disable' : 'Enable'} Tag Colors
        </button>
      </div>
      <div className="content" style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="grid" style={{ maxWidth: '90%', overflow: 'auto', padding: "10px" }}>
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
              <table>
                {grid}
              </table>
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="planetDetails" style={{ maxWidth: '10%', padding: "10px" }}>
          <PlanetDetails planet={selectedPlanet} />
        </div>
      </div>
    </div>
  );
};

export default App;