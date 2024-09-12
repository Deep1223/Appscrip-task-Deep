import React, { useState } from 'react';
import '../../styles/component/Productfilter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const filterCategories = {
    idealFor: { label: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
    occasion: { label: 'OCCASION', options: ['Casual', 'Formal', 'Party'] },
    work: { label: 'WORK', options: ['Embroidery', 'Handwork', 'Printing'] },
    fabric: { label: 'FABRIC', options: ['Cotton', 'Silk', 'Polyester'] },
    segment: { label: 'SEGMENT', options: ['Casual', 'Formal', 'Party Wear'] },
    suitableFor: { label: 'SUITABLE FOR', options: ['Summer', 'Winter', 'All Seasons'] },
    rawMaterials: { label: 'RAW MATERIALS', options: ['Wool', 'Nylon', 'Jute'] },
    pattern: { label: 'PATTERN', options: ['Solid', 'Striped', 'Floral'] }
};

const Productfilter = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState({});
    const [selectedOptions, setSelectedOptions] = useState({});

    const toggleDropdown = (category) => {
        setIsDropdownOpen((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const handleCheckboxChange = (category, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [option]: !prev[category]?.[option],
            },
        }));
    };

    const selectAll = (category) => {
        const allOptions = Object.fromEntries(filterCategories[category].options.map(option => [option, true]));
        setSelectedOptions((prev) => ({
            ...prev,
            [category]: allOptions
        }));
    };

    const unselectAll = (category) => {
        const noneSelected = Object.fromEntries(filterCategories[category].options.map(option => [option, false]));
        setSelectedOptions((prev) => ({
            ...prev,
            [category]: noneSelected
        }));
    };

    return (
        <div>
            {Object.entries(filterCategories).map(([category, { label, options }]) => (
                <div key={category} className="filter-dropdown-section">
                    <a href="javascript:void(0)" className="filter-dropdown-toggle" onClick={() => toggleDropdown(category)}>
                        {label}
                        <span className={`filter-dropdown-icon ${isDropdownOpen[category] ? 'rotate' : ''}`}>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                    </a>
                    <div onClick={() => selectAll(category)} className='selectall-item'>All</div>
                    {isDropdownOpen[category] && (
                        <div>
                            <div onClick={() => unselectAll(category)} className='unselectall-item'>Unselect All</div>
                            <div className="filter-dropdown-content">
                                {options.map((option) => (
                                    <label key={option}>
                                        <input
                                            type="checkbox"
                                            name={option}
                                            checked={selectedOptions[category]?.[option] || false}
                                            onChange={() => handleCheckboxChange(category, option)}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Productfilter;
