export function ProductCard(props) {
  const product = props;
  return (
    <div className="card">
      <div className="ratio ratio-4x3">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
        />
      </div>
      <div className="card-body">
        <p className="card-name">{product.title}</p>
        <p className="card-category">{product.category}</p>
        <p className="card-name card-price">{product.price}</p>
      </div>
    </div>
  );
}
