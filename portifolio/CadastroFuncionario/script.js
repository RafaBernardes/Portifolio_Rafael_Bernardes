const funcionarios = [];

        function cadastrar() {
            const nome = document.getElementById("nome").value;
            const sexoElement = document.querySelector('input[name="sexo"]:checked');
            const sexo = sexoElement ? sexoElement.value : "";
            const dataNascimento = document.getElementById("dataNascimento").value;
            const telefone = document.getElementById("telefone").value;
            const estadoCivil = document.getElementById("estadoCivil").value;
            const endereco = document.getElementById("endereco").value;
            const bairro = document.getElementById("bairro").value;
            const cidade = document.getElementById("cidade").value;
            const estado = document.getElementById("estado").value;
            const cargo = document.getElementById("cargo").value;
            const formacao = document.getElementById("formacao").value;
            const email = document.getElementById("email").value;

            if (nome === "" || sexo === "" || dataNascimento === "" || telefone === "" || estadoCivil === "" || endereco === "" || bairro === "" || cidade === "" || estado === "select" || cargo === "" || formacao === "" || email === "") {
                alert("Preencha todos os dados do funcionário.");
                return false;
            }

            alert("Funcionário cadastrado com sucesso!");

            const funcionario = {
                nome: nome,
                dataNascimento: dataNascimento,
                telefone: telefone,
                estadoCivil: estadoCivil,
                sexo: sexo,
                endereco: endereco,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                cargo: cargo,
                formacao: formacao,
                email: email
            };

            funcionarios.push(funcionario);
            limparCampos();
            exibirFormularios();
        }


        function limparCampos() {
            // Função para limpar os campos do formulário após o cadastro
            document.getElementById('nome').value = '';
            document.getElementById('dataNascimento').value = '';
            document.getElementById('telefone').value = '';
            document.getElementById('estadoCivil').value = '';
            document.querySelector('input[name="sexo"]:checked').checked = false; // Correção do seletor
            document.getElementById('endereco').value = '';
            document.getElementById('bairro').value = '';
            document.getElementById('cidade').value = '';
            document.getElementById('estado').value = 'select'; // Correção do valor padrão
            document.getElementById('cargo').value = '';
            document.getElementById('formacao').value = '';
            document.getElementById('email').value = '';
        }

        function exibirFormularios() {
            // Função para exibir a lista de funcionários cadastrados
            const listaFormularios = document.getElementById('lista-funcionarios');
            listaFormularios.innerHTML = '';

            funcionarios.forEach(function(funcionario) {
                const itemLista = document.createElement('li');
                itemLista.textContent = `Nome: ${funcionario.nome}, Data de Nascimento: ${funcionario.dataNascimento}, Telefone: ${funcionario.telefone}, Estado Civil: ${funcionario.estadoCivil}, Sexo: ${funcionario.sexo}, Endereço: ${funcionario.endereco}, Bairro: ${funcionario.bairro}, Cidade: ${funcionario.cidade}, Estado: ${funcionario.estado}, Cargo: ${funcionario.cargo}, Formação: ${funcionario.formacao}, E-mail: ${funcionario.email}`;
                listaFormularios.appendChild(itemLista);
            });
        }

        function busca (){
            const pesquisa = document.getElementById("pesquisa").value;

            if (pesquisa === ""){
                alert("Digite o nome do funcionário.");
                return false
            }

            alert("Funcionário localizado.");

        }
