import React from 'react'
import { Link, useParams } from 'react-router-dom'
import RatingStars from '../../../components/RatingStars';
import { useDispatch } from 'react-redux';
import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
import { addToCart } from '../../../redux/features/cart/cartSlice';

const SingleProduct = () => {
    const {id} = useParams();
    // console.log(id);

const dispatch = useDispatch();
const {data, error, isloading} = useFetchProductByIdQuery(id);
// console.log(data)
const SingleProduct = data?.product || {};
const productReviews = data?.reviews || [];
// console.log(productReviews)

const handleAddToCart = (product) =>{
  dispatch(addToCart(product))
}

if(isloading) return <p>Loading...</p>
if(error) return <p>Error loading products</p>

  return (
<>
<section className='section__container bg-primary-light'> 
   <h2 className='section__header capitalize'>Single Product Page</h2>
   <div className='section__subheader space-x-2'>
    <span className='hover:text-primary'><Link to="/">home</Link></span>
    <i className='ri-arrow-right-s-line'></i>
    <span className='hover:text-primary'><Link to="/shop">shop</Link></span>
    <i className='ri-arrow-right-s-line'></i>
    <span className='hover:text-primary'><Link to="/shop">product name</Link></span>
    <i className='ri-arrow-right-s-line'></i>

   </div>
   </section>

   <section className='section__container mt-8'>
    <div className='flex flex-col items-center md:flex-row gap-x-28'>
        <div className='md:w-1/2 w-full'>
        <img src= {SingleProduct?.image}
        className='rounded-md w-full h-auto'></img>
        </div>
        <div className='md:w-1/2 w-full'>
        <h3 className='text-2xl font-semibold mb-4'>{SingleProduct?.name}</h3>
        <p className='text-xl text-primary mb-4'>${SingleProduct?.price}
         {SingleProduct?.oldPrice && <s className='ml-1'>${SingleProduct?.oldPrice}</s>}
        </p>
        <p className='text-gray-400 mb-4'>{SingleProduct?.description}</p>
        <div className='flex flex-col space-y-2'>
            <p><strong>Category:</strong>{SingleProduct?.category}</p>
            <p><strong>Color:</strong>{SingleProduct?.color}</p>
            <div className='flex gap-1 items-center'>
                <strong>Rating</strong>
                <RatingStars rating={SingleProduct?.rating}></RatingStars>

            </div>
        </div>
        <button 
         onClick={(e) =>{
          e.stopPropagation();
          handleAddToCart(SingleProduct)
         }}
        
        className='mt-t px-6 py-3 bg-primary text-white rounded-md'>
            Add to Cart
        </button>
        </div>
    </div>

   </section>

   {/* Disply Review */}
   <section className='setion__container mt-8'>
     Review here
    
   </section>
</>
  )
}

export default SingleProduct
