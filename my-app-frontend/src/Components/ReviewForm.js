import React, {useState} from "react";
import { Card, Icon, Image, Container, Button, Header, Form } from 'semantic-ui-react'


function ReviewForm(props){
    
    const {movie, setMovie} = props
        // START OF FORM LOGIC

        const [userReview, setUserReview] = useState("")
        const [userRating, setUserRating] = useState("")
    
        function addReview(e){
            setUserReview(e.target.value)
        }
    
        function addRating(e){
            setUserRating(e.target.value)
        }
    
        function reviewFormSubmit(e){
            e.preventDefault()
            const newReview = {
                review_content: userReview,
                user_rating: userRating
            }
            addNewReview(newReview)
            
            setUserReview("")
            setUserRating("")
        }
    
        const addNewReview = (newReview) => {
            fetch('http://localhost:9292/reviews', {
                method: "POST",
                headers: {
                    "Content-type": 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newReview),
            })
            .then(res => res.json())
            .then(newReviewData => setMovie({...movie, reviews:[...movie.reviews, newReviewData]}))
    
        }
    
        // END OF FORM LOGIC
    return <div>
        <Form onSubmit={reviewFormSubmit}>
        <Form.Group>
            <Form.Input
            placeholder='Review'
            name='Review'
            value={userReview}
            onChange={addReview}
            />
            <Form.Input 
            placeholder='Rating'
            name='Rating'
            value={userRating}
            onChange={addRating}
            />
            <Form.Button content='Submit' />
            </Form.Group>
        </Form>
    </div>
}

export default ReviewForm