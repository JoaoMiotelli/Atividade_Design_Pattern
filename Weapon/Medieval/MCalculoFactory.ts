import Attack from "../Attack";
import Defense from "../Defense";
import Durability from "../Durability";
import WCalculoFactory from "../WCalculoFactory";
import Mattack from "./Mattack";
import Mdefense from "./Mdefense";
import Mdurability from "./Mdurability";


export default class MCalculoFactory implements WCalculoFactory {
    createAttack(): Attack {
        return new Mattack();
    }

    createDefense(): Defense {
        return new Mdefense();
    }

    createDurability(): Durability {
        return new Mdurability();
    }
}