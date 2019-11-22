import * as THREE from "three";

export class ExplodeAnimation{
  constructor(x, y, color, objectSize, totalObjects, scene, dirs){
    this.x = x;
    this.y = y;
    this.color = color;
    this.objectSize = objectSize;
    this.totalObjects = totalObjects;
    this.scene = scene;
    this.dirs = dirs;
  }

  createPartices(){
    var geometry = new THREE.Geometry();
    var movementSpeed = 80;
    for (let i = 0; i < this.totalObjects; i++) {
      var vertex = new THREE.Vector3();
      vertex.x = this.x;
      vertex.y = this.y;
      vertex.z = 0;

      geometry.vertices.push(vertex);
      this.dirs.push({ x: (Math.random() * movementSpeed) - (movementSpeed / 2), y: (Math.random() * movementSpeed) - (movementSpeed / 2), z: (Math.random() * movementSpeed) - (movementSpeed / 2) });
    }
    var sprite = new THREE.TextureLoader().load(require("../assets/bubbles/assets/disk.png"));
    var material = new THREE.PointsMaterial({ size: this.objectSize, map: sprite, color: this.color, alphaTest: 0.7, transparent: true });
    var particles = new THREE.Points(geometry, material);

    this.object = particles;
    this.status = true;

    this.xDir = (Math.random() * movementSpeed) - (movementSpeed / 2);
    this.yDir = (Math.random() * movementSpeed) - (movementSpeed / 2);
    this.zDir = (Math.random() * movementSpeed) - (movementSpeed / 2);

    this.scene.add(this.object);
  }

  update(){
    if (this.status == true) {
      var pCount = this.totalObjects;
      while (pCount--) {
        var particle = this.object.geometry.vertices[pCount];
        particle.y += this.dirs[pCount].y;
        particle.x += this.dirs[pCount].x;
        particle.z += this.dirs[pCount].z;

        if (particle.z > 20000) {
          this.scene.remove(this.object);

          this.status = false;

        }
      }
      this.object.geometry.verticesNeedUpdate = true;
    }
  }
}
