import React, { useState } from 'react'
import ProductCards from './ProductCards'
import products from '../../data/products.json'
const TrendingProducts = () => {

    const [visibleProducts,setVisibleProducts] = useState(8);
     const loadMoreProducts = () =>{
        setVisibleProducts(preCount => preCount + 4)
     }
  return (
   <section className='section__container product__container'>
    <h2 className='section__header'> Trending Products</h2>
    <p className='section__subheader mb-12'>
        Discover the Hottest Picks: Elevent Your Style with our Curted Collections of Trending Women's Fashion Products.
        </p>
        <div className='mt-12'>
                {/* products card */}
                <ProductCards products={products.slice(0, visibleProducts)} className></ProductCards>
        </div>

        {/* load more product */}
        <div className='product__btn'>
            {
             visibleProducts < products.length && (
                <button className='btn' onClick={loadMoreProducts}>
                    Load More
                </button>
             )
            }

        </div>


   </section>
  )
}

export default TrendingProducts
