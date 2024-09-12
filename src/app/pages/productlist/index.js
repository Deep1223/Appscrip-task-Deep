"use client"; // This marks the component as a Client Component

import React, { useState, useEffect } from 'react';
import '../../styles/pages/productlist.css';

import OurProduct from "../../component/ourproduct";
import Products from "../../common/product";
import Productdropdown from "../../component/productdropdown";
import Productfilter from '@/app/component/productfilter';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
    const [filterVisible, setFilterVisible] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    const toggleFilter = () => {
        setFilterVisible(!filterVisible);
    };

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(data => {
                console.log('Fetched data:', data);
                setTotalItems(data.length);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className={`production-section ${filterVisible ? 'filter-open' : ''}`}>
            <OurProduct />
            <div className="product-line-div">
                <hr />
                <div className="items-section">
                    <div className='filter-mobile-div filter-hide-div-full'>
                        <div className="filter">FILTER</div>
                    </div>
                    <div className="divider filter-hide-div-full"><hr className="divider-div" /></div>
                    <div className="filter-div filter-hide-div">
                        <div className="items-count" style={{ color: 'black', fontSize: '16px' }}>{totalItems} ITEMS</div>
                        <div className="hide-filter">
                            <a href="javascript:void(0)" onClick={toggleFilter}>
                                <FontAwesomeIcon icon={faChevronDown} className={`fa-icon ${filterVisible ? 'product-filter-icon-rotate' : 'product-filter-icon'}`} />
                                <span className="product-filter-div">{filterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}</span>
                            </a>
                        </div>
                    </div>
                    <div className="recommended"><Productdropdown /></div>
                </div>
                <hr />
            </div>

            <div className="main-content">
                <div className={`filter-section ${filterVisible ? 'visible' : ''}`}>
                    <Productfilter />
                </div>

                <div className="product-list-section">
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default ProductList;
