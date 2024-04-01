const product = [
    {
        id: 1,
        image: 'item1.jpg',
        title: 'T-Shirt',
        price: 49.99,
    },
    {
        id: 2,
        image: 'item2.jpg',
        title: 'Pant',
        price: 39.99,
    },
    {
        id: 3,
        image: 'item3.jpg',
        title: 'Frock',
        price: 59.99,
    },
];

const categories = [...new Set(product.map((item) => 
{return item}))];
let i = 0;
document.getElementById('root').innerHTML = categories.map((item)=> 
{
var { image, title, price } = item;
return (
    `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
        </div>
    <div class='bottom'>
    <p>${title}</p>
    <h2>$ ${price}</h2>`+
    "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
     `</div>
    </div>`
);
})
.join('');

var cart = [];

function addtocart(a){
cart.push({...categories[a]});
displaycart();
}
function addtocart(a){
cart.push({...categories[a]});
displaycart();
}
function delElement(a){
cart.splice(a, 1);
displaycart()
}

function displaycart(a) {
let j = 0; total=0;
if (cart.length == 0) {
document.getElementById('cartItem').innerHTML = "Your Cart is empty";
document.getElementById("total").innerHTML = "$ "+0+"";
} else {
document.getElementById("cartItem").innerHTML = cart.map((item) => 
{
    var { image, title, price } = item;
    total=total+price;
    document.getElementById("total").innerHTML = "$ "+total+"";
    return (
        `<div class='cart-item'>
            <div class='row-img'>
                <img class='rowing' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>$ ${price}</h2>`+
            "<button class='delete-btn' onclick='delElement("+ (j++) +")'>Delete</button></div>"
    );
}).join('');
}
}