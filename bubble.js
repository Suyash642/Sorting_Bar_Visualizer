//BUBBLE SORT FUNCTION

async function bubble() {
    console.log('Using bubble sort algorithm()');

    //Selecting every bar
    const ele = document.querySelectorAll(".bar");

    for(let i = 0; i < ele.length-1; i++){

        for(let j = 0; j < ele.length-i-1; j++){

            //changing color to blue
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';

            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }

            //changing back to original color after sorting
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        //Make sorted element as green
        ele[ele.length-1-i].style.background = 'green';
    }
    //lastly making first element sorted by making it green 
    ele[0].style.background = 'green';
}


//AFTER CLICKING ON BUBBLE SORT BUTTON

const bubSortbtn = document.querySelector(".bubbleSort");

bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();         //calling bubble function
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});