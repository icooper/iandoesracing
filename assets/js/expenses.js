$((function() {
    $("#page-expenses #total > code")
        .text(
            $.makeArray(
                $('#page-expenses table > tbody > tr > td:first-of-type')
            ).reduce(function(a, c) {
                return a + parseFloat($(c).text());
            }, 0.0)
        ).parent().show();
}));