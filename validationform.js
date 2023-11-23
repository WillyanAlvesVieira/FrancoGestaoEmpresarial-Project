class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();

  

  document.addEventListener("DOMContentLoaded", function () {
    const telefoneInput = document.getElementById("telefone");
  
    telefoneInput.addEventListener("input", function (event) {
    
      let numeroTelefone = event.target.value;
      numeroTelefone = numeroTelefone.replace(/[^0-9+]/g, "");
  
      if (numeroTelefone.length >= 2) {
        numeroTelefone = `(${numeroTelefone.substring(0, 2)}) ${numeroTelefone.substring(2)}`;
      }
      if (numeroTelefone.length > 10) {
        numeroTelefone = `${numeroTelefone.substring(0, 10)}-${numeroTelefone.substring(10)}`;
      }
      event.target.value = numeroTelefone;
    });
  });
  