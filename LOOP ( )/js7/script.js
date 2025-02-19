let min = 1
let max = 10
let userNum
let urunish = 0

let random = Math.floor(Math.random() * (max - min) + (min))


do {
    userNum = Math.floor(Math.random() * (max - min) + (min))
    urunish ++

} while (userNum !== random)

    console.log("yutding", urunish, "radndom code:", random);
    






