let modal = document.getElementById('myModal');
function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}
let drug1= new Drug('amoxicillin',123456789,'Thuốc điều trị',12000,12);
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
    let existingDrug = manage.findDrug(sku);
    if(existingDrug){
        if(existingDrug.nameDrug === nameDrug && existingDrug.typeDrug === typeDrug
            && Number(existingDrug.price) === Number(price)){
            existingDrug.quantity = Number(existingDrug.quantity) + Number(quantity);
            // let drug = new Drug(nameDrug,sku,typeDrug,price,existingDrug);
            // manage.addDrug(drug);
            manage.show();
            clear();
            closeModal();
        } else {
            alert('SKU da ton tai');
        }
    } else{
        let drug = new Drug(nameDrug,sku,typeDrug,price,quantity);
        manage.addDrug(drug);
        manage.show();
        clear();
        closeModal();
    }
}

function clear(){
    document.getElementById('nameDrug').value = '';
    document.getElementById('skucode').value = '';
    document.getElementById('typeDrug').value = '';
    document.getElementById('price').value = 0;
    document.getElementById('quantity').value =0;
}

function deleteDrug(sku){
    manage.delete(sku);
    manage.show();
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