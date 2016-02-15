var CF = window.CF || {};
CF.intro = function(){
  var context;
  var x = 0;

  function init(){
    context = CF.app.context;
    CF.app.addScene(render);
  }

  function render(){
    x += 2;
    context.fillStyle = '#ff8330';
    context.fillRect(x, 20, 50, 50);
  }

  return {
    init: init
  }
}();