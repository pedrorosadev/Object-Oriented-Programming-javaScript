"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eletronicProduct_1 = require("./eletronicProduct");
console.clear();
console.log('========== Sistema Para Loja de Eletrônicos ==========\n');
var motherboard = new eletronicProduct_1.EletronicProduct();
motherboard.calculate('Placa Mãe', 120, 4);
