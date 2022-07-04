/*
 * A simple React component
 */
class Application extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", null, "Hello, ES6 and React 0.13!"), /*#__PURE__*/
    React.createElement("p", null, "More info ", /*#__PURE__*/
    React.createElement("a", { href: "https://github.com/bradleyboy/codepen-react", target: "_blank" }, "here"), "."));


  }}


/*
 * Render the above component into the div#app
 */
React.render( /*#__PURE__*/React.createElement(Application, null), document.getElementById('app'));