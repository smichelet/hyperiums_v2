import { GetTagColor } from './getTagColor';

export function RenderGrid(data, maxCoord, tagColorsEnabled) {
  const grid = [];

  for (let y = maxCoord; y >= -maxCoord; y--) {
    const row = [];

    for (let x = -maxCoord; x <= maxCoord; x++) {
      if (data[x] && data[x][y]) {

        const cell = (
          <td key={`${x},${y}`}>
            <tr><b>({x}, {y})</b></tr>
            {data[x][y].map(planet => {
              const tagColor = GetTagColor(planet.tag, tagColorsEnabled);
              return(
              <div key={planet.name} style={{ backgroundColor: tagColor }}>
                <p style={{marginBlockStart: "0px", marginBlockEnd: "0px"}}>{planet.name}</p>
                {/* Ajoutez ici les autres informations de la planète */}
              </div>
              );
            })}
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