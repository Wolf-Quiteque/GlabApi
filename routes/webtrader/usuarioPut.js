const router = require("express").Router();
const axios = require("axios");

router.put("/", function (req, res) {
  res.send("<h2>Actualizar usuarios da empresa</h2>");
});

router.put("/:id", async (req, res) => {
  try {
    axios
      .put(
        "https://emi-db-api-wolf-quiteque.vercel.app/api/db/webtrader/usuario/put/" +
          req.params.id,
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
