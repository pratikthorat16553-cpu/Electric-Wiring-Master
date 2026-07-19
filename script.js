
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function searchTopic() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();

        if (text.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

window.onload = function () {
    console.log("Electric Wiring Master Loaded Successfully");
};
