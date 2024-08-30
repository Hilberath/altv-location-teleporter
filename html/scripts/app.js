let app = new Vue({
  el: "#app",
  data: {
    categories: ["Alle", "Staatliches", "Firmen", "Garage", "Appartments", "Sonstiges", "IPLs"],
    /*
    Kategorien:
    0 = Alle
    1 = Staatliches
    2 = Firmen
    3 = Garage
    4 = Appartments
    5 = Sonstiges
    6 = IPLs

    Die Namen der Kategorien kannst du Oberhalb abändern,
    die Bilder der Orte müssen den gleichen Namen haben und in dem "models" Ordner eingefügt werden
    Die Bilder für die Kategorien findest du in dem Ordner "categories"
    */
    models: [
      { category: 1, model: "PDMissionRow" },
      { category: 1, model: "PDVinewood" },
      { category: 1, model: "PDLaMesa" },
      { category: 1, model: "PDVespucci" },
      { category: 1, model: "PDDelPerro" },
      { category: 1, model: "PDRockford" },
      { category: 1, model: "PDDavis" },
      { category: 1, model: "PDSandy" },
      { category: 1, model: "PDPaleto" },
      { category: 1, model: "MDCentral" },
      { category: 1, model: "MDPillbox" },
      { category: 1, model: "MDMountZonah" },
      { category: 1, model: "MDElBurro" },
      { category: 1, model: "MDEclipse" },
      { category: 1, model: "MDOceans" },
      { category: 1, model: "MDSandy" },
      { category: 1, model: "MDPaleto" },
      { category: 1, model: "FDRockford" },
      { category: 1, model: "FDDavis" },
      { category: 1, model: "FDElBurro" },
      { category: 1, model: "FDSandy" },
      { category: 1, model: "FDPaleto" },
      { category: 1, model: "DoJ" },
      { category: 1, model: "StatePrison" },
      { category: 1, model: "Cityhall1" },
      { category: 1, model: "Cityhall2" },
      { category: 1, model: "Airport" },
      { category: 1, model: "Fahrschule1" },

      { category: 2, model: "Diamond" },
      { category: 2, model: "TaxiDCC" },
      { category: 2, model: "WeazelNews" },
      { category: 2, model: "Lifeinvader" },
      { category: 2, model: "Bahamas" },
      { category: 2, model: "PDM" },
      { category: 2, model: "Mosley" },
      { category: 2, model: "Bennys" },
      { category: 2, model: "LSC1" },
      { category: 2, model: "LSC2" },

      { category: 3, model: "2Garage" },
      { category: 3, model: "6Garage" },
      { category: 3, model: "10Garage" },
      { category: 3, model: "MissionCarpark" },

      { category: 4, model: "LowEndApartment" },
      { category: 4, model: "4IntegrityWayApt28" },
      { category: 4, model: "4IntegrityWayApt30" },
      { category: 4, model: "DellPerroHeightsApt4" },
      { category: 4, model: "DellPerroHeightsApt7" },
      { category: 4, model: "RichardMajesticApt2" },
      { category: 4, model: "TinselTowersApt42" },
      { category: 4, model: "EclipseTowersApt3" },
      { category: 4, model: "3655WildOatsDrive" },
      { category: 4, model: "2044NorthConkerAve" },
      { category: 4, model: "2045NorthConkerAve" },
      { category: 4, model: "2862HillcrestAve" },
      { category: 4, model: "2868HillcrestAve" },
      { category: 4, model: "2874HillcrestAve" },
      { category: 4, model: "2677Whispymound" },
      { category: 4, model: "2133MadWayne" },
      { category: 4, model: "Motel" },

      { category: 5, model: "BunkerInterior" },
      { category: 5, model: "CharCreator" },
      { category: 5, model: "TortureRoom" },
      { category: 5, model: "SolomonsOffice" },
      { category: 5, model: "PsychiatristsOffice" },
      { category: 5, model: "OmegasGarage" },
      { category: 5, model: "MovieTheatre" },
      { category: 5, model: "MadrazosRanch" },
      { category: 5, model: "LestersHouse" },
      { category: 5, model: "FBITopFloor" },
      { category: 5, model: "FBIFloor49" },
      { category: 5, model: "FBIFloor47" },
      { category: 5, model: "IAAOffice" },

      { category: 6, model: "IPLStadium" },
      { category: 6, model: "IPLOfficeArcadius" },
      { category: 6, model: "IPLOfficeMazeBank" },
      { category: 6, model: "IPLOfficeMazeBankW" },
      { category: 6, model: "IPLOfficeLombank" },
      { category: 6, model: "IPLCasinoMain" },
      { category: 6, model: "IPLCasinoGarage" },
      { category: 6, model: "IPLMorgue" },
      { category: 6, model: "IPLLestersFactory" },
      { category: 6, model: "IPLLifeinvader" },
      { category: 6, model: "IPLAircraftCarrier" },
      { category: 6, model: "IPLGunrunningHeist" },
      { category: 6, model: "IPLDignityHeistYacht" },
      { category: 6, model: "IPLCluckingBellFarms" },
      { category: 6, model: "IPLTunnel" },
      { category: 6, model: "IPLApartment1" },
      { category: 6, model: "IPLApartment2" },
      { category: 6, model: "IPLApartment3" },
      { category: 6, model: "IPLWarehouse1" },
      { category: 6, model: "IPLWarehouse2" },
      { category: 6, model: "IPLWarehouse3" },
      { category: 6, model: "IPLWarehouse4" },
      { category: 6, model: "IPLWarehouseSmall" },
      { category: 6, model: "IPLWarehouseMedium" },
      { category: 6, model: "IPLWarehouseLarge" },
      { category: 6, model: "IPLFIBLobby" },
      { category: 6, model: "IPLCarwash" },
      { category: 6, model: "IPLLostMC" },
      { category: 6, model: "IPLPillboxMD" },
      { category: 6, model: "IPLPDM" },
      { category: 6, model: "IPLFerrisWheel" },
      { category: 6, model: "IPLRaceTrack" },
      { category: 6, model: "IPLCargoShip" },
      { category: 6, model: "IPLUnionDepo" },
      { category: 6, model: "IPLTrevorsTrailer" },
      { category: 6, model: "IPLMaxRendaShop" },
      { category: 6, model: "IPLJuwel" },
      { category: 6, model: "IPLONeilsFarm" },
      { category: 6, model: "IPLCayoPerico" },
      { category: 6, model: "IPLNorthYankton" },
    ],
    keyword: "",
    storage: [],
    //#########################################################
    //Wenn du die Index.HTML Datei im Browser öffnen und bearbeiten willst
    //setze für diesen Zeitraum visible auf true
    //#########################################################
    visible: true,
  },

  watch: {
    keyword: function (input) {
      if (input.length > 0) {
        this.storage = this.models.filter((loca) => {
          return loca.model.toLocaleLowerCase().includes(input.toLowerCase());
        });
      } else {
        this.storage = [];
      }
    },
  },
  methods: {
    close() {
      this.visible = false;
      alt.emit("menu", false);
    },
    select(model) {
      alt.emit("select", model);
    },
  },
});
