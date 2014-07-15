$(document).ready(function() {

  $('#Generate').click(function(event)
			{
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
							//alert(data.response);
							$('#input').val('')
								.hide();
							$('#Generate').hide();
							$('.secretlink').show();
							$('#secreta').html(url + "/tempalink/" +data.response)
								.attr('href', url + "/tempalink/" +data.response);
						}
					
				},'json');
			});
  $('#Save').click(function(event)
			{
				var url = "http://localhost:3000/save";
				$.post(url,function(data){});
				
			});

});
