const router = require("express").Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  try {
    axios
      .post(
        "https://emi-db-api-wolf-quiteque.vercel.app/api/db/ipo/usuario/post/",
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
        "https://emi-db-api-wolf-quiteque.vercel.app/api/db/ipo/usuario/post/novo",
        req.body
      )
      .then((response) => {
        res.status(200).json(response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/usuario", async (req, res) => {
  try {
    axios
      .post(
        "https://emi-db-api-wolf-quiteque.vercel.app/api/db/ipo/usuario/post/usuario",
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
