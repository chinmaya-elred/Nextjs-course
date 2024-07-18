import React from 'react'

function ReviewId({params}) {
  return (
    <div>Review {params.reviewId} for product {params.productId} </div>
  )
}

export default ReviewId