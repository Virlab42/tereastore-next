import React, { useState } from 'react';

const FilterAccordion = ({ filters, setFilters, applyFilters, resetFilters }) => {
    const [localFilters, setLocalFilters] = useState(filters);
     
     const updateLocalFilter = (key, value) => {
        setLocalFilters((prev) => ({ ...prev, [key]: value }));
    };
     
         const handleApplyFilters = () => {
            setFilters(localFilters); 
            applyFilters();
        };
     
         const handleResetFilters = () => {
             setLocalFilters({
                priceRange: { min: 0, max: 10000 },
                colors: [],
                nalichie: null,
                hit:null
             });
             resetFilters(); 
         };



    return (
        <>
        
        <div className="filter-main">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Цена
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                            <div className="accordion-body">
                                <input
                                    type="range"
                                    min="0"
                                    max="10000"
                                    value={localFilters.priceRange.min}
                                    onChange={(e) =>
                                        updateLocalFilter('priceRange', { ...localFilters.priceRange, min: parseInt(e.target.value, 10) })
                                    }
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max="10000"
                                    value={localFilters.priceRange.max}
                                    onChange={(e) =>
                                        updateLocalFilter('priceRange', { ...localFilters.priceRange, max: parseInt(e.target.value, 10) })
                                    }
                                />
                                <p>Выбрано: {localFilters.priceRange.min} - {localFilters.priceRange.max} ₽</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven"
                                aria-expanded="false"
                                aria-controls="collapseSeven"
                            >
                                Хит продаж
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven">
                            <div className="accordion-body">
                                <label>
                                    <input
                                        type="radio"
                                        name="hit"
                                        value="true"
                                        onChange={() => updateLocalFilter('hit', true)}
                                        checked={localFilters.hit === true}
                                    />
                                    Да
                                </label>
                                <label>
                                    <input  
                                        type="radio"
                                        name="hit"
                                        value="false"
                                        onChange={() => updateLocalFilter('hit', false)}
                                        checked={localFilters.hit === false}
                                    />
                                    Нет
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Цвет
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                            <div className="accordion-body">
                                {['Красный', 'Черный','Бежевый', 'Синий', 'Оранжевый', 'Зеленый', 'Фиолетовый','Желтый', 'Серый'].map((color) => (
                                    <label key={color}>
                                        <input
                                            type="checkbox"
                                            checked={localFilters.colors.includes(color)}
                                            onChange={() =>
                                                updateLocalFilter(
                                                    'colors',
                                                    localFilters.colors.includes(color)
                                                        ? localFilters.colors.filter((f) => f !== color)
                                                        : [...localFilters.colors, color]
                                                )
                                            }
                                        />
                                        {color}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                   
                </div>
           <div className='buttons'>
            <button className="apply-button" onClick={handleApplyFilters}>
                    Применить
                </button>
                <button className="apply-button" onClick={handleResetFilters}>
                    Сбросить   
                </button>
           </div>
           
        </div>
     
     </>
    );
};

export default FilterAccordion;
