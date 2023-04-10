export function GetTagColor(tag, tagColorsEnabled) {
  if (tagColorsEnabled) {
    switch (tag) {
      case "[PASTA]":
        return "orange";
      case "[Cake]":
        return "pink";
      case "[TAG]":
        return "red";
      case "[GoD]":
        return "lightblue";
      case "[MNKY]":
        return "cyan";
      case "[-]":
        return "violet";
      case "[666]":
        return "lightgreen";
      case "[T3M]":
        return "orange";      
      case "[X/0]":
        return "yellow";
      // Ajoutez ici d'autres cas pour d'autres tags
      default:
        return "white";
    }
  } else {
    return "white";
  }
}