import * as alt from "alt-server";
import * as fs from "fs/promises"; // Verwenden von fs/promises für die moderne Promise-basierte API
import path from "path"; // Importiere das path-Modul

let locations = [];
//#########################################################
//Bestimme den absoluten Pfad zur locations.json
//#########################################################
const locationsFilePath = path.resolve("resources/Hilberath-Locations/locations.json");
//#########################################################
//Lade die JSON-Datei beim Start des Servers
//#########################################################
async function loadLocations() {
  try {
    const data = await fs.readFile(locationsFilePath, "utf8");
    locations = JSON.parse(data);
    console.log("Locations erfolgreich geladen:", locations);
  } catch (err) {
    console.error("Fehler beim Lesen oder Parsen von locations.json:", err);
  }
}

loadLocations();

alt.onClient("playerLocPos", (player, loca) => {
  console.log(loca);
  //#########################################################
  //Benutzt die Location direkt als String
  //#########################################################

  const locationName = loca;
  const location = locations.find((loc) => loc.name.toLowerCase() === locationName.toLowerCase());
  if (!location) {
    return;
  }
  const coords = location.position;
  player.pos = new alt.Vector3(coords[0], coords[1], coords[2]);
});
