// const test = console.log(test)

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  // console.log({col : [...collection].length , src : Object.keys(source).length})
  let srcKeys = Object.keys(source);

  return collection.filter((item) =>
    srcKeys
      .map((key) => item.hasOwnProperty(key) && item[key] == source[key])
      .reduce((a, b) => a && b)
  );
}

// whatIsInAName([
//     {
//         first: "Romeo",
//         last: "Montague"
//     }, {
//         first: "Mercutio",
//         last: null
//     }, {
//         first: "Tybalt",
//         last: "Capulet"
//     }
// ], {last: "Capulet"});

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })

let ans = whatIsInAName(
  [
    {
      apple: 1,
      bat: 2,
    },
    {
      apple: 1,
    },
    {
      apple: 1,
      bat: 2,
      cookie: 2,
    },
  ],
  {
    apple: 1,
    cookie: 2,
  }
);

console.log(ans);
