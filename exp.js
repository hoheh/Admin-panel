// const fn = (obj) => {
//   let newObj = {};
//   for (let [key, value] of Object.entries(obj)) {
//     if (key === 'a') {
//       newObj = {
//         ...obj,
//         [key]: 'signIn',
//       };
//     }
//   }

//   return newObj;
// };

// const obj = {
//   a: 'something',
//   b: 10,
// };
// console.log(fn(obj));

const obj = {
  a: 10,
  b: 11,
};

const obj2 = {
  a: 1,
  b: 10,
  c: 18,
};

const fn = (obj, obj2) => {
  let newObj = {};
  newObj = {
    ...obj,
    obj2,
  };
  return newObj;
};

console.log(fn(obj, obj2));
