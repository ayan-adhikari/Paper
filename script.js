//Variables
let folds = 0
let image = document.getElementById(`image`)
let error = false
let errorMessage = ``
//Arrays
//Descriptions (accessed in update function)
const description =
    [
        `You have a piece of paper that is 0.1mm thick.`
        , `Your piece of paper is now 0.2mm thick, the thickness of a human hair.`
        , `Your piece of paper is now 0.4mm thick, the thickness of a standard playing card.`
        , `Your piece of paper is now 0.8mm thick, the thickness of a credit card.`
        , `Your piece of paper is now 1.6mm thick, the thickness of a penny.`
        , `Your piece of paper is now 3.2mm thick, the size of a small fruitfly.`
        , `Your piece of paper is now 6.4mm thick, the width a of a small pea.`
        , `Your piece of paper is now 12.8mm thick, the width of a keycap.`
    ]
//Image srcs (accessed in update function)
const imageSource =
    [
        `images/paper.png` //Paper image
        , `images/hair.png` //Hair image
        , `images/playing-card.png`
        , 'images/credit-card.png'
        , `images/penny.png`
        , `images/fruit-fly.png`
        , `images/pea.png`
        , `images/keyboard.png`
    ]
//Image alts (accessed in update function)
const imageAlt = 
    [
        `A piece of paper.`
        , `A few strands of hair.`
        , `Some playing cards spread out on a desk.`
        , `A stack of credit cards.`
        , `A penny.`
        , `A small fruitfly.`
        , `A pea.`
        , `A keyboard.`
    ]
//Fold limit variable
let foldLimit = description.length - 1
//Assigning button ids to variuables for event listeners.
const fold = document.getElementById("fold-button")
const unfold = document.getElementById("unfold-button")
//Event listeners
fold.addEventListener("click", foldF)
unfold.addEventListener("click", unfoldF)
//Generating ui
image.src = imageSource[0]
document.getElementById(`description-text`).textContent = description[0]
//Fold function (Triggered by pressing the fold button)
function foldF()
{ 
    if (folds < foldLimit)
    {
        folds += 1;
        error = false
    }
        
    else
    {
        error = true
        errorMessage = `The paper has become too thick to fold again.`
    }
    update()
}
//Unfold function (Triggered by pressing the unfold button)
function unfoldF()
{
    if (folds >= 1)
    {
        folds -= 1
        error = false
    }
    else
    {
        error = true
        errorMessage = `Nothing to unfold yet.`
    }
    update()
}
//Function to update text and images
function update()
{
    if (error == true)
    {
        //Update error message
        document.getElementById(`error-msg`).textContent = errorMessage
    }
    else
    {
        //Update error message to be blank
        document.getElementById(`error-msg`).textContent = ``
    }
    //Update fold counter
    document.getElementById(`folds`).textContent = `Folds: ${folds}`
    //Update description 
    document.getElementById(`description-text`).textContent = description[folds]

    if (folds < imageSource.length)
    {
        //Update image
        image.src = imageSource[folds]
        image.alt = imageAlt[folds]
    }

}



