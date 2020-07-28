# Verificador_Idade
O usuário informa o ano de nascimento e o sexo, o programa retorna o gênero e a idade e apresenta uma imagem.
<!DOCTYPE html>
<html lang= "pt-BR">
<head>
    <meta charset= "UTF-8">
    <meta name= "viewport" content= "width=device-width, initial-scale=1.0">
    <meta http-equiv= "X-UA-Compatible" content="ie=edge">
    <title>Qual é a sua idade?</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Verificador de Idade</h1>
    </header>

        <section>
            <div><!--Entrada de Dados-->
                <p>Ano de Nascimento: 
                   <input type="number" name="txtano" id="txtano" min="1920" max="2020"><!--O usuário só poderar escolher os anos de 1920 até 2020-->
                </p>

                <p>Sexo:
                    <input type="radio" name="radsex" id="masc" checked><!--Se o usuário não escolher nenhuma opção de sexo, temos um problema. Portanto colocar checked na opção masculino garante que se o usuário não escolher nada automaticamente a opção masculina será selecionada-->
                    <label for="masc">Masculino</label>
                    <input  type="radio" name="radsex" id="fem"><!--Os 2 tem que ter o mesmo nome, se não o programa vai deixar eu selecionar os 2 botões-->
                    <label for="fem">Feminino</label>
                </p>

                <p>
                    <input type="button" class="btn" value="verificar" onclick="verificar()">
                   <!-- <input type="reset" id="btn_reset" value="reset">-->
                  
                </p>


            </div>
            <div id="resultado"><!--Saída de Dados-->
                Preencha os dados acima para ver os resultados!
            </div>
            <!--<div id= "foto">
                <img src="img/Bambino.png"> (ficaria assim se eu quissese inserir no html
            </div>-->

        </section>
        <footer>
            <p>&copy; Mel</p>

        </footer>
        <script src="script.js"></script>
            
        

   
</body>
</html>
