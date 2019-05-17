function setup() {
    createCanvas(windowWidth, windowHeight);
    background(128, 128, 128);
    radii = [25, 50, 75, 100]
    initialAngles = []
    rotaionSpeed = []

    shape = []

    speed = 0.2

    for (radius of radii) {
        // initialAngles.push(random() * TWO_PI)
        // rotaionSpeed.push(random() * 0.05)

        initialAngles.push(0)
        rotaionSpeed.push(speed)
        speed /= 2

    }

    //noLoop()
}

function draw() {
    //background(128, 128, 128);
    noFill()
    translate(windowWidth / 2, windowHeight / 2)
    point(0, 0)
    ellipseMode(RADIUS)


    x = 0;
    y = 0;


    for (let i = 0; i < radii.length; i++) {
        // ellipse(0, 0, radii[i], radii[i])
        currentAngle = initialAngles[i];
        x1 = 0;
        y1 = 0;
        x2 = radii[i] * cos(currentAngle);
        y2 = radii[i] * sin(currentAngle);
        x += x2;
        y += y2;
        // line(x1, y1, x2, y2)
        initialAngles[i] -= rotaionSpeed[i]
    }

    shape.push({
        x: x,
        y: y
    })

    beginShape()
    for (p of shape) {
        vertex(p.x, p.y)
        // point(p.x, p.y)
    }
    endShape()

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}