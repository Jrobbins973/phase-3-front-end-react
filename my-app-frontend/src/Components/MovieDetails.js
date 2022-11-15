import React, {useState, useEffect} from "react";
import Reviews from "./Reviews";

function MovieDetails (props) {
    
    const {movieDetails} = props
    // console.log(movieDetails.id)

    const [reviews, setReviews] = useState({})

    useEffect(() => {
        fetch(`http://localhost:9292/movies/${movieDetails.id}/reviews`)
        .then(res => res.json())
        .then(setReviews)
    },[])

    console.log(reviews)
    // const renderReviews = reviews.map(review => <Reviews key={review.id} review={review} />)
 
    return (
        <div>
            <h1>{movieDetails.title}</h1>
            {/* {renderReviews} */}
        </div>
    )
}

export default MovieDetails