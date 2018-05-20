import Ember from 'ember';
import config from './config/enviroment';


const Router = Ember.Router.extends({
  location: config.locationType;
  rootURL: config.rootURL
});

Router.map(function() {

});

export default Router;
//Hello world
