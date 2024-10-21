document.addEventListener("DOMContentLoaded", function () {
	const photo = document.getElementById("photo");
	const modal = document.getElementById("modal");
	const close = document.getElementById("close");

	photo.onclick = function () {
		modal.style.display = "block";
	};

	close.onclick = function () {
		modal.style.display = "none";
	};

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};
});
