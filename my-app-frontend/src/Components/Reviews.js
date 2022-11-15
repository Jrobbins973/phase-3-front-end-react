import React from "react";

function Reviews(props) {
const {reviews} = props
console.log(reviews)


    return <div>
    
        <h1>No Reviews Yet! Be The First</h1>
        {/* <p>{reviews.map(review => review.review_content)}</p> */}
        </div>
}

export default Reviews