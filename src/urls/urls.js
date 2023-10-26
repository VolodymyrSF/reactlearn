
const baseURL='https://jsonplaceholder.typicode.com'

const todos='/todos'
const albums='/albums'
const comments='/comments'
const posts='/posts'

const urls={
    todos,
    albums,
    comments,
    posts:{
        getById:(postId)=>`${posts}/${postId}`
    }

}
export {baseURL,urls}