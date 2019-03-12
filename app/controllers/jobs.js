//const db = require('../../config/database'); 
var jobsModule = require('../models/jobs');


// app.get('/', function (req, res) {
//     res.render('index', { title: 'Hey', message: 'Hello there!'});
//   });


exports.jobSalaryList = function (req, res) {
    jobsModule.getAllJobs(function(error, joblist){
        res.render('../views/salary-list.ejs', {
              title: 'Job Type',
              joblist:joblist
          });
    });
    // jobs.getAllJobs(function(err, joblist) {
    //     console(joblist);
    //     res.render('../views/salary-list.ejs', {
    //         error : req.flash("error"),
    //         success: req.flash("success"),
    //         joblist:joblist,

    //      });
    //         //res.render('../views/salary-list.ejs', { title: 'Hey', message: 'Hello there!'});
    //         //res.render('dashboard', {comments: comments})
    //       })
    // jobsModel.getAllJobs(function(err, comments) {
    //     res.render('dashboard', {comments: comments})
    //   })
    // res.render('../views/salary-list.ejs', {
    // 	error : req.flash("error"),
    // 	success: req.flash("success"),

    //  });

}








