const burgeMenu = () => {
	const burgerBtn = document.querySelector(".header__burger");

	const cssActiveClass = "header__burger--active";

	burgerBtn.addEventListener("click", () => {
		burgerBtn.classList.toggle(cssActiveClass);
	});
};

export default burgeMenu;