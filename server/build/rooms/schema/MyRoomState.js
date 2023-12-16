"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRoomState = void 0;
const schema_1 = require("@colyseus/schema");
const Entity_1 = require("./Entity");
const State_1 = require("./State");
class MyRoomState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.entities = new schema_1.MapSchema();
        this.states = new schema_1.MapSchema();
    }
}
exports.MyRoomState = MyRoomState;
__decorate([
    (0, schema_1.type)({ map: Entity_1.Entity })
], MyRoomState.prototype, "entities", void 0);
__decorate([
    (0, schema_1.type)({ map: State_1.State })
], MyRoomState.prototype, "states", void 0);
