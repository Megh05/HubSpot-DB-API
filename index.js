const express = require('express');
const axios = require('axios');

const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

const PRIVATE_APP_ACCESS = "";

app.get('/', async (req, res) => {

    // const rows = 'https://api.hubapi.com/hubdb/api/v2/tables/5418899/rows';
    // const headers = {
    //     Authorization: `Bearer pat-na1-f564da6d-b556-42d9-b280-d9e792fd9b98`,
    //     'Content-Type': 'application/json'
    // }

    try {
        const resp = await axios.get('https://api.hubapi.com/cms/v3/hubdb/tables/games/rows',
        {
          headers: {
            'Authorization': `Bearer pat-na1-f564da6d-b556-42d9-b280-d9e792fd9b98`,
            'Content-Type': 'application/json'
          }
        },
        (err, data) => {
          // Handle the API response
        }
      );
        const data = resp.data.results;
        // console.log(data);
        console.log(data);
        // $("#reposneText").html(data[0].id); 
    } catch (error) {
        console.error(error);
    }

});

app.listen(5000, () => console.log('Listening on http://localhost:5000'));
