import React, {useState, useEffect, useContext} from 'react';
import {CartContext} from 'store';
import Img from 'react-image';
import IcoCart from 'assets/ico-cart.svg';
import CartProduct from 'components/CartProduct';

const MiniCart = () => {
    const cart = useContext(CartContext);
    const [cartToggle, setCartToggle] = useState(false);
    const [productIds, setProductIds] = useState([]);

    const toggleCart = () => setCartToggle(!cartToggle);

    const calculatePrice = products => {
        let price = 0;
        products.forEach(product => {
            price = product.on_sale.$numberDecimal ? price + parseFloat(product.sale_price.$numberDecimal) : price + parseFloat(product.price.$numberDecimal);
        });
        return price.toFixed(2);
    };

    useEffect(() => {
        if (cart.products !== productIds) {
            setProductIds(cart.products);
        }
    });

    return (
        <CartContext.Consumer>
            {cart =>
                <div className={'mini-cart' + (cartToggle ? ' is-active' : '')}>
                    <div className={'mini-cart__toggle'} onClick={toggleCart}>
                        <span>
                            <Img src={IcoCart}/>
                            <div
                                className={'mini-cart__indicator'}>{cart.products.length ? cart.products.length : ''}</div>
                        </span>
                    </div>
                    <div className={'mini-cart__panel'}>
                        <div className={'mini-cart__header'}>
                            <div className={'mini-cart__count'}>{cart.products.length} Items in Cart</div>
                            <div
                                className={'mini-cart__amount'}>{cart.products.length ? '$ ' + calculatePrice(cart.products) : null}</div>
                            {cart.products.length ?
                                <span className={'clear-cart button button--primary'}
                                      onMouseDown={(e => e.preventDefault())}
                                      onClick={(e) => {
                                          e.preventDefault();
                                          cart.clearCart()
                                      }
                                      }>Clear Cart
                                </span> : null
                            }
                        </div>
                        <ul>
                            {cart.products ? cart.products.map((product) =>
                                <CartProduct key={product._id}
                                             productId={product._id}
                                             title={product.title.length > 25 ? product.title.substr(0,25) + '...'  : product.title}
                                             price={product.on_sale ? product.sale_price : product.price}
                                             image_url={product.featured_image_url}
                                             remove={cart.removeProduct}
                                />
                            ) : null}
                        </ul>
                    </div>
                </div>
            }
        </CartContext.Consumer>
    );
};

export default MiniCart;
