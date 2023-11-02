
const baseURL='https://jsonplaceholder.typicode.com'

const users='/users'
const posts='/posts'
const comments='/comments'

const urls={
    users:{
        base:users,
        userById:(userId)=>`${users}/${userId}`
    },
    posts:{
        postsByUserId:(userId)=>`${users}/${userId}${posts}`,
        postByPostId:(postId)=>`${posts}/${postId}`
    },
    comments:{
        base:(postId)=>`${posts}/${postId}${comments}`
    }
}

export {baseURL,urls}