const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCef1jtv8k8NJ4eURMh8vnjC-eCEcV0zwk'
});

const app = express();
app.use(express.json()); 
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/map', (req, res) => {
  res.render('map');
});
app.get('/adminlogin', (req, res) => {
  res.render('adminlogin');
});
app.get('/admin', (req, res) => {
  res.render('adminportal');
});


// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
