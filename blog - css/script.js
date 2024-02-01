let accordionBtn = document.querySelectorAll(".accordionTitle");
let allTexts = document.querySelectorAll(".text");
let accIcon = document.querySelectorAll(".accIcon");

accordionBtn.forEach(function (el) {
	el.addEventListener("click", toggleAccordion);
});

function toggleAccordion(el) {
	let targetText = el.currentTarget.nextElementSibling.classList;
	let targetAccIcon = el.currentTarget.children[0];
	let target = el.currentTarget;

	if (targetText.contains("show")) {
		targetText.remove("show");
		targetAccIcon.classList.remove("anime");
		target.classList.remove("accordionTitleActive");
	} else {
		accordionBtn.forEach(function (el) {
			el.classList.remove("accordionTitleActive");

			allTexts.forEach(function (el) {
				el.classList.remove("show");
			});

			accIcon.forEach(function (el) {
				el.classList.remove("anime");
			});
		});

		targetText.add("show");
		target.classList.add("accordionTitleActive");
		targetAccIcon.classList.add("anime");
	}
}
