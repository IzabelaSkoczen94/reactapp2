import React, { Component } from "react";
import "./App.css";
import { sumBy } from 'lodash'
import ProductView from "./ProductView";
import BasketView from "./BasketView";

class App extends Component {
  state = {
    productsArray: [],
    basketArray: [],
    value: '',
  };

  deleteItem = (id) => {
    let newBasketArray = [...this.state.basketArray];
    newBasketArray = newBasketArray.filter(el => el.id !== id)
    this.setState({
    basketArray: newBasketArray,
    })
  }
  
  addItem = (item) => {
    if (this.state.basketArray.includes(item)) {
      alert("Wybrany produkt jest juz w koszyku");
    }
    else {
      this.setState(prevState => ({
        basketArray: [...prevState.basketArray, item],
      }));     
    }
  }

  productSortByPriceAscending = (e) => {
    console.log("sortowanie po cenie rosnaca")
    const sortByPriceAscending = this.state.productsArray.sort((a,b) => a.price - b.price)   
    this.setState({
      productsArray: sortByPriceAscending
    });
  }

  productSortByPriceDescending = (e) => {
    console.log("sortowanie po cenie malejaca")
    const sortByPriceDescending= this.state.productsArray.sort((a,b) => b.price - a.price)   
    this.setState({
      productsArray: sortByPriceDescending
    });
  }

  productSortByortByName = (e) => {
    console.log("sortowanie po nazwie")
    const sortByName = this.state.productsArray.sort((a,b) => a.name.localeCompare(b.name))   
    this.setState({
      productsArray: sortByName
    });
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

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
  getTotalPrice = () => {
    return sumBy(this.state.basketArray, 'price')
  }

  render() {
    const items = this.state.productsArray;
    const products = this.state.basketArray;
    return (
      <>
        <div className="App">
          <header className="header-app">
            <img className="header-app--logo" src="logo.png" alt="Logo" />
            My-shop application
          </header>
          <div className="container">
            <section className="product-list">
            <button ref="namesorting" className="js-sort" id="namesorting" onClick={e => this.productSortByortByName(e)}>
              Sortuj po nazwie A-Z
            </button>
            <button className="js-sort" id="priceascending" onClick={e => this.productSortByPriceAscending(e)}>
              Sortuj po cenie rosnaca
            </button>
            <button className="js-sort" id="pricedescending" onClick={e => this.productSortByPriceDescending(e)}>
              Sortuj po cenie malejaca
            </button>
              <div className="search">
                <input value={this.state.value} onChange={this.handleChange}  className="search-input" placeholder="Szukaj..." />
              </div>
              <ProductView items={items} addItem={this.addItem} />
            </section>
            <section className="user-cart">
              <h4>Twój koszyk</h4>
              <BasketView products={products} deleteItem={this.deleteItem}  />
              <section className="total-price">{this.getTotalPrice()} zł</section>
            </section>
          </div>
          <footer className="footer">Copyright by my-shop - 2018</footer>
        </div>
      </>
    );
  }
}

export default App;
