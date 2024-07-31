const tileContainer = document.querySelector(".container");
const resizeButton = document.querySelector(".resize");
const styleSelection = document.querySelector("#styles");

const hexSymbols = "0123456789ABCDEF";

let tileLength = 16;

const createTiles = () => {
	const tileHeight = window.innerHeight / tileLength;
	const tileWidth = window.innerWidth / tileLength;
	const tileStyle = styleSelection.value;
	for (let i = 1; i <= tileLength * tileLength; i++) {
		const tile = document.createElement("div");
		tile.classList.add("tile");
		tile.style.width = `${tileWidth}px`;
		tile.style.height = `${tileHeight}px`;
		tile.style.backgroundColor =
			tileStyle === "classic" ? "black" : generateRandomColor();
		tile.addEventListener("mouseenter", alterTile);
		tileContainer.appendChild(tile);
	}
};

const resizeTiles = () => {
	const tileHeight = window.innerHeight / tileLength;
	const tileWidth = window.innerWidth / tileLength;
	const tiles = document.querySelectorAll(".tile");
	tiles.forEach((tile) => {
		tile.style.width = `${tileWidth}px`;
		tile.style.height = `${tileHeight}px`;
	});
};

const alterTile = (e) => {
	const tileStyle = e.target.style;
	tileStyle.opacity -= "-0.2";
};

const generateRandomColor = () => {
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += hexSymbols[Math.floor(Math.random() * 16)];
	}
	return color;
};

const removeGrid = () => {
	while (tileContainer.firstChild) {
		tileContainer.removeChild(tileContainer.lastChild);
	}
};

const resizeGrid = () => {
	let newGridSize = parseInt(prompt("Enter a number between 1 and 100"));
	if (newGridSize === NaN || newGridSize < 1 || newGridSize > 100) resizeGrid();
	tileLength = newGridSize;
	removeGrid();
	createTiles();
};

resizeButton.addEventListener("click", resizeGrid);

window.onload = createTiles;
window.onresize = resizeTiles;
