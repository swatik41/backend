//object

const laptop = {
        name: "hp pavilion",
        price: 56999,
        Storage: 512,
        ram: 16,
        size: "14*16",
        brand: "hp",

    }
    //console.log(laptop.name);
    //console.log(laptop["price"]);

for (const key in laptop) {

}
console.log(key + " " + laptop[key]);