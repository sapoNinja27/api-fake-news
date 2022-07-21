Api para alimentar o bot de fake news

Link Github


https://github.com/sapoNinja27/api-fake-news


Link Heroku


https://api-fake-news.herokuapp.com/api/

ROTAS

    /api
        /palavra
            /find/quantidade
                Retorna uma array de palavras aleatorias baseada na quantidade passada por parâmetro.
            /findAll
                Retorna uma array de palavras filtradas como "nao avaliada".

            /save
                 Posta uma palavra setada como avaliada = false.

            /update
                Atualiza a palavra.

            /delete
                Exlui a palavra.

        /frase
                /find/
                    Busca uma frase aleatória.

                /findAll
                    Retorna uma array de frases filtradas como "nao avaliada".

                 /save
                    Posta uma frase setada como avaliada = false.

                /update
                     Atualiza a frase.

                /delete
                    Exlui a frase.

        /imagem
             /find/descrição 
                Retorna uma imagem passando uma descrição como parâmetro.

            /findAll    
                Busca um array de imagem filtrada como "não avaliada".

            /save
                Posta uma imagem setada como avaliada = false.

             /update
                Atualiza a imagem.

             /delete
                 Exlui a imagem.
                 
Existem algumas rota excluidas do mapeamento, elas não ficaram prontas, e continuam aqui para serem ajustadas conforme o  projeto for evoluindo
