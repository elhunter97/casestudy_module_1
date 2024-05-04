let modal = document.getElementById('myModal');
function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}
let drug1= new Drug(123456789,'amoxicillin','Thuốc điều trị',12000,12);
let arr= [drug1];
let manage = new DrugManagement(arr);

function addDrug(){
    let nameDrug = document.getElementById('nameDrug').value;
    let sku = document.getElementById('skucode').value;
    let typeDrug = document.getElementById('typeDrug').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    if (quantity<=0||quantity>10000){
        alert('Quantity cannot be empty');
        return;
    }
    if (price<=0){
        alert('Wrong price');
        return;
    }

    let drug = new Drug(sku,nameDrug,typeDrug,price,quantity);
    manage.addDrug(drug);
    manage.show();
    clear();
    closeModal();
}
function checkSKU(){
   let sku = document.getElementById('skucode').value;
    let skuRegex = /^\d{9}$/; // Biểu thức kiểm tra SKU là 9 chữ số
    let existDrug = manage.findDrug(sku);
    if (!skuRegex.test(sku)) {
        alert('Mã SKU phải có 9 chữ số');
        document.getElementById('skucode').focus();
        return 0;
    }
}

function checkSameSKU(sku){
    sku = document.getElementById('skucode').value;
    let existDrug = manage.findDrug(sku);
    if (existDrug){
        return 0;
    }
    return 1;
}

function clear(){
    document.getElementById('nameDrug').value = '';
    document.getElementById('skucode').value = '';
    document.getElementById('typeDrug').value = '';
    document.getElementById('price').value = 0;
    document.getElementById('quantity').value =0;
}

function deleteDrug(sku){
    if(confirm('Bạn có chắc chắn muốn xóa sản phẩm này')){
        manage.delete(sku);
        manage.show();
    } else manage.show();

}

let skucode = 0;
function editDrug(sku){
    openModal();
    let drug = manage.findDrug(sku);
    document.getElementById('nameDrug').value = drug.nameDrug;
    document.getElementById('skucode').value = drug.sku;
    document.getElementById('typeDrug').value = drug.typeDrug;
    document.getElementById('price').value = drug.price;
    document.getElementById('quantity').value = drug.quantity;
    skucode = sku;
    let btnUpdate = document.getElementById('btnAdd');
    btnUpdate.textContent = 'Cập nhật';
    btnUpdate.onclick = function(){
            update();
    }
}

function update(){
    let name = document.getElementById('nameDrug').value;
    let sku = document.getElementById('skucode').value;
    let type = document.getElementById('typeDrug').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;

    let drug = manage.findDrug(skucode);
    drug.edit(name, sku, type, price, quantity);
    manage.show();
    clear();

    let btnAdd = document.getElementById('btnAdd');
    btnAdd.textContent = 'Thêm';
    btnAdd.onclick = addDrug;

    closeModal();

}

function outDrug(sku){
    let cnt = +prompt('Nhap so luong can xuat kho');
    let drug = manage.findDrug(sku);
    drug.quantity = Number(drug.quantity)-cnt;
    manage.show();
}


manage.show();