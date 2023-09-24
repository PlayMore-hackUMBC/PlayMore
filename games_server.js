const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

var games_data = JSON.parse(fs.readFileSync('./response.json', 'utf8')); /* Inside the get function */
var jsonParser = bodyParser.json()
// handling CORS
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin",
			"http://localhost:4200");
	res.header("Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept");
   bodyParser.urlencoded({ extended: true });
	next();
});




// route for handling requests from the Angular client
app.post('/v4/games', (req, res) => {
    fs.readFile('./response.json', 'utf8', (error, data) => {
        if(error){
           console.log(error);
           return;
        }
        // console.log(JSON.parse(data));
   
        res.json(games_data);
   })
});

app.post('/v4/games/id', jsonParser, (req, res) => {
   console.log(req.body.id)
   fs.readFile('./response.json', 'utf8', (error, data) => {
       if(error){
          console.log(error);
          return;
       }

       for(let i = 0; i < games_data.length; i++){
         console.log(games_data[i].id)
         if (games_data[i].id == req.body.id){
            console.log("found match")
            res.json(games_data[i]);
            break;
         }
      }
  })
});


app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
