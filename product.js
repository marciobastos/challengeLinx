const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

// como devo chamar ou importar o arquivo script.js ?
let json = getProducts();

console.log(json);

json.products.map((item, index)=>{
	
	let productItem = c('.models .product').cloneNode(true);

	productItem.setAttribute('data-key', index);
	productItem.querySelector('.product img').src = item.image;
//	productItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
//	productItem.querySelector('.pizza-item--name').innerHTML = item.name;
//	productItem.querySelector('.pizza-item--desc').innerHTML = item.description;
	
	c('.list-products--area').append( productItem );
}
);