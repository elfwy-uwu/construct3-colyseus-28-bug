"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = exports.SubEntity = void 0;
const schema_1 = require("@colyseus/schema");
class SubEntity extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.id = Math.floor(Math.random() * 100);
    }
}
exports.SubEntity = SubEntity;
__decorate([
    (0, schema_1.type)("number")
], SubEntity.prototype, "id", void 0);
class Entity extends schema_1.Schema {
    constructor() {
        super();
        /**
         * Filtered fields not listening bug #28
         * https://github.com/colyseus/colyseus-construct3/issues/28
         *
         * We need to filter out the whole field only the first time.
         * Assuming that in future we are supposed to recieve this information which
         * previously was filtered.
         */
        this.filtered = false;
        this.subEntities = new schema_1.ArraySchema();
    }
}
exports.Entity = Entity;
__decorate([
    (0, schema_1.filter)(function (client, value, root) {
        return !this.filtered;
    }),
    (0, schema_1.type)([SubEntity])
], Entity.prototype, "subEntities", void 0);
