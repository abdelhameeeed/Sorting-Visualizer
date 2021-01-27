import React from 'react';
import {getMergeSortAnimations} from '../sortingalgorithms/sortingalgorithms.js';
import {BubbleSort} from '../sortingalgorithms/sortingalgorithms.js' ;
import {InsertionSortt} from '../sortingalgorithms/sortingalgorithms.js' ;
import {QuickSort} from '../sortingalgorithms/sortingalgorithms.js' ;
import {heapsort} from '../sortingalgorithms/sortingalgorithms.js' ;
import {cocktailsort} from '../sortingalgorithms/sortingalgorithms.js' ;
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 450;
// This is the main color of the array bars.
const PRIMARY_COLOR = 'orange';
// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'black';
export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }
  componentDidMount() {
    this.resetArray();
  }
  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 720));
    }
    this.setState({array});
  }
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  InsertionSort(){
    const animations  = InsertionSortt(this.state.array) ;
    for(let i = 0 ; i < animations.length; i ++ ){
      const arrayBars = document.getElementsByClassName('bar');
      const iscolorchange = i % 4 === 0 || i % 4 === 1 ; 
      if(iscolorchange){
        const [barOneIdx , barTwoIdx ] = animations[i] ;
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else{
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  quickSort() {
    const animations = QuickSort(this.state.array ) ;
    for(let i = 0 ; i < animations.length ; i ++ ){
      const arraybars = document.getElementsByClassName('bar') ;
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arraybars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
    }
  }
  heapSort() {
    const animations = heapsort(this.state.array) ;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');
      const isColorChange = i % 4 === 0 || i % 4 === 1 ;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  bubbleSort() {
    const animations  = BubbleSort(this.state.array) ; 
    for(let i = 0 ; i < animations.length ; i ++ ){
      const arraybars = document.getElementsByClassName('bar') ;
      const is_over_write = i % 4 === 2 || i % 4 === 3  ;
      if(!is_over_write){
        let color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR ; 
        const [barOneIdx, barTwoIdx] = animations[i]   ;
        const barOnestyle = arraybars[barOneIdx].style ; 
        const barTwostyle = arraybars[barTwoIdx].style ;
        setTimeout(() => {
          barOnestyle.backgroundColor = color ;
          barTwostyle.backgroundColor = color ;
        }, i * ANIMATION_SPEED_MS ) ;
      } 
      else{
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i] ;
          const barOneStyle = arraybars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  CocktailSort(){
    const animations = cocktailsort(this.state.array) ;
    for(let i = 0 ; i < animations.length ; i ++ ){
      const arraybars = document.getElementsByClassName('bar') ;
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arraybars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
    }

  }
  testSortingAlgorithms() {
    const all_ = randomIntFromInterval(100 , 1000 ) ;
    for (let i = 0; i < all_; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 10000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const temp = array.slice() ;
      const javaScriptSortedArray = temp.sort((a, b) => a - b);
      cocktailsort(array);
      console.log(arraysAreEqual(array,temp));
    }
  }
  render() {
    const {array} = this.state;
    return (
      <div className="bar_container">
        {array.map((value, idx) => (
          <div
            className="bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <button onClick={() => this.resetArray()} className="btn">Generate New Array</button>
        <button onClick={() => this.mergeSort()}className="btn">Merge Sort</button>
        <button onClick={() => this.quickSort()}className="btn">Quick Sort</button>
        <button onClick={() => this.heapSort()}className="btn">Heap Sort</button>
        <button onClick={() => this.bubbleSort()}className="btn">Bubble Sort</button>
        <button onClick={() => this.InsertionSort()}className="btn">Insertion Sort</button>
        <button onClick={() => this.CocktailSort()}className="btn">Cocktail Sort</button>
        
        {/*<button onClick={() => this.testSortingAlgorithms()}className="btn">
          Test Sorting Algorithms (BROKEN)
          </button>*/}
      </div>
    );
  }
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {    
      return false;
    }
  }
  return true;
}