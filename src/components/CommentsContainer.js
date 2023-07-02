import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Akshay",
    text: "Text 1",
    replies: [
      {
        name: "Akshay",
        text: "Text 11",
        replies: [
          {
            name: "Akshay",
            text: "Text 111",
            replies: [
              {
                name: "Akshay",
                text: "Text 1111",
                replies: [],
              },
              {
                name: "Akshay2",
                text: "Text 1112",
                replies: [],
              },
              {
                name: "Akshay3",
                text: "Text",
                replies: [],
              },
            ],
          },
          {
            name: "Akshay2",
            text: "Text",
            replies: [],
          },
          {
            name: "Akshay3",
            text:  "Text",
            replies: [],
          },
        ],
      },
      {
        name: "Akshay2",
        text:  "Text",
        replies: [],
      },
      {
        name: "Akshay3",
        text: "Text",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay2",
    text:  "Text",
    replies: [
      {
        name: "Akshay2",
        text:  "Text",
        replies: [],
      },
      {
        name: "Akshay3",
        text:  "Text",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay3",
    text:  "Text",
    replies: [],
  },
];

const CommentsList = ({comments}) => {
  return (
      comments.map((comment,index) => (
        <div key={index}>
            <Comment  data={comment}></Comment>
            <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies}></CommentsList>
            </div>
         </div>
     )
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 mx-2">
      <h1 className="text-1xl font-bold"> Comments: </h1>
    <CommentsList comments={commentsData}></CommentsList>
    </div>
  );
};

export default CommentsContainer;
