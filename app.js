const express = require('express');
const app = express();
const opentype = require('opentype.js');

app.use(express.static('public'));

app.set('view engine', 'jade');
app.set('views', './views');

app.listen(3000, function(){
  console.log('connected 3000 port!');
  console.log(opentype.Font.name+' loaded!');
});

app.get('/', (req,res) => {
  res.render('index');
});
