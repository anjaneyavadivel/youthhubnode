//const db = require('../../config/database'); 
var jobsModule = require('../models/jobs');


// app.get('/', function (req, res) {
//     res.render('index', { title: 'Hey', message: 'Hello there!'});
//   });


exports.jobSalaryList = function (req, res) {
    jobsModule.getAllJobs(function(error, joblist){
        res.render('../views/jobs/salary-list.ejs', {
              title: 'Job Type',
              joblist:joblist
          });
          //res.send('Product Created successfully')
    });

}
// exports.addJobSalary = function (req, res) {
//     res.render('../views/jobs/add-job.ejs', {
//         message:'',
//         title: "Add a new job"
//     });
// };
// exports.saveJobSalary = function (req, res) {
//     // if (!req.files) {
//     //     return res.status(400).send("No files were uploaded.");
//     // }

//     let message = '';
//     let first_name = req.body.first_name;
//     let last_name = req.body.last_name;
//     let position = req.body.position;
//     let number = req.body.number;
//     let username = req.body.username;
//     // let uploadedFile = req.files.image;
//     // let image_name = uploadedFile.name;
//     // let fileExtension = uploadedFile.mimetype.split('/')[1];
//     // image_name = username + '.' + fileExtension;

//     res.render('../views/jobs/add-job.ejs', {
//         message:'err',
//         title: "Add a new job"
//     });
// };

// exports.updateJobSalary = function (req, res) {
//     let playerId = req.params.id;
//     let first_name = req.body.first_name;
//     let last_name = req.body.last_name;
//     let position = req.body.position;
//     let number = req.body.number;

    
//     res.render('../views/jobs/edit-job.ejs', {
//         message:'err',
//         title: "Add a new job"
//     });
// };

// exports.product_delete = function (req, res) {
//     Product.findByIdAndRemove(req.params.id, function (err) {
//         if (err) return next(err);
//         res.send('Deleted successfully!');
//     })
// };







