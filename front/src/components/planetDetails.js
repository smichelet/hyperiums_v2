import { FormatPlanetProd, FormatPlanetRace, FormatPlanetGovSystem } from './formatPlanetData';

export const PlanetDetails = ({ planet }) => {
  if (!planet) {
    return <p></p>;
  }

  return (
    <table style={{ border: 'solid black 1px', backgroundColor: "#AFAFAF"}}>
      <th style={{ width: '150px', height: '30px'}}>{planet.name}</th>
      <tr>({planet.x}, {planet.y})</tr>
      <tr>{FormatPlanetProd(planet.prod)}</tr>
      <tr>{FormatPlanetRace(planet.race)}</tr>
      <tr>{FormatPlanetGovSystem(planet.govsystem)}</tr>
      <tr>Tag : {planet.tag}</tr>
      <tr>Activity : {planet.activity}</tr>
      <tr>
        <img
        src="https://www.hyperiums.com/themes/theme1/misc/influ_unit.gif"
        alt="civlevel"
        style={{ width: "12px", height: "10px", paddingRight: "5px" }}
      />{planet.civlevel}</tr>
    </table>
  );
};


