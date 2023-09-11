const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer 151",
  launchDate: new Date(),
  target: "Kepler-442-b",
  upcoming: true,
  success: true,
  customers: ["NASA", "ISRO"],
};

function allLaunches() {
  return Array.from(launches.values());
}

function createLaunch(launch) {
  launches.set(
    latestFlightNumber++,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      upcoming: true,
      success: true,
      customers: ["NASA", "ISRO"],
    })
  );
}

module.exports = {
  allLaunches,
  createLaunch,
};
