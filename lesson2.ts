interface Product {
    name: string;
    price: number;
}

let productList: Product[] = [];

function addProduct(): void {
    const productNameInput: HTMLInputElement | null = document.getElementById('product') as HTMLInputElement;
    const priceInput: HTMLInputElement | null = document.getElementById('price') as HTMLInputElement;

    if (productNameInput && priceInput) {
        const productName: string = productNameInput.value.trim();
        const price: number = parseFloat(priceInput.value.trim());

        if (productName !== '' && !isNaN(price) && price > 0) {
            const product: Product = {
                name: productName,
                price: price
            };

            productList.push(product);
            productNameInput.value = '';
            priceInput.value = '';
            updateTable();
        } else {
            alert('Please enter valid product name and price.');
        }
    }
}

function updateTable(): void {
    const dataTable: HTMLTableElement | null = document.getElementById('data-table') as HTMLTableElement;
    const dataList: HTMLElement | null = document.getElementById('data-list');

    if (dataTable && dataList) {
        dataList.innerHTML = '';

        productList.forEach((product, index) => {
            const row: HTMLTableRowElement = dataTable.insertRow();

            const cell1: HTMLTableCellElement = row.insertCell(0);
            const cell2: HTMLTableCellElement = row.insertCell(1);
            const cell3: HTMLTableCellElement = row.insertCell(2);
            const cell4: HTMLTableCellElement = row.insertCell(3);

            cell1.textContent = (index + 1).toString();
            cell2.textContent = product.name;
            cell3.textContent = product.price.toFixed(2);
            cell4.innerHTML = `<button class="btn btn-outline-primary" onclick="editProduct(${index})">Edit</button>
                               <button class="btn btn-outline-danger" onclick="deleteProduct(${index})">Delete</button>`;
            dataList.appendChild(row);
        });
    }
}

function editProduct(index: number): void {
    const productName: string | null = prompt('Enter new product name:');
    const priceString: string | null = prompt('Enter new price:');
    if (productName !== null && priceString !== null) {
        const price: number = parseFloat(priceString);
        if (!isNaN(price) && price > 0) {
            productList[index].name = productName.trim();
            productList[index].price = price;
            updateTable();
        } else {
            alert('Please enter a valid price.');
        }
    }
}

function deleteProduct(index: number): void {
    const confirmDelete: boolean = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
        productList.splice(index, 1);
        updateTable();
    }
}

updateTable();
