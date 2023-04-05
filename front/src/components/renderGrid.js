export function RenderGrid(data, maxCoord) {
  const grid = [];

  for (let y = maxCoord; y >= -maxCoord; y--) {
    const row = [];

    for (let x = -maxCoord; x <= maxCoord; x++) {
      if (data[x] && data[x][y]) {
        const cell = (
          <td key={`${x},${y}`} style={{height: '10px', width: '10px'}}>
            <tr>({x}, {y})</tr>
            {data[x][y].map(planet => (
              <div key={planet.name}>
                <p>{planet.name} {planet.tag}</p>
                {/* Ajoutez ici les autres informations de la planète */}
              </div>
            ))}
          </td>
        );
        row.push(cell);
      } else {
        row.push(<td key={`${x},${y}`}></td>);
      }
    }

    grid.push(<tr key={y}>{row}</tr>);
  }

  return (grid);
}