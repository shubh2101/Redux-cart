import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const Dummy_Products = [
  {
    id: "p1",
    title: "Football",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Book",
    price: 3,
    description: "This is a second product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
