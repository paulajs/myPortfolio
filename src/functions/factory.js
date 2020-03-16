import * as THREE from "three";
import * as TWEEN from "tween";

export function makeSphere(color, posX, posY, posZ, radius, name, delay) {
  /* var geometry = new THREE.SphereGeometry(radius, 16, 16); */
  var geometry = new THREE.SphereBufferGeometry(radius, 16, 16);
  var material = new THREE.MeshPhongMaterial({
    color: color,
    transparent: true,
    opacity: 0
  });
  var mesh = new THREE.Mesh(geometry, material);
   mesh.position.x = Math.random() > 0.4 ? posX*Math.random(): -posX*Math.random();
  mesh.position.y = Math.random() > 0.4 ? posY*Math.random(): -posY*Math.random();
  mesh.position.z = Math.random() > 0.4 ? posZ*Math.random(): -posZ*Math.random();
/*   mesh.position.x = posX;
  mesh.position.y = posY;
  mesh.position.z = posZ; */
  mesh.name = name;
  mesh.scale.set(1, 1, 1);
  mesh.geometry.computeBoundingBox();
  var timingA = 0;
  var timingB = 0;
  if(window.innerWidth < 736){
    timingA = 100;
    timingB = 200;
  }
  else{
    timingA = 400;
    timingB = 600;
  }
  //const initialPosition = new THREE.Vector3( Math.random()*500, Math.random()*500, Math.random()*500 );
  var animationA = new TWEEN.Tween(mesh.position)
    .to(
      {
        x: posX,
        y: posY,
        z: posZ
      },
      timingA
    )
    .delay(delay)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .start();
    var animationB = new TWEEN.Tween(mesh.material)
    .to(
      {
        opacity: 0.85
      },
      timingB
    )
    .delay(delay)
    .start();

    animationA.chain(animationB);

  return mesh
}
 export function getIntersectingBallsObject(intersectedObject, scene) {
  const id = intersectedObject.name;
  const ball1BBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
  ball1BBox.setFromObject(intersectedObject);
  let intersectArray = [];
  for (let i = 0; i < scene.children.length; i++) {
    if (
      scene.children[i].type == "Mesh" &&
      id != scene.children[i].name
    ) {
      let ball = scene.children[i];
      let ball2BBox = new THREE.Box3(
        new THREE.Vector3(),
        new THREE.Vector3()
      );
      ball2BBox.setFromObject(ball);
      if (ball1BBox.intersectsBox(ball2BBox)) {
        intersectArray.push(ball);
      }
    }
  }
  return intersectArray;
}

export function getIntersects(event, camera, scene) {
  let mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  let raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  let intersects = raycaster.intersectObjects(scene.children);
  return intersects;
}

export function  mouseMoveSetColor (objectMaterial, colorArray) {
  let randomColorIndex = Math.floor(Math.random() * colorArray.length);
  let colorMaterial = colorArray[randomColorIndex];
  if (objectMaterial.color.getHex() == 0xffffff) {
    objectMaterial.color.setHex(colorMaterial);
    objectMaterial.opacity = 1;
  }
}
 export function scaleAnimation(object, factor, time) {
  new TWEEN.Tween(object.scale)
    .to(
      {
        x: factor,
        y: factor,
        z: factor
      },
      time
    )
    .easing(TWEEN.Easing.Elastic.Out)
    .start();
}

export function positionAnimation(object, initialPosition, time) {
  const pox_x = object.position.x;
  const pox_y = object.position.y;
  const pox_z = object.position.z;
  new TWEEN.Tween(initialPosition)
    .to(
      {
        x: pox_x,
        y: pox_y,
        z: pox_z
      },
      time
    )
    .easing(TWEEN.Easing.Elastic.Out)
    .delay(300)
    .start();
}
