const tileContainer = document.querySelector(".container");
const resizeButton = document.querySelector(".resize");

let tileLength = 16;

const createTiles = () => {
	const tileHeight = window.innerHeight / tileLength;
	const tileWidth = window.innerWidth / tileLength;
	for (let i = 1; i <= tileLength * tileLength; i++) {
		const tile = document.createElement("div");
		tile.classList.add("tile");
		tile.style.width = `${tileWidth}px`;
		tile.style.height = `${tileHeight}px`;
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

const removeGrid = () => {
	while (tileContainer.firstChild) {
		tileContainer.removeChild(tileContainer.lastChild);
	}
};

const resizeGrid = () => {
	// let newGridSize = prompt("What would you like to change grid length to?")
	// if (typeof newGridSize !== "number" || (newGridSize < 1 || newGridSize > 100)) {
	// 	resizeGrid();
	// }
	// tileLength = newGridSize
	// createTiles();
};

const alterTile = (e) => {
	const tileStyle = e.target.style;
	tileStyle.opacity -= "-0.2";
};

resizeButton.addEventListener("click", removeGrid);

window.onload = createTiles;
window.onresize = resizeTiles;
