// AOS Function
$(function () {
    AOS.init();
});

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
    var num = '';
    $('#next').click(function () {
        // $("#car-image-1").hide();
        $("#car-image-1").hide("slide", { direction: "up" }, 400);
        if (num === '') {
            var car = 'assets/dataset/car-:nums.json';
            num = 1;
        } else if (num > 2){
            var car = 'assets/dataset/car-:nums.json';
            num = 1;
        } else {
            var car = 'assets/dataset/car-:nums.json';
            num = num;
        }
        car = car.replace(':nums', num);
        $.ajax({
            url: car,
            type: "GET",
            dataType: "json",
            success: function (data) {
                $("#car-brand-1").html(data.brand)
                $("#car-name-1").html(data.name)
                num += 1;
                setTimeout(function(){
                    $("#car-image-1").attr("src", data.image);
                    $("#car-image-1").show("slide", { direction: "down" }, 400);
                }, 500);
                
            },
            error: function (error) {
                console.log("Error:");
                console.log(error);
            }
        });
    });

    var nums = '';
    $('#previous').click(function () {
        $("#car-image-2").hide("slide", { direction: "up" }, 400);
        if (nums === '') {
            var car = 'assets/dataset/car-:nums.json';
            nums = 2;
        } else if (nums < 1){
            var car = 'assets/dataset/car-:nums.json';
            nums = 2;
        } else {
            var car = 'assets/dataset/car-:nums.json';
            nums = nums;
        }
        car = car.replace(':nums', nums);
        $.ajax({
            url: car,
            type: "GET",
            dataType: "json",
            success: function (data) {
                $("#car-brand-2").html(data.brand)
                $("#car-name-2").html(data.name)
                nums -= 1;
                setTimeout(function(){
                    $("#car-image-2").attr("src", data.image);
                    $("#car-image-2").show("slide", { direction: "down" }, 400);
                }, 500);
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

