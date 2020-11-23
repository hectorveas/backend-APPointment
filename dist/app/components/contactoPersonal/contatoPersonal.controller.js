"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactoPersonal_repository_1 = __importDefault(require("./contactoPersonal.repository"));
function crearContacto(contacto) {
    return contactoPersonal_repository_1.default.crearContacto(contacto);
}
function eliminarContacto(idContacto) {
    return contactoPersonal_repository_1.default.eliminarContacto(idContacto);
}
function mostrarContactos() {
    return contactoPersonal_repository_1.default.mostrarContactos();
}
exports.default = { crearContacto, eliminarContacto, mostrarContactos };
