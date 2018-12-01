import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//formgroup class - grouping together stuff, control label - label for text area, form control - actual text area//
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';



//bring in the marked library that's being used//
const marked = require('marked'); //brings in the marked library that we're using
marked.setOptions({breaks: true});

//adding initial value/text for mrk aka placeholder value
const iText = `# Welcome
## This is an Example
### Of Various Markdown Formatting

**For questions,** please search vis [google](http://google.com)

\`Inline code mentioned here\`

A block of code is shown below:
\`\`\`Javascript
const x = y*myArray.length\`\`\`

- List items
 - can be made
   - as follows




> Example of blockquote
> as the quote continues
> down the lines



Cool Images: ![Color burst](https://image.shutterstock.com/image-photo/explosion-colored-powder-on-white-260nw-368250986.jpg "Color Burst")

`

class App extends Component {
	constructor(props){super(props)
	this.state = {mrk: iText}
	
	this.updateMrk = this.updateMrk.bind(this)
	}
	updateMrk(event) {
		this.setState({mrk: event.target.value})}
  render() {
    console.log(this.state.mrk)
	
	return (
	
	  <div className="App container" id='whole'>
		{/* container class brings elements in slightly so they aren't on the edge*/}
		<h1 className='hdr' id='hd1' autofocus>Markdown Input</h1>
		
		{/*copied from react bootstrap documentation, formgroup is the 'div section so to speak */}
			{/*control label is the label for the section and the control is the text area */}
		{/*component class is a specific name for the section, placeholder is the initial value till user changes it*/}
		
		{/*formgroup, controllabel and formcontrol have been commented out so the FCC can pass, textarea put in its place*/}
			{/*<FormGroup controlId="formControlsTextarea">
				<ControlLabel>Markdown Input</ControlLabel>
				<FormControl componentClass="textarea" placeholder="Enter Markdown" value={this.state.mrk} onChange={this.updateMrk}></FormControl>
			</FormGroup>*/}
		<div className='bSection' id='txta'><textarea id='editor' placeholder={this.state.mrk} value={this.state.mrk} onChange={this.updateMrk}/></div>
		
		<h1 className = 'hdr' id='hd2'>Markdown Output</h1>
		{/*still within app container, but now creating the markdown output section*/}
		{/*must use dangerouslySetInnerHTML to be able to display markdown, i believe it's to minimize abilit for attacks?
		*/}
		<form id='preview' className = 'bSection' dangerouslySetInnerHTML = {{__html: marked(this.state.mrk)}}></form>
      </div>
    );
  }
}

export default App;
