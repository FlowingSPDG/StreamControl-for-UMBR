var io = io();
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
		io.emit("update", updatedata);
		console.log('update')
	});
    
});