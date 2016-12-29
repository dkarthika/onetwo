import React, { Component } from 'react';

import './Example.css';
import icons from './icons.json';
console.log(icons)

const wordMap = icons.reduce(function(chain,i){
  const parts = i.split('-');
  const key=parts[1];
  console.log(chain,i,parts,key);
  chain[key]=i;
  return chain;
},{});
function getRandomColor()
{
  var letters='0123456789abcdef';
  var color='#';
  for(var i=0;i<6;i++)
  {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

// const colors =
// [
//   'green',
//   'pink',
//   'yellow'
// ];

// console.log("In map?",wordMap.arrow);
// console.log(wordMap);

class Example extends Component {
   constructor() {
  // //   // In a constructor, call `super` first if the class extends another class
  super();
  //
  //   // Initialize state in the constructor; this is the only place you
  //   // can set the state directly without using this.setState
  this.state = { colors: [], };
  // this.updateColor=this.updateColor.bind(this);
}
// updateColor(ev)
// {
//   const value=ev.currentTarget.value;
// //  console.log("hey, updated",value);
//   this.setState({color:value});
// }
 componentWillReceiveProps(nextProps)
{
const nextWordCount=nextProps.text.split(' ').length;
const nextColors= [...this.state.colors];

while (nextColors.length < nextWordCount)
{

  nextColors.push(getRandomColor());
}
   console.log(this.state.colors,nextColors);
   this.setState({colors:nextColors});
 }
  render() {
    let word=this.props.text.split(' ');
const randomColors=this.state.colors;
    word =word.map(function(w,i) {
      w=w.replace(/\W/g ,'').toLowerCase();
    const st={color : randomColors[i]};
    // const st={color : getRandomColor()};


    //  const colorIndex = Math.floor(Math.random() * colors.length);
    //  const style ={
    //  color: colors[colorIndex],
    //  };
       if(wordMap[w])
       {
         return (<i key={i} style={st} className = {'fa ' + wordMap[w]} />) ;
       }
       else
       {
         w=w.replace(/s?$/g, '').toLowerCase();
         if(wordMap[w])
         {
           return(<i style = {st} className ={'fa ' + wordMap[w]} />);
         }
         return (<spam style={st} key ={i}> {w}</spam>);
       }

    }

  );

      console.log("new word array ", word);
    return(
      <p>
      {word}
      </p>
    );
  }
}

export default Example;
