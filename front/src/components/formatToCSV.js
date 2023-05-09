export function FormatToCSV(data) {
  //// Formatte en CSV
  // Divise chaque ligne en tableau de valeurs
  const dataToFormat = data.split('\n');
  dataToFormat.splice(0, 1);
	dataToFormat.splice(0, 1, 'id,name,govsystem,x,y,race,prod,activity,tag,civlevel,planetsize,sc');
  const csvFile = dataToFormat.join('\n').replace(/ /g, ',');

  return csvFile;
}