let employees = [
  { eids: 101, ename: "Rahul", gender: "Male" },
  { eids: 102, ename: "Soniya", gender: "Female" },
  { eids: 103, ename: "Modi", gender: "Male" },
  { eids: 104, ename: "Priya", gender: "Female" },
  { eids: 105, ename: "Raj", gender: "Male" },
  { eids: 106, ename: "Indira", gender: "Female" },
  { eids: 107, ename: "Someone", gender: "Not Human" },
];
let emp = employees.find((emp) => {
  return emp.eids === 107;
});
console.log(emp);

let male_emps = employees.filter((e) => e.gender === "Male");
console.log(male_emps);

let male_emp = employees.filter((emp) => emp.gender === "Female");
console.log(male_emp);

let male_employees = employees.filter(function (emp) {
  return emp.gender === "Male";
});
console.log(male_employees);

let male = employees.filter((emp) => {
  return emp.gender === "Female";
});
console.log(male);
