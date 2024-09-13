var card0_val = 0;
var card1_val = 0;
var card2_val = 0;
var card3_val = 0;
var card4_val = 0;
var card5_val = 0;
var card6_val = 0;
var card7_val = 0;
var matches = 4;

document.getElementById("Score").innerText = 4;

document.getElementById("w1").addEventListener("click", card0);
document.getElementById("w2").addEventListener("click", card1);
document.getElementById("w3").addEventListener("click", card2);
document.getElementById("w4").addEventListener("click", card3);
document.getElementById("w5").addEventListener("click", card4);
document.getElementById("w6").addEventListener("click", card5);
document.getElementById("w7").addEventListener("click", card6);
document.getElementById("w8").addEventListener("click", card7);

function card0() {
    document.getElementById("w1").innerText = 17;
    card0_val = 17;
    check();
}

function card1() {
    document.getElementById("w2").innerText = 1;
    card1_val = 1;
    check();
}

function card2() {
    document.getElementById("w3").innerText = 1;
    card2_val = 1;
    check();
}

function card3() {
    document.getElementById("w4").innerText = 17;
    card3_val = 17;
    check();
}

function card4() {
    document.getElementById("w5").innerText = 2;
    card4_val = 2;
    check();
}

function card5() {
    document.getElementById("w6").innerText = 2;
    card5_val = 2;
    check();
}

function card6() {
    document.getElementById("w7").innerText = 3;
    card6_val = 3;
    check();
}

function card7() {
    document.getElementById("w8").innerText = 3;
    card7_val = 3;
    check();
}

function check() {

    

    
   
    
    if(card3_val === card0_val && card0_val !== 0 && card3_val !== 0) {
        setTimeout(() => {
            remove_card3_card0();
        }, 1000);
        matches=matches-1;
        document.getElementById("Score").innerText = matches;
        //return; 
        // 17's
    }else{
        setTimeout(() => {
            document.getElementById("w4").innerText = "";
            document.getElementById("w0").innerText = "";
            card3_val=0;
            card0_val =0;
        }, 1000);
        
        // 17's

    }

    
    if (card1_val === card2_val && card1_val !== 0 && card2_val !== 0) {
        setTimeout(() => {
            remove_card_1_card2();
        }, 1000);
        //return; 

        // 1's
        matches=matches-1;
        document.getElementById("Score").innerText = matches;
    }else{
        setTimeout(() => {
            document.getElementById("w2").innerText = "";
            document.getElementById("w3").innerText = "";
            card2_val=0;
            card1_val =0;
        }, 1000);

    if (card4_val === card5_val && card5_val !== 0 && card4_val !== 0) {
        setTimeout(() => {
            remove_card_4_card5();
        }, 1000);
        //return; 
        // 2's
        matches=matches-1;
        document.getElementById("Score").innerText = matches;
    }else{
        setTimeout(() => {
            document.getElementById("w5").innerText = "";
            document.getElementById("w6").innerText = "";
            card4_val=0;
            card5_val =0;
        }, 1000);


    if (card6_val === card7_val && card6_val !== 0 && card7_val !== 0) {
        setTimeout(() => {
            remove_card_7_card6();
        }, 1000);
        //return; 
        // 3's
        matches=matches-1;
        document.getElementById("Score").innerText = matches;
    }else{
        setTimeout(() => {
            document.getElementById("w7").innerText = "";
            document.getElementById("w8").innerText = "";
            card6_val=0;
            card7_val =0;
        }, 1000);}
    
    
}
    }
}

function remove_card3_card0() {
   
    var w1 = document.getElementById("w1");
    var w4 = document.getElementById("w4");
    
    if (w1!=null) {
        w1.remove()

    };
    if (w4!=null){
         w4.remove();

    };

    
    card0_val = 0;
    card1_val = 0;
}

function remove_card_1_card2() {
  
    var w2 = document.getElementById("w2");
    var w3 = document.getElementById("w3");
    
    if (w2!=null) {
        w2.remove()

    };
    if (w3!= null) {
        w3.remove()

    };

    
    card2_val = 0;
    card3_val = 0;
}

// new 
function remove_card_4_card5(){


    var w5 = document.getElementById("w5");
    var w6 = document.getElementById("w6");
    
    if (w5!=null) {
        w5.remove()

    };
    if (w6!= null) {
        w6.remove()

    };

    
    card4_val = 0;
    card5_val = 0;

}

function remove_card_7_card6(){



    var w7 = document.getElementById("w7");
    var w8 = document.getElementById("w8");
    
    if (w7!=null) {
        w7.remove()

    };
    if (w8!= null) {
        w8.remove()

    };

    
    card6_val = 0;
    card7_val = 0;

}

