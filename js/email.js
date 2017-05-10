/* jQuery.validator.addMethod('math', function (value, element) {
        return this.optional(element) || /^\b7\b$/.test(value);
    }, "type the correct answer -_-");
*/
/*
jQuery.validator.addMethod("math", function(value, element, params) {
  return this.optional(element) || value == params[0] + params[1];
}, jQuery.validator.format("Please enter the correct value for {0} + {1}"));
*/
  $.validator.addMethod("7", function(value) {
    return value == "7";
  }, 'Insira a palavra secreta corretamente.');

// validate contact form
$(function() {
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            secret: "7",
        },
        messages: {
            name: {
                required: "Campo obrigatório",
                minlength: "Seu nome deve possuir ao menos 2 letras."
            },
            email: "O e-mail inserido não é válido.",
            message: {
                required: "Campo obrigatório.",
                minlength: "Mensagem muito curta."
            },
            math: {
                required: "Insira o resultado correto!"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});