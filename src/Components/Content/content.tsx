import routes from '../../routes';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Products from '../Pages/Products/products';
import LazyOrders from '../Pages/Orders/orders.lazy';
import ProductItem from '../Pages/ProductItem/productItem';

export default function Content() {

    return (
        <Routes>
            <Route path={ routes.products() } element={ <Products/> }></Route>
            <Route path={ routes.orders() } element={ <Suspense fallback={'loading...'}><LazyOrders/></Suspense> }></Route>
            <Route path={ routes.product() } element={ <ProductItem/> }></Route>
        </Routes>
    );
}