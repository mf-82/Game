let player = 1;
let anotherTurn = false;
let p1Score = 0;
let p2Score = 0;
let pScore

// number of houses built
let housesbuilt = 0;

function buildWall (e) {
    // e.preventDefault();
    console.log("built");
    // console.log(e);
    // get all the class list of the border
    const border = this.classList;
    //convert the data-column into an array
    const borderCol = Array.from(this.dataset.col);

    // convert the data-row into an array
    const borderRow = Array.from(this.dataset.row);
    
    //get all the houses
    const houses = document.getElementsByClassName("house");
    // console.log(border);

    // if player is 1 add player class to wall remove wall class to stop hover
    if (player===1) {
      border.add("p1");
      pScore = p1Score;
    }
    // if player 2 do the same but for p2
    else {
      border.add("p2");
      pScore = p2Score; 
    }
    border.add("builtWall");
    border.remove("wall");
    this.removeEventListener("click", buildWall);
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

      // go through all the columns the border belongs to
      for (let c=0; c < borderCol.length; c++) {
        // console.log(c);

        //go through all the rows the border belongs to
        for (let r=0; r < borderRow.length; r++) {
          // console.log(r);
          // console.log(houseCol == borderCol[c] && houseRow == borderRow[r]);

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
              // add current player class to the house
              houses[h].classList.add(`p${player}`);
              // add p score to screen
              document.getElementById(`p${player}Hcount`).innerText= pScore;
              // if all the houses have been built then the current player wind
              console.log("houses built: " + housesbuilt);
              console.log("all houses: " + houses.length);
              if (housesbuilt === houses.length) {
                console.log(`Player ${player} wins!`);
                return;
              }
              // else if all 4 walls built but its not the last house then current player plays again
              else {
              anotherTurn = true;
              console.log("player "+player+" playes again");
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
        player = 2;
        console.log("player "+player+"'s turn");
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
        player = 1;
        console.log("player "+player+"'s turn");
        return;
      }
    }
      
    
    
      
      
//     const audioHref = e.srcElement.attributes.href.nodeValue;
//    //  console.log(audioHref);
//     audioFile = new Audio(audioHref);
//    //  console.log(this.parentNode);

//    //change the background color slightly to feel responsive
//     document.body.style.background = "#000112";
//    //return background to original color
//     setTimeout(() => {
//       document.body.style.background = "#000011";
//     }, 250);

//     //grab parent node
//     const parentOfbutton = this.parentNode;
//     //add class to parent node that adds head image and animates it
//     parentOfbutton.classList.add("dpHead");
//     //remove the head image after 12 seconds
//     setTimeout(() => {
//       parentOfbutton.classList.remove("dpHead");
//     }, 12000);

//     //play audio
//     audioFile.play();
}

 window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    // grab all the a walls into an array
    const walls = document.querySelectorAll(".wall");

   // add listner to all the a links
    for (i=0; i < walls.length; i++) {
        // console.log(walls[i]);
        walls[i].addEventListener("click", buildWall);
    }
  });