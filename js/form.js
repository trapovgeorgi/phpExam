var request;

$("#contact_form").submit(function (event) {
	event.preventDefault();

	if (request) {
		request.abort();
	}
	var $form = $(this);
	var $inputs = $form.find("input, select, button, textarea");
	var serializedData = $("#contact_form").serialize();
    console.log(serializedData);

	request = $.ajax({
		url: "./php/form.php",
		type: "post",
		data: serializedData,
	});

	request.done(function (response, textStatus, jqXHR) {
		console.log("Hooray, it worked!");
	});
    
	request.fail(function (jqXHR, textStatus, errorThrown) {
		console.error("The following error occurred: " + textStatus, errorThrown);
	});

	request.always(function () {
		$inputs.prop("disabled", false);
	});
});
