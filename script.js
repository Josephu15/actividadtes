const form = document.getElementById('contact-form');
        const responseMessage = document.getElementById('response-message');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    form.reset();
                    responseMessage.innerHTML = '<p class="success-message">¡Mensaje enviado con éxito!</p>';
                } else {
                    responseMessage.innerHTML = '<p class="error-message">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</p>';
                }
            })
            .catch(error => {
                responseMessage.innerHTML = '<p class="error-message">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</p>';
            });
        });