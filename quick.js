//QUICK SORT ALGORITHM

async function partition(ele,l,r)
{
	let pivot = ele[r]; //last element

	//color of pivot element
	pivot.style.background = "red";

	let i = l - 1; //track the correct position of pivot

	for(let j=l; j<=r-1; j++)
	{
		//current j element
		ele[j].style.background = "blue";

		await waitforme(delay);

		if(parseInt(ele[j].style.height) < parseInt(pivot.style.height))
		{
			i++;
			swap(ele[i], ele[j]);

			ele[i].style.background = "orange"; //elements lesser than pivot
			if(i!=j)
			{
				ele[j].style.background = "orange";
			}

			await waitforme(delay);
		}
		else
		{
			ele[j].style.background = "pink"; // elements greater than pivot 
		}
	}

	await waitforme(delay);

	swap(ele[i+1], ele[r]);

	ele[i+1].style.background = "green"; //sorted element 

	ele[r].style.background = "pink"; //as it is in right side index

	await waitforme(delay);

// Recoloring others to original other than green (sorted elements)
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

	return i+1; 
}



async function quick(ele, l, r) 
{
	console.log("Using Quick Sort Algorithm");

	if(l<r)
	{
		let pivotindex = await partition(ele,l,r);
		await quick(ele, l, pivotindex-1);
		await quick(ele, pivotindex+1, r);
	}
	else{
	   	if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
	        ele[r].style.background = 'green';
	        ele[l].style.background = 'green';
	    }
	}
}



const quickSortbtn = document.querySelector(".quickSort");

quickSortbtn.addEventListener('click', async function(){
	let ele = document.querySelectorAll(".bar");
	let l = 0;
	let r = ele.length-1;

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();

    await quick(ele, l, r);

    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});