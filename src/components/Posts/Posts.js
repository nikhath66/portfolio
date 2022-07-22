import React from "react";
import "./Posts.css";

const PostsContent = (props) => {
  return (
    <div className="Posts-content">
      <div className="Posts-heading">{props.heading}</div>
      <div className="Posts-date-details">
        <div className="Posts-date">12 Feb 2020</div>
        <img clasName="Posts-vector" src="./images/Vector 1.png" />
        <div className="Posts-design">{props.design}</div>
      </div>
      <div className="Posts-description">{props.description}</div>
    </div>
  );
};

const Posts = () => {
  return (
    <div className="Posts-page">
      
        <div className="Posts-text">
        <div className="Recent-posts">Recent Posts</div>
        <div className="View-all">View all</div>
      </div>
      <div className="Posts-container">
        <PostsContent
          heading={"Making a design system from scratch"}
          design={"Design, Pattern"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />
        <PostsContent
          heading={"Creating pixel perfect icons in Figma"}
          design={"Figma, Icon Design"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
        />
      </div>
        </div>
      
    
  );
};

export default Posts;
