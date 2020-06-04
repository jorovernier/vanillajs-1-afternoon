const board = [];

function play(clickedId){
    const playerSpan = document.getElementById("player");
    const clickedElement = document.getElementById(clickedId);

        if (playerSpan.innerText === 'X'){
            if(clickedElement.innerText === '') {
                playerSpan.innerText = 'O';
                clickedElement.innerText = 'X';
                board[clickedId] = 'X';
            } else {
                alert('That spot is already taken!');
            }
        } else {
            if(clickedElement.innerText === '') {
                playerSpan.innerText = 'X';
                clickedElement.innerText = 'O';
                board[clickedId] = 'O';
            } else {
                alert('That spot is already taken!');
            }
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
            return reset();
        }
        if (midLeft !== undefined && midLeft ===
        trueMiddle && midLeft === midRight) {
            alert(`${midLeft} is the winner!`);
            return reset();
        }
        if (bottomLeft !== undefined && bottomLeft ===
        lowerMiddle && bottomLeft === bottomRight) {
            alert(`${bottomLeft} is the winner!`);
            return reset();
        }
        if (topLeft !== undefined && topLeft === 
        midLeft && topLeft === bottomLeft) {
            alert(`${topLeft} is the winner!`);
            return reset();
        }
        if (upperMiddle !== undefined && upperMiddle === 
            trueMiddle && upperMiddle === lowerMiddle) {
            alert(`${upperMiddle} is the winner!`);
            return reset();
        }
        if (topRight !== undefined && topRight === 
        midRight && topRight === bottomRight) {
            alert(`${topRight} is the winner!`);
            return reset();
        }
        if (topLeft !== undefined && topLeft === 
        trueMiddle && topLeft === bottomRight) {
            alert(`${topLeft} is the winner!`);
            return reset();
        }
        if (bottomLeft !== undefined && bottomLeft === 
        trueMiddle && bottomLeft === topRight) {
            alert(`${bottomLeft} is the winner!`);
            return reset();
        }

    let boardFull = true;
    
        for (let i = 0; i <= 8; i++) {
            if (board[i] === undefined) {
            boardFull = false;
            }
        }
        if (boardFull === true) {
        alert("It's a tie!")
        return playerSpan.innerText = '',
            clickedElement.innerText = '',
            board[clickedId] = '';
        }
}

function reset() {
    const clickedElement0 = document.getElementById(0);
    const clickedElement1 = document.getElementById(1);
    const clickedElement2 = document.getElementById(2);
    const clickedElement3 = document.getElementById(3);
    const clickedElement4 = document.getElementById(4);
    const clickedElement5 = document.getElementById(5);
    const clickedElement6 = document.getElementById(6);
    const clickedElement7 = document.getElementById(7);
    const clickedElement8 = document.getElementById(8);
    return clickedElement0.innerText = '',
            clickedElement1.innerText = '',
            clickedElement2.innerText = '',
            clickedElement3.innerText = '',
            clickedElement4.innerText = '',
            clickedElement5.innerText = '',
            clickedElement6.innerText = '',
            clickedElement7.innerText = '',
            clickedElement8.innerText = ''
}

    