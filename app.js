var http = require('http');

http.createServer(function (req, res) {

const AWS = require('aws-sdk');
const https = require('https');

var quicksight = new AWS.Service({
            apiConfig: require('./quicksight-2018-04-01.min.json'),
            region: 'us-east-1'
});


quicksight.getDashboardEmbedUrl({
            'AwsAccountId': '534860077983',
            'DashboardId': 'dc4a5743-4e06-4278-8c99-02e77799a71e',
            'IdentityType': 'IAM',
            'ResetDisabled': true,
            'SessionLifetimeInMinutes': 100,
            'UndoRedoDisabled': false

}, function(err, data) {
            console.log('Errors: ');
            console.log(err);
            console.log('Response: ');
            console.log(data);

   res.write(JSON.stringify(data));
   res.end();

});

}).listen(3000, ()=>{
    console.log('Server Started on 3000');
}

);
