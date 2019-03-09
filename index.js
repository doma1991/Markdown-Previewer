function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //var initialText = "";

class Application extends React.Component {
  render() {
    return (
      React.createElement("div", { class: "container" },
      React.createElement("div", { class: "row" },
      React.createElement("div", { class: "col-md-12" },
      React.createElement("h1", { class: "text-center" }, "Markdown Previewer"),
      React.createElement(UserInput, null)))));




  }}


class UserInput extends React.Component {
  constructor() {
    super();_defineProperty(this, "previewUpdate",




    event => {
      this.setState({
        input: event.target.value //entering new text
      });
    });this.state = { input: "# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n## Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * one\n  * two\n  * three\n\nNumbered list:\n\n  1. one\n  2. two\n  3. three \n---\n Add square brackets to add a [link](https://www.freecodecamp.com).\n---\n > Add a side arrow for block.\n---\n Add code `<div></div>`, between 2 backticks.\n---\n ```// this is multi-line code: function anotherExample(firstLine, lastLine){ if (firstLine == '```' && lastLine == '```') { return multiLineCode;}}``` \n---\n And a link to image to display it: ![React Logo w/ Text](https://goo.gl/Umyytc) \n\n---\n\n **Feel free to delete this text**" };}

  render() {
    return (

      React.createElement("div", { class: "row" },

      React.createElement("div", { class: "col-md-6", id: "firstContainer" },
      React.createElement("span", { class: "pull-left glyphicon glyphicon-pencil" }), React.createElement("h3", null, "\xA0Editor"),
      React.createElement("textarea", { type: "text", class: "md-input", id: "editor", value: this.state.input, onChange: this.previewUpdate.bind(this) })),


      React.createElement("div", { class: "col-md-6", id: "secondContainer" },
      React.createElement("span", { class: "pull-left glyphicon glyphicon-book" }), React.createElement("h3", null, "\xA0Previewer"),
      React.createElement(MarkdownPreview, { markdown: this.state.input }))));




  }}


class MarkdownPreview extends React.Component {

  createMarkup() {
    return { __html: marked(this.props.markdown) };
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.createMarkup() })));



  }}


ReactDOM.render(
React.createElement(Application, null),
document.getElementById("body"));