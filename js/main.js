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

document.getElementById("btn").addEventListener("click", Hello);

function Hello() {
    money.add(1);
    console.log(money.total);
}