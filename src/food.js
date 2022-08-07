function findFood(myHead, food) {
    let temp = []
    let possibleMoves = {}

    for (let y = 0; y < food.length; y++) {
        Food(myHead, food)
        const pickup = food[y];

        if (pickup.x < myHead.x) {
            temp.push({ dir: "left", dist: myHead.x - pickup.x });
        }
        else if (pickup.x > myHead.x) {
            temp.push({ dir: "right", dist: pickup.x - myHead.x });
        }

        if (pickup.y < myHead.y) {
            temp.push({ dir: "down", dist: myHead.y - pickup.y });
        }
        else if (pickup.y > myHead.y) {
            temp.push({ dir: "up", dist: pickup.y - myHead.y });
        }
    }

    if (temp.length > 0) {
        temp.sort((a, b) => {
            return a.dist - b.dist
        });
    }

    possibleMoves = temp.map(move => move.dir)
    possibleMoves = Object.assign(...possibleMoves.map(k => ({ [k]: true })))

    const response = possibleMoves
    return response
}

function Food(myHead, food) {
    if (food.length > 1) {
        for (let f of food)
            f.distance = blocksBetween(myHead, f)
        food.sort(function (a, b) { return a.distance - b.distance })
    }
    return food;
}

function blocksBetween(p1, p2) {
    return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y)
}

module.exports = {
    findFood: findFood
}