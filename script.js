class Produto {

    constructor (){
        this.id = 1; // Atribui o valor inicial 1 à propriedade "id" do objeto "Produto"
        this.arrayProdutos = [] // Cria um array vazio para armazenar os produtos
    }

    Adicionar(){
         let produto = this.lerDados() // Chama o método "lerDados" para obter informações do novo produto
         if(this.Validar(produto) == true){ // Chama o método "Validar" para verificar se as informações são válidas
            this.Salvar(produto) // Chama o método "Salvar" para adicionar o novo produto ao array
         }
         this.Listar() // Chama o método "Listar" para exibir os produtos na tabela
         this.Cancelar()// Chama o método "Cancelar" para cancelar e limpar produtos escritos
        }
    
    lerDados(){
        let produto = {} // Cria um objeto vazio para armazenar as informações do produto

        produto.id = this.id; // Atribui o valor da propriedade "id" do objeto "Produto" à propriedade "id" do objeto "produto"
        produto.nomeProduto = document.getElementById('pdnome').value // Obtém o valor do campo de entrada de nome do produto
        produto.precoProduto = document.getElementById('pdpreco').value // Obtém o valor do campo de entrada de preço do produto

        return produto // Retorna o objeto "produto" com as informações do novo produto
    }

    Validar(produto){
        let msg = ''; // Cria uma variável vazia para armazenar mensagens de erro

        if(produto.nomeProduto == ''){
            msg += 'Por favor insira corretamente o nome do produto \n' // Adiciona uma mensagem de erro se o nome do produto estiver em branco
        }
        if(produto.precoProduto == ''){
            msg += 'Por favor insira corretamente o preço do produto \n' // Adiciona uma mensagem de erro se o preço do produto estiver em branco
        }
        if(msg != ''){
            alert(msg) // Exibe as mensagens de erro em uma caixa de diálogo
            return false // Retorna "false" para indicar que houve erros na validação
        }

        return true // Retorna "true" para indicar que não houve erros na validação
    }

    Salvar(produto){
        this.arrayProdutos.push(produto) // Adiciona o novo produto ao array de produtos
        this.id++ // Incrementa o valor da propriedade "id" do objeto "Produto"
    }

    Listar(){
        let tbody = document.getElementById('tbody') // Obtém a tabela HTML onde os produtos serão exibidos
        tbody.innerText = '' // Limpa o conteúdo da tabela

        for( let i = 0; i < this.arrayProdutos.length;i++){ // Percorre o array de produtos

            let tr = tbody.insertRow(); // Cria uma nova linha na tabela

            let td_id = tr.insertCell(); // Cria uma nova célula na linha para exibir o ID do produto
            let td_nome = tr.insertCell(); // Cria uma nova célula na linha para exibir o nome do produto
            let td_preco = tr.insertCell(); // Cria uma nova célula na linha para exibir o preço do produto
            let td_del = tr.insertCell(); // Cria uma nova célula na linha para exibir um botão de exclusão do produto

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = this.arrayProdutos[i].precoProduto;
            let imagem = document.createElement('img')
            imagem.src = 'imagem/lixo.png'
            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].id+")")
            td_del.appendChild(imagem)



        }
    }
    Cancelar(){
        document.getElementById('pdnome').value = ''
        document.getElementById('pdpreco').value = ''
    }

    Deletar(id){
        let tbody = document.getElementById('tbody')
        for( let i=0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)  
            }
        }
        alert("O item foi apagado com sucesso")
    }
}

let produto = new Produto();