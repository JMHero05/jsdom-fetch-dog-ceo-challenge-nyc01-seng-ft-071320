console.log('%c HI', 'color: firebrick');
document.addEventListener('DOMContentLoaded', () => {
	const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
	const dogImageContainer = document.querySelector('#dog-image-container');
	const breedUrl = 'https://dog.ceo/api/breeds/list/all';
	const dogBreedsContainer = document.querySelector('#dog-breeds');

	const getImages = () => {
		fetch(imgUrl).then((response) => response.json()).then((dogPics) => renderImages(dogPics.message));
	};

	const renderImage = (dogPic) => {
		const imageDiv = document.createElement('div');
		imageDiv.classList.add('challenge-one-image');
		const newImage = document.createElement('img');
		newImage.src = dogPic;

		dogImageContainer.append(imageDiv);
		imageDiv.append(newImage);
	};

	const renderImages = (dogPics) => {
		for (const dogPic of dogPics) {
			renderImage(dogPic);
		}
	};

	const getBreeds = () => {
		fetch(breedUrl).then((response) => response.json()).then((results) => {
			breeds = Object.keys(results.message);
			renderBreeds(breeds);
		});
	};

	const renderBreeds = (breeds) => {
		for (const breed of breeds) {
			renderBreed(breed);
		}
	};

	const renderBreed = (breed) => {
		const breedLi = document.createElement('li');
		breedLi.innerText = breed;

		dogBreedsContainer.append(breedLi);
	};

	const clickHandler = () => {
		document.addEventListener('click', (e) => {
			if (e.target.matches('li')) {
				const li = e.target;
				li.style.color = 'red';
			}
		});
	};

	clickHandler();
	getImages();
	getBreeds();
});
