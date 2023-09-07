function initScript() {
	const mediaQuery = window.matchMedia('(max-width: 992px)');
	const bars = document.querySelector('.bars'),
		navOverlay = document.querySelector('.nav-overlay'),
		menu = document.querySelector('.header-nav');

	function resizeNav() {

		// Set the circle radius to the length of the window diagonal,
		// this way we're only making the circle as big as it needs to be.
		let radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
		let diameter = radius * 2;
		navOverlay.style.width = diameter + 'px';
		navOverlay.style.height = diameter + 'px';
		navOverlay.style.marginTop = -radius + 'px';
		navOverlay.style.marginLeft = -radius + 'px';
	}

	if (mediaQuery.matches) {
		// Set the nav height to fill the window
		document.querySelector('.header-nav').style.height = window.innerHeight + 'px';
	} else {
		document.querySelector('.header-nav').style.height = 'unset';
	}

	// Set up click and window resize callbacks, then init the nav.
	bars.addEventListener('click', function () {
		this.classList.toggle('open');
		navOverlay.classList.toggle('open');
		menu.classList.toggle('open');
		document.querySelector('body').classList.toggle('openMenu');
		document.querySelectorAll('li.header__menu-item').forEach((item) => item.classList.toggle('show'));

	});

	//window.resize(resizeNav());

	resizeNav();
}

window.onload = initScript;