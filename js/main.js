let money = {
        name: "money",
        total: 0,
        add: (amount) => {
            money.total += amount;
        }
    },
    fish = {
        name: "fish",
        total: 0,
        add: (amount) => {
            fish.total += amount;
        }
    },
    container = {
        name: "container",
        total: 0,
        capacity: 10,
        upgrade: (amount) => {
            container.capacity += amount;
        }
    }

// Sets up savegame stuff
function saveG() {
    let save = {
        money: money,
        fish: fish,
        container: container,
    }
    localStorage.setItem("save", JSON.stringify(save));
}
// Loads the game state from a save file
function loadG() {
    let savegame;
    savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.money !== "undefined") money = savegame.money;
    if (typeof savegame.fish !== "undefined") fish = savegame.fish;
    if (typeof savegame.container !== "undefined") container = savegame.container;
}
// Resets the values of the game
function resetG() {
    localStorage.removeItem("save")
    money = {
        name: "money",
        total: 0,
        add: (amount) => {
            money.total += amount;
        }
    },
    fish = {
        name: "fish",
        total: 0,
        add: (amount) => {
            fish.total += amount;
        }
    },
    container = {
        name: "container",
        total: 0,
        capacity: 10,
        upgrade: (amount) => {
            container.capacity += amount;
        }
    }
}


// afasfasaf
document.getElementById("btn").addEventListener("click", Hello);

function Hello() {
    money.add(1);
    console.log(money.total);
}


// Sets the game speed
let spd = 1000;

function speed(number) {
    spd = number;
    window.clearInterval(id);
    id = setInterval(update, spd);
}

let id = setInterval(update, spd);

function update() {
    if (energy.total < battery.capacity) {
        energyAdd(ants.total);
        energyAdd(bees.total);
    }
}

let interval = setInterval(() => {

    // Updates the HTML
    document.getElementById('fish-counter').innerHTML = fish.total;
    document.getElementById('fish-max').innerHTML = container.capacity;
    document.getElementById('money-counter').innerHTML = money.total;

}, 1);