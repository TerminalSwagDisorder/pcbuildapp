FlowRouter.route('/', {
  name: 'home',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'homesida'});
  }
});

FlowRouter.route('/test', {
  name: 'test',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'test'});
  }
});

FlowRouter.route('/build', {
  name: 'build',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'build2'});
  }
});



FlowRouter.route('/guides', {
  name: 'guides',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'guides'});
  }
});



FlowRouter.route('/completed', {
  name: 'completed',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'completed'});
  }
});


FlowRouter.route('/yourcomp', {
  name: 'yourcomp',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'yourcomp'});
  }
});

FlowRouter.route('/PickParts', {
  name: 'parts',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'PickParts'});
  }
});
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('MainLayout', {main: 'notfound'});
  }
};
