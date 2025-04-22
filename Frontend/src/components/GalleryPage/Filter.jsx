import React from 'react';
import "./Filter.css";
import { useState } from 'react';
import { useEffect } from 'react';

const Filter = ({activeFilters, setActiveFilters, images, setFilteredImages}) => {
    const filterOptions = {
        category: ["Dance", "Art", "Battle of Bands", "Singing", "Sports", "Drama"],
        date : ["16th March", "17th March", "18th March"],
    }

    // const [selectedFilters, setSelectedFilters] = useState({
    //     category : [],
    //     date : [],
    // });
 
    
      const handleFilterChange = (type, value) => {
        setActiveFilters((prevFilters)=>{
          const currentOptions = prevFilters[type];
          const newOptions = currentOptions.includes(value) ? currentOptions.filter((Opt) => Opt != value) :
          [...currentOptions, value];

          return {
            ...prevFilters,
            [type] : newOptions,
          };
        });
      };

      useEffect(()=>{
        const filtered = images.filter((img)=>{
            const matchCategory = activeFilters.category.length === 0 || activeFilters.category.includes(img.category);

            const matchDate = activeFilters.date.length === 0 || activeFilters.date.includes(img.date);

            return matchCategory && matchDate;
        });
        setFilteredImages(filtered);
        
    }, [activeFilters, images]);


    return (
        <div className='filter-box'>
            {Object.entries(filterOptions).map(([type, options]) => (
                <div key={type} className='filter-box-inner'>
                    <h2 className='uppercase mb-2'>{type}</h2>
                    <div>
                        {options.map((option) => (
                            <div key={option} className='checkbox-box'>
                                <input
                                    type="checkbox"
                                    id={`${type}-${option}`}
                                    name={type}
                                    value={option}
                                    onChange={()=>{handleFilterChange(type,option)}}
                                    className='input-box'
                                />
                                <label htmlFor={`${type}-${option}`} className='checkbox-label' >
                                    {option}
                                </label>

                                
                            </div>
                        ))}
                    </div>
                    
                </div>
            ))}
            
        </div>
    ) 
}


export default Filter
