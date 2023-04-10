import React from 'react';

import { FormatData } from './components/formatData';
import { FormatToCSV } from './components/formatToCSV';
import { MaxCoord } from './components/maxCoord';
import { ReadFile } from './components/readFile';
import { RenderGrid } from './components/renderGrid';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const fileName = './planetsFull.txt';

function App() {
  // Appel de la fonction pour lire le fichier local  
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
    <div>
      <div>
        <TransformWrapper
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