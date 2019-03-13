const db = require('../../config/database'); 

//connection.connect();

//module.exports = connection;

var jobsModel={
 
     getAllJobs: function(callback){
          //console.log('getAllJobs' );
          //grab the site section from the req variable (/strains/)
          //console.log(req) to see all the goodies
          //let pathname = req._parsedUrl.pathname.split('/');
          //split makes an array, so pick the second row
          let section = 'job_type';
          
          //query the DB using prepared statement
          var results = db.query('SELECT * from ??', [section], function (error, results, fields) {
              //if error, print blank results
              if (error) {
                   console.log(error);
                  var apiResult = {};
                  
                  apiResult.meta = {
                      table: section,
                      type: "collection",
                      total: 0
                  }
                  //create an empty data table
                  apiResult.data = [];
                  //console.log('getAllJobs no' );
                  //send the results (apiResult) as JSON to Express (res)
                  //Express uses res.json() to send JSON to client
                  //you will see res.send() used for HTML
                  callback(null, apiResult);
                  
              }
              
              //make results 
              var resultJson = JSON.stringify(results);
              resultJson = JSON.parse(resultJson);
              var apiResult = {};
  
                  
             // create a meta table to help apps
             //do we have results? what section? etc
              apiResult.meta = {
                  table: section,
                  type: "collection",
                  total: resultJson.length
              }
              
              //add our JSON results to the data table
              apiResult.data = resultJson;
              
          //     console.log('getAllJobs yes' );
          //     console.log(apiResult);
              //send JSON to Express
              callback(null, apiResult);//res.apiResult;
          });
      },
//      getJobsById:function(id,callback){
     
//     return db.query("select * from job_salary where Id=?",[id],callback);
//      },
//      addJobs:function(Task,callback){
//      return db.query("Insert into job_salary values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
//      },
//      deleteJobs:function(id,callback){
//       return db.query("delete from job_salary where Id=?",[id],callback);
//      },
//      updateJobs:function(id,Task,callback){
//       return db.query("update job_salary set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
//      }
     
    };
     module.exports=jobsModel;