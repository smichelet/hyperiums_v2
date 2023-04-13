export function GetTagColor(tag, tagColorsEnabled) {
  if (tagColorsEnabled) {
    switch (tag) {
      case "[PASTA]":
        return "#93935C";
      case "[Cake]":
        return "pink";
      case "[TAG]":
        return "#117a65";
      case "[GoD]":
        return "lightblue";
      case "[MNKY]":
        return "cyan";
      case "[-]":
        return "violet";
      case "[666]":
        return "#ff1493";
      case "[T3M]":
        return "orange";      
      case "[X/0]":
        return "#2986cc";
      case "[KoV]":
        return "#ffe599";
      case "[Dark]":
        return "#42BF88";
      case "[d_b]":
        return "#B05273";
      case "[o.O]":
        return "#BB8FCE";
      case "[8]":
        return "lightgreen";
      // Ajoutez ici d'autres cas pour d'autres tags
      default:
        return "white";
    }
  } else {
    return "white";
  }
}