const { allLaunches, createLaunch } = require("../../models/launches.model");

function getAllLaunches(req, res) {
  return res.status(200).json(allLaunches());
}

function httpCreateNewLaunch(req, res) {
  const newLaunch = { ...req.body, launchDate: new Date(req.body.launchDate) };
  createLaunch(newLaunch);
  return res.status(201).json({ ok: true, data: newLaunch });
}

module.exports = {
  getAllLaunches,
  httpCreateNewLaunch,
};
