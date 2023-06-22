function CartOder() {
    this.arrayCart = [];
    this.addCart = function (shoes) {
        this.arrayCart.push(shoes)
    }
    this.indexFind = (id) => {
        let indexFind = -1;

        this.arrayCart.map((product, index) => {
            if(product.id == Number(id)){
                indexFind = index
            }
        });
        return indexFind;
    }
    this.deleteProduct = function(id) {
        var index = this.indexFind(id);
        if(index > -1){
            this.arrayCart.splice(index,1);
        }
    }
}