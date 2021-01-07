const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.use('/', express.static(path.join(__dirname, '../client/dist')))
const axios = require('axios')


app.get('/cities', (req,res) =>{
  const data = [];
  axios.get('https://api.teleport.org/api/urban_areas/')
  .then((response) => response.data._links['ua:item'].forEach((city) => {
    let temp = {};
    temp['name'] = city.name
    temp['link'] = city.href
    data.push(temp)
  }))
  .then(() => res.send(data))
  .catch((error) => res.sendStatus(500));
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})