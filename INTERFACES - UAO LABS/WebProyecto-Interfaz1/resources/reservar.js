function  saveReserve(){
    alert("Se ha reservado su equipo exitosamente");
}

function labOnChange(sel){
    if(sel.value=="lab-audio"){
        info1 = document.getElementById("o-inforeserve");
        info1.style.display = "";

        info2 = document.getElementById("o-inforeserve2");
        info2.style.display = "none";

        info3 = document.getElementById("o-inforeserve3");
        info3.style.display = "none";
    }
    else if(sel.value=="lab-graph-one"){
        info1 = document.getElementById("o-inforeserve");
        info1.style.display = "none";

        info2 = document.getElementById("o-inforeserve2");
        info2.style.display = "";

        info3 = document.getElementById("o-inforeserve3");
        info3.style.display = "none";
    }
    else if(sel.value=="lab-video"){
        info1 = document.getElementById("o-inforeserve");
        info1.style.display = "none";

        info2 = document.getElementById("o-inforeserve2");
        info2.style.display = "none";

        info3 = document.getElementById("o-inforeserve3");
        info3.style.display = "";
    }
    else{
        info1 = document.getElementById("o-inforeserve");
        info1.style.display = "none";

        info2 = document.getElementById("o-inforeserve2");
        info2.style.display = "none";

        info3 = document.getElementById("o-inforeserve3");
        info3.style.display = "none";
    }
}