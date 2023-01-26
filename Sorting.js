//SIZE SLIDER

// TAKING SIZE FROM SIZE SLIDER AND PASS TO CREATENEWARRAY FUNCTION
let arraySize = document.querySelector('#arr_sz');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value)); //giving input from size slider to array
});

// Disables size slider, so that we can disable during sorting and enable buttons after it
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider, so that we can use it after sorting completion.
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}




//DELAY TIME 

// Default input for waitforme function (260ms)
let delay = 320;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});


//NEW ARRAY BUTTON

//ADDING CREATEARRAY FUNCTIONALITY IN "NEW ARRAY" BUTTON
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

// Disables newArray buttons, so that we can disable during sorting 
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray buttons 
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}





//SORTING ALGO BUTTONS

// Disables sorting buttons, so that we can disable during sorting 
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons 
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}



// CREATING NEW ARRAY WITH NEW RANDOMLY GENERATED NUMBERS

let array = [];

// Call to display bars right when you visit the site
createNewArray();

function createNewArray(noOfBars = 60) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);        //Adding new random element into array
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;      // for getting proper height
        
        //Action performed class="bar flex-item barno" below code
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);

        //Adding child .bar to container #bars
        bars.appendChild(bar);
    }
}


// HELPER FUNCTION TO DELETE THE PREVIOUS BAR ON THE SITE

function deleteChild() {
    //Clear the container #bars 
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}


// SWAP FUNCTION FOR SWAPPING BARS 
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Used in async function so that we can do animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}