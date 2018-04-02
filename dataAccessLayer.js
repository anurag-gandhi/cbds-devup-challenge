var Q = require('q');
var fs = require("fs");
var csv = require('csv');
var alasql = require('alasql');
var strings = [];

var getExampleItemData = function() {
    var deferred = Q.defer();
    var readStream = fs.createReadStream('data/data.csv');

    var parser = csv.parse({columns:true});
    parser.on('readable', function() {
        while(record = parser.read()) {
            strings.push(record);
        }
    });

    parser.on('error', function(err) {
      console.log(err.message);
  });

    parser.on('finish', (function() {
      console.log("OK");
  }));

    readStream.pipe(parser);
    var result = [
    {key: "2016-06-02", values: 10},
    {key: "2016-06-03", values: 15},
    {key: "2016-06-04", values: 16},
    {key: "2016-06-05", values: 17},
    {key: "2016-06-06", values: 25},
    {key: "2016-06-07", values: 5},

    ];
    alasql(['SELECT date as key, sum([count]) as [values] FROM csv("./data/data") GROUP BY date '])
      .then(function(res){
            console.log(res[0]);
           deferred.resolve(res[0]);// output depends on mydata.xls
      }).catch(function(err){
           console.log('Does the file exist? There was an error:', err);
      });
    


    

    return deferred.promise;
}


var getAvgDaily = function() {
    var deferred = Q.defer();

    alasql(['SELECT date as key, avg([count]) as [values] FROM csv("./data/data") GROUP BY date '])
      .then(function(res){
            console.log(res[0])
           deferred.resolve(res[0]);// output depends on mydata.xls
      }).catch(function(err){
           console.log('Does the file exist? There was an error:', err);
      });
    


    

    return deferred.promise;
}


module.exports = {
    // export methods here
    getExampleItemData: getExampleItemData,
    getAvgDaily: getAvgDaily
};
