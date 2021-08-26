const projectName = "markdown-previewer";
localStorage.setItem('example_project', 'Markdown Previewer');

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true });


// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder,
      maxEditor: false,
      maxPreview: false };

    this.handleChange = this.handleChange.bind(this);
    this.maximizeEditor = this.maximizeEditor.bind(this);
    this.maximizePreview = this.maximizePreview.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value });

  }
  maximizeEditor() {
    this.setState({
      maxEditor: !this.state.maxEditor });

  }
  maximizePreview() {
    this.setState({
      maxPreview: !this.state.maxPreview });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("body", { className: "fluid-container" }, /*#__PURE__*/
      React.createElement(AppEditor, { cols: this.state.maxEditor ? "11 max" : this.state.maxPreview ? "0 min" : "10 reg-e", maximizeEditor: this.maximizeEditor, input: this.state.input, handleChange: this.handleChange }), /*#__PURE__*/

      React.createElement(AppPreview, { cols: this.state.maxPreview ? "11 max" : this.state.maxEditor ? "0 min" : "10 reg-p", maximizePreview: this.maximizePreview, markdown: this.state.input })));




  }}
;

class AppEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "row justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { id: "editor-box", className: "col-" + this.props.cols }, /*#__PURE__*/
      React.createElement("div", { id: "editor-title", className: "title-bar" }, /*#__PURE__*/
      React.createElement("h3", null, "Editor"), /*#__PURE__*/
      React.createElement("h3", null, /*#__PURE__*/React.createElement("i", { className: "fa fa-compress", onClick: this.props.maximizeEditor }))), /*#__PURE__*/

      React.createElement("div", { id: "editor-panel" }, /*#__PURE__*/
      React.createElement("textarea", { id: "editor",
        value: this.props.input,
        onChange: this.props.handleChange,
        type: "text" })))));




  }}
;
class AppPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "row justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { id: "preview-box", className: "col-" + this.props.cols }, /*#__PURE__*/
      React.createElement("div", { id: "editor-title", className: "title-bar" }, /*#__PURE__*/
      React.createElement("h3", null, "Preview"), /*#__PURE__*/
      React.createElement("h3", null, /*#__PURE__*/React.createElement("i", { className: "fa fa-compress", onClick: this.props.maximizePreview }))), /*#__PURE__*/

      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.props.markdown, { renderer: renderer }) } }))));



  }}
;

const placeholder =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));