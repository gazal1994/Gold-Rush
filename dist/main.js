
Handlebars.registerHelper('iff', function(a, operator, b, opts) {
    var bool = false;
    switch(operator) {
       case '==':
           bool = a == b;
           break;
       case '>':
           bool = a > b;
           break;
       case '<':
           bool = a < b;
           break;
       default:
           throw "Unknown operator " + operator;
    }
 
    if (bool) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});
 


let m = new GoldRush(5, 5)
rend.renderData(m.matrix)
rend.renderScores(m.playerScores)
console.log(m.playerScores)
console.log(m.matrix)
$("button").on("click", function () {
    let row = $("#row").val()
    let col = $("#col").val()
     m = new GoldRush(row, col)
     rend.renderData(m.matrix)
    rend.renderScores(m.playerScores)
    console.log(m.playerScores)
    
})
$(document).keypress(function (e) {
    if (e.which == 119) {
        m.movement(1, "up")
    }
    rend.renderData(m.matrix)
    if(m.playerScores==100){
        alert("like a boss ${m.playerScores} ")
    }
    rend.renderScores(m.playerScores)
})
$(document).keypress(function (e) {
    if (e.which == 97) {
        m.movement(1, "left")
    }
    rend.renderData(m.matrix)
    rend.renderScores(m.playerScores)
})
$(document).keypress(function (e) {
    if (e.which == 100) {
        m.movement(1, "right")
    }
    rend.renderData(m.matrix)
    rend.renderScores(m.playerScores)
})
$(document).keypress(function (e) {
    if (e.which == 120) {
        m.movement(1, "down")
    }
    rend.renderData(m.matrix)
    rend.renderScores(m.playerScores)
})
//player 1
$(document).keypress(function (e) {
    if (e.which == 56) {
        m.movement(2, "up")
    }
    rend.renderData(m.matrix)
    rend.renderScores(m.playerScores)
})
$(document).keypress(function (e) {
    if (e.which == 52) {
        m.movement(2, "left")
    }
    rend.renderData(m.matrix)
    rend.renderScores(m.playerScores)
})
$(document).keypress(function (e) {
    if (e.which == 54) {
        m.movement(2, "right")
    }
    rend.renderData(m.matrix)
    rend.renderScores(m.playerScores)
})
$(document).keypress(function (e) {
    if (e.which == 50) {
        m.movement(2, "down")
    }
    rend.renderData(m.matrix)
    rend.renderScores(m.playerScores)
})