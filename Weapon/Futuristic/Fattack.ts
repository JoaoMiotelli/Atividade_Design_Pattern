import Attack from "../Attack";

export default class FAttack implements Attack {
    getAttack(): number {
        return 0.50;
    }
}