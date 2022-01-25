$(function () {
	$("#link_works").click(function () {
		$([document.documentElement, document.body]).animate(
			{
				scrollTop: $("#works").offset().top - 1000,
			},
			100
		);
	});

	$("#link_advantages").click(function () {
		$([document.documentElement, document.body]).animate(
			{
				scrollTop: $("#advantages").offset().top - 100,
			},
			100
		);
	});

	$("#link_about").click(function () {
		$([document.documentElement, document.body]).animate(
			{
				scrollTop: $("#about").offset().top - 100,
			},
			100
		);
	});

	$("#link_contacts").click(function () {
		$([document.documentElement, document.body]).animate(
			{
				scrollTop: $("#contacts").offset().top - 100,
			},
			100
		);
	});

	$("#link_form").click(function () {
		$([document.documentElement, document.body]).animate(
			{
				scrollTop: $("#contact_form").offset().top - 100,
			},
			100
		);
	});
	$(window).scroll(() => {
		var loc = $(window).scrollTop();
        var works = $("#works").offset().top
        var advantages = $("#advantages").offset().top
        var about = $("#about").offset().top 
        var contacts = $("#contacts").offset().top
        if (loc < works) {
            $("#link_works").addClass("active")
            $("#link_advantages").removeClass("active")
            $("#link_about").removeClass("active")
            $("#link_contacts").removeClass("active")
        }
        if (loc < advantages && loc > works) {
            $("#link_works").removeClass("active")
            $("#link_advantages").addClass("active")
            $("#link_about").removeClass("active")
            $("#link_contacts").removeClass("active")
        }
        if (loc < about && loc > advantages) {
            $("#link_works").removeClass("active")
            $("#link_advantages").removeClass("active")
            $("#link_about").addClass("active")
            $("#link_contacts").removeClass("active")
        }
        if (loc < contacts && loc > about) {
            $("#link_works").removeClass("active")
            $("#link_advantages").removeClass("active")
            $("#link_about").removeClass("active")
            $("#link_contacts").addClass("active")
        }
    });

});
