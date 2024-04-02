let dataStore = [];

function create() {
    const input = document.getElementById('input');
    const item = input.value.trim();
    if (item !== '') {
        dataStore.push(item);
        input.value = '';
        updateView();
    } else {
        alert('Please enter valid data.');
    }
}

function read() {
    let itemsHtml = '';
    dataStore.forEach((item, index) => {
        itemsHtml += `<tr><td>${index+1}</td><td>${item}</td><td><button class="update-btn" onclick="update(${index})">Update</button><button class="delete-btn" onclick="del(${index})">Delete</button></td></tr>`;
    });
    return itemsHtml;
}

function update(index) {
    const newItem = prompt('Enter new value:');
    if (newItem !== null) {
        dataStore[index] = newItem.trim();
        updateView();
    }
}

function del(index) {
    const confirmDelete = confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
        dataStore.splice(index, 1);
        updateView();
    }
}

function updateView() {
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = read();
}

updateView();