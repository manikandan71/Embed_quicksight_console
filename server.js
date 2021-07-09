const AWS = require('aws-sdk');
const https = require('https');
const fs = require('fs');
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

app.get('/', function(req, res){
   var quicksight = new AWS.Service({
      apiConfig: require('./quicksight-2018-04-01.min.json'),
      region: 'us-east-1'
});


quicksight.getDashboardEmbedUrl({
      'AwsAccountId': '',
      'DashboardId': '',
      'IdentityType': 'IAM',
      'SessionLifetimeInMinutes': 600,
      'UndoRedoDisabled': false

}, function(err, data) {
      console.log('Errors: ');
      console.log(err);
      console.log('Response: ');
      console.log(data);
      res.send(data);

});
});


app.get('/customerchurn', function(req, res){
   var quicksight = new AWS.Service({
      apiConfig: require('./quicksight-2018-04-01.min.json'),
      region: 'us-east-1'
});


quicksight.getDashboardEmbedUrl({
      'AwsAccountId': '',
      'DashboardId': '',
      'IdentityType': 'IAM',
      'SessionLifetimeInMinutes': 600,
      'UndoRedoDisabled': false

}, function(err, data) {
      console.log('Errors: ');
      console.log(err);
      console.log('Response: ');
      console.log(data);
      res.send(data);

});
});


app.get('/retail', function(req, res){
   var quicksight = new AWS.Service({
      apiConfig: require('./quicksight-2018-04-01.min.json'),
      region: 'us-east-1'
});


quicksight.getDashboardEmbedUrl({
      'AwsAccountId': '',
      'DashboardId': '',
      'IdentityType': 'IAM',
      'SessionLifetimeInMinutes': 600,
      'UndoRedoDisabled': false

}, function(err, data) {
      console.log('Errors: ');
      console.log(err);
      console.log('Response: ');
      console.log(data);
      res.send(data);

});
});


app.get('/stockmarket', function(req, res){
   var quicksight = new AWS.Service({
      apiConfig: require('./quicksight-2018-04-01.min.json'),
      region: 'us-east-1'
});


quicksight.getDashboardEmbedUrl({
      'AwsAccountId': '',
      'DashboardId': '',
      'IdentityType': 'IAM',
      'SessionLifetimeInMinutes': 600,
      'UndoRedoDisabled': false

}, function(err, data) {
      console.log('Errors: ');
      console.log(err);
      console.log('Response: ');
      console.log(data);
      res.send(data);

});
});


app.get('/insurance', function(req, res){
   var quicksight = new AWS.Service({
      apiConfig: require('./quicksight-2018-04-01.min.json'),
      region: 'us-east-1'
});


quicksight.getDashboardEmbedUrl({
      'AwsAccountId': '',
      'DashboardId': '',
      'IdentityType': 'IAM',
      'SessionLifetimeInMinutes': 600,
      'UndoRedoDisabled': false

}, function(err, data) {
      console.log('Errors: ');
      console.log(err);
      console.log('Response: ');
      console.log(data);
      res.send(data);

});
});



// var key = fs.readFileSync('/etc/letsencrypt/live/api.ittstar.ai/privkey.pem');
// var cert = fs.readFileSync('/etc/letsencrypt/live/api.ittstar.ai/fullchain.pem');
// var options = {
//   key: key,
//   cert: cert
// };

var server = https.createServer(options, app);

server.listen(3000, () => {
  console.log("server starting on port : " + 3000)
});
//app.listen(3000);
