 // alert ("Olá sejam todos bem vindos");

        // Criando variáveis e utilizando no alert
        /*var empresa="Gama Academy";
        var mensagem="Olá sejam todos bem vindos a - ";
        alert(mensagem+empresa);*/

        // Criando uma caixa de interação com o usuário
        /*var nome = prompt("Olá seja bem vindo, qual o seu nome?","Insira o seu nome");
        alert("Olá "+nome+" seja bem vindo!!!");*/

        function frase() {
            alert("Oi nós somos a Gama Academy para maiores informações envie o email para nós");
        }

        function validar(){
            var nome=contato_gama.nome_cliente.value;
            var email=contato_gama.email_cliente.value;
            // alert(nome+ " - "+email);

            if(nome==""){
                alert("O preenchimento do campo nome é obrigatório");
                contato_gama.nome_cliente.focus();
                return false;
            }

            if(email=="" || email.indexOf('@')== -1){
                alert("O preenchimento email é obrigatório, com um email válido");
                contato_gama.email_cliente.focus();
                return false;
            }

            alert("Olá "+nome+ " seja bem vindo a Gama Academy, estaremos enviando o nosso portifólio para o seu email  "+email);
            
        }