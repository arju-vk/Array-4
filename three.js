let emp = {
  eid: 111,
  ename: "John",
  gender: "Male",
  esal: 45000,
  details: {
    email: "John@gmail.com",
    loc: "TVM",
  },
};
let { ename, details } = emp;
let { loc } = details;
console.log(ename);
console.log(loc);
