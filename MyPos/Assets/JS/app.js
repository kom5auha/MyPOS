$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1,
        merge: true,
        loop: true,
        video: true,
        // videoWidth: 210, 
        videoHeight: 250,
        margin: 10,
        responsive: {
            480: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});
