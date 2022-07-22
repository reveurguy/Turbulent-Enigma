
function findFood(myHead, food) {
    let temp = []
    let possibleMoves = {}

    for (let y = 0; y < food.length; y++) {
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

module.exports = {
    findFood: findFood
}