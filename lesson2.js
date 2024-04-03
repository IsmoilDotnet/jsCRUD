var productList = [];
function addProduct() {
    var productNameInput = document.getElementById('product');
    var priceInput = document.getElementById('price');
    if (productNameInput && priceInput) {
        var productName = productNameInput.value.trim();
        var price = parseFloat(priceInput.value.trim());
        if (productName !== '' && !isNaN(price) && price > 0) {
            var product = {
                name: productName,
                price: price
            };
            productList.push(product);
            productNameInput.value = '';
            priceInput.value = '';
            updateTable();
        }
        else {
            alert('Please enter valid product name and price.');
        }
    }
}
function updateTable() {
    var dataTable = document.getElementById('data-table');
    var dataList = document.getElementById('data-list');
    if (dataTable && dataList) {
        dataList.innerHTML = '';
        productList.forEach(function (product, index) {
            var row = dataTable.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.textContent = (index + 1).toString();
            cell2.textContent = product.name;
            cell3.textContent = product.price.toFixed(2);
            cell4.innerHTML = "<button class=\"btn btn-outline-warning\" onclick=\"editProduct(".concat(index, ")\">Edit</button>\n                               <button class=\"btn btn-outline-danger\" onclick=\"deleteProduct(").concat(index, ")\">Delete</button>");
            dataList.appendChild(row);
        });
    }
}
function editProduct(index) {
    var productName = prompt('Enter new product name:');
    var priceString = prompt('Enter new price:');
    if (productName !== null && priceString !== null) {
        var price = parseFloat(priceString);
        if (!isNaN(price) && price > 0) {
            productList[index].name = productName.trim();
            productList[index].price = price;
            updateTable();
        }
        else {
            alert('Please enter a valid price.');
        }
    }
}
function deleteProduct(index) {
    var confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
        productList.splice(index, 1);
        updateTable();
    }
}
updateTable();
