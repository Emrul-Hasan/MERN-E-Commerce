import React from 'react'

const ShopFiltering = ({filters,filterState,setFilterState,clearFilters}) => {
  return (
    <div className='space-y-5 flex-shrink-0'> 
    <h3>Filters</h3>
    <div className='flex flex-col space-x-2'>
      <h4 className='font-medium text-lg'>Category</h4>
      <hr></hr>
      {
        filters.categories.map((category) =>(
          <label key={category} className='capitalize cursor-pointer'>
            <input 
            type='radio' 
            name='Category' 
            id='category' 
            value={category}
            checked={filterState.category === category}
            onChange={(e) => setFilterState({...filterState,category: e.target.value})}
            />
           <span className='ml-1'>{category}</span>
          </label>
        ))
      }
    </div>
    </div>
  )
}

export default ShopFiltering
