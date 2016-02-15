var App = function(){
  var self = this;
  this.canvas = document.getElementById('canvas');
  this.context = this.canvas.getContext('2d');
  this.scenes = [];

  this.resize();
  this.render();

  window.onresize = function(){
    self.resize();
  };
};

App.prototype.addScene = function(render){
  this.scenes.push(new Scene(this, render));
};

App.prototype.resize = function(){
  this.width = window.innerWidth;
  this.height = window.innerHeight;
  this.canvas.width = this.width;
  this.canvas.height = this.height;
};

App.prototype.render = function(){
  var self = this;
  this.context.clearRect(0, 0, this.width, this.height);

  this.scenes.forEach(function(scene){
    scene.render();
  });

  window.requestAnimationFrame(function(){
    self.render();
  });
};

var Scene = function(app, render){
  this.app = app;
  this.render = render;
};