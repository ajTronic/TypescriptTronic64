import { Helmet } from "react-helmet";
import "./style.css"

const BouncingBalls = () => {
  return (
    <>
      {/* The Helmet is the head of the webproject */}
      <Helmet>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.min.js" integrity="sha512-rCZdHNB0AePry6kAnKAVFMRfWPmUXSo+/vlGtrOUvhsxD0Punm/xWbEh+8vppPIOzKB9xnk42yCRZ5MD/jvvjQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
        <script defer>
          {`
            let y = 100;
            let speed = 5;
            let size = 20;
            let balls = [];
            let numBalls = 100;
            
            function setup() {
                createCanvas(window.innerWidth, window.innerHeight);
            
                for (let i = 0; i < numBalls; i++) {
                    ball = new Ball(
                        random(size / 2, width - (size / 2)),  // x
                        random(-200, 200),  // y
                        size, // size
                        speed,  // speed
                        random(0.3, 0.7), // grav
                        color(random(0, 255), random(0, 255), random(0, 255)) // color
                    );
            
                    balls.push(ball);
                }
            }
            
            function draw() {
                background('black');
                for (const ball of balls) {
                    ball.update(); // Calculations
                    ball.draw(); // Drawing
                }
            }
            
            class Ball {
                constructor(x, y, size, speed, grav, color) {
                    this.x = x;
                    this.y = y;
                    this.size = size;
                    this.speed = speed;
                    this.grav = grav;
                    this.color = color;
                }
            
                update() {
                    if (this.y + (this.size / 2) >= height) { // Hits the ground
                        this.speed = -this.speed;
                        this.speed = this.speed * 0.8;
                    }
            
                    this.speed = this.speed + this.grav;
                    this.y = this.y + this.speed;
                    this.y = min(this.y, height - (this.size / 2));
                }
            
                draw() {
                    fill(this.color);
                    noStroke();
                    circle(this.x, this.y, this.size);
                }
            }
          `}
        </script>
      </Helmet>
      <canvas></canvas>
    </>
  );
};

export default BouncingBalls;
