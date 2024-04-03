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
  


// ---------------------3------------------------ //
// ---------------------7------------------------ //
// ---------------------8------------------------ //