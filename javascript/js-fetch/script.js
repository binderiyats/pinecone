// https://dummyjson.com/products
const productTarget = document.getElementById("productTarget");

const getProductCard = (product) => {
  return `
    <div class="col-3">
            <div class="card">
              <div class="ratio ratio-4x3">
                <img src="${product.thumbnail}" class="card-img-top" alt="..." />
              </div>
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">
                  ${product.description}
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>`;
};

const fetchExample = async () => {
  const getData = await fetch("https://dummyjson.com/products");
  const gottenDate = await getData.json();
  const products = gottenDate.products;
  console.log(products);
  for (i = 0; i < products.length; i++) {
    const card = getProductCard(products[i]);
    productTarget.innerHTML += card;
  }
};

fetchExample();
