import React from 'react'


const ReviewsCard = ({productReviews}) => {
 const reviews = productReviews || []

  return (
    <div className='my-6 bg-white p-8'>
      <div>
        {
            reviews.length > 0 ? (<div>
                <h3 className='text-lg font-medium'> All comments...</h3>
                <div>

                </div>
            </div>) : <p>No reviews yet!!</p>
        }
      </div>
    </div>
  )
}

export default ReviewsCard
