//Build a React component called Phones that receives an array of products as a prop. Display only the mobile phones as an unordered list. Display their name, description, and price on the DOM.

import { MobileProducts } from "./MobileProducts";
import { products } from "./data";

export default function App() {
  return (
    <div className="App">
      <MobileProducts productList={products} />
    </div>
  );
}
