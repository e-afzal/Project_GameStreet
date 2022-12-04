import bcrypt from "bcryptjs";

const users = [
  {
    fName: "Sam",
    lName: "Rogers",
    email: "sam@email.com",
    number: 123456,
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    fName: "Sal",
    lName: "Delgado",
    email: "sal@email.com",
    number: 123456,
    password: bcrypt.hashSync("123456", 10),
  },
  {
    fName: "John",
    lName: "Wick",
    email: "j.wick@email.com",
    number: 123456,
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
