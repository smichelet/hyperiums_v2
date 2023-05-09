export function FormatData(csvFile) {
  const planetArray = csvFile.split("\n").map((line) => line.split(",")).slice(1).map((planet) => ({
    id: parseInt(planet[0]),
    name: planet[1],
    govsystem: parseInt(planet[2]),
    x: parseInt(planet[3]),
    y: parseInt(planet[4]),
    race: parseInt(planet[5]),
    prod: parseInt(planet[6]),
    activity: parseInt(planet[7]),
    tag: planet[8],
    civlevel: parseInt(planet[9]),
    planetsize: parseInt(planet[10]),
    sc: parseInt(planet[11]),
  }));
  
  // Tri des planètes par coordonnées x puis y
  planetArray.sort((a, b) => {
    if (a.x !== b.x) {
      return a.x - b.x;
    } else {
      return a.y - b.y;
    }
  });
  
  // Créer un objet avec les coordonnées x puis y comme clés
  const planetObject = {};
  planetArray.forEach((planet) => {
    if (!planetObject[planet.x]) {
      planetObject[planet.x] = {};
    }
    if (!planetObject[planet.x][planet.y]) {
      planetObject[planet.x][planet.y] = [];
    }
    if (planet.sc == 1) {
      planetObject[planet.x][planet.y].push(planet);
    }
  });

  return planetObject;
};