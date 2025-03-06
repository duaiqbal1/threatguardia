
export class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  type: string;
  color: string;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.type = Math.random() > 0.8 ? 'threat' : 'normal';
    this.color = this.type === 'threat' ? '#FF453A' : '#0A84FF';
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvasWidth) this.x = 0;
    else if (this.x < 0) this.x = canvasWidth;
    if (this.y > canvasHeight) this.y = 0;
    else if (this.y < 0) this.y = canvasHeight;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export class Connection {
  from: Particle;
  to: Particle;
  age: number;
  maxAge: number;
  width: number;

  constructor(from: Particle, to: Particle) {
    this.from = from;
    this.to = to;
    this.age = 0;
    this.maxAge = 100 + Math.random() * 100;
    this.width = Math.random() * 0.5 + 0.1;
  }

  update() {
    this.age++;
    return this.age < this.maxAge;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const opacity = 1 - this.age / this.maxAge;
    ctx.beginPath();
    ctx.moveTo(this.from.x, this.from.y);
    ctx.lineTo(this.to.x, this.to.y);
    ctx.strokeStyle = this.from.type === 'threat' || this.to.type === 'threat' 
      ? `rgba(255, 69, 58, ${opacity * 0.5})` 
      : `rgba(10, 132, 255, ${opacity * 0.2})`;
    ctx.lineWidth = this.width;
    ctx.stroke();
  }
}
