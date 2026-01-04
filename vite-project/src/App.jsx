import Chai from "./chai.jsx"
import React from "react";

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to go to Google'
// }

// const reactElement = <Chai />;

// const reactElement = <a href="https://www.google.com" target="_blank">Google</a>;

function SecondCheckApp() {
  return (
    React.createElement(
      'a',
      {
        href: 'https://www.google.com',
        target: '_blank'
      },
      'Go to Google'
    )
  )
}
function App() {

  const name = "in School";
  return (
    <>
    <h1>chai is raady at {name}</h1>
      <SecondCheckApp />
      <Chai/>
    </>
  )
}

export default App
