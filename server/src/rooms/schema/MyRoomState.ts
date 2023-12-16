import { Schema, type, MapSchema } from "@colyseus/schema";
import { Entity } from "./Entity";
import { State } from "./State";

export class MyRoomState extends Schema {

  @type({ map: Entity }) entities = new MapSchema<Entity>();
  @type({ map: State }) states = new MapSchema<State>();

}
