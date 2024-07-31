const tileContainer = document.querySelector(".container");
let tileCount = 50;

const createTiles = () => {
	const tileHeight = window.innerHeight / tileCount;
	const tileWidth = window.innerWidth / tileCount;
	for (let i = 1; i <= tileCount * tileCount; i++) {
		const tile = document.createElement("div");
		tile.classList.add("tile");
		tile.style.width = `${tileWidth}px`;
		tile.style.height = `${tileHeight}px`;
		tile.addEventListener("mouseenter", alterTile);
		tileContainer.appendChild(tile);
	}
};

const resizeTiles = () => {
	const tileHeight = window.innerHeight / tileCount;
	const tileWidth = window.innerWidth / tileCount;
	const tiles = document.querySelectorAll(".tile");
	tiles.forEach((tile) => {
		tile.style.width = `${tileWidth}px`;
		tile.style.height = `${tileHeight}px`;
	});
};

const alterTile = (e) => {
	const tileStyle = e.target.style;
	tileStyle.opacity -= "-0.1";
};

createTiles();

window.onresize = resizeTiles;
