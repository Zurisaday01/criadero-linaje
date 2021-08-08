'use strict';
// DATA
const puppy1 = {
	weight: 8,
	genere: 'male',
	parents: 'Misha & Coba',
	personality: 'Alegre',
	age: 2,
	url: 'puppy-1.png',
};
const puppy2 = {
	weight: 6,
	genere: 'female',
	parents: 'Alika & Ralph',
	personality: 'Consentida',
	age: 2.3,
	url: 'puppy-2.png',
};
const puppy3 = {
	weight: 5,
	genere: 'male',
	parents: 'Misha & Coba',
	personality: 'Dormilón',
	age: 2.5,
	url: 'puppy-3.jpg',
};
const puppy4 = {
	weight: 8,
	genere: 'male',
	parents: 'Misha & Coba',
	personality: 'Comelon',
	age: 2,
	url: 'puppy-4.png',
};
const puppy5 = {
	weight: 7,
	genere: 'female',
	parents: 'Alika & Ralph',
	personality: 'Hiperactiva',
	age: 2,
	url: 'puppy-5.png',
};
const puppy6 = {
	weight: 5,
	genere: 'male',
	parents: 'Alika & Ralph',
	personality: 'Travieso',
	age: 2,
	url: 'puppy-6.png',
};
const puppy7 = {
	weight: 6,
	genere: 'female',
	parents: 'Misha & Coba',
	personality: 'Amorosa',
	age: 2.2,
	url: 'puppy-7.png',
};
const puppy8 = {
	weight: 8,
	genere: 'male',
	parents: 'Misha & Coba',
	personality: 'Curioso',
	age: 2.5,
	url: 'puppy-8.png',
};
const puppy9 = {
	weight: 5,
	genere: 'male',
	parents: 'Misha & Coba',
	personality: 'Hablador',
	age: 2.3,
	url: 'puppy-9.jpg',
};
const puppy10 = {
	weight: 5,
	genere: 'female',
	parents: 'Alika & Ralph',
	personality: 'Revoltosa',
	age: 2,
	url: 'puppy-10.png',
};
const puppy11 = {
	weight: 6,
	genere: 'male',
	parents: 'Misha & Coba',
	personality: 'Tranquilo',
	age: 2.8,
	url: 'puppy-11.png',
};
const puppy12 = {
	weight: 7,
	genere: 'female',
	parents: 'Alika & Ralph',
	personality: 'Amorosa',
	age: 2.5,
	url: 'puppy-12.png',
};

const puppies = [
	puppy1,
	puppy2,
	puppy3,
	puppy4,
	puppy5,
	puppy6,
	puppy7,
	puppy8,
	puppy9,
	puppy10,
	puppy11,
	puppy12,
];

// ELEMENTS
const containerPuppies = document.querySelector('.puppies-options__main');
const selectEl = document.querySelector('#select');

// DISPLAY PUPPIES
const displayPuppies = function (puppies) {
	containerPuppies.innerHTML = '';
	puppies.forEach(function (puppy, i) {
		const genere = puppy.genere === 'male' ? 'male' : 'female';
		const html = `
        <div class="puppies-options__puppy">
                <div class="puppies-options__puppy-box">
                    <img
                        src="./${puppy.url}"
                        class="puppies-options__puppy-img"
                        alt="${i}"
                    />
                </div>
                <div class="puppies-options__puppy-info">
                    <p class="puppies-options__paragraph puppies-options__paragraph--${genere}">
                        Peso: <span>${puppy.weight} kg</span>
                    </p>
                    <p class="puppies-options__paragraph puppies-options__paragraph--${genere}">
                        Padres: <span>${puppy.parents}</span>
                    </p>
                    <p class="puppies-options__paragraph puppies-options__paragraph--${genere}">
                        Personalidad: <span>${puppy.personality}</span>
                    </p>
                    <p class="puppies-options__paragraph puppies-options__paragraph--${genere}">
                        Edad: <span>${puppy.age} meses</span>
                    </p>
                </div>
		</div>
        `;

		containerPuppies.insertAdjacentHTML('afterbegin', html);
	});
};
// Por default que muestre ambos
displayPuppies(puppies);

// Filter - MALE
const male = pupps => pupps.filter(puppy => puppy.genere === 'male');

// Filter - FEMALE
const female = pupps => pupps.filter(puppy => puppy.genere === 'female');

// higher order function
selectEl.addEventListener('change', function () {
	const selectVal = this.value;

	if (selectVal === 'female') {
		displayPuppies(female(puppies));
	} else if (selectVal === 'male') {
		displayPuppies(male(puppies));
	} else {
		displayPuppies(puppies);
	}
});

// SLIDER
const swiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	slidesPerView: 2,
	spaceBetween: 90,
	loop: true,
	breakpoints: {
		// 	300: {
		// 		slidesPerView: 1,
		// 	},
		// 	870: {
		// 		slidesPerView: 2,
		// 	},
		// 1400: {
		// 	slidesPerView: 3,
		// },
	},
});

// NAVIGATION
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);
	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			toggle.classList.toggle('toggle-close');
			nav.classList.toggle('show');
			document.querySelector('.navigation__list').classList.toggle('active');

			setTimeout(() => {
				document
					.querySelector('.navigation__list')
					.classList.toggle('transition');
			}, 1000);
		});
	}
};

showMenu('nav-toggle', 'nav-menu');
