/**
 * Notes:
 * 1. We want to, generally, import as few things as possible
 * 2. Anything that can be broken down into its component parts, should be.
 * 3. Build all the interfaces I need first, then start wiring them up
 */

 /**
  * Before I commit to this class, I will create an outline in the comments
  * Battlefield has:
  * public TriggerManager: interface; // onUpkeepTriggers, onEndStepTriggers, etc
  * public objects: Array<Permanent> -> each object has an owner (one array instead of one for each permanent type)
  * public effects: Array<Effect> -> need to write Effect class
  * DO NOT WANT public players: Array<Player>
  * >> interface Effect {
  *       public modifies: any, or Array<any>
  *       public actions: () => void
  * }
  */


export class Battlefield {
  // public objects: Array<Permanent>;
  // public tm: TriggerManager;
}
