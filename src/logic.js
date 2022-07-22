function info() {
    console.log("INFO")
    const response = {
        apiversion: "1",
        author: "reveurguy",
        color: "#fbd786",
        head: "trans-rights-scarf",
        tail: "bolt"
    }
    return response
}

function start(gameState) {
    // console.log(`${gameState.game.id} START`)
}

function end(gameState) {
    // console.log(`${gameState.game.id} END\n`)
}

function move(gameState) {
    let possibleMoves = {
        up: true,
        down: true,
        left: true,
        right: true
    }

    const myHead = gameState.you.head
    const myNeck = gameState.you.body[1]
    const food = gameState.board.food
    const boardWidth = gameState.board.width
    const boardHeight = gameState.board.height


    possibleMoves = findFood(myHead, food)

    // Step 0: Don't let your Battlesnake move back on its own neck

    if (myNeck.x < myHead.x) {
        possibleMoves.left = false
    } else if (myNeck.x > myHead.x) {
        possibleMoves.right = false
    } else if (myNeck.y < myHead.y) {
        possibleMoves.down = false
    } else if (myNeck.y > myHead.y) {
        possibleMoves.up = false
    }

    // TODO: Step 1 - Don't hit walls.
    // Use information in gameState to prevent your Battlesnake from moving beyond the boundaries of the board.

    if (myHead.x === 0) {
        possibleMoves.left = false
    }
    if (myHead.x === boardWidth - 1) {
        possibleMoves.right = false
    }
    if (myHead.y === 0) {
        possibleMoves.down = false
    }
    if (myHead.y === boardHeight - 1) {
        possibleMoves.up = false
    }

    // TODO: Step 2 - Don't hit yourself.
    // Use information in gameState to prevent your Battlesnake from colliding with itself.
    // const mybody = gameState.you.body

    // TODO: Step 3 - Don't collide with others.
    // Use information in gameState to prevent your Battlesnake from colliding with others.

    // TODO: Step 4 - Find food.
    // Use information in gameState to seek out and find food.

    // // Avoid hazards
    // let potentialMoves= {
    //     up: true,
    //     down: true,
    //     left: true,
    //     right: true
    // }
    // const hazards = gameState.board.hazards
    // // check if  potentialMoves are contained in the list of hazards
    // if (hazards.length > 0) {
    //     for (let i = 0; i < hazards.length; i++) {
    //         const hazard = hazards[i]
    //         if (hazard.x < myHead.x) {
    //             potentialMoves.right = false
    //         } else if (hazard.x > myHead.x) {
    //             potentialMoves.left = false
    //         } else if (hazard.y < myHead.y) {
    //             potentialMoves.up = false
    //         } else if (hazard.y > myHead.y) {
    //             potentialMoves.down = false

    //         }
    //     }
    // }
    // // check if potentialMoves are contained in the list of possibleMoves
    // if (possibleMoves.up && potentialMoves.up) {
    //     possibleMoves.up = false
    // }
    // if (possibleMoves.down && potentialMoves.down) {
    //     possibleMoves.down = false
    // }
    // if (possibleMoves.left && potentialMoves.left) {
    //     possibleMoves.left = false
    // }
    // if (possibleMoves.right && potentialMoves.right) {
    //     possibleMoves.right = false
    // }


    // Finally, choose a move from the available safe moves.
    // TODO: Step 5 - Select a move to make based on strategy, rather than random.
    const safeMoves = Object.keys(possibleMoves).filter(key => possibleMoves[key])
    const response = {
        move: safeMoves[Math.floor(Math.random() * safeMoves.length)],
    }

    // console.log(`${gameState.game.id} MOVE ${gameState.turn}: ${response.move}`)
    return response
}

module.exports = {
    info: info,
    start: start,
    move: move,
    end: end
}
