function classRemove() {
    $("#1").removeClass("circle");
    $("#1").removeClass("trapezoid");
    $("#1").removeClass("parallel");
    $("#1").removeClass("triangle");
    $("#1").removeClass("oval");
}


$("#2").on("click", trapezoid);
function trapezoid() {
    classRemove();
    $("#1").addClass("trapezoid");
}

$("#3").on("click", parallel);
function parallel() {
    classRemove();
    $("#1").addClass("parallel");
} 

$("#4").on("click", circle);
function circle() {
    classRemove();
    $("#1").addClass("circle");
}

$("#5").on("click", triangle);
function triangle() {
    classRemove();
    $("#1").addClass("triangle");
}

$("#6").on("click", oval);
function oval() {
    classRemove();
    $("#1").addClass("oval");
}