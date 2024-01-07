const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

const PokeSeed = require("./models/pokemon.js");
const Pokemon = require("./models/pokeSchema.js");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/pokeseed", async (req, res) => {
  try {
    const data = await Pokemon.create(PokeSeed);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/", (req, res) => {
  res.redirect("/pokedex");
});

app.get("/pokedex", async (req, res) => {
  try {
    const allPokemon = await Pokemon.find({}).maxTimeMS(10000); // Set timeout to 10 seconds
    res.render("index.ejs", { allPokemon });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.get("/pokedex/:id", async (req, res) => {
  try {
    const currentPokemon = await Pokemon.findById(req.params.id).maxTimeMS(10000); // Set timeout to 10 seconds
    console.log(currentPokemon);
    res.render("show.ejs", { pokemon: currentPokemon });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.get("/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/", async (req, res) => {
  try {
    await Pokemon.create(req.body);
    res.redirect("/pokedex");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.get("/:id/edit", async (req, res) => {
  try {
    const currentPokemon = await Pokemon.findById(req.params.id).maxTimeMS(10000); // Set timeout to 10 seconds
    res.render("edit.ejs", { Pokemon: currentPokemon });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.put("/:id", async (req, res) => {
  try {
    let convertedBody = {
      name: req.body.name,
      img: req.body.img,
      type: req.body.type.split(", "),
      stats: {
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        spattack: req.body.spattack,
        spdefense: req.body.spdefense,
        speed: req.body.speed,
      },
    };
    const updatedItem = await Pokemon.findByIdAndUpdate(
      req.params.id,
      convertedBody,
      { new: true }
    ).maxTimeMS(10000); // Set timeout to 10 seconds
    res.redirect("/pokedex");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    await Pokemon.findByIdAndRemove(req.params.id).maxTimeMS(10000); // Set timeout to 10 seconds
    res.redirect("/pokedex");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Pokedex app listening on PORT: ${PORT}`);
});
