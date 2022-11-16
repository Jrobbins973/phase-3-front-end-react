import React from "react";
import { Card, Icon, Image, Comment, Button, Header, Form } from 'semantic-ui-react'

function Reviews(props) {
const {review} = props
// console.log(review)

const placeholder_image = 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'

    return <div>

    <Comment.Group>
        <Header as='h3' dividing>
        </Header>

        <Comment>
        <Comment.Avatar src={placeholder_image} />
        <Comment.Content>
            <Comment.Author as='a'>Anonymous</Comment.Author>
            <Comment.Metadata>
            <div>Today at 2:43AM</div>
            </Comment.Metadata>
            <Comment.Text>{review.review_content}</Comment.Text>
            <Comment.Actions>
            <Comment.Action>Edit</Comment.Action>
            </Comment.Actions>
        </Comment.Content>
        </Comment>
        </Comment.Group>



        {/* <h3>{`Reviewer: Anonymous`}</h3>
            {review.review_content}
            <br></br>
            <Button>Edit</Button> */}
        </div>
}

export default Reviews