"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plane = void 0;
var Plane = /** @class */ (function () {
    function Plane(_a) {
        var airline = _a.airline, airplaneModel = _a.airplaneModel, airplaneWeight = _a.airplaneWeight, accents = _a.accents, numberOfPassengers = _a.numberOfPassengers;
        this.airplaneModel;
        this.airplaneWeight;
        this.accents;
        this.numberOfPassengers;
    }
    ;
    Plane.prototype.toFly = function () {
        console.log("Todos passageiros se preparem para decolar.\nColoquem o sinto de seguran\u00E7a !\nE a companhia ".concat((this.airline).toUpperCase, " te deseja uma boa viagem."));
    };
    return Plane;
}());
exports.Plane = Plane;
