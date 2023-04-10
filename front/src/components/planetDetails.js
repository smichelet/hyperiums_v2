import { FormatPlanetProd, FormatPlanetRace, FormatPlanetGovSystem } from './formatPlanetData';
import { GetTagColor } from './getTagColor';

export const PlanetDetails = ({ planet }) => {
  if (!planet) {
    return <p></p>;
  }

  const tagColor = GetTagColor(planet.tag, true);

  return (
    <table style={{ border: 'solid black 1px', backgroundColor: "whitesmoke"}}>
      <th style={{ width: '150px', height: '30px'}}>{planet.name}</th>
      <tr>x : {planet.x}, y : {planet.y}</tr>
      <tr>{FormatPlanetProd(planet.prod)}</tr>
      <tr>{FormatPlanetRace(planet.race)}</tr>
      <tr>{FormatPlanetGovSystem(planet.govsystem)}</tr>
      <tr>Tag : <span style={{ backgroundColor: tagColor }}>{planet.tag}</span></tr>
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


