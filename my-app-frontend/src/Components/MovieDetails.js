import React, {useState, useEffect} from "react";
import Reviews from "./Reviews";

function MovieDetails (props) {
    
    const {movieDetails} = props
    
    // const [reviews, setReviews] = useState({})
    const [movie, setMovie] = useState({})
    
    useEffect(() => {
        fetch(`http://localhost:9292/movies/${movieDetails.id}`)
        // fetch(`http://localhost:9292/reviews/movies/${movieDetails.id}`)
        .then(res => res.json())
        .then(setMovie)
    },[])
    

const content = movie.reviews ?  movie.reviews.map(review => <h2>{review.review_content}</h2>) : null
console.log(content)
 // const renderReviews = reviews.map(review => <Reviews key={review.id} review={review} />)

    return (
        <div>
            <h1>{movieDetails.title}</h1>
            <img src = {movieDetails.poster}/>
            {content}
            {/* <h2>{reviews.map(review => review.review_content)}</h2> */}
        </div>
    )
}

export default MovieDetails