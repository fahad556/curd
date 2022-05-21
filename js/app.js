// variables 
let nameInput = document.getElementById('product-name');
let categoryInput = document.getElementById('product-category');
let priceInput = document.getElementById('product-price');
let descriptionInput = document.getElementById('product-description');
let addBtn = document.getElementById('create-Btn-product');
let updateBtn = document.getElementById('ubdate-Btn-product');
let tbody = document.getElementById('tbody');
var indexGlobal;
// const productContainer = [];
if (localStorage.getItem('data') == null) {
    var productContainer = [];
}
else{
    var productContainer = JSON.parse(localStorage.getItem('data'));
    displayProduct();
}

// fun
function createProduct() {

    const product = {
        name: nameInput.value,
        price: priceInput.value,
        category: categoryInput.value,
        description: descriptionInput.value
    };
    
    productContainer.push(product);
    localStorage.setItem("data", JSON.stringify(productContainer));
    displayProduct();
    clearForm();
    
}

function clearForm() {
    nameInput.value = '';
    categoryInput.value = '';
    priceInput.value = '';
    descriptionInput.value = '';

}


function displayProduct() {
    let trs = ''
    for (let i = 0; i < productContainer.length; i++) {
        trs += `<tr>
        <td scope="row">${[i]}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].description}</td>
        <td><button class="btn btn-outline-primary " onclick='updateProduct(${i})' >
            <i class="fa fa-solid fa-edit"></i>
        </button></td>
        <td><button onclick='deleteProduct(${i})'  class="btn btn-outline-danger">
           <i class="fa-regular fa-trash-can" ></i>
       </button></td>
    </tr>
    `
    }
    document.getElementById('tbody').innerHTML = trs;
    
}

function deleteProduct(index) {
    productContainer.splice(index, 1);
    alert('Delete');
    displayProduct();
    localStorage.setItem("data", JSON.stringify(productContainer));
}
function updateProduct(updateIndex) {
    indexGlobal = updateIndex;
    nameInput.value = productContainer[updateIndex].name;
    categoryInput.value = productContainer[updateIndex].category;
    priceInput.value = productContainer[updateIndex].price;
    descriptionInput.value = productContainer[updateIndex].description;
    updateBtn.classList.replace('d-none' , 'd-inline-block');
    addBtn.classList.add('d-none');
    
}
function updateProductOne(){
     productContainer[indexGlobal].name= nameInput.value;
     productContainer[indexGlobal].category= categoryInput.value;
     productContainer[indexGlobal].price= priceInput.value;
     productContainer[indexGlobal].description= descriptionInput.value;
     localStorage.setItem("data", JSON.stringify(productContainer));
     displayProduct();
     clear();
}
function searchProduct() {
    let searchInput = document.getElementById('search-input');
    let trs = '';
    for (let i = 0; i < productContainer.length; i++){
            if( productContainer[i].name.includes(searchInput.value)){
            trs += `<tr>
            <td scope="row">${[i]}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].description}</td>
            <td><button class="btn btn-outline-primary " onclick='updateProduct(${i})' >
                <i class="fa fa-solid fa-edit"></i>
            </button></td>
            <td><button onclick='deleteProduct(${i})'  class="btn btn-outline-danger">
               <i class="fa-regular fa-trash-can" ></i>
           </button></td>
        </tr>
        `
        }
    }
    
    document.getElementById('tbody').innerHTML = trs;
    
}
function validateProduct() {
    var nameRegex = /^[A-Z][a-z]{3,10}[0-9]{0,3}$/
}