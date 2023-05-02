export function MobileProducts({ productList }) {
  return (
    <div>
      <h2>Mobile Phones</h2>
      <ul>
        {productList
          .filter((product) => product.name === "mobile")
          .map((product) => (
            <li>
              Name : {product.name}, Description : {product.description}, Price
              : {product.price}
            </li>
          ))}
      </ul>
    </div>
  );
}
