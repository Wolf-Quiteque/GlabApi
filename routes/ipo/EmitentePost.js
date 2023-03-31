const router = require("express").Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  try {
    axios
      .post(
        "https://emi-db-api-wolf-quiteque.vercel.app/api/db/ipo/emitente/post/",
        req.body
      )
      .then((response) => {
        res.status(200).json(response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/novo", async (req, res) => {
  try {
    axios
      .post(
        "https://emi-db-api-wolf-quiteque.vercel.app/api/db/ipo/emitente/post/novo",
        req.body
      )
      .then((response) => {
        res.status(200).json(response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/emitente", async (req, res) => {
  try {
    axios
      .post(
        "https://emi-db-api-wolf-quiteque.vercel.app/api/db/ipo/emitente/post/emitentes",
        req.body
      )
      .then((response) => {
        res.status(200).json(response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
