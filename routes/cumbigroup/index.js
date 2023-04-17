const router = require("express").Router();
const clientPromise = require("../../db/conexao");

router.post("/", async (req, res) => {
  try {
    const cliente = await clientPromise;
    const db = cliente.db("glab_admin");
    const data = await db.collection("cumbigroup").insertOne(req.body);
    res.status(200).json("sucesso");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
