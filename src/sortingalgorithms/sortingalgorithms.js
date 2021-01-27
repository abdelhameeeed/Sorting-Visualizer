export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray,animations);
  }
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  export function BubbleSort(arr){
    const animations = [] ;
   for(let i = 0 ; i < arr.length; i ++ ){
     let  minn = arr[i] ;
     let ind = i        ;
     for (let j = i  + 1 ; j < arr.length; j ++ ){
       if( arr[j] < minn ){
         minn = arr[j] ; 
         ind = j ;
       }
     }
     animations.push([i , ind ] ) ; //compare 
     animations.push([i , ind ] ) ; //compare 
     animations.push([i , minn ] ) ; //overwrite 
     animations.push([ind , arr[i] ] ) ; //overwrite 
     arr[ind] = [arr[i], arr[i] = arr[ind]][0];
   }
   return animations ; 
  }
  export function InsertionSortt(arr){
    const animations = [] ;
    for(let i = 1 ; i < arr.length ; i ++ ){ // unsorted part
      for(let j = i  - 1 ; j >= 0 ; j -- ){ // sorted part 
        if(arr[j+1] < arr[j] ){
          animations.push([ j+1 , j ])      ; // 0
          animations.push([ j+1 , j ])      ; // 1
          animations.push([ j+1 , arr[j] ]) ; // 2 
          animations.push([ j , arr[j+1] ]) ; // 3 
          let t = arr[j+1] ;
          arr[j+1] = arr[j] ; 
          arr[j] = t ;
        }
        else{
          break ;
        }
      }
    }
    return animations ;
  }
  export function QuickSort( arr ) {
    const animations = [] ;
     solve( arr , 0 , arr.length - 1 , animations ) ;
     return animations ;
    
  }
  export function solve(arr , start , end , animations ){
    if(start > end ) return  ;
    if(start == end ) return start;     
    const ind = partition( arr , start , end , animations ) ;
    solve( arr , start , ind - 1 , animations) ; 
    solve(arr , ind + 1 , end , animations)    ;
  }
  export function partition(arr ,  start , end , animations ){
    // pivot at the last index 
    let piv_index = start;
    for(let i = start ; i < end ; i ++ ){
      if(arr[i] < arr[end] ){
        animations.push([ i , arr[piv_index]      ]) ;
        animations.push([ piv_index , arr[i] ])      ;
        let t = arr[i] ;
        arr[i] = arr[piv_index] ;
        arr[piv_index] = t ;
        ++piv_index ;
      }
    }
    let t = arr[end] ;
    animations.push([end , arr[piv_index]]);
    animations.push([piv_index , arr[end]]);
    arr[end] =  arr[piv_index] ;
    arr[piv_index] = t ;
    return piv_index   ;
  }
  export function heapsort(arr){
    const animations = []    ;
    let end = arr.length - 1 ; 
    make_heap( arr , end )   ;
    for(let i = 0 ; i < arr.length; i ++ ){
      animations.push([0,end])  ;
      animations.push([0,end])  ;
      animations.push([end , arr[0] ] ) ;
      animations.push([0 , arr[end] ] ) ;
      swap( arr , 0 , end ) ; 
      --end ;
      go_down( arr , end ) ; 
    }
    return animations;
  }
  export function make_heap(arr , end ){ // heapify .
    for(let i = 0 ; i <= end ; i ++ ){
      var cur_ind = Math.ceil(i / 2.0 ) - 1 ;
      var prev_ind = i       ; 
      while( prev_ind != 0 && arr[prev_ind] > arr[cur_ind] ){
        swap(arr , prev_ind , cur_ind ) ; 
        prev_ind = cur_ind         ;
        cur_ind = Math.ceil( cur_ind / 2.0 ) - 1  ;
      }
    }
  }
  export function go_down(arr , end ){
    var main_ind = 0 ;
    while( true ) {
      var first_child  = 2 * main_ind + 1 ; 
      var second_child = 2 * main_ind + 2 ;
      if(first_child <= end && second_child <= end ) {
        if(arr[first_child] >= arr[second_child] && arr[first_child] > arr[main_ind] ){
          swap(arr ,  first_child , main_ind ) ;
          main_ind = first_child ; 
        }
        else if( arr[first_child] < arr[second_child] && arr[second_child] > arr[main_ind] ){
          swap(arr ,  second_child , main_ind ) ;
          main_ind = second_child ; 
        }
        else{
          break ;
        }
      }
      else if(first_child <= end ){
        if(arr[first_child] > arr[main_ind] ){
          swap(arr , first_child , main_ind ) ; 
          main_ind = first_child ;
        }
        else{
          break ; 
        }
      }
      else if(second_child <= end ){
        if(arr[second_child] > arr[main_ind ] ){
          swap(arr , main_ind , second_child  ) ;
          main_ind = second_child ; 
        }
        else{ break ; }
      }
      else{ break ; }    
    }
  }
  export function cocktailsort(arr){
    const animations = [] ;
    let swapped = true ;
    let start = 0 ; 
    let end = arr.length - 1 ; 
    while (swapped){
      swapped = false ; 
      for(let i = start; i < end; i ++ ){
        if(arr[i] > arr[i+1] ){
          animations.push([i , arr[i+1]]);
          animations.push([i+1 , arr[i]]);
          
          swap(arr , i , i + 1 ) ;
          swapped = true ;
        }
      }
      if(!swapped) break ;
      swapped = false ;
      --end ;
      for(let i = end - 1 ; i >= start ; i -- ){
        if(arr[i] > arr[i+1]){
          animations.push([i , arr[i+1]]);
          animations.push([i+1 , arr[i]]);
          swap(arr , i , i + 1 ) ;
          swapped = true ;
        }
      }
      ++ start ;
    } 
    return animations ;
  }
  export function swap(arr , i ,  j ){
    let x = arr[i] ; 
    arr[i] = arr[j] ; 
    arr[j] = x ; 
  }