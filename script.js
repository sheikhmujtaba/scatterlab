var PenguinPromise = d3.json("classData.json")
PenguinPromise.then (function(penguins){
        d3.select("h1")
    .text("Penguin Scatter Plot")
    console.log("penguins", penguins);
}, 
function(err){
    console.log("err", err)
})

var screensize = {width:800, height:800}

var getGrade = (function(quiz)
{
    return quiz.grade;
});








