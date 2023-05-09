import { GetHypHighlight } from './getHypHighlight';
import { GetTagColor } from './getTagColor';

export function RenderGrid(data, maxCoord, hypHighlightEnabled, tagColorsEnabled, handlePlanetClick) {
  const grid = [];

  for (let y = maxCoord; y >= -maxCoord; y--) {
    const row = [];

    for (let x = -maxCoord; x <= maxCoord; x++) {
      if (data[x] && data[x][y]) {

        const cell = (
          <td style={{ padding: "5px", border: "solid black 1px" }} key={`${x},${y}`}>
            <th>({x}, {y})</th>
            {data[x][y].map(planet => {
              const hypFontWeight = GetHypHighlight(planet.govsystem, hypHighlightEnabled);
              const tagColor = GetTagColor(planet.tag, tagColorsEnabled);
              return(
                <div key={planet.name} onClick={() => handlePlanetClick(planet)} style={{ backgroundColor: tagColor, whiteSpace: "nowrap" }}>
                  <td style={{ border: hypFontWeight }}>{planet.name} <b>SC{planet.sc}</b></td>
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