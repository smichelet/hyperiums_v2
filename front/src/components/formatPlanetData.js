export function FormatPlanetGovSystem(planetGovSystem) {
  let govsystem

  switch (planetGovSystem) {
    case 0:
      govsystem = "Dictatorial";
      break;
    case 1:
      govsystem = "Authoritarian";
      break;
    case 2:
      govsystem = "Democratic";
      break;
    case 3:
      govsystem = "Hyp Protectorate";
      break;
  }

  return (govsystem);
}

export function FormatPlanetProd(planetProd) {
  let color
  let prod

  switch (planetProd) {
    case 0:
      color = "green"
      prod = "Agro"
      break;
    case 1:
      color = "darkred"
      prod = "Minero"
      break;
    case 2:
      color = "blue"
      prod = "Techno"
      break;
  }

  return (
    <span style={{ color: color }}><b>{prod}</b></span>
  );
}

export function FormatPlanetRace(planetRace) {
  let race
  let width

  const height = "15px"
  const paddingRight = "5px"

  switch (planetRace) {
    case 0:
      race = "Human"
      width = "32px"
      break;
    case 1:
      race = "Azterk"
      width = "28px"
      break;
    case 2:
      race = "Xillor"
      width = "18px"
      break;
  }

  return (
    <span>
      <img
        src={"https://www.hyperiums.com/themes/theme1/misc/pop_icon_" + race + ".gif"}
        alt={race}
        style={{ width: {width}, height: height, paddingRight: paddingRight }}
      />
      {race}
    </span>
  );
}