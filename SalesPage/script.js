
fetch('products.json')
  .then(response => response.json())
  .then(data => {

    const products = data.products;
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });


function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product';
  
  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.name;
  card.appendChild(image);
  
  const name = document.createElement('h3');
  name.textContent = product.name;
  card.appendChild(name);
  
  const description = document.createElement('p');
  description.textContent = product.description;
  card.appendChild(description);
  
  const price = document.createElement('span');
  price.className = 'price';
  price.textContent = '$' + product.price;
  card.appendChild(price);
  
  const buyButton = document.createElement('a');
  buyButton.href = product.link;
  buyButton.className = 'buy-btn';
  buyButton.textContent = 'Buy Now';
  card.appendChild(buyButton);
  
  return card;
}
