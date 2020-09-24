import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApproalCard from "./ApproalCard";
// we cannot write the js in the ending as it is automatically detacted by webpack
const App = () => {
  return (
    <div className="ui container comments">
      <ApproalCard>
        <CommentDetail
          author="muhammad"
          date="Today at 4:00 PM "
          text="Nice"
          img={faker.image.avatar()}
        />
      </ApproalCard>
      <ApproalCard>
        <CommentDetail
          author="Ahmed"
          date="Today at 6:00 AM"
          text="Nicework"
          img={faker.image.avatar()}
        />
      </ApproalCard>
      <ApproalCard>
        <CommentDetail
          author="zahid"
          date="Yesterady at 4:00 PM"
          text="Great"
          img={faker.image.avatar()}
        />
      </ApproalCard>
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
// Lecture props/properties : We are passing the data on diffferent components which are same and we are going to distinguish them.
// it has two stages one is relation from parent to the child and second is using that property to the childrens.
// <componentname propertyname = "value of the property"/> or <CommentDetail author = "Sam" />
// then we put the prop as an argument in the () inside that thing.
// We may also use that the passing children and or passing content to the components.
