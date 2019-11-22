class ShapeOverlays {
    constructor(elm, numPoints, duration, delayPointsMax, delayPerPath) {
      this.elm = elm;
      this.path = elm.querySelectorAll('path');
      this.numPoints = numPoints;
      this.duration = duration;
      this.delayPointsArray = [];
      this.delayPointsMax = delayPointsMax;
      this.delayPerPath = delayPerPath;
      this.timeStart = Date.now();
      this.isAnimating = false;
    }
    toggle() {
      this.isAnimating = true;
      const range = 4 * Math.random() + 6;
      for (var i = 0; i < this.numPoints; i++) {
        const radian = i / (this.numPoints - 1) * Math.PI;
        this.delayPointsArray[i] = (Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4 * this.delayPointsMax;
      }
      this.timeStart = Date.now();
      this.renderLoop();
    }
  
    updatePath(time) {
      const points = [];
      for (var i = 0; i < this.numPoints + 1; i++) {
        var timeExp = Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1);
        points[i] = ease.exponentialIn(timeExp) * 100
      }
      let str = '';
      str += `M 0 0 V ${points[0]} `;
      for (var i = 0; i < this.numPoints - 1; i++) {
        const p = (i + 1) / (this.numPoints - 1) * 100;
        const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
        str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
      }
      str +=  `V 0 H 0`;
      return str;
    }
    render() {
        for (var i = 0; i < this.path.length; i++) {
          var computedPath = this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i));
          this.path[i].setAttribute('d', computedPath);
        }
    }
    renderLoop() {
      var shapeOverlays = document.querySelector('.shape-overlays');
      shapeOverlays.style.display = "block";
      this.render();
      if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
        requestAnimationFrame(() => {
          this.renderLoop();
        });
      }
      else {
        this.isAnimating = false;
        shapeOverlays.style.display = "none";
        
      }
    }
  }

  (function() {

    const elmOverlay = document.querySelector('.shape-overlays');
    
  if(window.innerWidth >= 736){
    var overlay = new ShapeOverlays(elmOverlay, 20,800, 620, 110);
    //adjust size of splatter in viewbox
    //elm, numPoints, duration, delayPointsMax, delayPerPath
    //new ShapeOverlays(elmOverlay, 14,800, 520, 110);
  }
  else{
    var overlay = new ShapeOverlays(elmOverlay, 10, 600, 340, 130);
  }
  var button = document.querySelector('.activate');
  console.log(button);
  button.addEventListener('click', linkClickHandler);

  function linkClickHandler(e){
      console.log('button clicked')
    if (overlay.isAnimating) {
        return false;
      }
      overlay.toggle();
  }
  /*cross.addEventListener('click', () => {
    if (overlay.isAnimating) {
      return false;
    }
    overlay.toggle();  
  });*/
  }())