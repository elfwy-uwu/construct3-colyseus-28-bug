import { Schema, Context, type, MapSchema, ArraySchema, filter, filterChildren, SetSchema } from "@colyseus/schema";
import { Client } from "colyseus";
import { MyRoomState } from "./MyRoomState";

export class ArrayElement extends Schema {
  @type("number") id: number = Math.floor(Math.random() * 100)
}

export class SubState extends Schema {
  //@type([ ArrayElement ]) array = new ArraySchema<ArrayElement>()
  @type({ map: 'number' }) numberMap = new MapSchema<number>()
}

export class State extends Schema {

  constructor(){
    super()
  }
  
  @type(SubState) subState = new SubState()

}

