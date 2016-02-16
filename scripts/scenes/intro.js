var CF = window.CF || {};
CF.intro = function(){
  var context;

  function init(){
    context = CF.app.context;
    CF.app.addScene(render);
    CF.app.addScene(render);
  }

  function render(){
    var offsetTop = - window.scrollY + (CF.app.height * this.index);
    context.fillStyle = '#ff8330';
    context.fillRect(20, offsetTop + 20, 50, 50);
  }

  return {
    init: init
  }
}();