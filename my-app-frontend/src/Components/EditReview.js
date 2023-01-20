import React, {useState} from "react";
import { Card, Icon, Image, Container, Button, Header, Form } from 'semantic-ui-react'

function EditReview(props) {

    const {review, handleSubmit, isEditing, setIsEditing, onUpdate, movie, setMovie} = props

    // const [updatedReview, setUpdatedReview] = useState({...review})
    const [reviewChange, setReviewChange] = useState(review.review_content)
    const [reviewRating, setRatingChange] = useState(review.user_rating)

    function handleReviewChange(e) {
        setReviewChange(e.target.value)
    }

    function handleRatingChange(e) {
        setRatingChange(e.target.value)
    }

   

    function reviewChangeSubmit(e){
        e.preventDefault()
        const updatedReview = {
            movie_id: movie.id,
            review_content: reviewChange,
            user_rating: reviewRating
        }
        addUpdatedReview(updatedReview)
    }

    // function handleChange(e) {
    //     setUpdatedReview({...updatedReview, [e.target.name]: e.target.value})
    // }

    function addUpdatedReview(updatedReview) {
        setIsEditing(!isEditing)
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
        .then(r => r.json())
        .then(updatedMovieReviews => setMovie(updatedMovieReviews))
    }

    return <div>
<Form onSubmit={reviewChangeSubmit}>
        <Form.Group>
            <Form.Input
            placeholder='Review'
            name='Review'
            value={reviewChange}
            onChange={handleReviewChange}
            />
            <Form.Input 
            placeholder='Rating'
            name='Rating'
            value={reviewRating}
            onChange={handleRatingChange}
            />
            <button className="button-85">Submit</button> 
            </Form.Group>
        </Form>
    </div>
}

export default EditReview