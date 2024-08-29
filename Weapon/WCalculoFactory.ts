import Attack from "./Attack";
import Defense from "./Defense";
import Durability from "./Durability";

export default interface WCalculoFactory {
    createAttack(): Attack;
    createDefense(): Defense;
    createDurability(): Durability;
}