function arrayOfProducts(array) {
  let leftRunningProduct = 1;
  const leftProducts = array.reduce((accumulator, value) => {
    accumulator.push(leftRunningProduct);
    leftRunningProduct *= value;
    return accumulator;
  }, []);

  let rightRunningProduct = 1;
  const rightProducts = array.reduceRight((accumulator, value) => {
    accumulator.unshift(rightRunningProduct);
    rightRunningProduct *= value;
    return accumulator;
  }, []);

  return array.reduce((accumulator, value, index) => {
    accumulator.push(leftProducts[index] * rightProducts[index]);
    return accumulator;
  }, []);
}