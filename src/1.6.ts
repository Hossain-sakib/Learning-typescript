//Functions

//Normal functions
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(3, 7);

//Arrow functions
const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};
addArrow(3, 7);

//object --> function --> method
const poorUser = {
  name: "Sakib",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance ${(this, balance + balance)}`;
  },
};

const arr: number[] = [1, 4, 5];

const newArray = arr.map((elem: number): number => elem * elem);
