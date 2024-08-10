let app = new Vue({
  el: "#app",
  data: {
    categories: ["Alle", "Garage", "Appartments", "Staatliches", "Firmen", "Sonstiges"],
    models: [
      { category: 1, model: "2Garage" },
      { category: 1, model: "6Garage" },
      { category: 1, model: "10Garage" },

      { category: 2, model: "LowEndApartment" },
      { category: 2, model: "4IntegrityWayApt28" },
      { category: 2, model: "4IntegrityWayApt30" },
      { category: 2, model: "DellPerroHeightsApt4" },
      { category: 2, model: "DellPerroHeightsApt7" },
      { category: 2, model: "RichardMajesticApt2" },
      { category: 2, model: "TinselTowersApt42" },
      { category: 2, model: "EclipseTowersApt3" },
      { category: 2, model: "3655WildOatsDrive" },
      { category: 2, model: "2044NorthConkerAve" },
      { category: 2, model: "2045NorthConkerAve" },
      { category: 2, model: "2862HillcrestAve" },
      { category: 2, model: "2868HillcrestAve" },
      { category: 2, model: "2874HillcrestAve" },
      { category: 2, model: "2677Whispymound" },
      { category: 2, model: "2133MadWayne" },
      { category: 2, model: "Motel" },

      { category: 3, model: "PDMissionRow" },
      { category: 3, model: "PDVinewood" },
      { category: 3, model: "PDLaMesa" },
      { category: 3, model: "PDVespucci" },
      { category: 3, model: "PDDelPerro" },
      { category: 3, model: "PDRockford" },
      { category: 3, model: "PDDavis" },
      { category: 3, model: "PDSandy" },
      { category: 3, model: "PDPaleto" },
      { category: 3, model: "MDCentral" },
      { category: 3, model: "MDPillbox" },
      { category: 3, model: "MDMountZonah" },
      { category: 3, model: "MDElBurro" },
      { category: 3, model: "MDEclipse" },
      { category: 3, model: "MDOceans" },
      { category: 3, model: "MDSandy" },
      { category: 3, model: "MDPaleto" },
      { category: 3, model: "FDRockford" },
      { category: 3, model: "FDDavis" },
      { category: 3, model: "FDElBurro" },
      { category: 3, model: "FDSandy" },
      { category: 3, model: "FDPaleto" },
      { category: 3, model: "DoJ" },
      { category: 3, model: "StatePrison" },
      { category: 3, model: "Cityhall1" },
      { category: 3, model: "Cityhall2" },
      { category: 3, model: "Airport" },
      { category: 3, model: "Fahrschule1" },

      { category: 4, model: "Diamond" },
      { category: 4, model: "TaxiDCC" },
      { category: 4, model: "WeazelNews" },
      { category: 4, model: "Lifeinvader" },
      { category: 4, model: "Bahamas" },
      { category: 4, model: "PDM" },
      { category: 4, model: "Mosley" },
      { category: 4, model: "Bennys" },
      { category: 4, model: "LSC1" },
      { category: 4, model: "LSC2" },

      { category: 5, model: "BunkerInterior" },
      { category: 5, model: "CharCreator" },
      { category: 5, model: "MissionCarpark" },
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
    ],
    keyword: "",
    storage: [],
    visible: false,
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
