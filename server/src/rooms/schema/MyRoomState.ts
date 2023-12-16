import { Schema, type, MapSchema } from "@colyseus/schema";
import { Entity } from "./Entity";

export class MyRoomState extends Schema {

  @type({ map: Entity }) entities = new MapSchema<Entity>();

}
