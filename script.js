//Variables
let folds = 0;
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
        , `Your piece of paper is now 25.6mm thick, the width of a quarter.`
        ,`Your piece of paper is now 5.12cm thick, the length of a AA battery.`
        ,`Your piece of paper is now 10.24cm thick, the length of a toilet roll tube.`
        ,`Your piece of paper is now 20.48cm thick, the length of a toothbrush.`
        ,`Your piece of paper is now 40.96cm thick, the length of a piece of A3 paper.`
        ,`Your piece of paper is now 81.92cm thick, the length of a skateboard.`
        ,`Your piece of paper is now 1.6384m thick, the length of a snowboard.`
        ,`Your piece of paper is now 3.2768m thick, the length of a canoe.`
    ]
//Image srcs (accessed in update function)
const imageSource =
    [
        `images/paper.png` 
        , `images/hair.png` 
        , `images/playing-card.png`
        , 'images/credit-card.png'
        , `images/penny.png`
        , `images/fruit-fly.png`
        , `images/pea.png`
        , `images/keyboard.png`
        , `images/quarter.png`
        ,`images/battery.png`
        ,`images/toilet-paper.webp`//Note: I tried making this png (for consistency) but it didnt work.
        ,`images/toothbrush.webp`//Note: All images are now downloading as webps.
        ,`images/a3-paper.webp`// Note: This may be caused by me switching browser. 
        ,`images/skateboard.webp`
        ,`images/snowboard.webp`
        ,`images/canoe.webp`
    ]
//Image alts (accessed in update function)
const imageAlt = 
    [
        `A piece of paper.`//0
        , `A few strands of hair.`//1
        , `Some playing cards spread out on a desk.`//2
        , `A stack of credit cards.`//3
        , `A penny.`//4
        , `A small fruitfly.`//5
        , `A pea.`//6
        , `A keyboard.`//7
        , `A quarter.`//8
        ,`A double a battery.`//9
        ,`A toilet paper tube.`//10
        ,`A toothbrush.`//11
        ,`A partially rolled up piece of A3 paper.`//12
        ,`A skateboard`//13
        ,`A snowboard`//14
        ,`A canoe`//15
    ]
//Fold limit variable
const foldLimit = description.length - 1
//Assigning element ids to variables
const fold = document.getElementById(`fold-button`)
const unfold = document.getElementById(`unfold-button`)
const image = document.getElementById(`image`)
const topElement = document.getElementById(`top`)
//Event listeners
fold.addEventListener(`click`, foldF)
unfold.addEventListener(`click`, unfoldF)
//Preloading images
for (let i = 0; i < imageSource.length; i++) {
    const image = imageSource[i];
}
//Scrolling to the top
window.addEventListener("load", scrollToTop)
function scrollToTop()
{
    topElement.scrollIntoView()
}
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
    if (error)
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



