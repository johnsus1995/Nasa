const express = require("express");
const { getAllLaunches,httpCreateNewLaunch } = require("./launches.controller");
const launchesRouter = express.Router();

launchesRouter.get("/", getAllLaunches);
launchesRouter.post("/", httpCreateNewLaunch);


module.exports = launchesRouter;
