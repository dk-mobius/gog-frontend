import React, {useState, useEffect, useContext} from 'react';
import {useCookies} from 'react-cookie';
import {getUser, createSession, readSession, updateSession, getProductsById} from 'services';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from 'containers/Layout';
import Home from 'pages/Home';

import {UserContext, CartContext} from 'store';

const App = () => {

    const [user, setUser] = useState({});
    const [cartList, setCartList] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies();

    const initiateSession = () => {
        getUser().then(data => setUser(data));
        if (cookies.gog_test_session_uuid && cookies.gog_test_session_uuid !== 'undefined') {
            readSession(cookies.gog_test_session_uuid)
                .then(data => {
                    setCartList(data.cart_products);
                    getProductsById(data.cart_products).then(data => setCartProducts(data))
                });
        } else {
            createSession().then(data => setCookie('gog_test_session_uuid', data._id));
        }
    };

    const addProductToCart = (product) => {
        if(!cartList.includes(product._id)){
            const updatedCartList = [...cartList, product._id];
            const updatedCartProducts = [...cartProducts, product];
            setCartList(updatedCartList);
            setCartProducts(updatedCartProducts);
            updateSession(cookies.gog_test_session_uuid, updatedCartList);
        }
    };

    const removeProductFromCart = (product_id) => {
        let updatedCartList = [...cartList];
        let removeIndex = updatedCartList.indexOf(product_id);
        if (removeIndex > -1) {
            updatedCartList.splice(removeIndex, 1);
        }
        let updatedCartProducts = [...cartProducts];
        removeIndex = updatedCartProducts.map(function(product) { return product._id; }).indexOf(product_id);
        if (removeIndex > -1) {
            updatedCartProducts.splice(removeIndex, 1);
        }
        setCartList(updatedCartList);
        setCartProducts(updatedCartProducts);
        updateSession(cookies.gog_test_session_uuid, updatedCartList);
    };

    const clearCart = () => {
        setCartList([]);
        setCartProducts([]);
        updateSession(cookies.gog_test_session_uuid, []);
    };


    useEffect(() => {
        initiateSession();
    }, []);

    return (
        <UserContext.Provider value={user}>
            <CartContext.Provider value={{
                products: cartProducts,
                addProduct: addProductToCart,
                removeProduct: removeProductFromCart,
                clearCart: clearCart
            }}>
                <div className='App'>
                    <Layout>
                        <Router>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                            </Switch>
                        </Router>
                    </Layout>
                </div>
            </CartContext.Provider>
        </UserContext.Provider>

    );
};

export default App;
