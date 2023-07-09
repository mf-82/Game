let player = 1;

function buildWall (e) {
    // e.preventDefault();
    console.log("built");
    console.log(e);
    const border = this.classList;
    const houses = document.getElementsByClassName("house");
    console.log(border);
    // add player class to wall remove wall class to stop hover
    if (player===1) {
      border.add("p1Wall");
      border.add("builtWall");
      border.remove("wall");
      this.removeEventListener("click", buildWall);
      player = 2;
      console.log(border);
      console.log("player: "+player);
      // if house class contains both border col and row
      for (c=0; c<border.data-col.length;i++) {
        for (h=0; h < houses.length; i++) {
          const house = houses[h].classList;
          for (r=0; r<border.data-row.length;r++) {
        if (house.contains === border.data-col[c] && house.contains === border.data-row[r]){
          
          }
        }
      }
      
    }
    else {
      border.add("p2Wall");
      border.add("builtWall");
      border.remove("wall");
      player = 1;
      console.log("player: "+player);
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
   //  console.log(songList);
   //  console.log(songList[0]);

   // add listner to all the a links
    for (i=0; i < walls.length; i++) {
        console.log(walls[i]);
        walls[i].addEventListener("click", buildWall);
    }
  });