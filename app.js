

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //player X,Player O


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

//Reset game wala button

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

//event listner dekh lena revision me
boxes.forEach((box) => {

    box.addEventListener("click", () => {
        //  console.log("box was clicked");

        if (turnO === true) {        //har box ko alternet click de rhe h
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;  //ye ek bar jo click ho gya usko change nhi hone dega

        checkWinner();    //pattern se winner check karega. function neeche h
    });
});


//after getting winner it will dissable boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;


    }
};

//for new game enable boxes
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

// this is removing hide class from html

const showWinner = (winner) => {
    msg.innerText = `congratulation 🎉🎉🎉, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for (let pattern of winPatterns) {  //ye array he sare pattern ko fetch karega


        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        //is sab ke liye pahle check karna hoga ke har position pe value rahe
        //phir check karange ke same hai ya nahi
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {

            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                //console.log("Winner" ,pos1Val);

                showWinner(pos1Val);
            }
        }

    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame); 
