let actualClick = 0;


//Function to change the content display
//If the button click isn't the content already shown : 
//Remove the actual content  (defined by : global actualClick)
//Show new content (defined by : id)
//Set new actualClick to ID for next use
//By : Antoine Monnin - June 2021
function navClick(id) {
  if (id != actualClick) {

    //Create content id array
    let x = ['profil', 'xp', 'studies', 'random'];

    //Hide current content (Defined by actualclick)
    var idOld = document.getElementById(x[actualClick]);
    idOld.setAttribute("style", "display : none");
    
    
    //Show new content (Defined by id)
    var idNew = document.getElementById(x[id]);
    idNew.setAttribute("style", "display : block");
    

    //Update actualClick
    actualClick = id;
  }
}
