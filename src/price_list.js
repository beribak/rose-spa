const menuBtn = document.querySelectorAll(".menu-button");
const facialsBtn = document.querySelector(".facial-btn");
const treatmantsBtn = document.querySelector(".treatment-btn");
const wellBeingBtn = document.querySelector(".well-being-btn");
const title = document.querySelector(".title");

let combinedArray = document.querySelectorAll(".price_card");
// combinedArray.push(...facials, ...treatmants, ...wellBeing)

combinedArray.forEach((item) => {
  item.style.display = "none"
})

menuBtn.forEach((item) => {
	item.addEventListener('click', (e) => {

		if(window.innerWidth > 1224) {
	  		title.style.height = "65vh";
	  	}
		if(e.target.classList.contains('facial-btn')) {
			combinedArray.forEach((item) => {
			  if(item.classList.contains("facial")) {
			    	item.style.display = "block"
			    } else {
			    	item.style.display = "none"
			    } 
			})
	  	}

	  	if(e.target.classList.contains('treatment-btn')) {
			combinedArray.forEach((item) => {
			  if(item.classList.contains("treatment")) {
			    	item.style.display = "block"
			    } else {
			    	item.style.display = "none"
			    } 
			})
	  	}

	  	if(e.target.classList.contains('well-btn')) {
			combinedArray.forEach((item) => {
			  if(item.classList.contains("well-being")) {
			    	item.style.display = "block"
			    } else {
			    	item.style.display = "none"
			    } 
			})
	  	}
	  // Todo...
	});
  // Todo...
})


// priceButton.addEventListener('click', (e) => {
// 	if(prices.style.display == "none") {
// 		prices.style.display = "block";
// 	} else {
// 		prices.style.display = "none";
// 	}
// });
 	