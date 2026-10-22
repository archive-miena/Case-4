const rectangle ={
    width: 10,
    height: 5,

    getArea: function() {
        return this.width * this.height;
    },

    getPerimeter: function() {
        return 2 * (this.width + this.height);

    }
};

console.log("wide;", rectangle.getArea());
console.log("around;", rectangle.getPerimeter());