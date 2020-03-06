
//You are given an array with a length of 8. the values will be random 1's and 0's. If both neighbors of a given index have equal values to themselves, the given index needs to swap it's current value to a 1 if it is 0, or 0 if it is a 1. If it is at the styart or end of the array, assum that [1] and [6] have a matching pair, so [0] and [7] will swap values

//if  count([ 1, 0, 0, 1, 1, 1, 0, 0 ], 4)
// the expected outputs are:
// 0,0,0,1,0,1,0,1 first pass
// 1,1,0,0,1,0,1,0 second pass
// 0,1,0,0,0,1,0,1 third pass

const count = (arr, days) => {
  while (days > 0) {
    let newArray = [];
    console.log(arr)
    //first index
    if (arr[0] === 1) newArray[0] = 0;
    if (arr[0] === 0) newArray[0] = 1;

    //second index
    if (arr[0] !== arr[2]) newArray[1] = arr[1];
    else if (arr[0] === arr[2] && arr[1] === 0) newArray[1] = 1;
    else if (arr[0] === arr[2] && arr[1] === 1) newArray[1] = 0;

    //third index
    if (arr[1] !== arr[3]) newArray[2] = arr[2];
    else if (arr[1] === arr[3] && arr[2] === 0) newArray[2] = 1;
    else if (arr[1] === arr[3] && arr[2] === 1) newArray[2] = 0;

    //fourth index
    if (arr[2] !== arr[4]) newArray[3] = arr[3];
    else if (arr[2] === arr[4] && arr[3] === 0) newArray[3] = 1;
    else if (arr[2] === arr[4] && arr[3] === 1) newArray[3] = 0;

    //fifth index
    if (arr[3] !== arr[5]) newArray[4] = arr[4];
    else if (arr[3] === arr[5] && arr[4] === 0) newArray[4] = 1;
    else if (arr[3] === arr[5] && arr[4] === 1) newArray[4] = 0;

    //sixth index
    if (arr[4] !== arr[6]) newArray[5] = arr[5];
    else if (arr[4] === arr[6] && arr[5] === 0) newArray[5] = 1;
    else if (arr[4] === arr[6] && arr[5] === 1) newArray[5] = 0;

    //seventh index
    if (arr[5] !== arr[7]) newArray[6] = arr[6];
    else if (arr[5] === arr[7] && arr[6] === 0) newArray[6] = 1;
    else if (arr[5] === arr[7] && arr[6] === 1) newArray[6] = 0;

    //last index
    if (arr[7] === 0) newArray[7] = 1;
    if (arr[7] === 1) newArray[7] = 0;

    days -= 1;
    arr = newArray;
  }
  return arr;
}
count([1, 0, 0, 1, 1, 1, 0, 0], 27)


