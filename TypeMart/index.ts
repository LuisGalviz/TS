import products from "./products";

const productName = products[0].name;

const product = products.filter(product => product.name === productName)[0];

console.log(product);

if (product.preOrder == 'true') {
    console.log('We will send you a message when your product is on its way.');
}

let shipping, taxPercent, taxTotal, total: number;
let shippingAddress :string;

taxPercent=0.05;
shippingAddress='New York';

if (Number(product.price)>=25) {
    shipping=0;
    console.log('Envio gratuito');
}else{
    shipping=5;

}


if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
  }

  taxTotal=Number(product.price)*taxPercent;
  total = Number(product.price) + taxTotal + shipping;
  
  console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);