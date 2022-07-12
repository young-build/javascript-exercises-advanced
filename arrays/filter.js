// @ts-check
/**
 * hover in the stringArray keyword
 * The goal is to filter the array based on the length of the string in the item
 * the string length must be less than 5 and greater than 1
 * @type {number[]}
 */
 const stringArray = ["Lorem","ipsum","dolor","sit","amet,","consectetur","adipiscing","elit.","Donec","feugiat","arcu","sit","amet","finibus","pharetra.","Praesent","aliquam","vulputate","libero,","eu","condimentum","quam","feugiat","in.","Duis","dignissim","vel","felis","id","pellentesque.","Fusce","sed","metus","non","eros","maximus","consectetur.","In","sollicitudin","arcu","ut","neque","maximus","suscipit.","Fusce","quis","laoreet","nunc.","Nulla","rutrum","orci","quis","sem","consectetur,","quis","tristique","nisi","pulvinar.","Suspendisse","nunc","nisi,","faucibus","non","nisi","ut,","lobortis","tempor","augue."]

 /**
  * a callback function that will be passed to the map argument of number array
  * @param {number} number 
  * @param {number} index 
  * @returns {boolean}
  */
 function filterArrayString(number, index) {
   throw new Error("implement function first")
 }
 
 /**
  * 
  * for more reference to filtering array,
  * go to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  * @type {number[]}
  */
 const sortedArray = stringArray.filter(filterArrayString)