class Drug {
    constructor(SKU,nameDrug,typeDrug,price,quantity) {
        this.nameDrug = nameDrug;
        this.typeDrug = typeDrug;
        this.price = price;
        this.quantity = quantity;
        this.sku = SKU;
    }
    getNameDrug(){
        return this.nameDrug;
    }
    getTypeDrug(){
        return this.typeDrug;
    }
    getSKU(){
        return this.sku;
    }
    getQuantity(){
        return this.quantity;
    }
    getPrice(){
        return this.price;
    }

    setPrice(price){
        this.price = price;
    }
    setSKU(sku){
        this.sku = sku;
    }
    setNameDrug(nameDrug){
        this.nameDrug = nameDrug;
    }

    settypeDrug(typeDrug){
        this.typeDrug = typeDrug;
    }

    setQuantity(quantity){
        this.quantity = quantity;
    }
    edit(SKU,nameDrug,typeDrug,price,quantity){
        this.nameDrug = nameDrug;
        this.typeDrug = typeDrug;
        this.price = price;
        this.quantity = quantity;
        this.sku = SKU;
    }

}