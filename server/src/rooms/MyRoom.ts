import { Room, Client } from "@colyseus/core";
import { MyRoomState } from "./schema/MyRoomState";
import { Entity as Entity, SubEntity } from "./schema/Entity";
import { ArrayElement, State, SubState } from "./schema/State";

export class MyRoom extends Room<MyRoomState> {
  maxClients = 4;

  onCreate(options: any) {
    this.setState(new MyRoomState());

    this.onMessage("filterBug1", (client, message) => this.filterBug1());
    this.onMessage("filterBug2", (client, message) => this.filterBug2());
  }

  filterBug1(){
    /**
     * This entity will not include any filtering as it belongs to player itself.
     */
    const player = new Entity()
    player.filtered = true
    this.state.entities.set('player', player);
    /**
     * This entity will be filtered (assuming it's a bot or another player).
     */
    const anotherPlayer = new Entity()
    anotherPlayer.filtered = true
    this.state.entities.set('anotherPlayer', anotherPlayer)

  }

  filterBug2(){
    /**
     * Changing all to unfiltered and updating some data.
     * On client, listener will not fire for anotherPlayer.
     */
    this.state.entities.forEach((player) => {
      player.filtered = false
      
      player.subEntities.push(new SubEntity())
    })
  }
}
