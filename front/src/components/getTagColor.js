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
        return "darkgreen";
      case "[T3M]":
        return "orange";      
      case "[X/0]":
        return "#145a32";
      case "[KoV]":
        return "#B499CB";
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