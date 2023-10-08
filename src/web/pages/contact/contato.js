class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.inputs = this.form.querySelectorAll('.input');
        this.message = document.getElementById('message');
        this.form.addEventListener('submit', this.onSubmit.bind(this));
    }

    onSubmit(event) {
        event.preventDefault();

        let valid = true;

        this.inputs.forEach(input => {
            switch (input.name) {
                case 'name':
                case 'email':
                    if (input.value.trim() === '') {
                        input.style.border = '2px solid red';
                        valid = false;
                    } else {
                        input.style.border = '1px solid black';
                    }
                    break;
                default:
                    break;
            }
        });

        if (this.message.value.trim() === '') {
            this.message.style.border = '2px solid red';
            valid = false;
        } else {
            this.message.style.border = '1px solid black';
        }

        if (valid) {
            // Aqui você pode adicionar lógica para enviar o formulário
            alert('Formulário enviado com sucesso!');
            this.form.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    }
}

// Inicializa o formulário de contato
const contactForm = new ContactForm();
