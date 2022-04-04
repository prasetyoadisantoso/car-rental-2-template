// AOS Function
AOS.init();

// Open Menu
$(function () {
    $('.menu-click').on('click', function () {
        $('.menu-down').toggleClass('show');
    });
});

// Menu slider
$(function () {

    $('#scroll-left').click(function (event) {
        event.preventDefault();
        $('.menu-list').animate({
            scrollLeft: "-=250px"
        }, "slow");
    });

    $('#scroll-right').click(function (event) {
        event.preventDefault();
        $('.menu-list').animate({
            scrollLeft: "+=250px"
        }, "slow");
    });
});

// Car List 1
$(function () {
    $('#next').click(function () {
        $.ajax({
            url: 'assets/dataset/car-1.json',
            type: "GET",
            dataType: "json",
            success: function (data) {
                $("#car-image-1").attr("src", data.image)
                $("#car-brand-1").html(data.brand)
                $("#car-name-1").html(data.name)
            },
            error: function (error) {
                console.log("Error:");
                console.log(error);
            }
        });
    });

    $('#previous').click(function () {
        $.ajax({
            url: 'assets/dataset/car-2.json',
            type: "GET",
            dataType: "json",
            success: function (data) {
                $("#car-image-2").attr("src", data.image)
                $("#car-brand-2").html(data.brand)
                $("#car-name-2").html(data.name)
            },
            error: function (error) {
                console.log("Error:");
                console.log(error);
            }
        });
    });
});


// Stacked Card
$(function () {
    var stackedCard = new stackedCards({
        selector: '.stacked-cards',
        layout: "slide",
        transformOrigin: "center",
    });
    stackedCard.init();
});

