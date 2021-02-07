var vdata;
var name;
var day;
var temp;
var weather;
var image;
var num = 0;
var url = "http://api.weatherstack.com/current?access_key=86df7fce18a67bb93bd054c46d5280ab&query="
var myDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var realdate = new Date();
var date = realdate.getDate()
var month = months[realdate.getMonth()]
var year = realdate.getFullYear()

$('#textbox').keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		getData()
		$('#textbox').val('')
	}
});

function getData(City){
	$.getJSON(url + $('input').val(), function(data){
	  	vdata = data
	  	name = data && data.location ? data.location.name: null;
	  	temp = data && data.current ? data.current.temp_c: null;
	    weather = data && data.current && data.current.condition ? data.current.condition.text : null;
	    image = data && data.current && data.current.condition ? data.current.condition.icon : null;
	    RIamge = 'http'+image
	    setTimeout(ReplaceData, 100)
	});
}

function ReplaceData(){
	num += 1;
	$('#img-text').text(weather);
	$('#city').text(name)
	$('#Degre').text(temp+'C')
	$('#Week-Day').text(myDays[realdate.getDay()])
	$('#date').text(date + ' ' + month + ' ' + year)
	$('#img').attr("src",'http:'+image)
	$("#weather").clone(true).appendTo( "#weather_sort").attr("id", num);
	$('#' + num).draggable();
	$('#' + num).show();
}

$("#x").bind('click', function(){
	$(this).parent().parent().remove()
})
