import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
// we cannot write the js in the ending as it is automatically detacted by webpack
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
// Semantic UI is used for basic UI in CSS.
// Semantic UI cdn search to install locally
// faker js is a library used to generate the image.
// in order to install that we can use command {npm install --save faker}
// How we can generate the reuseable component
// 1- identify which part of the code is copy and paste in the editor.
// 2- Given the descriptive name to that component.
// 3- create new file which named as the name of the descriptive component.
// then place the duplicate code inside the code.
// 4- Now configure the react prop system it allows us how our component shows in the content.
// 5- in order to export the component we first export the component and then import the component inside the file.
// <CommentDetail /> is used to call as it is not traditional type of thing to reference the javascript or javascript object.
