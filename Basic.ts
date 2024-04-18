// ---------------------1------------------------ //
let nameValue: string = "Ismoil";
let age: number = 17;

console.log(`Name: ${nameValue}\nAge: ${age}`);

// ---------------------2------------------------ //

let sth: number = 214325;
if (true) {
    let sth: number = 11233; 
}
console.log(sth);

const sth2: string = "Qonday eey makkammi?";

function ex() {
    var sth3: boolean = true;
    if (sth3) {
        var sth3: boolean = false;
    }
    console.log(sth3);
}
ex();

// ---------------------3------------------------ //

let n1: number = 42121;
let strVariable: string = "Salom";
let boolVariable: boolean = true;
let undefinedVariable: undefined = undefined;

const n2: number = 1210;

const sum: number = n1 + n2;
console.log("Sum:", sum);

const concatenatedString: string = strVariable + "nma gap";
console.log("String:", concatenatedString);

const isTrue: boolean = boolVariable && true;
console.log("Logical AND:", isTrue);

if (undefinedVariable === undefined) {
    console.log("undefinedVariable is undefined.");
} else {
    console.log("undefinedVariable is defined.");
}

// ---------------------4------------------------ //

let n: number = 123456789;

// Type error beradi
n = "Backend tanlaysanmi yoki frontend farqi yoq, ikkalasiyam qiyin va azobdur :)"; 
// error beradi bu tabiiy hol chunki biz number tipiga str ni tenglashga urnvommz

// ishlamidi
console.log("Error n ==>", n);

// ---------------------5------------------------ //

let Variable = "100";
console.log("Type of Variable:", typeof Variable);
Variable = "Hello, TypeScript!";
console.log("My Variable:", Variable);

// ---------------------6------------------------ //

let numberString: string = "12435643254";
let numberFromAssertion: number = parseInt(numberString);
console.log("Number from assertion:", numberFromAssertion);

let numberValue: number = 5;
let stringFromAssertion: string = numberValue.toString();
console.log("String from assertion:", stringFromAssertion);

// ---------------------7------------------------ //

 type Student = {
    id: number;
    studentname: string;
    email: string;
  };
  
  type Point = {
    x: number;
    y: number;
  };
  
  const student1: Student = {
    id: 1,
    studentname: "ismoil_Tohirov",
    email: "ismoiltohirov55@gmail.com",
  };
  
  const student2: Student = {
    id: 2,
    studentname: "Jahongir_Qosimjonov",
    email: "jahongirqosimjonov47@gmail.com",
  };
  
  const originPoint: Point = {
    x: 0,
    y: 0,
  };
  
  function printStudentInfo(student: Student) {
    console.log(`Student ID: ${student.id}`);
    console.log(`Studentname: ${student.studentname}`);
    console.log(`Email: ${student.email}`);
  }
  
  function calculateDistance(point1: Point, point2: Point): number {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  console.log("Student 1:");
  printStudentInfo(student1);
  
  console.log("\nStudent 2:");
  printStudentInfo(student2);
  
  console.log("\nDistance from origin:");
  console.log(calculateDistance(originPoint, { x: 3, y: 4 }));
  
// ---------------------8------------------------ //

const colors: string[] = ["Red", "Green", "Blue", "Orange"];

colors.push("White");
colors.push("Pink");
colors.pop(); 

console.log("Array Elements:");
for (const c of colors) {
  console.log(c);
}

const searchColor = "Green";
const isColorInArray = colors.includes(searchColor);
console.log(`Is ${searchColor} in the array? ${isColorInArray ? "Yes" : "No"}`);

const indexOfBlue = colors.indexOf("Blue");
console.log(`Index of "Blue" in the array: ${indexOfBlue}`);

if (indexOfBlue !== -1) {
  colors.splice(indexOfBlue, 1);
}

console.log("Modified Array:");
console.log(colors);

// ---------------------9------------------------ //

enum Color {
    Red,
    Green,
    White,
    Blue,
    Orange,
    Black
}
  console.log("List of colors:",Color);
  let selectedColor: Color = Color.Blue;
  
  console.log("Selected Color:", selectedColor);
  
  // ---------------------10------------------------ //

  let IsNull: null = null;
  let IsUndefined: undefined = undefined;
  
  console.log(`IsNull? ==> ${IsNull}`)
  console.log(`IsUndefined? ==> ${IsUndefined}`)
  



