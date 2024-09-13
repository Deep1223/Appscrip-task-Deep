"use client";

import '../../styles/pages/productlist.css';
import OurProduct from "../../component/ourproduct";
import Products from "../../common/product";
import Productdropdown from "../../component/productdropdown";
import Productfilter from '@/app/component/productfilter';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ProductList = ({ products }) => {
    const [filterVisible, setFilterVisible] = useState(false);
    const totalItems = products.length;

    const toggleFilter = () => {
        setFilterVisible(!filterVisible);
    };

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
                    <Products products={products} />
                </div>
            </div>
        </div>
    );
};

export default ProductList;
