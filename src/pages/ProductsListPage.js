import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/ProductsListPage.css';


class ProductsListPage extends React.Component{

state = {
    productsArray: [],
};

  async componentDidMount() {
    const API = "https://private-1c19e-reactlesson.apiary-mock.com/products";
    fetch(API)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        this.setState({ productsArray: data });
      });
  }

  render() {
    return ( 
        <>
        {this.state.productsArray.map(item => {
          return (
            <div key={item.id} className="product">
              <Link to={`/products/${item.name}`}>
            <div className="product-box">
              <div>
                <img className="product-box--image" src={item.photo} alt="Logo" />
              </div>
              <div>
                <h2>{item.name}</h2>
                <pre>{item.price} zl</pre>
                <p>{item.description}</p>
              </div>
            </div>
            </Link>
            </div>
          );
        })}
      </>
    );
}
}

export default ProductsListPage;