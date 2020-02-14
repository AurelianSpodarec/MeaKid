// import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import HomeView from './Home/HomeView';
// import ProductList from './ProductList/ProductList';
// import ProductItem from './ProductItem/ProductItem';
// import NotFound from './NotFound/NotFound'

// const routes = [
//     {
//         path: "/",
//         component: HomeView,
//         exact=true
//     },
//     {
//         path: "/product-list",
//         component: HomeView,
//         exact=true
//     },
//     {
//         path: "*",
//         component: NotFound,
//         exact=true
//     }
// ]

// const routing = routes.map((route => {
//     <Switch>
//     <Route exact path={route.path} component={route.component} />
//     </Switch>
// }))

// // If window location doesn't match any path, then show NotFound path="*"

// class Routes extends Component {
//     render() {
//         return (
//             // <Switch>
//             //     <Route exact path="/" component={HomeView} />
//             //     <Route exact path="/product-list" component={ProductList} />
//             //     <Route exact path="/product-list/:id" component={ProductItem} />
//             //     <Route exact path="*" component={NotFound} />
//             // </Switch>

//         )
//     }
// }

// export default Routes