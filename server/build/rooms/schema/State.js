"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.SubState = exports.ArrayElement = void 0;
const schema_1 = require("@colyseus/schema");
class ArrayElement extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.id = Math.floor(Math.random() * 100);
    }
}
exports.ArrayElement = ArrayElement;
__decorate([
    (0, schema_1.type)("number")
], ArrayElement.prototype, "id", void 0);
class SubState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        //@type([ ArrayElement ]) array = new ArraySchema<ArrayElement>()
        this.numberMap = new schema_1.MapSchema();
    }
}
exports.SubState = SubState;
__decorate([
    (0, schema_1.type)({ map: 'number' })
], SubState.prototype, "numberMap", void 0);
class State extends schema_1.Schema {
    constructor() {
        super();
        this.subState = new SubState();
    }
}
exports.State = State;
__decorate([
    (0, schema_1.type)(SubState)
], State.prototype, "subState", void 0);
