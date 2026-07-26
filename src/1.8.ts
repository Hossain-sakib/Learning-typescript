// object destructuring
const user = {
  id: 123,
  name: {
    firstName: "Muhammad",
    middleName: " Sakib",
    lastName: "Hossain",
  },
  contactNo: "01955703819",
  address: "marse",
};

const {
  contactNo,
  name: { middleName },
} = user;

// array destructuring

const myFirends = ["abul", "babul", "kabul"];

const [,, c] = myFirends;
