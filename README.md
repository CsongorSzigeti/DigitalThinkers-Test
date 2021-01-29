# DigitalThinkers-Test

# Project Setup
1. git clone git@github.com:CsongorSzigeti/DigitalThinkers-Test.git (and a custom directory name if you want)
2. cd the default or the custom directory
3. cd coctail-api
4. npm install
5. npm start
6. in a new terminal navigate to the project root
7. cd coctail-app
8. npm install
9. npm start
10. it should open a browser tab with the working React App
11. Have fun! :) 

Note: Both terminals should work simultaniously with "npm-start"! It is like 2 different project in the same root.

# What's has to be done
1. The ingredients-measure information as you can see is not added to the task yet. Due to the strange JSON from the cocktail API I left this last. (I would develop this with a while loop where I can loop through the many keys in the cocktail object and checking if the strIngredient has a value. Then the same with the measures and since they are in the same order I would simply map them together.)

2. Routing the Frontend app to /cocktail only. I found a solution to it, but somehow it was not worked for me, or I'm just simply too tired. (It's the reactrouter.com redirect feature what I found.)
