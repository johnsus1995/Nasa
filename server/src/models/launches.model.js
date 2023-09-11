const launches = new Map();

const launch = {
  flightNumber: 100,
  mission:"Kepler Exploration X",
  rocket:"Explorer 151",
  launchDate:new Date(),
  target: "Kepler-442-b",
  upcoming:true,
  success:true,
  customers: ["NASA", "ISRO"],
};

launches.set(100, launch);

module.exports = {
  launches,
};
