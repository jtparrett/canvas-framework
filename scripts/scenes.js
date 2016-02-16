var App = function(){
  var self = this;
  this.canvas = document.getElementById('canvas');
  this.context = this.canvas.getContext('2d');
  this.body = document.getElementsByTagName('body')[0];
  this.scenes = [];

  this.resize();
  this.render();

  window.onresize = function(){
    self.resize();
    self.setScrollHeight();
  };
};

App.prototype.addScene = function(render){
  this.scenes.push(new Scene(this, render, this.scenes.length));
  this.setScrollHeight();
};

App.prototype.setScrollHeight = function(){
  this.body.style.height = this.scenes.length * this.height + 'px';
};

App.prototype.resize = function(){
  this.canvas.width = this.width = window.innerWidth;
  this.canvas.height = this.height = window.innerHeight;
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

var Scene = function(app, render, index){
  this.app = app;
  this.render = render;
  this.index = index;
};