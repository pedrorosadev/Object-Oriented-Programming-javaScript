"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client() {
    }
    //Construtores
    Client.prototype.constructorPF = function (_a) {
        var name = _a.name, gender = _a.gender, birthDate = _a.birthDate, cpf = _a.cpf, rg = _a.rg, city = _a.city, uf = _a.uf;
    };
    Client.prototype.constructorPJ = function (_a) {
        var companyName = _a.companyName, cnpj = _a.cnpj, city = _a.city, uf = _a.uf;
    };
    //Métodos da Classe Cliente
    //Cadastra Pessoas Físicas
    Client.prototype.registerPhysicalPersonClient = function (name, gender, birthDate, cpf, rg, city, uf) {
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
        this.cpf = cpf;
        this.rg = rg;
        this.city = city;
        this.uf = uf;
    };
    //Cadastra Pessoas Jurídicas
    Client.prototype.registerLegalPersonClient = function (companyName, cnpj, city, uf) {
        this.companyName = companyName;
        this.cnpj = cnpj;
        this.city = city;
        this.uf = uf;
    };
    return Client;
}());
exports.Client = Client;
