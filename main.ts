import FCalculoFactory from "./Weapon/Futuristic/FCalculoFactory";
import MCalculoFactory from "./Weapon/Medieval/MCalculoFactory";
import Weapon from "./Weapon/Weapon";


const MedievalFactory = new MCalculoFactory();
const FuturisticFactory = new FCalculoFactory();
const rarity = 100;

const WeaponMedieval = new Weapon(rarity, MedievalFactory);

console.log('ARMA MEDIEVAL PINTo')
console.log(`Arma com qualidade de: ${rarity} parabéns`);
console.log(`Valor de ataque: ${WeaponMedieval.calculateAttack()}`);
console.log(`Valor de defesa: ${WeaponMedieval.calculateDefense()}`);
console.log(`Valor de durabilidade: ${WeaponMedieval.calculateDurability()}`);
console.log(`------------------------------------------------`);


const WeaponFuturistic = new Weapon(rarity, FuturisticFactory);

console.log('ARMA FUTORISTA ovo')
console.log(`Arma com qualidade de: ${rarity} parabéns`);
console.log(`Valor de ataque: ${WeaponFuturistic.calculateAttack()}`);
console.log(`Valor de defesa: ${WeaponFuturistic.calculateDefense()}`);
console.log(`Valor de durabilidade: ${WeaponFuturistic.calculateDurability()}`);
console.log(`------------------------------------------------`);