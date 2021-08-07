import P5 from "p5";

class Segment {
  a: P5.Vector;
  b: P5.Vector;
  len: number;
  index: number;
  sw: number;
  angle: number;

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

  // To avoid having 2 follow methods always
  // pass a vector as the only argument
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
}

// The only way to have two constructor methods in javascript
// is by creating another class that extends Segment
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
