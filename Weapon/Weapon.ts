import Attack from "./Attack";
import Defense from "./Defense";
import Durability from "./Durability";
import WCalculoFactory from "./WCalculoFactory";

export default class Weapon {
    protected rarity: number;
    protected attack: Attack;
    protected defense: Defense;
    protected durability: Durability;

    constructor(rarity: number, factory: WCalculoFactory) {
        this.rarity = rarity;
        this.attack = factory.createAttack();
        this.defense = factory.createDefense();
        this.durability = factory.createDurability();
    }

    calculateAttack(): number{
        return this.rarity * this.attack.getAttack();
    }

    calculateDefense(): number{
        return this.rarity * this.defense.getDefense();
    }

    calculateDurability(): number {
        return this.rarity * this.durability.getDurability();
    }
}