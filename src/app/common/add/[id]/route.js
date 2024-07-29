export const PATCH=async(request,{params})=>{
const newComment=await request.json()

try {
    console.log(params.id)
    console.log(newComment)
    const index= comments.findIndex(comment=>comment.id ==params.id)
    comments[index]={
        text:newComment.text
    }
   return Response.json({message:"update",comments})

} catch (error) {
    console.log(error)
}
}

const comments=[
    {
        id:1,
        text:"hello"
    },
    {
        id:2,
        text:"hello"
    },
    {
        id:3,
        text:"hello"
    },
]