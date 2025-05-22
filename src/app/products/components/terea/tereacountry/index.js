'use client';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from '../modal/modal'; 
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const TereaCountry = ({ setSelectedCountries, selectedCountries, setSearchQuery, searchQuery, setSortOrder, sortOrder, filters, setFilters, applyFilters, resetFilters }) => {
    const [activeId, setActiveId] = useState(null);

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value); 
    };

    const handleClick = (id) => {
        setActiveId((prevId) => (prevId === id ? null : id));
        setSelectedCountries((prevSelected) =>
            prevSelected.includes(id)
                ? []
                : [id]
        );
    };

    useEffect(() => {
        setActiveId(selectedCountries);
    }, [selectedCountries]);

    const Countries = [
        { id: 'kaz', title: 'Казахстан' },
        { id: 'uzb', title: 'Узбекистан' },
        { id: 'arm', title: 'Армения' },
        { id: 'ind', title: 'Индонезия' },
        { id: 'europe', title: 'Европа' },
        { id: 'jap', title: 'Япония' },
        { id: 'swiz', title: 'Швейцария' }
    ];

    return (
        <div className="filter-container">
            <div className="search">
                <input type="text" placeholder="Поиск" onChange={handleSearchQueryChange} value={searchQuery} />
            </div>
            <div className="sort-container">
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="filter"
                >
                    {Countries.map((item) => (
                        <SwiperSlide key={item.id}>
                            <button
                                onClick={() => handleClick(item.id)}
                                className={`custom-button ${selectedCountries.includes(item.id) ? 'active' : ''}`}
                            >
                                {item.title}
                            </button>  
                        </SwiperSlide>                                                         
                    ))}
                </Swiper>

                <div className="line"></div>
                <div className="sort"> 
                    <div className="sort-item">
                        <label htmlFor="price">Сортировка:</label>
                        <select id="price" name="price" onChange={handleSortChange} value={sortOrder}>
                            <option value='default'>По умолчанию</option>
                            <option value='descending'>По убыванию цены</option>
                            <option value='ascending'>По возрастанию цены</option>
                        </select>
                        
                    </div>
                    <button type="button" className="open-modal btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                    </svg>&nbsp;
                    Фильтры
                    </button>
                    <Modal
                        filters={filters}
                        setFilters={setFilters}
                        applyFilters={applyFilters}
                        resetFilters={resetFilters}
                    />
                </div>
            </div>
        </div>
    );
};

export default TereaCountry;
