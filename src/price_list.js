
const priceButton = document.querySelector("#price_button");
const priceList = document.querySelector(".price_list");

priceButton.addEventListener('click', (e) => {
	if(priceList.style.display === "none") {
		priceList.style.display = "block";
		priceList.style.position = "absolute";
		priceList.style.top = "200px";
		priceButton.style.color = "rgb(237, 38, 71)";
	} else {
		priceList.style.display = "none";
		priceButton.style.color = "white";
	}
});
