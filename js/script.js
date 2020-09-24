$("#address").suggestions({
    token: "7beb4fc88f348d850f549491e6c31813ecfd182a",
    type: "ADDRESS",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function(suggestion) {
        console.log(suggestion);
    }
});