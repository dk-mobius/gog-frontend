import React, {useState, useEffect} from 'react';
import {getProducts} from 'services';
import {UserContext,CartContext} from 'store';
import ProductCard from 'components/ProductCard';
import PlaceholderCard from 'placeholders/PlaceholderCard';


const PromotedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts('promoted').then(data => setProducts(data));
    },[]);

    return (
        <div className={'row row--4'}>
            {products.length ?
                <UserContext.Consumer>
                    { user => (
                        <CartContext.Consumer>
                            {cart => (
                                <>
                                    {products.map((product) =>
                                        <ProductCard
                                            key={product._id}
                                            owned={user.owned_products ? user.owned_products.includes(product._id) : false}
                                            incart={cart.products.some(e=>e._id===product._id)}
                                            title={product.title}
                                            price={product.on_sale ? product.sale_price : product.price}
                                            discount={product.on_sale ? product.discount_percentage : null}
                                            image_url={product.featured_image_url}
                                            productId={product._id}
                                            product={product}
                                        />
                                    )}
                                </>
                            )}
                        </CartContext.Consumer>
                    )}
                </UserContext.Consumer>: <PlaceholderCard number={5} />
            }
        </div>
    )
};

export default PromotedProducts;