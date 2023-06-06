const burgeMenu = () => {
	const burgerBtn = document.querySelector(".header__burger");
	const burgeMenu = document.querySelector(".menu");

	const cssActiveClass = "header__burger--active";
	const cssActiveMenuClass = "menu--active";

	burgerBtn.addEventListener("click", () => {
		burgerBtn.classList.toggle(cssActiveClass);
		burgeMenu.classList.toggle(cssActiveMenuClass);
	});
};

export default burgeMenu;
