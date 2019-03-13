var home = require('../app/controllers/home');
var jobs = require('../app/controllers/jobs');

//you can include all your controllers

module.exports = function (app, passport) {

    app.get('/login', home.login);
    app.get('/signup', home.signup);

    app.get('/', home.loggedIn, home.home);//home
    app.get('/home', home.loggedIn, home.home);//home

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/home', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    //job
    app.get('/job-salary-list', jobs.jobSalaryList);
    // app.get('/job-add', jobs.addJobSalary);
    // app.post('/job-add', jobs.saveJobSalary);
    // app.get('/job-edit/:id', jobs.editJobSalary);
    // app.post('/job-edit/:id', jobs.updateJobSalary);
    // app.get('/job-delete/:id', jobs.deleteJobSalary);
    // app.route('/job-salary-list')
    // .get(jobs.jobSalaryList);
    //app.use('/job-salary-list', require('./controllers/jobs'));//job salary list



}
