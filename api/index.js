const apiRouter = require("express").Router();
const expectedCostsRouter = require("./expectedCosts");

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    healthy: true,
  });
});

apiRouter.use("/expectedCosts", expectedCostsRouter);
// place your routers here

module.exports = apiRouter;
