const router = require("express").Router();
const clientPromise = require("../../db/conexao");

router.get("/allactivites", async (req, res) => {
 try {
    const cliente = await clientPromise;
const db = cliente.db("aef");
const resul = await db.collection("actividades").find({})
    .sort({ _id: -1 })
    .toArray();
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

 router.post("/comprovativos", async (req, res) => {
  try {
 
     const cliente = await clientPromise;
     const db = cliente.db("destinos");
     const resul = await db.collection("comprovativos").find(req.body).toArray();
 
     return res.status(200).json(resul);
   } catch (err) {
     res.status(500).json(err);
   }
 }); 

 router.post("/add", async (req, res) => {
  try {
 
     const cliente = await clientPromise;
     const db = cliente.db("destinos");
     const resul = await db.collection("comprovativos").insertOne(req.body)
     return res.status(200).json(resul);
   } catch (err) {
     res.status(500).json(err);
   }
 }); 

module.exports = router;
