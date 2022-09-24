"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EletronicProduct = void 0;
var EletronicProduct = /** @class */ (function () {
    function EletronicProduct() {
    }
    /*
    constructor({name, price, amountOfProduct}:IEletronicProduct){
        this.name = name;
        this.price = price;
        this.amountOfProduct = amountOfProduct;
    }
    */
    EletronicProduct.prototype.calculate = function (name, price, amountOfProduct) {
        this.name = name;
        this.price = price;
        this.amountOfProduct = amountOfProduct;
        var result = price * amountOfProduct;
        console.log("Produto: ".concat(name, "\nValor do Produto: ").concat(price, "\nQuantidade de Produtos: ").concat(amountOfProduct, "\nTotal R$ ").concat(result));
    };
    return EletronicProduct;
}());
exports.EletronicProduct = EletronicProduct;
