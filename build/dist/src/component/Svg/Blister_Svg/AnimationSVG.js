/**
 * Constants
 */
var TWO_PI = Math.PI * 2;
/**
 * Application Class
 */
var Application = /** @class */ (function () {
    /**
     * Application constructor
     */
    function Application() {
        var _this = this;
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = document.getElementById('home').clientHeight;
        this.center = {
            x: this.width / 2,
            y: this.height / 2
        };
        this.circleContainers = [];
        //Resize listener for the canvas to fill browser window dynamically
        window.addEventListener('resize', function () { return _this.resizeCanvas(); }, false);
    }
    /**
     * Simple resize function. Reinitializes everything on the canvas while changing the width/height
     */
    Application.prototype.resizeCanvas = function () {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = document.getElementById('home').clientHeight;
        this.center = {
            x: this.width / 2,
            y: this.height / 2
        };
        //Empty the previous container and fill it again with new CircleContainer objects
        this.circleContainers = [];
        this.initializeCircleContainers();
    };
    /**
     * Create a number of CircleContainer objects based on the numberOfContainers variable
     * @return void
     */
    Application.prototype.initializeCircleContainers = function () {
        for (var x = 0; x < this.width + 100; x += 100) {
            for (var y = 0; y < this.height + 100; y += 100) {
                //Initialize a new instance of the CircleContainer class
                var circleContainer = new CircleContainer(this.context, x, y);
                //Let the CircleContainer initialize it's children
                circleContainer.initializeCircles();
                //Add the container to our array of CircleContainer objects
                this.circleContainers.push(circleContainer);
            }
        }
    };
    /**
     * Updates the application and every child of the application
     * @return void
     */
    Application.prototype.update = function () {
        for (var i = 0; i < this.circleContainers.length; i++) {
            this.circleContainers[i].update();
        }
    };
    /**
     * Renders the application and every child of the application
     * @return void
     */
    Application.prototype.render = function () {
        //Clear the entire canvas every render
        this.context.clearRect(0, 0, this.width, this.height);
        //Trigger the render function on every child element
        for (var i = 0; i < this.circleContainers.length; i++) {
            this.circleContainers[i].render();
        }
    };
    /**
     * Update and render the application at least 60 times a second
     * @return void
     */
    Application.prototype.loop = function () {
        var _this = this;
        this.update();
        this.render();
        window.requestAnimationFrame(function () { return _this.loop(); });
    };
    return Application;
}());
/**
 * CircleContainer Class
 */
var CircleContainer = /** @class */ (function () {
    /**
     * CircleContainer constructor
     * @param context - The context from the canvas object of the Application
     * @param x
     * @param y
     */
    function CircleContainer(context, x, y) {
        this.context = context;
        this.position = { x: x, y: y };
        this.numberOfCircles = 19;
        this.circles = [];
        this.baseRadius = 20;
        this.bounceRadius = 150;
        this.singleSlice = TWO_PI / this.numberOfCircles;
    }
    /**
     * Create a number of Circle objects based on the numberOfCircles variable
     * @return void
     */
    CircleContainer.prototype.initializeCircles = function () {
        for (var i = 0; i < this.numberOfCircles; i++) {
            this.circles.push(new Circle(this.position.x, this.position.y + Math.random(), this.baseRadius, this.bounceRadius, i * this.singleSlice));
        }
    };
    /**
     * Try to update the application at least 60 times a second
     * @return void
     */
    CircleContainer.prototype.update = function () {
        for (var i = 0; i < this.numberOfCircles; i++) {
            this.circles[i].update(this.context);
        }
    };
    /**
     * Try to render the application at least 60 times a second
     * @return void
     */
    CircleContainer.prototype.render = function () {
        for (var i = 0; i < this.numberOfCircles; i++) {
            this.circles[i].render(this.context);
        }
    };
    return CircleContainer;
}());
/**
 * Circle Class
 */
var Circle = /** @class */ (function () {
    /**
     * Circle constructor
     * @param x - The horizontal position of this circle
     * @param y - The vertical position of this circle
     * @param baseRadius
     * @param bounceRadius
     * @param angleCircle
     */
    function Circle(x, y, baseRadius, bounceRadius, angleCircle) {
        this.basePosition = { x: x, y: y };
        this.position = { x: x, y: y };
        this.speed = 0.01;
        this.baseSize = 10;
        this.size = 10;
        this.angle = (x + y);
        this.baseRadius = baseRadius;
        this.bounceRadius = bounceRadius;
        this.angleCircle = angleCircle;
    }
    /**
     * Update the position of this object
     * @return void
     */
    Circle.prototype.update = function () {
        this.position.x = this.basePosition.x + Math.cos(this.angleCircle) * (Math.sin(this.angle + this.angleCircle) * this.bounceRadius + this.baseRadius);
        this.position.y = this.basePosition.y + Math.sin(this.angleCircle) * (Math.sin(this.angle + this.angleCircle) * this.bounceRadius + this.baseRadius);
        this.size = Math.cos(this.angle) * 8 + this.baseSize;
        this.angle += this.speed;
    };
    /**
     * Renders this Circle object on the canvas
     * @param context - The context from the canvas object of the Application
     * @return void
     */
    Circle.prototype.render = function (context) {
        context.fillStyle = "hsl(195, 100%, " + this.size * 4 + "%)";
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.size, 0, TWO_PI);
        context.fill();
    };
    return Circle;
}());
/**
 * Onload function is executed whenever the page is done loading, initializes the application
 */
window.onload = function () {
    //Create a new instance of the application
    var application = new Application();
    //Initialize the CircleContainer objects
    application.initializeCircleContainers();
    //Start the initial loop function for the first time
    application.loop();
};
//# sourceMappingURL=AnimationSVG.js.map