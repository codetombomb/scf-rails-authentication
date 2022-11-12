function ItemCard({item}) {
    // debugger
  return (
    <div className="card text-center">
      <div className="card-header">{item.name}</div>
      <div className="card-body">
        <h5 className="card-title">{item.price}</h5>
        <p className="card-text">
          {item.desc}
        </p>
        <a href="#" className="btn btn-primary">
          Button
        </a>
      </div>
    </div>
  );
}
export default ItemCard;
