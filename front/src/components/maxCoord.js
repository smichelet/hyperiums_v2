export function MaxCoord(csvFile) {
  const csvFileNoHeader = csvFile.split('\n').slice(1);
  let maxAbsCoord = 0;

  csvFileNoHeader.forEach(row => {
  const [id, name, govsystem, x, y, race, prod, activity, tag, civlevel] = row.split(',');

  const absX = Math.abs(parseInt(x));
  const absY = Math.abs(parseInt(y));
  const maxAbsCoordRow = Math.max(absX, absY);

  if (maxAbsCoordRow > maxAbsCoord) {
    maxAbsCoord = maxAbsCoordRow;
  }
  });

  return maxAbsCoord;
}