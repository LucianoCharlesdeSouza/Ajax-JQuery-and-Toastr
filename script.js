$(function(){

	$('.ajaxForm').submit(function (e) {

		e.preventDefault()
		
				let form       = $(this)
        let controller = form.attr('action')       
        let dados      = new FormData($(this)[0])
		
        $.ajax({
            url: BASE_URL + controller,
            data: dados,
            type: 'POST',
            dataType: 'json',
            processData: false,
            contentType: false,
            beforeSend: function (data) {

            },
            success: function (data) {

            	if(data.return){
								showToast(data.return.type, data.return.msg)
							}
						}	

        })

		})
		
	function showToast(type = 'success', msg = 'Tudo ok!')
	{
		toastr.options = {
			"closeButton": false,
			"debug": false,
			"newestOnTop": false,
			"progressBar": true,
			"positionClass": "toast-top-right",
			"preventDuplicates": false,
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		}

		toastr[type](msg)
	}	
		
		
})