fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
        console.log(data.products);

        let con = document.getElementById('con');
        data.products.forEach(product => {
            let productCard = document.createElement('div');
            productCard.innerHTML = `
<div class="pcard">
    <img src="${product.images[0]}" alt="" width="200">
    <h2>${product.title}</h2>
    <h3>${product.price}</h3>
    <button>Buy Now</button>
</div>
`;
            con.append(productCard)
        });
    });