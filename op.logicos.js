/*
  &
v e v -> v
v e f -> f
f e f -> f

  ||
v ou v -> v
V ou F -> v
f ou f -> f

   ^  ou exclusivo
v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

negação
!v -> f
!f -> v

*/
function compras(trabalho1, trabalho2) {
    const compraSorvete = trabalho1 || trabalho2
    const comprarTv42 = trabalho1 && trabalho2
    //const comprarTv50 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete // operador unário

    return { compraSorvete, comprarTv42, comprarTv32, manterSaudavel }

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))