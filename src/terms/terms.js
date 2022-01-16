const Contents = document.querySelectorAll(".Content");

function ChangeColor(){
    let i;
    for(i=0; i< Contents.length; i++){

        if(i %2 == 1){
            Contents[i].style.backgroundColor = "#f2f2f2";
        }
    }
}

function init(){
    ChangeColor();
}
init();