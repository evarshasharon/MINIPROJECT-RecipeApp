document.addEventListener("DOMContentLoaded", function() {
    const addToFavoritesButton = document.getElementById('add-to-favorites');

    addToFavoritesButton.addEventListener('click', function() {
        const favoriteItem = {
            title: "Quinoa and Grilled Veggie Bowl",
            image: "assets/f1.jpg",
            cookingTime: "40 minutes",
            calories: "Approx. 400-450 calories per serving"
        };

        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(favoriteItem);
        localStorage.setItem('favorites', JSON.stringify(favorites));

        alert('Added to favorites!');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const addToFavoritesButton = document.getElementById('add-to-favorites1');

    addToFavoritesButton.addEventListener('click', function() {
        const favoriteItem = {
            title: "Strawberry Shortcake",
            image: "assets/f2.jpg",
            cookingTime: "20 minutes",
            calories: "Approx. 300 calories per serving"
        };

        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(favoriteItem);
        localStorage.setItem('favorites', JSON.stringify(favorites));

        alert('Added to favorites!');
    });
});

