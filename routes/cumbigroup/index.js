const router = require("express").Router();
const clientPromise = require("../../db/conexao");

router.get("/allactivites", async (req, res) => {
 try {

    const cliente = await clientPromise;
    const db = cliente.db("aef");
    const resul = await db.collection("actividades").find({}).toArray();

    return res.status(200).json(resul);
  } catch (err) {
    res.status(500).json(err);
  }
}); 

router.get("/pesquisas", async (req, res) => {
  try {
 
     const cliente = await clientPromise;
     const db = cliente.db("aef");
     const resul = await db.collection("pesquisa").find({}).toArray();
 
     return res.status(200).json(resul);
   } catch (err) {
     res.status(500).json(err);
   }
 }); 

module.exports = router;
