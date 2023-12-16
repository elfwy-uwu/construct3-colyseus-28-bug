import { Schema, Context, type, MapSchema, ArraySchema, filter, filterChildren, SetSchema } from "@colyseus/schema";
import { Client } from "colyseus";
import { MyRoomState } from "./MyRoomState";

export class SubEntity extends Schema {
  @type("number") id: number = Math.floor(Math.random() * 100)


}

export class Entity extends Schema {

  constructor(){
    super()
  }
  
  /**
   * Filtered fields not listening bug #28
   * https://github.com/colyseus/colyseus-construct3/issues/28
   * 
   * We need to filter out the whole field only the first time. 
   * Assuming that in future we are supposed to recieve this information which
   * previously was filtered.
   */
  filtered: boolean = false

  @filter(function(this: Entity, client: Client, value: string, root: MyRoomState) {
    return !this.filtered
  })
  @type([ SubEntity ]) subEntities = new ArraySchema<SubEntity>()

}

