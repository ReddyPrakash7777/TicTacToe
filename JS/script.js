let music = new Audio("/html/TIC TAC TOE/Assets/music.mp3");
let audioTurn = new Audio("/html/TIC TAC TOE/Assets/ting.mp3");
let gameover = new Audio("/html/TIC TAC TOE/Assets/gameover.mp3");

let turn = "x";

let isgameover = false;

//function to change the turn:
const changeTurn = () => {
    return turn === "x" ? "0" : "x";
}


//function to check the win case:
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {

            e.forEach(index => {
                document.getElementsByClassName('box')[index].style.backgroundColor = 'lightGreen';
            });

            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " has won the game";
            isgameover = true;

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";

        }
    })
}


//function for game logic:
music.play();
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for :' + turn;
            }
        }
    })
})


//reset button logic:
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });

    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "";
    }
    turn = "x";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "turn for :" + turn;

    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})

