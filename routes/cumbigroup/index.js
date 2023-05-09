const router = require("express").Router();
const clientPromise = require("../../db/conexao");

router.post("/", async (req, res) => {
  try {
    const cliente = await clientPromise;
    const db = cliente.db("glab_admin");

    const data1 = await db
      .collection("cumbigroup")
      .findOne({ email: req.body.email });

    if (data1) {
      console.log("email ja existe");
    } else {
      const data = await db.collection("cumbigroup").insertOne(req.body);
    }

    return res.status(200).json("sucesso");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
