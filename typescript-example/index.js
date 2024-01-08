var j;
j = 10.5;
// type-safe
console.log(j);
// tanımın bittiği bloğun başladığı nokta
var myFunction = function () {
    return 5;
};
function myFunction2() { }
var function1 = myFunction();
var function2 = myFunction2();
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    // any => herhangi bir tip
    ProductService.prototype.getAll = function () {
        return true;
    };
    ProductService.prototype.getById = function (id) {
        return { id: 1, name: "Telefon", price: 10 };
    };
    return ProductService;
}());
var productService = new ProductService();
var product = productService.getById(1);
console.log(product.price);
