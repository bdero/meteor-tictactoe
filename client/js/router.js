Router.configure({
  layoutTemplate: 'main_layout'
});

Router.route('/', function () {
  this.render('navbar', {
    to: 'navbar'
  });
  
  this.render('welcome', {
    to: 'content'
  });
});
