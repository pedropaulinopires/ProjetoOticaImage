const imagePath = 'imgs/products/'
const listaProdutos = [
    {
        img: 'product-1.png',
        title: 'Oculos de grau',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit error ducimus possimus est exercitat'
    },
    {
        img: 'product-1.png',
        title: 'Oculos de grau',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit error ducimus possimus est exercitat'
    },
    {
        img: 'product-1.png',
        title: 'Oculos de grau',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit error ducimus possimus est exercitat'
    },
    {
        img: 'product-1.png',
        title: 'Oculos de grau',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit error ducimus possimus est exercitat'
    },
    {
        img: 'product-1.png',
        title: 'Oculos de grau',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit error ducimus possimus est exercitat'
    },
    {
        img: 'product-1.png',
        title: 'Oculos de grau',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit error ducimus possimus est exercitat'
    },
    {
        img: 'product-1.png',
        title: 'Oculos de grau',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit error ducimus possimus est exercitat'
    },
    {
        img: 'product-1.png',
        title: 'Oculos de grau',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit error ducimus possimus est exercitat'
    },
]
const products = document.getElementById('products');


window.addEventListener('DOMContentLoaded', (event) => {
    listaProdutos.forEach((produto) => {
        // var produtoCard = document.createElement('div').classList.add('product-card');
        var produtoCard = document.createElement('div');
        produtoCard.innerHTML = `<div class="product-card-header"            style="background-image: url(imgs/products/${produto.img});">
                                    <h2>${produto.title}</h2>
                                </div>
                                <div class="product-card-body">
                                    <p>${produto.info}</p>
                                </div>`;
        produtoCard.classList.add('product-card');

        products.appendChild(produtoCard);

    });

    window.sr = ScrollReveal({ reset: false });

    sr.reveal('.product-card', {
        easing: "ease-out",
        interval: 100,
        distance: '0%',
        origin: 'center',
    });
})