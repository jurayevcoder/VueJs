const products = {"Cheese":2, "Meat": 5, "Onion": 1, "Salad": 1, "Tomato": 2, "Pickle": 3};
let selections = [];

let t = 2

function buy(val){
    val = val.innerHTML 
    if (val == "Bread") return;
    let price = products[val]
    t += price
    total.innerHTML = t
    selections.push(val);
    img.innerHTML = ''
    for(let i in selections){
        img.innerHTML += `<img src="./images/${selections[i]}.svg" alt="img" onclick="image(this)" id="${i}">`
    }
}

function image(val){
    if (selections.length == 0) return;
    selections.splice(val.id, 1)
    let src = String(val.src.split("/").pop().split(".")[0])
    let price = products[src]
    t -= price
    total.innerHTML = t
    img.innerHTML = ''
    for(let i in selections){
        img.innerHTML += `<img src="./images/${selections[i]}.svg" alt="img" onclick="image(this)" id="${i}">`
    }
}

function select(){
    alert(`Your product price is ${t}`)
}