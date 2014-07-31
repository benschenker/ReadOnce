$(document).ready(function() {

  $('#Generate').click(function(event)
			{
				//var url = "http://readonce.herokuapp.com";
				var url = "http://localhost:3000";				
				var secretPayload = {};
				secretPayload['secret'] = $('#input').val();
				console.log(secretPayload);
				//$.post("http://localhost:3000",JSON.stringify(secretPayload),function(data)
				$.post(url,{"secret":$('#input').val()},function(data)
				{
					if(data.success)
						{
							console.log(data.response);
							displayURL(url + "/tempalink/" +data.response)
						}
					
				},'json');
			});
});
function displayURL(text) 
{
	$('#input').val('')
		.hide();
	$('#Generate').hide();
	$('#msg').hide();
	$('.secretlink').show();
	$('#secreta').html(text)
		.attr('href',text);
}
