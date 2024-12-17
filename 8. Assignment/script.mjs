const alertFunction = () => {
 
let print = prompt("What information you want about graphiccard mouse keyboard")

 if( print === "graphiccard"){
    document.write(  " It accelerates the graphics processing capabilities of your computer, enabling you to enjoy smooth and high-quality visuals in games, videos, and other graphic-intensive applications. The graphics card works with the central processing unit (CPU) to process and output visual data.")
}
 
if( print === "mouse" ){
    document.write("A mouse is a small device that a computer user pushes across a desk surface in order to point to a place on a display screen and to select one or more actions to take from that position.")
 }

  if( print === "keyboard" ){
    document.write("A computer keyboard is an input device used to enter characters and functions into the computer system by pressing buttons, or keys. It is the primary device used to enter text. A keyboard typically contains keys for individual letters, numbers and special characters, as well as keys for specific functions.")
 }

}