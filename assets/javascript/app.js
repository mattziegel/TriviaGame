//result variables
var correct = 0;
var incorrect = 0

// var x = document.getElementById("theme"); 

// function playAudio() { 
//     x.play(); 
// } 

// function pauseAudio() { 
//     x.pause(); 
// } 

// document ready and timer
$(document).ready(function () {
    var timer = 51;
    var intervalId;

    function run() {

        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timer--;
        $("#timeLeft").html(timer + " Seconds Left");
        if (timer == 0) {
            stop();
            $("#welcome").hide();
            $("#trivia").hide();
            $("#results").show();
            zero();
            var image = $("<img class='gif'>").attr("src", "https://images.complex.com/complex/image/upload/t_in_content_image/Pez_nqglpv.gif");
            $("#results").append(image);
        }
    }

    $("#trivia").hide();
    $("#results").hide();

    //reveals questions and starts game and timer
    $("#start").on('click', function () {
        $("#welcome").hide();
        document.getElementById('theme').play(); //audio and jQuery were not getting along for me so did it JS style
        $("#trivia").show();
        run();

        // return;
    })

    // zero function stores radio input, matches questions to right answers, and logs results
    function zero() {
        var q1 = $("input[type=radio][name='q1']:checked").val();
        var q2 = $("input[type=radio][name='q2']:checked").val();
        var q3 = $("input[type=radio][name='q3']:checked").val();
        var q4 = $("input[type=radio][name='q4']:checked").val();
        var q5 = $("input[type=radio][name='q5']:checked").val();
        var q6 = $("input[type=radio][name='q6']:checked").val();
        var q7 = $("input[type=radio][name='q7']:checked").val();
        var q8 = $("input[type=radio][name='q8']:checked").val();
        var q9 = $("input[type=radio][name='q9']:checked").val();
        var q10 = $("input[type=radio][name='q10']:checked").val();

        if (q1 == "Newman") {
            correct++;
        } else {
            incorrect++;
        };

        if (q2 == "Oh Henry") {
            correct++;
        } else {
            incorrect++;
        };

        if (q3 == "Art Vandalay") {
            correct++;
        } else {
            incorrect++;
        };

        if (q4 == "Cosmo") {
            correct++;
        } else {
            incorrect++;
        };

        if (q5 == "Festivus") {
            correct++;
        } else {
            incorrect++;
        };

        if (q6 == "Kramer") {
            correct++;
        } else {
            incorrect++;
        };

        if (q7 == "Elaine") {
            correct++;
        } else {
            incorrect++;
        };

        if (q8 == "Koko the Monkey") {
            correct++;
        } else {
            incorrect++;
        };

        if (q9 == "Death Blow") {
            correct++;
        } else {
            incorrect++;
        };

        if (q10 == "Elaine") {
            correct++;
        } else {
            incorrect++;
        };

        console.log("correct: " + correct);
        console.log("incorrect: " + incorrect);

        $("#correct").html(correct);
        $("#incorrect").html(incorrect);
    }

    // reveals final result page and displays results by running the zero function
    $("#finished").on("click", function () {
        document.getElementById('theme').pause();
        $("#welcome").hide();
        $("#trivia").hide();
        $("#results").show();
        zero();
        var image = $("<img class='gif'>").attr("src", "https://images.complex.com/complex/image/upload/t_in_content_image/Pez_nqglpv.gif");
        $("#results").append(image);
    })


});

//COMMENTED OUT FALSE STARTS::

// var clock = 51;
// var timer = setInterval(function(){
//     clock--;
//     $("#timeLeft").textContent = timeleft;
//         if (timeleft <= 0)
//             clearInterval(timer);
//     }, 1000);

// var trivia = {
//     questions: {
//         q1: "Who is Jerry’s nemesis?", a1: "Newman",
//         q2: "Elaine’s frenemy, Sue Ellen Mishky, is the heiress to which candy bar fortune?", a2: "Oh Henry",
//         q3: "What is George Constanza’s alias of choice?", a3: "Art Vandalay",
//         q4: "What is Kramer’s first name?", a: "Cosmo",
//         q5: "What was the name of the holiday invented by Goerge’s father?", a5: "Festivus",
//         q6: "Which member of the gang had an intern named Darren?", a6: "Kramer",
//         q7: "Who has the highest IQ?", a7: "Elaine",
//         q8: "What was George's nickname when he worked at Kruger Industries?", a8: "Koko the Monkey",
//         q9: "What was the name of the action movie Jerry was forced to bootleg at gunpoint?", a9: "Death Blow",
//         q10: "Who’s signature dance involves thumbs, jerks, and little kicks?", a10: "Elaine",
//     },
//     options: {
//         o1: ["Crazy Joe Davola", "Newman", "Bookman", "Kenny Bania"],
//         o2: ["Snickers", "3 Muskateers", "Oh Henry", "Payday"],
//         o3: ["RJ Pennypacker", "Lloyd Braun", "Mr. Pitt", "Art Vandalay"],
//         o4: ["Bob", "Hamish", "Cosmo", "Arlo"],
//         o5: ["The Human Fund", "Hollyeve", "Festivus", "Appreciation Day"],
//         o6: ["Elaine", "Jerry", "George", "Kramer"],
//         o7: ["Elaine", "Jerry", "George", "Kramer"],
//         o8: ["Biff", "T-Bone", "Georgie Boy", "Koko the Monkey"],
//         o9: ["Death Blow", "The English Patient", "Sack Lunch", "Rochelle, Rochelle"],
//         o10: ["Elaine", "Jerry", "George", "Kramer"],
//     }
// }


