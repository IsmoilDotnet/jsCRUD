
let dataStore = [];


function create(item) {
    dataStore.push(item);
    console.log(`Created new data: ${item}`);
}


function read() {
    return `\nCurrent Data:\n${dataStore}\n`;
}


function update(index, newItem) {
    if (index >= 0 && index < dataStore.length) {
        console.log(`\n${dataStore[index]} is Updated to ${newItem}!\n`);
        dataStore[index] = newItem;
        return true;
    }
    return false;
}


function del(index) {
    if (index >= 0 && index < dataStore.length) {
        console.log(`\n${dataStore[index]} is succesfully deleted! \n`)
        dataStore.splice(index, 1);
        return true;
    }
    return false; 
}


create("Ibrohim");
create("Ismoil");
// create("Ilhom");
// create("Isroil");
// create("Islom");
// create("Iroda");
console.log(read()); 

update(1, "Teshavoy");
console.log(read());

del(0);
console.log(read());
