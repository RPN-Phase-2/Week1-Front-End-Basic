$(document).ready(function() {
    $('#fetch-button').click(function() {
        $.ajax({
            url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician",
            type: "GET",
            success: function(response) {
                var card = response.data[0];
                var cardInfoDiv = $('#card-info');
                cardInfoDiv.html(`
                    <h2>${card.name}</h2>
                    <img src="${card.card_images[0].image_url}" alt="${card.name}">
                    <p><strong>Type:</strong> ${card.type}</p>
                    <p><strong>Race:</strong> ${card.race}</p>
                    <p><strong>Attribute:</strong> ${card.attribute}</p>
                    <p><strong>Level:</strong> ${card.level}</p>
                    <p><strong>ATK:</strong> ${card.atk}</p>
                    <p><strong>DEF:</strong> ${card.def}</p>
                    <p><strong>Description:</strong> ${card.desc}</p>
                    <p><strong>Price:</strong> ${card.card_prices[0].tcgplayer_price}</p>
                `);
            },
            error: function() {
                alert("Error fetching card information.");
            }
        });
    });
});