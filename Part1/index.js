const board = [];

function play(clickedId){
    const playerSpan = document.getElementById("player");
    const clickedElement = document.getElementById(clickedId)

        if (playerSpan.innerText === 'X'){
            playerSpan.innerText = 'O';
            clickedElement.innerText = 'X';
            board[clickedId] = 'X';
        } else {
            playerSpan.innerText = 'X';
            clickedElement.innerText = 'O';
            board[clickedId] = 'O';
        }
        console.log(board);

    const topLeft = board[0];
    const upperMiddle = board[1];
    const topRight = board[2];
    const midLeft = board[3];
    const trueMiddle = board[4];
    const midRight = board[5];
    const bottomLeft = board[6];
    const lowerMiddle = board[7];
    const bottomRight = board[8];

        if (topLeft !== undefined && topLeft === 
        upperMiddle && topLeft === topRight) {
            alert(`${topLeft} is the winner!`);
            return;
        }
        if (midLeft !== undefined && midLeft ===
        trueMiddle && midLeft === midRight) {
            alert(`${midLeft} is the winner!`);
            return;
        }
        if (bottomLeft !== undefined && bottomLeft ===
        lowerMiddle && bottomLeft === bottomRight) {
            alert(`${bottomLeft} is the winner!`);
            return;
        }
        if (topLeft !== undefined && topLeft === 
        midLeft && topLeft === bottomLeft) {
            alert(`${topLeft} is the winner!`);
            return;
        }
        if (upperMiddle !== undefined && upperMiddle === 
            trueMiddle && upperMiddle === lowerMiddle) {
            alert(`${upperMiddle} is the winner!`);
            return;
        }
        if (topRight !== undefined && topRight === 
        midRight && topRight === bottomRight) {
            alert(`${topRight} is the winner!`);
            return;
        }
        if (topLeft !== undefined && topLeft === 
        trueMiddle && topLeft === bottomRight) {
            alert(`${topLeft} is the winner!`);
            return;
        }
        if (bottomLeft !== undefined && bottomLeft === 
        trueMiddle && bottomLeft === topRight) {
            alert(`${bottomLeft} is the winner!`);
            return;
        }

    let boardFull = true;
        for (let i = 0; i <= 8; i++) {
        if (board[i] === undefined) {
        boardFull = false;
        }

        }
        if (boardFull === true) {
        alert("It's a tie!");
        }
}

// function reset(){
//     delete clickedElement.innerText;
// }
