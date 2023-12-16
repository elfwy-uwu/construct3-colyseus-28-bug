"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRoom = void 0;
const core_1 = require("@colyseus/core");
const MyRoomState_1 = require("./schema/MyRoomState");
const Entity_1 = require("./schema/Entity");
const State_1 = require("./schema/State");
class MyRoom extends core_1.Room {
    constructor() {
        super(...arguments);
        this.maxClients = 4;
    }
    onCreate(options) {
        this.setState(new MyRoomState_1.MyRoomState());
        this.onMessage("filterBug1", (client, message) => this.filterBug1());
        this.onMessage("filterBug2", (client, message) => this.filterBug2());
        this.onMessage("swapStatesBug1", (client, message) => this.swapStatesBug1());
        this.onMessage("swapStatesBug2", (client, message) => this.swapStatesBug2());
    }
    filterBug1() {
        /**
         * This entity will not include any filtering as it belongs to player itself.
         */
        const player = new Entity_1.Entity();
        player.filtered = true;
        this.state.entities.set('player', player);
        /**
         * This entity will be filtered (assuming it's a bot or another player).
         */
        const anotherPlayer = new Entity_1.Entity();
        anotherPlayer.filtered = true;
        this.state.entities.set('anotherPlayer', anotherPlayer);
    }
    filterBug2() {
        /**
         * Changing all to unfiltered and updating some data.
         * On client, listener will not fire for anotherPlayer.
         */
        this.state.entities.forEach((player) => {
            player.filtered = false;
            player.subEntities.push(new Entity_1.SubEntity());
        });
    }
    swapStatesBug1() {
        const state1 = new State_1.State();
        const newSubState = new State_1.SubState();
        for (let i = 0; i < 3; i++) {
            //newSubState.array.push(new ArrayElement())
            newSubState.numberMap.set(i.toString(), i);
        }
        state1.subState = newSubState;
        this.state.states.set('state', state1);
        //this.state.states['$changes'].touch('state')
    }
    swapStatesBug2() {
        let state = this.state.states.get('state');
        const newSubState = new State_1.SubState();
        for (let i = 0; i < 3; i++) {
            //newSubState.array.push(new ArrayElement())
            newSubState.numberMap.set(i.toString(), 3 - i);
        }
        state.subState = newSubState;
        //this.state.states['$changes'].touch('state')
        //console.log(this.state.states.get('state'), state2)
    }
}
exports.MyRoom = MyRoom;
