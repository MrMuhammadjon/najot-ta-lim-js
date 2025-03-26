let text = document.getElementById('count')

let counter = localStorage.getItem("counter")
text.textContent = counter

function countFunc(action) {
    if (action === 'decrement') {
        counter--;
        localStorage.setItem("counter", counter)
    } else if (action === 'increment') {
        counter++;
        localStorage.setItem("counter", counter)

    } else if (action === 'reset') {
        counter = 0;
        localStorage.setItem("counter", counter)

    }
    document.getElementById('count').innerText = counter;
}

document.getElementById('decrement').addEventListener('click', () => countFunc('decrement'));
document.getElementById('increment').addEventListener('click', () => countFunc('increment'));
document.getElementById('reset').addEventListener('click', () => countFunc('reset'));






// decrement.addEventListener('click', () => {
//     counter--;
//     document.getElementById('count').innerText = counter;
// })

// increment.addEventListener('click', () => {
//     counter++;
//     document.getElementById('count').innerText = counter;
// })


// reset.addEventListener('click', () => {
//     counter = 0;
//     document.getElementById('count').innerText = counter;
// })
