
//Navbar
        $(window).scroll(function () {
            $("#navbar").toggleClass('scrolled', $(this).scrollTop() > 50);
            $("#text_dark").removeClass('text-dark');
        });
        //AOS
         AOS.init();



  $('document').ready(function () {
            $('#form').on('submit', function (event) {
                event.preventDefault();

                var formData = new FormData(this);
                formData.append('service_id', 'gsoftware');
                formData.append('template_id', 'contact');
                formData.append('user_id', 'user_HtJj99X5RdXnEqxLAburM');


                $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                    type: 'POST',
                    data: formData,
                    contentType: false,
                    processData: false
                }).done(function () {
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: '¡Correo enviado exitosamente!',
  text: "Pronto nos pondremos en contacto contigo",
  showConfirmButton: false,
  timer: 3500
})

 $('#form').trigger("reset");
                    
                }).fail(function (error) {
                    Swal.fire({
  position: 'top-end',
  icon: 'error',
  title: 'Algo salio mal!',
  showConfirmButton: false,
  timer: 3500,
  footer: '<p>Verifica que cuentes con conexión a internet <i class="fas fa-wifi"></i></p>'
})
                });
            });

        });
       
//Loader
       
