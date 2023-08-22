"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(allMountains) {
    var resultMt = allMountains.reduce(function (prev, current) { return (current.height > prev.height) ? current : prev; });
    return resultMt;
}
;
var Mt = findNameOfTallestMountain(mountains).name;
console.log(Mt);
var products = [
    { name: "Laptop", price: 999.99 },
    { name: "Monitor", price: 249.99 },
    { name: "Keyboard", price: 49.95 },
    { name: "Mouse", price: 19.99 },
    { name: "External Hard Drive", price: 79.99 },
    { name: "Wireless Router", price: 69.50 },
    { name: "Printer", price: 129.95 },
];
function calcAverageProductPrice(products) {
    // const sum = arr. reduce((a: number, b: number) => { return a + b; }, 0)
    var result = products.reduce(function (a, b) { return a + b.price; }, 0);
    result = result / products.length;
    return Number(result.toFixed(2));
}
;
console.log(calcAverageProductPrice(products));
var inventory = [
    {
        product: {
            name: "motor",
            price: 10,
        },
        quantity: 10,
    },
    {
        product: {
            name: "sensor",
            price: 12.50,
        },
        quantity: 4,
    },
    {
        product: {
            name: "LED",
            price: 1.00,
        },
        quantity: 20,
    }
];
//function calcAverageProductPrice(products: Product[]):number {
function calcInventoryValue(allStuff) {
    var result = allStuff.reduce(function (a, b) { return a + (b.product.price * b.quantity); }, 0);
    return result;
}
console.log(calcInventoryValue(inventory));
