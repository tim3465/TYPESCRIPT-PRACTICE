export {}



// interfaces
interface Mountain{
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    {
        name:"Kilimanjaro",
        height: 19341
    },
    {
        name:"Everest",
        height: 29029
    },
    {
        name:"Denali",
        height: 20310
    }
]

function findNameOfTallestMountain(allMountains: Mountain[]):Mountain {

    let resultMt:Mountain = allMountains.reduce((prev, current)=> (current.height>prev.height)?current:prev);
    return resultMt;
};

let Mt:string =findNameOfTallestMountain(mountains).name;

console.log(Mt);

interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
    { name: "Laptop", price: 999.99 },
    { name: "Monitor", price: 249.99 },
    { name: "Keyboard", price: 49.95 },
    { name: "Mouse", price: 19.99 },
    { name: "External Hard Drive", price: 79.99 },
    { name: "Wireless Router", price: 69.50 },
    { name: "Printer", price: 129.95 },
];

function calcAverageProductPrice(products: Product[]):number {
    // const sum = arr. reduce((a: number, b: number) => { return a + b; }, 0)
    let result:number= products.reduce((a, b) =>a + b.price,0);
    result=result/products.length;
    return Number(result.toFixed(2));
};

console.log(calcAverageProductPrice(products));

interface  InventoryItem{
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
{
    product:{
        name:"motor",
        price:10,
    },
    quantity: 10,
},
{
    product:{
        name:"sensor",
        price:12.50,
    },
    quantity: 4,
},
{
    product:{
        name:"LED",
        price:1.00,
    },
    quantity: 20,
}
]


function calcInventoryValue(allStuff: InventoryItem[]):number {
    let result:number= allStuff.reduce((a, b) =>a + (b.product.price*b.quantity),0);
return result;
}

console.log(calcInventoryValue(inventory));
