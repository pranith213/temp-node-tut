// npm - global command, comes with node
// npm --verion or npm --v

// lcoal dependancy - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>


// to install package.json for storing dependecies
// npm init and just enter to skip everything
// npm init -y (skips everything defualtly)


const c =require("lodash")

const items = [1,[2,[3,[4]]]]
const newItems = c.flattenDeep(items)
console.log(newItems);
