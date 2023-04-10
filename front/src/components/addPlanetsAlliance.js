export function AddPlanetsAlliance(filePlanetsAlliance, csvFilePlanets) {
  // Formatter les données du fichier local contenant les planètes de l'alliance
  const dataToFormat = filePlanetsAlliance.split('\n');
  const newLines = dataToFormat.map((line) => {
    line = line.replace(/[\t ]+/g, " ");
    const lineArr = line.split(" ");
    const modifiedLineArray = lineArr.slice(2, -1);
    const modifiedLine = modifiedLineArray.join(" ");
    return modifiedLine;
  });
  const newPlanetsAlliance = newLines.join(" ");

  // Traitement du fichier CSV de la liste complète des planètes afin d'ajouter le tag de notre alliance
  let planetsArray = csvFilePlanets.split("\n");

  // Boucle sur chaque ligne
  for (let i = 1; i < planetsArray.length; i++) {
    let planet = planetsArray[i].split(",");
    let planetName = planet[1];
  
    // Vérifie si le nom de la planète est dans la liste
    if (newPlanetsAlliance.indexOf(planetName) !== -1) {
      // Remplace la valeur du tag "[]" par "[8]"
      planet[8] = "[8]";
    }
  
    // Rejoindre les champs de la planète en une chaîne de caractères et remplacer la ligne dans le tableau
    planetsArray[i] = planet.join(",");
  }
  
  // Rejoindre les lignes du tableau en une chaîne de caractères
  let updatedPlanetsData = planetsArray.join("\n");
  
  console.log(updatedPlanetsData);
  return(updatedPlanetsData);
}