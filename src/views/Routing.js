import HomeView from './Home/HomeView';
import ProductList from './ProductList/ProductList';
// import ProductItem from './ProductItem/ProductItem';
import NotFound from './NotFound/NotFound'

export const Routing = [
    {
        path: "/",
        component: HomeView,

    },
    {
        path: "/product-list",
        component: ProductList,

    },
    {
        path: "*",
        component: NotFound,

    }
]

