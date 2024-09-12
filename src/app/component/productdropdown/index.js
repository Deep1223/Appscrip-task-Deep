"use client";

import { useEffect } from 'react';
import $ from 'jquery';
import '../../styles/component/productdropdown.css';

const Dropdown = () => {
    useEffect(() => {
        $('#dropdownButton').on('click', function () {
            $('#dropdownContent').toggle(); 
        });

        $('#dropdownContent li').on('click', function () {
            $('#dropdownContent li').removeClass('active');
            $(this).addClass('active');
            $('#dropdownButton').text($(this).text());
            $('#dropdownContent').hide();
        });

        $(window).on('click', function (event) {
            if (!$(event.target).closest('.dropdown-btn').length) {
                $('#dropdownContent').hide();
            }
        });

        return () => {
            $('#dropdownButton').off('click');
            $('#dropdownContent li').off('click');
            $(window).off('click');
        };
    }, []);

    return (
        <div className="dropdown">
            <button className="dropdown-btn" id="dropdownButton">RECOMMENDED</button>
            <ul className="dropdown-content" id="dropdownContent">
                <li className="active">RECOMMENDED</li>
                <li>NEWEST FIRST</li>
                <li>POPULAR</li>
                <li>PRICE : HIGH TO LOW</li>
                <li>PRICE : LOW TO HIGH</li>
            </ul>
        </div>
    );
}

export default Dropdown;
