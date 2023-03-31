const router = require("express").Router();
const clientPromise = require("../../db/conexao");

router.post("/", async (req, res) => {
  console.log("JKL");
  try {
    const cliente = await clientPromise;
    const db = cliente.db("glab_admin");
    const data = await db
      .collection("clientes")
      .findOne({ email: req.body.email, senha: req.body.senha });
    if (!data) {
      res.json("false");
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
