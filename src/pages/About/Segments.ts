import P5 from "p5";

class Segment {
  a: P5.Vector;
  b: P5.Vector;
  len: number;
  index: number;
  sw: number;
  angle: number;

  vel: P5.Vector;
  acc: P5.Vector;

  p5: P5;

  constructor(
    p5: P5,
    x: number,
    y: number,
    len: number,
    index: number,
    total: number
  ) {
    this.a = p5.createVector(x, y);
    this.b = p5.createVector();
    this.len = len;
    this.index = index;
    this.sw = p5.map(index, 0, total, 1, 10);
    this.angle = 0;
    this.p5 = p5;

    const velx = Math.random() * 2 - 1;
    const vely = Math.random() * 2 - 1;

    this.vel = p5.createVector(velx, vely);
    this.acc = p5.createVector();

    this.calculateB();
  }

  show() {
    const { a, b, sw, p5 } = this;
    p5.stroke(255);
    p5.strokeWeight(sw);
    p5.line(a.x, a.y, b.x, b.y);
  }

  update() {
    this.calculateB();
  }

  follow(target: P5.Vector) {
    const { a, len } = this;
    const dir = P5.Vector.sub(target, a);
    this.angle = dir.heading();
    dir.setMag(len);
    dir.mult(-1);
    this.a = P5.Vector.add(target, dir);
  }

  calculateB() {
    const { len, angle, b, a, p5 } = this;
    const dx = len * p5.cos(angle);
    const dy = len * p5.sin(angle);
    b.set(a.x + dx, a.y + dy);
  }

  public attraction(target: P5.Vector) {
    const force = P5.Vector.sub(target, this.a);

    let distance_squared = force.magSq();

    distance_squared = this.p5.constrain(distance_squared, 25, 500);

    const gravity = 100;
    const strength = gravity / distance_squared;

    force.setMag(strength);
    this.acc.add(force);

    this.a.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }
}

class SegmentChild extends Segment {
  parent: Segment;

  constructor(
    p5: P5,
    parent: Segment,
    len: number,
    index: number,
    total: number
  ) {
    super(p5, 0, 0, len, index, total);
    this.a = parent.b.copy();
    this.parent = parent;
  }
}

export { Segment, SegmentChild };
