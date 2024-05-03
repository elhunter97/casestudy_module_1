class DrugManagement{
    constructor(arr){
        this.drug = arr;
    }

    addDrug(drugs){
        this.drug.push(drugs);
    }
    delete(sku){
        this.drug.splice(sku,1);
    }
    edit(drugs,nameDrug,SKU,typeDrug,price,quantity){
        drugs.edit(nameDrug,SKU,typeDrug,price,quantity);
    }
    findDrug(sku){
        return this.drug[sku];
    }
    show(){
        let tb='';
        for (let i = 0; i < this.drug.length; i++) {
            tb+= '<tr>';
            tb+='<td>'+this.drug[i].nameDrug+'</td>';
            tb+='<td>'+this.drug[i].sku+'</td>';
            tb+='<td>'+this.drug[i].typeDrug+'</td>';
            tb+='<td>'+this.drug[i].price+'đ'+'</td>';
            tb+='<td>'+this.drug[i].quantity+'</td>';
            tb+= '<td><button type="button" onclick="editDrug('+i+')">Sua</button>' +
                '<button type="button" onClick="deleteDrug('+i+')">Xoa</button>'+
                '<button type="button" onclick="outDrug('+i+')">Xuat kho</button>'
                +
                '</td>';
            tb+= '</tr>';
        }
        document.getElementById('drugListBody').innerHTML = tb;
    }


}