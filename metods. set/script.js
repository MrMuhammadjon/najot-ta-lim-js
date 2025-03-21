
function randomNum(minNum, maxNum) {
    let pusher = setInterval(() => {
        let random = Math.floor(Math.random() * (maxNum - minNum) + (minNum))
        map.add(random)
    },100)

   
}


const map = new set()

randomNum(1, 100)

