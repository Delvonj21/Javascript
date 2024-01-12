/* Shuffle
 In JavaScript, the Array object has numerous useful methods. 
 It does not, however, contain a method that will randomize the order of an array’s elements. 
 Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. 
 Do you need to return anything from your function?
*/

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const randIndex = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
  }
}




/* Skyline Heights
Lovely Burbank has a breathtaking view of the Los Angeles skyline. 
Let’s say you are given an array with heights of consecutive buildings
starting closest to you and extending away. Array [-1,7,3] would represent three buildings: 
first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). 
You are situated at street level. Return array containing heights of buildings you can see, in order. 
Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4].
 As always with challenges, do not use built-in array functions such as unshift().
 */

 function skylineHeights(buildingHeights) 
 {
  let maxBuildingHeight = 0;
  const visibleBuildings = [];
  
  for (const buildingHeight of buildingHeights) 
  {
      if (buildingHeight > maxBuildingHeight) 
      {
          visibleBuildings.push(buildingHeight);
          maxBuildingHeight = buildingHeight;
      }
  }
  
  return visibleBuildings;
}

/* Zip It
Create a standalone function that accepts two arrays and combines their values sequentially into a new array. 
Extra values from either array should be included afterward. 
Given [4,15,100] and [10,20,30,40], return new array containing [4,10,15,20,30,40,100].
*/

function zipIt(arr1, arr2) {
 
  let largerArr;
  if (arr1.length > arr2.length) 
  {
    largerArr = arr1;
  } else 
  {
    largerArr = arr2;
  }
  
  const newArr = [];

  for (let i = 0; i < largerArr.length; i++) {
      if (i <= arr1.length - 1) {
          newArr.push(arr1[i]);
      }
      if (i <= arr2.length - 1) {
          newArr.push(arr2[i]);
      }
  }

  return newArr;
}

