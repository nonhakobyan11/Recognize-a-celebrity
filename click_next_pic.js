var next = document.getElementById("next").addEventListener("click", clickNext, false);
var results = document.getElementById("next").addEventListener("click", seeResults, false);
var undo = document.getElementById("undo").addEventListener("click", clickUndo, false);
var img = document.getElementById("pictures").addEventListener("click", clickPic, false);
var i = 1;
var counter = 1;
var isButtonUndoClicked = false;
var isPicClicked = false;
rightAnswers = 0;

var Array = [
    {Name: "Mila Kunis", id: "img8" },
    {Name: "Emilia Clark",  id: "img5" },
    {Name: "Courtney Cox",  id: "img3" },
    {Name: "George Clooney", id: "img1" },
    {Name: "Jennifer Lopez", id: "img7"},
    {Name: "Will Smith", id: "img9"},
    {Name: "Dwayne Johnson", id: "img4"},
    {Name: "Ashton Kutcher", id: "img2" } ,         
    {Name: "Jason Statham", id: "img6"}   
]

function clickPic(event){
    if(isPicClicked == false){
        var clickedImg = event.target.id;
        if(clickedImg == Array[i-1].id){
            document.getElementById(clickedImg).style = "border-color: green"
            rightAnswers++;
            } else{
                document.getElementById(clickedImg).style = "border-color: red"
            }
        }
    isPicClicked = true;     
}


function clickNext(event){
    if(isPicClicked == true){
        if(counter >= Array.length){
            this.textContent = "See results"
        } else{
            document.getElementById("box1").innerHTML = "Who is " + Array[i].Name + "?";
        }
        counter++;
        i++;
    }
    isPicClicked = false;
}


function seeResults(event){
    if(counter == 10 ) {
        if(rightAnswers == 0){
            alert("OOPS! 😮 None of your choice was right. At least watch TV, dude, YouTube is better, though 😛");
        }

        if(rightAnswers >= 1 && rightAnswers <=3){
            alert("Not cool! 😕 You have answered only " + rightAnswers + " times right. You should spend more time in Youtube");
        }

        if(rightAnswers >= 4 && rightAnswers <=6){
            alert("You could be better! 😊 You have answered " + rightAnswers + " times right. But you can try again 😛");
        }

        if(rightAnswers >= 7 && rightAnswers <=9){
            alert("Awesome!!! 😁 You have answered " + rightAnswers + " times right. I think you're spending veryyy much time in Youtube! 😛");
        }
    }
}

function clickUndo(event){
    if(isButtonUndoClicked == false){
        this.textContent = "No more!";
        isButtonUndoClicked = true;
        
        var dblclick = document.getElementById("pictures").addEventListener("dblclick", dblclickPic, false);
        function dblclickPic(event){
            if(isButtonUndoClicked == true){
                var dblclickedImg = event.target.id;
                if(document.getElementById(dblclickedImg).style.borderColor == "red" ){
                    document.getElementById(dblclickedImg).style = "border-color: #622569"
                    isPicClicked = false; 
                }
            }
        }
    }
}


        
