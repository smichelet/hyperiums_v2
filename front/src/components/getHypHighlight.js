export function GetHypHighlight(govsystem, hypHighlightEnabled) {
  if (hypHighlightEnabled) {
    switch (govsystem) {
      case 3:
        return "bolder";
      // Ajoutez ici d'autres cas pour d'autres tags
      default:
        return "normal";
    }
  } else {
    return "normal";
  }
}