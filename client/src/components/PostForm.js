import React from 'react'
import { Form,Button } from 'semantic-ui-react'
import { useForm  } from "../utils/hooks"
import {  useMutation } from "@apollo/react-hooks"
import gql  from 'graphql-tag'

function PostForm(){
    const { onChange,onSubmit,values } = useForm(createPostCallback,{
        body:""
    })


    const [createPost,{ error }] = useMutation(CREATE_POST_MUTATION,{
        variables:values,
        update(_,result){
            console.log(result)
            values.body=""
        }
    }) 

    function createPostCallback(){
        createPost()
    }

return(
    <Form onSubmit={onSubmit}>
        <h2>Create a post</h2>
        <Form.Field>
            <Form.Input
            placeholder="Hi world!"
            name="body"
            onChange={onChange}
            value={values.body}
            >

            </Form.Input>

            <Button type="submit" color="teal">
                Submit
            </Button>
        </Form.Field>
    </Form>
)
}

const CREATE_POST_MUTATION =  gql`
mutation createPost($body:String!){
    createPost(body: $body){
        id body createdAt username
        likes{
            id username createdAt
        }
        likeCount
        comments{
            id body username createdAt
        }
        commentCount
    }
}
`
export default PostForm