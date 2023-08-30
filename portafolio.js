// Inicializa Email.js con tu User ID
emailjs.init("qqxzrBl0eB4LL3m8j");

$("#submit-btn").click(function (e) {
    e.preventDefault();

    const name = $("#nombre").val();
    const  email = $("#correo").val();
    const message = $("#mensaje").val();

    const alert = $("#alert");
    if (name === "" || email === "" || message === "") {
        $("#alert").html(`
        <div class="alert alert-warning d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
   Por favor completar los campos
  </div>
</div>`);
        return
    }

    const template_params = {
        from_name: name,
        from_email: email,
        message: message
    };
   
    // Utiliza el Service ID y el Template ID
    emailjs.send("service_tr5k6z8", "template_pnk4pl9", template_params)
        .then(function (response) {
            $("#alert").html(`
            <div class="alert alert-success d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
             <div>
                Mensaje enviado con exito
             </div>
            </div>
            `)

        }, function (error) {
            $("#alert").html(`
            <div class="alert alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
             <div>
                 Error al enviar el mensaje
             </div>
            </div>
            `)
        });
});
