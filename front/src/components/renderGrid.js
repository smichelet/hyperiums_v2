import { GetHypHighlight } from './getHypHighlight';
import { GetTagColor } from './getTagColor';

export function RenderGrid(data, maxCoord, hypHighlightEnabled, tagColorsEnabled, handlePlanetClick) {
  const grid = [];

  for (let y = maxCoord; y >= -maxCoord; y--) {
    const row = [];

    for (let x = -maxCoord; x <= maxCoord; x++) {
      if (data[x] && data[x][y]) {

        const cell = (
          <td key={`${x},${y}`}>
            <th>({x}, {y})</th>
            {data[x][y].map(planet => {
              const hypFontWeight = GetHypHighlight(planet.govsystem, hypHighlightEnabled);
              const tagColor = GetTagColor(planet.tag, tagColorsEnabled);
              return(
                <div key={planet.name} onClick={() => handlePlanetClick(planet)} style={{ backgroundColor: tagColor, fontWeight: hypFontWeight}}>
                  <span style={{ whiteSpace: "nowrap", marginBlockStart: "0px", marginBlockEnd: "0px" }}>{planet.name}</span>
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