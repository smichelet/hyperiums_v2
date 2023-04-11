import React, { useState } from 'react';

import { AddPlanetsAlliance } from './components/addPlanetsAlliance';
import { FormatData } from './components/formatData';
import { FormatToCSV } from './components/formatToCSV';
import { MaxCoord } from './components/maxCoord';
import { PlanetDetails } from './components/planetDetails';
import { ReadFile } from './components/readFile';
import { RenderGrid } from './components/renderGrid';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import './App.css'

function App() {
  // Définition des variables pour sélectionner les fichiers locaux en tant que source de données
  const fileNamePlanets = './data/planets.txt';
  const fileNamePlanetsAlliance = './data/planetsAlliance.txt';

  // Définition d'une variable pour la fonction d'affichage d'une couleur de background pour les planètes hyp
  const [hypHighlightEnabled, setHypHighlightEnabled] = useState(false);

  // Définition d'une variable pour la fonction d'affichage d'une couleur de background pour les tags
  const [tagColorsEnabled, setTagColorsEnabled] = useState(true);
  
  // Définition d'une variable pour la fonction d'affichage des données d'une planète sélectionnée
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  function handlePlanetClick(planetData) {
    setSelectedPlanet(planetData);
  }

  // Appel de la fonction pour lire les fichiers locaux
  const filePlanets = ReadFile(fileNamePlanets);
  const filePlanetsAlliance = ReadFile(fileNamePlanetsAlliance);

  // Appel de la fonction pour formatter le fichier au format CSV
  const csvFilePlanets = FormatToCSV(filePlanets);

  // Appel de la fonction qui ajoute le tag de notre alliance sur nos planètes
  const csvFilePlanetsWithAlliance = AddPlanetsAlliance(filePlanetsAlliance, csvFilePlanets);

  // Appel de la fonction qui structure les données
  const data = FormatData(csvFilePlanetsWithAlliance);

  // Appel de la fonction pour avoir la coordonnée maximale
  const maxCoord = MaxCoord(csvFilePlanetsWithAlliance);

  // Génération de la grille
  const grid = RenderGrid(data, maxCoord, hypHighlightEnabled, tagColorsEnabled, handlePlanetClick);

  return(
    <div>
      <div className="top">
        <button className="button" onClick={() => setHypHighlightEnabled(!hypHighlightEnabled)}>
          {tagColorsEnabled ? 'Enable' : 'Disable'} Hyp Display
        </button>
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