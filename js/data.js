$.get("./php/advantages.php", (data) => {
	data = JSON.parse(data);
	data.forEach((el) => {
		var t = $(`<div class="card col-md-6 p-4 m-auto" style="width: 18rem;">
        <img src="${el.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${el.heading}</h5>
        </div>
      </div>`);
		$("#advantages_list").append(t);
	});
});

$.get("./php/datas.php", (data) => {
	data = JSON.parse(data);
    $("#works-h").text(data[0].heading)
    $("#works-d").text(data[0].description)

    $("#about-h").text(data[1].heading)
    $("#about-d").text(data[1].description)

    $("#company-h").text(data[2].heading)
    $("#company-d").text(data[2].description)

    $("#quality-h").text(data[3].heading)
    $("#quality-d").text(data[3].description)

    $("#contacts-h").text(data[4].heading)
    $("#contacts-d").text(data[4].description)
});