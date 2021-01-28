const express = require("express");
const request = require("request");

const app = express();
const port = 3080;

app.get("/api/cocktail", (req, res) => {
  request(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const parsedBody = JSON.parse(body);
        const cocktail_name = parsedBody["drinks"][0]["strDrink"];
        res.send({ cocktail_name });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
