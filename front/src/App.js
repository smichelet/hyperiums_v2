import React from 'react';
import { FormatData } from './components/formatData';
import { FormatToCSV } from './components/formatToCSV';
import { MaxCoord } from './components/maxCoord';
import { ReadFile } from './components/readFile';
import { RenderGrid } from './components/renderGrid';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function App() {
  // Appel de la fonction pour lire le fichier local
  const fileName = './planetsFull.txt';
  const file = ReadFile(fileName);
  // Appel de la fonction pour formatter le fichier au format CSV
  const csvFile = FormatToCSV(file);
  // Appel de la fonction qui structure les données
  const data = FormatData(csvFile);
  // Appel de la fonction pour avoir la coordonnée maximale
  const maxCoord = MaxCoord(csvFile);
  // Génération de la grille
  const grid = RenderGrid(data, maxCoord);

  return(
    <div id="container">
      <TransformWrapper>
        <TransformComponent>
          <table>
            {grid}
          </table>
        </TransformComponent>
      </TransformWrapper>
    </div>
  )
}

export default App;