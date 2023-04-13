export function Legend() {
  const tagList = {
    "[PASTA]": "#93935C",
    "[Cake]": "pink",
    "[TAG]": "#117a65",
    "[GoD]": "lightblue",
    "[MNKY]": "cyan",
    "[-]": "violet",
    "[666]": "#ff1493",
    "[T3M]": "orange",
    "[X/0]": "#2986cc",
    "[KoV]": "#ffe599",
    "[Dark]": "#42BF88",
    "[d_b]": "#B05273",
    "[o.O]": "#BB8FCE",
    "[8]": "lightgreen",
  }

  const legend = [];

  for (const tag in tagList) {
    const color = tagList[tag];
    const cell = (
      <tr>
        <td style={{ width: "20px", height: "20px", backgroundColor: color, border: "1" }}></td>
        <td>{tag}</td>
      </tr>
    )
    legend.push(cell);
  }

  return (legend);
}