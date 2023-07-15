// current player var
let player = Math.ceil(Math.random()*2);
// var to check if player playes again
let anotherTurn = false;
// player 1 and 2 scores
let p1Score = 0;
let p2Score = 0;
// var to store current player score
let pScore

// number of houses built
let housesbuilt = 0;

// user provided columns and rows to generate the bord
let colNum = 3;
let rowNum = 3;

// var for audios
let audioFileLine = new Audio("./sounds/marker-lineswav-3-1.mp3")
let audioFileCheer = new Audio("./sounds/crowd-cheer-ii-6263.mp3")
let audioFileHComplete = new Audio("./sounds/bright-notifications-151766 -20db.mp3")
let audioFilewin = new Audio("./sounds/success-fanfare-trumpets-6185.mp3")
let audioFileTie = new Audio("./sounds/brass-fanfare-reverberated-146263.mp3")
let audioFileClick = new Audio("./sounds/mouse-click-153941.mp3")

// variables for player names
let p1Name = document.getElementById("p1Name").innerText;
let p2Name = document.getElementById("p2Name").innerText;

// show initial player's turn
if (player==1) {
  document.getElementById("currentPlayer").innerText = `${p1Name}'s turn`;
}
else {
  document.getElementById("currentPlayer").innerText = `${p2Name}'s turn`;
}
document.getElementById("currentPlayer").classList.add(`p${player}TextColor`);

//get all the houses
const houses = document.getElementsByClassName("house");

// random cloud top enerator
function cloudTopRand () {
  let rand1_10 = Math.ceil(Math.random () * 10);
  // console.log("random between 1 and 15: "+rand1_15);
  document.documentElement.style.setProperty("--cloudTopStart", rand1_10+"%");
  setTimeout (cloudTopRand, 80000);
}

// generate bord function
function generateBord () {
  //clear bord first
  clearBord ();
  // add user columns number to format to css game container
  // let htmlStyles = window.getComputedStyle(document.querySelector("html"));

  colNum = document.getElementById("colInput").value;
  //validate if col number is bigger than 0 if not the col 1 
  if (colNum < 1) {
    colNum = 1;
  }
  // validate that col number is not higher than 30 if higher then col is 30
  else if (colNum > 30) {
    colNum = 30;
  }
  let col = 1;
  // console.log(col);
  rowNum = document.getElementById("rowInput").value;
  if (rowNum < 1) {
    rowNum = 1;
  } else if (rowNum > 30) {
    rowNum = 30;
  }
  let row = 1;
  // console.log(row);
  document.documentElement.style.setProperty("--colNum", colNum);
  // add lands based on col*row
  let plots = colNum*rowNum;
  // console.log(plots);
  // loop through lands 
  // console.log(plots);
  let screenHeight = screen.height;
  console.log(screenHeight);
  let gameAreaHeight =  screen.height / 1.894736842105263;
  let houseHeight = `${(gameAreaHeight - (10*(rowNum-1))) / rowNum}px`;
  document.documentElement.style.setProperty("--houseMinHeight", houseHeight);

  //clear inner htmal of game container
  document.getElementById("gameContainer").innerHTML = "";

  for (i=0; i<plots; i++){
    // add plots
    console.log(i);
    let innerPlot = "";
    let plot = `<div class="land`;
    //if col == 1 add leftHouseLand to class
    if (col==1) {
      plot += ` leftHouseLand`;
    }
    //else add otherHouseLand to class
    else {
      plot += ` otherHouseLand`
    }
    //if row == 1 add topRowHouseLand to class
    if (row==1) {
      plot += ` topRowHouseLand`;
    }
    
    plot += `">`;
    
    // loop to go through all col dots walls and houses
    for (c=1; c < 10; c++) {
      // if c=1
      if (c==1) {
        // add dot only if col==1 && row==1
        if (col==1 && row==1){
          innerPlot += `<div class="dot"></div>`;
        }
      }
      // if c=2
      if (c==2) {
        // add top hwalls if row == 1
        if (row==1) {
          // add wall hWall classes, add datasets data-col=`${col}` data-row=`${row}`
          innerPlot += `<div class="wall hWall" data-col=${col} data-row=${row}></div>`;
        }
      }
      // if c=3
      if (c==3) {
        // add dot only if row=1
        if (row==1){
          innerPlot += `<div class="dot"></div>`;
        }
      }
      //if c=4
      if (c==4) {
        // add vwall only if col=1
        if (col==1){
          // add wall vWall classes, add datasets data-col=`${col}` data-row=`${row}`
          innerPlot += `<div class="wall vWall" data-col=${col} data-row=${row}></div>`
        }
      }
      //if c=5
      if (c==5){
        // add house and class, add datasets data-col=`${col}` data-row=`${row}` and data-walls="0"
        innerPlot += `<div class="house" data-col=${col} data-row=${row} data-walls="0"></div>`
      }
      //if c=6
      if (c==6){
        // add end vwall
        // if col<colNum add wall vWall classes, add datasets data-col=`${col},${col+1}` data-row=`${row}`
        if (col<colNum) {
          innerPlot += `<div class="wall vWall" data-col="${col},${col+1}" data-row="${row}"></div>`
        }
        // else add wall vWall classes, add datasets data-col=`${col}` data-row=`${row}`
        else {
          innerPlot += `<div class="wall vWall" data-col="${col}" data-row="${row}"></div>`
        }
      }
      //if c=7
      if (c==7) {
        // add dot only if col=1
        if (col==1){
          innerPlot += `<div class="dot"></div>`
        }
      }
      //if c=8
      if (c==8) {
        // add end hWall
        //if row<rowNum add wall hWall classes, add datasets data-col=`${col}` data-row=`${row},${row+1}`
        if (row<rowNum) {
          innerPlot += `<div class="wall hWall" data-col=${col} data-row=${row},${row+1}></div>`
        }
        //else add wall hWall classes, add datasets data-col=`${col}` data-row=`${row}`
        else {
          innerPlot += `<div class="wall hWall" data-col=${col} data-row=${row}></div>`
        }
      }
      //if c=9
      if (c==9){
        // add dot
        innerPlot +=`<div class="dot"></div>`
      }
    }

    // append internalHtml to plot
    plot += innerPlot;
    //close land div
    plot += `</div>`;

    // col ++ if col > colNum then col=1 and row++
    col++
    if (col>colNum){
      col=1;
      row++;
    }

    //add to game container inner html
    document.getElementById("gameContainer").innerHTML += plot;
  }
  // // grab all the a walls into an array
  const walls = document.querySelectorAll(".wall");
  // generateBord ();
  // // add listner to all the a links
  for (i=0; i < walls.length; i++) {
    // console.log(walls[i]);
    walls[i].addEventListener("click", buildWall);
  }
};

function buildWall (e) {
  // e.preventDefault();
  console.log("built");
  //playe writing sound
  //     audioFile = new Audio(audioHref);
//     //play audio
//     audioFile.play();
  audioFileLine.pause();
  audioFileLine.play();
  // console.log(e);
  // get all the class list of the border
  const border = this.classList;
  //convert the data-column into an array
  const borderCol = this.dataset.col.split(",");

  // convert the data-row into an array
  const borderRow = this.dataset.row.split(",");
  
  // console.log(border);
  // get player names again player names
  p1Name = document.getElementById("p1Name").innerText;
  p2Name = document.getElementById("p2Name").innerText;

  // get current player score
  pScore = player === 1 ? p1Score : p2Score; 
  
  // add player class to wall remove wall class to stop hover
  border.add(`p${player}`);
  if (border.contains("vWall")) {
    if (border.contains("p1")) {
      border.add("builtP1VWall");
    }
    else {
      border.add("builtP2VWall");
    }
  }
  else {
    if (border.contains("p1")) {
      border.add("builtP1HWall");
    }
    else {
      border.add("builtP2HWall");
    }
  }
  border.remove("wall");
  this.removeEventListener("click", buildWall);
  // play pencil sound

  // check each house to see if one of its borders has been closed
  for (let h=0; h < houses.length; h++) {
    const houseCol = houses[h].dataset.col;
    // console.log(`house ${h} column is: ${houseCol}`);
    const houseRow = houses[h].dataset.row;
    // console.log(`house ${h} row is: ${houseRow}`);
    // console.log(`house ${h} has ${houses[h].dataset.walls} walls built`);
    // console.log(h);
    // console.log(borderCol.length);

    // get the number of walls each house has built
    let houseWalls = Number(houses[h].dataset.walls);
    console.log(`House ${h}`);
    // go through all the columns the border belongs to
    for (let c=0; c < borderCol.length; c++) {
      // console.log(c);
      console.log ("house is in col " +houseCol);
      console.log("border col " +c + " is " +borderCol[c]);
      //go through all the rows the border belongs to
      for (let r=0; r < borderRow.length; r++) {
        // console.log(r);
        // console.log(houseCol == borderCol[c] && houseRow == borderRow[r]);
        console.log ("house is in row " +houseRow);
        console.log("border row " +r + " is " + borderRow[r]);
        console.log(houseCol === borderCol[c] && houseRow === borderRow[r]);
        // check if the house is in the same column and row
        if (houseCol === borderCol[c] && houseRow === borderRow[r]){
          houseWalls++;
          //add the number of walls built for each house the border belongs to
          houses[h].dataset.walls = houseWalls;
          console.log(`house ${h} has : ${houseWalls} walls built`);
          // if the house has 4 walls built add to the houses built
          if (houseWalls == 4) {
            housesbuilt++;
            pScore++;
            // play house complet sound
            audioFileHComplete.pause();
            audioFileHComplete.play();
            // add current player class to the house
            houses[h].classList.add(`p${player}`);
            houses[h].classList.add(`built`);
            // add p score to screen
            document.getElementById(`p${player}Hcount`).innerText= pScore;
            // if all the houses have been built then check who has more houses and declare them the winner
            console.log("houses built: " + housesbuilt);
            console.log("all houses: " + houses.length);
            if (housesbuilt === houses.length) {
              //play win audio if not a tie
              if (!(document.getElementById(`p1Hcount`).innerText==document.getElementById(`p2Hcount`).innerText)) {
                setTimeout(function(){
                  audioFilewin.play();
                  audioFileCheer.play();
                  document.querySelector(".win").style.display = "block";
                }, 1000);
              // setTimeout(function(){audioFileCheer.play()},1000);
              }
              if (document.getElementById(`p1Hcount`).innerText>document.getElementById(`p2Hcount`).innerText) {
              // console.log(`Player 1 wins!`);
              document.getElementById("currentPlayer").innerText = `${p1Name} wins!`;
              document.getElementById("p1TotalWins").innerText++;
              
              }
              else if (document.getElementById(`p1Hcount`).innerText<document.getElementById(`p2Hcount`).innerText){
                console.log(`Player 2 wins!`);
                document.getElementById("currentPlayer").innerText = `${p2Name} wins!`;
                document.getElementById("p2TotalWins").innerText++;
              }
              else {
                console.log(`It's a tie!`);
                // play tie sound
                audioFileTie.play();

                document.getElementById("currentPlayer").innerText = `It's a tie!`;
                document.getElementById("Ties1").innerText++;
                document.getElementById("Ties2").innerText++;
              }
              document.getElementById("currentPlayer").style.color = "purple";
              return;
            }
            // else if all 4 walls built but its not the last house then current player plays again
            else {
              anotherTurn = true;
              // console.log("player "+player+" playes again");
              if (player==1) {
                document.getElementById("currentPlayer").innerText = `${p1Name} playes again`;
              }
              else {
                document.getElementById("currentPlayer").innerText = `${p2Name} playes again`;
              }
            }
          }
        }
      }
    }
  }

  if (player === 1) {
    p1Score = pScore;
    // if not all 4 walls are built and current player plays again
    if (anotherTurn) {
      anotherTurn = false;
      return;
    }
    // else if not all 4 wals built then switch players
    else{
      document.getElementById("currentPlayer").classList.remove(`p${player}TextColor`);
      player = 2;
      console.log("player "+player+"'s turn");
      document.getElementById("currentPlayer").innerText = `${p2Name}'s turn`;
      document.getElementById("currentPlayer").classList.add(`p${player}TextColor`);
      return;
    }
  } else {
    p2Score = pScore;
    // if not all 4 walls are built and current player plays again
    if (anotherTurn) {
      anotherTurn = false;
      return;
    }
    // else if not all 4 wals built then switch players
    else{
      document.getElementById("currentPlayer").classList.remove(`p${player}TextColor`);
      player = 1;
      console.log("player "+player+"'s turn");
      document.getElementById("currentPlayer").innerText = `${p1Name}'s turn`;
      document.getElementById("currentPlayer").classList.add(`p${player}TextColor`);
      return;
    }
  }
}

function clearBord () {

  // get player names again player names
  p1Name = document.getElementById("p1Name").innerText;
  p2Name = document.getElementById("p2Name").innerText;

  //play click button
  audioFileClick.play();
  // stop all sounds
  audioFileCheer.pause();
  audioFileLine.pause();
  audioFileCheer.pause();
  audioFileHComplete.pause();
  audioFilewin.pause();
  audioFileTie.pause();
  // reset scores and 
  player = player = Math.ceil(Math.random()*2);
  // reset current player color
  document.getElementById("currentPlayer").style.color = "";
  document.getElementById("currentPlayer").classList.remove (`p1TextColor`);
  document.getElementById("currentPlayer").classList.remove (`p2TextColor`);
  document.getElementById("currentPlayer").classList.add (`p${player}TextColor`);
  anotherTurn = false;
  p1Score = 0;
  p2Score = 0;
  housesbuilt = 0;
  // grab all walls into array
  const walls = document.querySelectorAll(".hWall, .vWall");
  // show initial player's turn
  if (player==1) {
    document.getElementById("currentPlayer").innerText = `${p1Name}'s turn`;
  }
  else {
    document.getElementById("currentPlayer").innerText = `${p2Name}'s turn`;
  }
  document.getElementById("currentPlayer").classList.add(`p${player}TextColor`);
  // add p score to screen
  document.getElementById(`p1Hcount`).innerText= p1Score;
  document.getElementById(`p2Hcount`).innerText= p2Score;
  // remove p1 and p2 classes from walls and houses
  for (h=0; h < houses.length; h++){
    houses[h].classList.remove("p1");
    houses[h].classList.remove("p2");
    houses[h].classList.remove("built");
    houses[h].dataset.walls=0;
  }
  // add listner to all the a links
  for (w=0; w < walls.length; w++) {
    // console.log(walls[i]);
    walls[w].classList.add("wall");
    walls[w].classList.remove("p1");
    walls[w].classList.remove("p2");
    walls[w].classList.remove("builtWall");
    walls[w].classList.remove("builtP1VWall");
    walls[w].classList.remove("builtP2VWall");
    walls[w].classList.remove("builtP1HWall");
    walls[w].classList.remove("builtP2HWall");
    walls[w].addEventListener("click", buildWall);
    //remove win confiti
    document.querySelector(".win").style.display = "none";
}
}

function clearWT(){
  document.getElementById("p1TotalWins").innerText=0;
  // console.log(document.getElementById("p1TotalWins").innerText);
  document.getElementById("p2TotalWins").innerText=0;
  // console.log(document.getElementById("p2TotalWins").innerText);
  document.getElementById("Ties1").innerText=0;
  // console.log(document.getElementById("Ties1").innerText);
  document.getElementById("Ties2").innerText=0;
  // console.log(document.getElementById("Ties2").innerText);
}

 window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    // grab all the a walls into an array
    const walls = document.querySelectorAll(".wall");
    // generate bord with defaut
    generateBord ();
    //run random cloud top % function
    cloudTopRand ();
    // add listner to all the a links
    for (i=0; i < walls.length; i++) {
        // console.log(walls[i]);
        walls[i].addEventListener("click", buildWall);
    }

    // add listner to clear button
    document.querySelector("#clearButton").addEventListener("click", clearBord);

    //add listner to generate bord button
    document.querySelector("#generateBord").addEventListener("click", generateBord);

    //add listner to clearWT button
    document.getElementById("resetWinTieButton").addEventListener("click", clearWT);
  });