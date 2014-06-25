$(document).ready(function() {

  $('#Generate').click(function(event)
			{
				var secretPayload = {};
				secretPayload['secret'] = $('#input').val();
				console.log(secretPayload);
				//$.post("http://localhost:3000",JSON.stringify(secretPayload),function(data)
				$.post("http://localhost:3000",{"secret":$('#input').val()},function(data)
				{
					if(data.success)
						{
							console.log(data.response);
							//alert(data.response);
						}
					
				},'json');
			});

});
