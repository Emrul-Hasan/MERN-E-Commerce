import React, { useState } from 'react'

import productsData from "../../data/products.json"
import ProductCards from '../shop/ProductCards';

const Serach = () => {
    const [searchQuery,setSearchQuery] = useState('');
    const [filteredProducts,setFilterProducts] = useState(productsData);

    const handleSearch = () =>{
        const query =  searchQuery.toLowerCase();
        const filtered = productsData.filter(product => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query));
        setFilterProducts(filtered);
    }
  return (
<>
   <section className='section__container bg-primary-light'> 
   <h2 className='section__header capitalize'>Search Page</h2>
   <p className='section__subheader'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, officia unde tenetur at velliquid tibus inventore, id impedit! </p>
   </section>


   <section className='section__container'> 
    <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
        <input type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='search-bar w-full max-w-4xl p-2 border rounded'
        placeholder='Search for Products'></input>

          <button onClick={handleSearch}
          className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded'
          >Search</button>
    </div>

    <ProductCards products={filteredProducts}></ProductCards>
   </section>

 </>
  )
}

export default Serach
