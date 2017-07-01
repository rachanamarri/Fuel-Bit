
function getData(){
	console.log("get data is called");
	
	//the ajax call



	$.ajax({url: "http://localhost:3000/api?data=test", success: function(result){

		
		
		
		var source   = $("#movie-list-templates").html();

		var template = Handlebars.compile(source);

		
		$('#loading').remove();
		
		for(var i=0; i < result.data.length; i++){
			console.log("LOOP NUMBER " +i);
			console.log(result.data[i]);
			var myText   = template(result.data[i]);

			$("#result").append(myText);	
		};
    }});

	console.log("get Data is over");


};


$('#myButton').on('click', getData);