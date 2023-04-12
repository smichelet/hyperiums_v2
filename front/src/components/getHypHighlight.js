export function GetHypHighlight(govsystem, hypHighlightEnabled) {
  if (hypHighlightEnabled) {
    switch (govsystem) {
      case 3:
        // return "border-color: red, border-width: 10,";
        return "solid red 2px";
      // Ajoutez ici d'autres cas pour d'autres tags
      default:
        return "none";
    }
  } else {
    return "none";
  }
}