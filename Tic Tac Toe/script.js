var player1State;
var player2State;
var player1Turn = true;
var player2Turn = false;

var visited = [];
var visitedState = false;

var winningState;

var board = []
for(var i=0; i<3; i++){
    board[i] = new Array();
}

var winningState = [
    ["X","X","X"],
    ["O","O","O"]
]


function getUserChoice(id){
    player1State = id;

    if(player1State === "X"){
        player2State = "O";
    }
    else{
        player2State = "X";
    }
    console.log("player1: "+player1State)
    console.log("player2: "+player2State)
    document.getElementById("XorO").style.display = "none";
    document.getElementById("board").style.display = "flex";
}

function checkWinningState(){
    console.clear();
    console.log(board)

    for(var a=0; a<3; a++){
            if(board[a][0] === "X"){
                if(board[a][1] === "X")
                    if(board[a][2] === "X")
                    {
                        if(!player1Turn)
                            alert("Player 1 " + player1State + " Won")
                        else
                            alert("Player 2 " + player2State + " Won")

                        location.reload()
                    }
            }else if(board[a][0] === "O"){
                if(board[a][1] === "O")
                    if(board[a][2] === "O")
                    {
                        if(!player2Turn)
                            alert("Player 2 " + player2State + " Won")
                        else
                            alert("Player 1 " + player1State + " Won")

                        location.reload()
                    }
            }
            else if(board[0][0] === "O"){
                if(board[1][1] === "O")
                    if(board[2][2] === "O")
                    {
                        if(!player2Turn)
                            alert("Player 2 " + player2State + " Won")
                        else
                            alert("Player 1 " + player1State + " Won")

                        location.reload()
                    }
            }

    }
}

function drawXOBoard(id){
    var res = id.split("a")
    var pos1 = res[1][0].split();
    var pos2 = res[1][1].split();
    
    if(!visitedState){
        if(player1Turn){
            document.getElementById(id).innerText = player1State;
            board[pos1][pos2] = player1State;
            player1Turn = false;
            player2Turn = true;
        }else{
            document.getElementById(id).innerText = player2State;
            board[pos1][pos2] = player2State;
            player2Turn = false;
            player1Turn = true;
        }
    }
    checkWinningState();
}

function displayXO(id){
    var idd = id;

    if(visited.includes(id)){
        visitedState = true;
    }else{
        visitedState = false;
        visited.push(id);
    }

    drawXOBoard(idd);
}
