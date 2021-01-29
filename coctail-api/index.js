const express = require("express");
const request = require("request");

const app = express();
const port = 3080;

app.get("/api/cocktail", (req, res) => {
  let requestURL = req.query.search
    ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.query.search}`
    : "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  request(requestURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const parsedBody = JSON.parse(body);
      const cocktailDraft = parsedBody["drinks"];
      const cocktails = cocktailDraft.map(
        ({ idDrink, strDrink, strInstructions, strDrinkThumb }) => ({
          idDrink,
          strDrink,
          strInstructions,
          strDrinkThumb,
        })
      );
      res.send(cocktails);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
