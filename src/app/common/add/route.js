import { headers } from "next/headers";

export const POST = async (request) => {
  const newComment = await request.json();
  try {
    comments.push({
      id: comments.length + 1,
      text: newComment.text,
    });

    return Response.json(
      { comments },{
        headers:{"Set-Cookie":"them=dark"}
      }
    );
  } catch (error) {
    return Response.json(error);
  }
};
export const GET = async () => {
 
  try {
    return Response.json(
      { comments },{
        headers:{"Set-Cookie":"them=dark"}
      }
    );
  } catch (error) {
    return Response.json(error);
  }
};
const comments = [
  {
    id: 1,
    text: "hello",
  },
  {
    id: 2,
    text: "hello",
  },
  {
    id: 3,
    text: "hello",
  },
];
