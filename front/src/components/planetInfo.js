// export function PlanetInfo({ planet }) {
//   return (
//     <div className="planetInfo">
//       <h2>{planet.name}</h2>
//       <p>Race : {planet.race}</p>
//       <p>Prod : {planet.prod}</p>
//       {/* Ajouter d'autres informations */}
//     </div>
//   );
// }

export function HidePlanetInfo() {
  // Supprimer la fenêtre d'information
  const planetInfo = document.querySelector('.planet-info');
  if (planetInfo) {
    planetInfo.remove();
  }
}

export function ShowPlanetInfo(planet, event) {
  // Créer la fenêtre d'information
  console.log('Bla');
  const planetInfo = document.createElement('div');
  planetInfo.classList.add('planet-info');
  // Ajouter les informations de la planète à la fenêtre
  planetInfo.innerHTML = `Type : ${planet.type}<br/>Prod : ${planet.prod}`;
  // Afficher la fenêtre à côté du nom de la planète
  const planetName = event.target;
  planetInfo.style.left = planetName.offsetLeft + planetName.offsetWidth + 'px';
  planetInfo.style.top = planetName.offsetTop + 'px';
  planetInfo.style.zIndex = '9999';
  // Ajouter la fenêtre à la page
  document.body.appendChild(planetInfo);
}