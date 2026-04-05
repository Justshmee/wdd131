const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

const games = [
	{
		developer: 'Sandfall Interactive',
		publisher: 'Kepler Interactive',
		url: 'https://en.wikipedia.org/wiki/Clair_Obscur:_Expedition_33',
		releaseDate: '2025-04-24',
		tags: ['RPG', 'Turn-based', 'Fantasy'],
		description: 'A dark fantasy Belle Époque RPG where Expedition 33 hunts the Paintress across a fractured continent.',
		image: './images/Clair_Obscur,_Expedition_33_Cover_1.webp',
		name: 'Clair Obscur: Expedition 33',
		genre: 'Role-playing',
		review: 'Deeply immersive storytelling and refined turn-based combat make this adventure a must-play.',
		rating: 5
	},
	{
		developer: 'Team Cherry',
		url: '',
		releaseDate: '2017-02-24',
		tags: ['Metroidvania', 'Indie'],
		description: 'Explore Hallownest and fight deep, stylish boss battles in this atmospheric classic.',
		image: './images/Hollow_Knight_2026_cover_art.jpg',
		name: 'Hollow Knight',
		genre: 'Metroidvania',
		review: 'Excellent combat and world design, a must-play for genre fans.',
		rating: 4
	},
	{
		developer: 'Nintendo',
		url: '',
		releaseDate: '2000-04-27',
		tags: ['Action', 'Adventure', 'RPG'],
		description: 'A dark, time-loop adventure with memorable characters and story.',
		image: './images/Majora\'s_Mask_3D_cover.png',
		name: 'Legend of Zelda: Majora\'s Mask',
		genre: 'Action Adventure',
		review: 'A unique, haunting Zelda entry with strong atmosphere and replay value.',
		rating: 4
	},
	{
		developer: 'Square Enix',
		url: '',
		releaseDate: '2005-03-28',
		tags: ['Action', 'RPG'],
		description: 'A beloved crossover action RPG blending Square and Disney worlds.',
		image: './images/Kingdom_Hearts_II_(PS2).jpg',
		name: 'Kingdom Hearts 2',
		genre: 'Action RPG',
		review: 'Strong story and fun combat make this a lasting favorite.',
		rating: 4
	},
	{
		developer: 'ConcernedApe',
		url: '',
		releaseDate: '2016-02-26',
		tags: ['Simulation', 'RPG'],
		description: 'Charming farming simulator with deep upgradeable systems and relaxation.',
		image: './images/Logo_of_Stardew_Valley.png',
		name: 'Stardew Valley',
		genre: 'Simulation RPG',
		review: 'Cozy gameplay loop and surprising depth make it excellent.',
		rating: 4
	}
];

const gameContainer = document.querySelector('.game-container');

function initializePage() {
	displayAllGames();
}

function displayAllGames() {
	gameContainer.innerHTML = '';
	games.forEach(game => renderGame(game));
}

function ratingTemplate(rating) {
	let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			html += `<span aria-hidden="true">⭐</span>`;
		} else {
			html += `<span aria-hidden="true">☆</span>`;
		}
	}
	html += `</span>`;
	return html;
}

function tagsTemplate(tags) {
	return tags.map((tag) => `<span class="tag">${tag}</span>`).join(' ');
}

function gameTemplate(game) {
	return `<div class="game-card">
		<img src="${game.image}" alt="${game.name}">
		<div class="game-content">
			<div class="tags-container">${tagsTemplate(game.tags)}</div>
			<h2>${game.name}</h2>
			<p class="genre">Genre: ${game.genre}</p>
			<p class="developer">Developer: ${game.developer}</p>
			<p class="release">Release Date: ${game.releaseDate}</p>
			${ratingTemplate(game.rating)}
			<p class="description">${game.description}</p>
			<p class="review">${game.review}</p>
		</div>
	</div>`;
}

function renderGame(game) {
	const html = gameTemplate(game);
	gameContainer.innerHTML += html;
}

function filterGames(searchTerm) {
	const normalized = searchTerm.trim().toLowerCase();
	if (!normalized) {
		displayAllGames();
		return;
	}
	const filtered = games.filter((game) => {
		const searchable = [game.name, game.genre, game.developer, game.publisher || '', game.tags.join(' ')].join(' ').toLowerCase();
		return searchable.includes(normalized);
	});
	gameContainer.innerHTML = '';
	if (filtered.length === 0) {
		gameContainer.innerHTML = '<p class="no-results">No games match your search.</p>';
		return;
	}
	filtered.forEach((game) => renderGame(game));
}

function initializePage() {
	displayAllGames();
	const searchInput = document.getElementById('search');
	const searchBtn = document.getElementById('search-btn');
	searchBtn.addEventListener('click', () => filterGames(searchInput.value));
	searchInput.addEventListener('input', () => filterGames(searchInput.value));
}

initializePage();
