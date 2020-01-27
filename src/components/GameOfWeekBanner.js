import React, {useState, useEffect} from 'react';
import {getProducts} from 'services';
import Img from 'react-image';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import PlaceholderBanner from 'placeholders/PlaceholderBanner';

const GameOfWeekBanner = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProducts('game-of-week').then(data => setProduct(data));
    }, []);

    return (
        <div className={'row'}>
            <div style={{width: '100%'}}>
                <h2>Game of the Week</h2>
                {product.banner_image_url ?
                    <div className={'gow-banner'}>
                        <Router>
                            <Link to={'/'}>
                                <Img src={process.env.IMAGE_CDN + product.banner_image_url}/>
                            </Link>
                        </Router>
                    </div> : <PlaceholderBanner/>
                }
            </div>
        </div>
    )
};

export default GameOfWeekBanner;