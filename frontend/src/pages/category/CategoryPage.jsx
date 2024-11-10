import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from "../../data/products.json"
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {
const {categoryName} = useParams();
const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() =>{
   const filtered = products.filter((product) => product.category === categoryName.toLocaleLowerCase());
   setFilterProducts(filtered)
  },[categoryName])
 
  useEffect(() =>{
    window.scroll(0,0)
  })

  return (
   <>
   <section className='section__container bg-primary-light'> 
   <h2 className='section__header capitalize'>{categoryName}</h2>
   <p className='section__subheader'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, officia unde tenetur at velliquid tibus inventore, id impedit! </p>
   </section>
   {/* Product Cards */}
   <div className='section__container'>
   <ProductCards products={filterProducts}/>
   </div>
   </>
  )
}

export default CategoryPage
