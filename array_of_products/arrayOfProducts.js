function arrayOfProducts(array) {
  // Write your code here.
  let products = [];
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 1; j < array.length; j++) {
      if (i !== j) {
        product *= array[j];
      }
    }
    products.push(product);
  }
  return products;
}