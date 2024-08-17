import routes from '../../routes';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Products from '../Pages/Products/products';
import LazyOrders from '../Pages/Orders/orders.lazy';
import ProductItem from '../Pages/ProductItem/productItem';
import NotFound from '../../Components/Pages/NotFound/notFound';

export default function Content() {

    return (
        <Routes>
            <Route path={ routes.products() } element={ <Products/> }></Route>
            <Route path={ routes.orders() } element={ <Suspense fallback={'loading...'}><LazyOrders/></Suspense> }></Route>
            <Route path={ '/*' } element={ <NotFound/> }></Route>
            <Route path={ `${routes.product()}/:id` } element={ <ProductItem/> }></Route>
        </Routes>
    );
}