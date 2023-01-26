//SELECTION SORT ALGORITHM

async function selection() {
	console.log("Using Selection sort algorithm");

	const ele = document.querySelectorAll(".bar");

	for(let i=0; i<ele.length-1; i++)
	{
		let minindex = i; //Min element should be the one who is less than current i element
		ele[i].style.background = "blue"; //ith element

		for(let j=i+1; j<ele.length; j++)
		{
			ele[j].style.background = "red";
			ele[minindex].style.background = "orange"; //current min element

			if(parseInt(ele[j].style.height) < parseInt(ele[minindex].style.height))
			{
				await waitforme(delay); //skip some time

//if jth element is less than min element then change min element

//if j and min element's index is different then change the previous mid colors to 
// original one
				if(j != minindex)
				{
					ele[minindex].style.background = "cyan";
				}
				minindex = j;
			}

//if jth element is greater then change its color back to original
			else
			{
				ele[j].style.background="cyan";
			}
		}

		await waitforme(delay);

		swap(ele[i], ele[minindex]); //swapping of ith and minindex element

//After swapping, make ith element green sorted and minindex element back to original 
//bcoz we have to find the new min element in new iteration.
		
		ele[minindex].style.background = "cyan"; 
		ele[i].style.background = "green";
	}

	//last element of ith loop which is already sorted
	ele[ele.length-1].style.background = "green";
}



const selectSortbtn = document.querySelector(".selectionSort");

selectSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});