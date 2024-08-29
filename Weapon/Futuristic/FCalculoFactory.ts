import Attack from "../Attack";
import Defense from "../Defense";
import Durability from "../Durability";
import WCalculoFactory from "../WCalculoFactory";
import FAttack from "./Fattack";
import Fdefense from "./Fdefense";
import Fdurability from "./Fdurability";

export default class FCalculoFactory implements WCalculoFactory {
    createAttack(): Attack {
        return new FAttack();
    }

    createDefense(): Defense {
        return new Fdefense();
    }

    createDurability(): Durability {
        return new Fdurability();
    }
}