$(document).ready(function () {
    $("#inputCep").mask("00.000-000", { clearIfNotMatch: true });
    $("#inputCpf").mask("000.000.000-00", { clearIfNotMatch: true });
})
function AppViewModel() {
    var self = this;
    self.cpf = ko.observable().extend({
        required: {
            params: true,
            message: "O campo CEP é obrigatório"
        }
    });
    self.firstName = ko.observable().extend({
        required: {
            params: true,
            message: "O campo Nome é obrigatório!"
        },
        minLength: {
            params: 2,
            message: "O nome deve ter pelo menos 2 letras"
        },
        pattern: {
            params: "^[A-Za-zÀ-ú ']+$",
            message: "O nome deve ser composto somente de letras"
        }
    });
    self.lastName = ko.observable().extend({
        required: {
            params: true,
            message: "O campo Sobrenome é obrigatório!"
        },
        minLength: {
            params: 2,
            message: "O sobrenome deve ter pelo menos 2 letras"
        },
        pattern: {
            params: "^[A-Za-zÀ-ú ']+$",
            message: "O sobrenome deve ser composto somente de letras"
        }
    });

    self.email = ko.observable().extend({
        required: {
            params: true,
            message: "O campo email é obrigatório!"
        },
        pattern: {
            params: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            message: "O email é inválido"
        }
    })
    self.password = ko.observable().extend({
        required: {
            params: true,
            message: "O campo endereço é obrigatório!"
        },
        minLength: {
            params: 6,
            message: "A senha deve ser maior"
        },
        maxLength: {
            params: 20,
            message: "A senha deve ser menor"
        },
    });
    self.address = ko.observable().extend({
        required: {
            params: true,
            message: "O campo endereço é obrigatório!"
        },
        minLength: {
            params: 5,
            message: "O endereço é muito curto"
        },
        pattern: {
            params: "^[A-Za-zÀ-ú0-9 ']+$",
            message: "O endereço deve ser composto somente de letras e números"
        }
    });
    self.city = ko.observable().extend({
        required: {
            params: true,
            message: "O campo cidade é obrigatório!"
        },
        pattern: {
            params: "^[A-Za-zÀ-ú ']+$",
            message: "A cidade deve ser composta somente de letras"
        },
        minLength: {
            params: 5,
            message: "A cidade é muito curto"
        }
    });
    self.uf = ko.observable().extend({
        required: {
            params: true,
            message: "O campo estado é obrigatório!"
        },
        pattern: {
            params: "^[A-Z a-z]+$",
            message: "O estado deve ser composto somente de letras"
        },
        minLength: {
            params: 2,
            message: "O estado deve estar no formato de UF (XX)"
        },
        maxLength: {
            params: 2,
            message: "O estado deve estar no formato de UF (XX)"
        }
    });
    self.category = ko.observable().extend({
        required: {
            params: true,
            message: "O campo CEP é obrigatório!"
        },
    });
    self.cep = ko.observable().extend({
        required: {
            params: true,
            message: "O campo CEP é obrigatório"
        }
    });

    self.checkValues = function () {
        if (ko.validatedObservable(vm).isValid()) {
            console.log("parabéns")
        }
        else {
            console.log("Se fodeu")
        }
    }
}

const vm = new AppViewModel();
window.vm = vm;
ko.validation.init();
ko.applyBindings(vm);