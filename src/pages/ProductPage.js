import React from 'react';
import {Link} from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = (props) => {
    console.log(props);
    return ( 
     <>
    <div>Strona Produktu</div> 
    <Product/>
    <Link to="/products">Powrot do listy produktow</Link>
    </> 
    );
}
 
export default ProductPage;