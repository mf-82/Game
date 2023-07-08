 
 function playAudio (e) {
    e.preventDefault();
    const audioHref = e.srcElement.attributes.href.nodeValue;
   //  console.log(audioHref);
    audioFile = new Audio(audioHref);
   //  console.log(this.parentNode);

   //change the background color slightly to feel responsive
    document.body.style.background = "#000112";
   //return background to original color
    setTimeout(() => {
      document.body.style.background = "#000011";
    }, 250);

    //grab parent node
    const parentOfbutton = this.parentNode;
    //add class to parent node that adds head image and animates it
    parentOfbutton.classList.add("dpHead");
    //remove the head image after 12 seconds
    setTimeout(() => {
      parentOfbutton.classList.remove("dpHead");
    }, 12000);

    //play audio
    audioFile.play();
 }

 window.addEventListener("DOMContentLoaded", (event) => {
   //  console.log("DOM fully loaded and parsed");
    // grab all the a links into an array
    const songList = document.getElementsByClassName("song");

   //  console.log(songList);
   //  console.log(songList[0]);

   // add listner to all the a links
    for (i=0; i < songList.length; i++) {
      //   console.log(songList[i].innerText);
        songList[i].addEventListener("click", playAudio);
    }
  });