import P5 from "p5";

class Particle {
  public pos: P5.Vector;
  public vel: P5.Vector;
  public acc: P5.Vector;

  private p5: P5;
  public readonly radius = 4;

  constructor(p5: P5, x: number, y: number) {
    this.p5 = p5;
    const velx = Math.random() * 2 - 1;
    const vely = Math.random() * 2 - 1;
    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(velx, vely);
    this.acc = p5.createVector();
  }
  public show() {
    this.p5.stroke(255);
    this.p5.strokeWeight(this.radius);
    this.p5.point(this.pos.x, this.pos.y);
  }
  public update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  public attraction(target: P5.Vector) {
    const force = P5.Vector.sub(target, this.pos);

    let distance_squared = force.magSq();

    distance_squared = this.p5.constrain(distance_squared, 25, 500);

    const gravity = 15;
    const strength = gravity / distance_squared;

    force.setMag(strength);
    this.acc.add(force);
  }
}

export { Particle };
