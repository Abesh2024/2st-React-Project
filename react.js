// const { func } = require("prop-types");

// function App() {
//     return React.createElement(
//       "div",
//       null,
//       React.createElement("h1", { }, "Topics Covered"),
//       Para1(),
//       Para2(),
//       Para3()
//     );
//   }
  
//   function Para1() {
//     return React.createElement(
//       "p",
//       { },
//       React.createElement("a",{href:'#'},"Getting started with web"),
//     );
//   }

  
//   function Para2() {
//     return React.createElement(
//       "p",
//       { },
//       'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable". From there, you should be able to start making your way, ',
//       React.createElement("a",{href:'#'},"rest of MDN")," learning from the MDN and other intermediate to advanced resources that assume a lot of previous knowledge."
//     );
//   }
  
//   function Para3() {
//     return React.createElement(
//       "p",
//       { },
//       "If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development(on your own or as a part of class), a teacher looking for a class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."
//     );
//   }
  
//    let abc = document.getElementById("root1");
  
//   let newVar = App();
//   ReactDOM.render(newVar, abc);
    const A = React.createElement("h1", {}, "Topics Coverd")

  const B = React.createElement("a", {href:'#'}, "hhfufikif")

  const C = React.createElement("p", {}, "If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the")

  const X = React.createElement("a", {href:'#'}, "hhfufikif")

  const Y = React.createElement("p", {}, "If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the")

  const M = React.createElement("a", {href:'#'}, "hhfufikif")

  const N = React.createElement("p", {}, "If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the")

  const Div = React.createElement("div", {}, [A, B, C, X, Y, M, N])

//   const Div2 = React.createElement("div", {}, P)

  ReactDOM.render(Div, document.getElementById("root1"));