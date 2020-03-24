
const menuBtn = document.querySelectorAll(".menu-button");
const facialsBtn = document.querySelector(".facial-btn");
const treatmantsBtn = document.querySelector(".treatmant-btn");
const wellBeingBtn = document.querySelector(".well-being-btn");

let combinedArray = document.querySelectorAll(".price_card");
// combinedArray.push(...facials, ...treatmants, ...wellBeing)

combinedArray.forEach((item) => {
  item.style.display = "none"
})

menuBtn.forEach((item) => {
	item.addEventListener('click', (e) => {

		if(e.target.classList.contains('facial-btn')) {
			combinedArray.forEach((item) => {
			  if(item.classList.contains("facial")) {
			    	item.style.display = "block"
			    } else {
			    	item.style.display = "none"
			    } 
			})
	  	}

	  	if(e.target.classList.contains('treatmant-btn')) {
			combinedArray.forEach((item) => {
			  if(item.classList.contains("treatmant")) {
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
 	