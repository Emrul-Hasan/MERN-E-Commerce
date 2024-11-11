import React, { useEffect, useState } from 'react'
import productsData from "../../data/products.json"
import ProductCards from './ProductCards';
import ShopFiltering from './shopFiltering';



const filters = {
    categories : ['all','accessories','dress','jewellery','cosmetics'],
    colors : ['all','black','red','gold','blue','silver','beige','green'],
    priceRanges:[
        {lable: 'under $50', min: 0, max: 50},
        {lable: '$50 - $100', min: 50, max: 100},
        {lable: '$100 - $200', min: 100, max: 200},
        {lable: '$200 and above', min: 200, max: Infinity},
    ]
};

const ShopPage = () => {
const [products,setProducts] = useState(productsData)
const [filterState,setFilterState] = useState({
    category : 'all',
    color:'all',
    priceRange : ''
});

// Filter funstions

const applyFilters = () =>{

    let filteredProducts = productsData;
    if(filterState.category && filterState.category !== 'all'){
        filteredProducts = filteredProducts.filter(product => product.category === filterState.category)
    }
    if(filterState.color && filterState.color !== 'all'){
        filteredProducts = filteredProducts.filter(product => product.color === filterState.color)
    }
    if(filterState.priceRange){
        const [] = filterState.priceRange.split('-').map(Number);
        filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice)
    }
    setProducts(filteredProducts)
}
useEffect (() =>{
    applyFilters()
},[filterState])

const clearFilters = () =>{
  setFilterState({
    category: 'all',
    color: 'all',
    priceRange: ''
  })
}




  return (
    <>
      <section className='section__container bg-primary-light'> 
   <h2 className='section__header capitalize'>Shop Page</h2>
   <p className='section__subheader'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, officia unde tenetur at velliquid tibus inventore, id impedit! </p>
   </section>
    <section className='section__container'>
        <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
            {/* left site */}
            <ShopFiltering 
            filters = {filters} 
            filterState={filterState} 
            setFilterState={setFilterState} 
            clearFilters={clearFilters} 
            />
            {/* Right site */}
            <div>
                <h3 className='text-xl font-medium mb-4'>Products Available :{products.length}</h3>
                 <ProductCards products={products}></ProductCards>
            </div>
        </div>


    </section>
      
    </>
  )
}

export default ShopPage
