var socket = io();
$(document).ready(() => {
	$("#apply").click(() => {
		var updatedata = {
			bestOf: $("#MatchBO").val(),
			stage: $("#Stage").val(),
			pName1: $("#p1name").val(),
			pName2: $("#p2name").val(),
			pTwitter1: $("#p1twitter").val(),
			pTwitter2: $("#p2twitter").val(),
			pScore1: $("#p1score").val(),
			pScore2: $("#p2score").val(),
			pCountry1: $("#p1country").val(),
			pCountry2: $("#p2country").val()
		}
		socket.emit("update", updatedata);
		console.log(updatedata)
		console.log('update')
	});

	socket.on('init', function (obj) {
		console.log(obj)
		$("#MatchBO").val(obj.bestOf)
		$("#Stage").val(obj.stage)
		$("#p1name").val(obj.pName1)
		$("#p2name").val(obj.pName2)
		$("#p1twitter").val(obj.pTwitter1),
		$("#p2twitter").val(obj.pTwitter2),
		$("#p1score").val(obj.pScore1),
		$("#p2score").val(obj.pScore2),
		$("#p1country").val(obj.pCountry1),
		$("#p2country").val(obj.pCountry2)
		console.log("connection")
	})
});