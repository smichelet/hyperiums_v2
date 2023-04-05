export function FormatToCSV(data) {
  //// Formatte en CSV
  // Divise chaque ligne en tableau de valeurs
  const dataToFormat = data.split('\n');
  dataToFormat.splice(0, 1);
	dataToFormat.splice(0, 1, 'id,name,govsystem,x,y,race,prod,activity,tag,civlevel,planetsize,SC');
  const csvFile = dataToFormat.join('\n').replace(/ /g, ',');

  //// Retire les deux dernières valeurs de chaque ligne (planetsize et SC)
  // Divise chaque ligne en tableau de valeurs
  const lines = csvFile.split('\n');

  // Pour chaque ligne, retire les deux dernières valeurs (planetsize et SC)
  const newLines = lines.map((line) => {
    const values = line.split(',');
    const newValues = values.slice(0, -2);
    return newValues.join(',');
  });

  // Joint les lignes en une seule chaîne de caractères
  const newFileContent = newLines.join('\n');

  return newFileContent;
}