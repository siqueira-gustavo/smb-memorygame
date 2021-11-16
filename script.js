function start() {
    $("#inicio").hide();

    $(".main-game").append("<div class='memory-game'></div>");
    $(".memory-game").append("<div class='card' data-card='bowser'><img class='card-front' src='./img/bowser.jpg' alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");
    $(".memory-game").append("<div class='card' data-card='luigi'><img class='card-front' src='./img/luigi.png' alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");
    $(".memory-game").append("<div class='card' data-card='mario'><img class='card-front' src='./img/mario.png' alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");
    $(".memory-game").append("<div class='card' data-card='peach'><img class='card-front' src='./img/peach.png' alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");
    $(".memory-game").append("<div class='card' data-card='toad'><img class='card-front' src='./img/toad.png' alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");
    $(".memory-game").append("<div class='card' data-card='yoshi'><img class='card-front' src='./img/yoshi.png' alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");
    $(".memory-game").append("<div class='card' data-card='bowser'><img class='card-front' src='./img/bowser.jpg'alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");
    $(".memory-game").append("<div class='card' data-card='luigi'><img class='card-front' src='./img/luigi.png' alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");
    $(".memory-game").append("<div class='card' data-card='mario'><img class='card-front' src='./img/mario.png' alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");
    $(".memory-game").append("<div class='card' data-card='peach'><img class='card-front' src='./img/peach.png' alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");
    $(".memory-game").append("<div class='card' data-card='toad'><img class='card-front' src='./img/toad.png' alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");
    $(".memory-game").append("<div class='card' data-card='yoshi'><img class='card-front' src='./img/yoshi.png' alt='Face da carta'><img class='card-back' src='./img/box.png' alt='Verso da carta'></div>");

    const cards = document.querySelectorAll('.card');               // seleciona todas as cartas e adiciona o evento de click para virar a carta
    let hasFlippedCard = false;                                     // variável que indica se a carta está virada ou não (false) e se o tabuleiro está travado ou não (false)
    let firstCard, secondCard;                                      // variáveis que guardam as cartas viradas e o tabuleiro travado (lockBoard)
    let lockBoard = false;                                          // variável que controla se o tabuleiro está travado ou não (lockBoard) e se as cartas estão viradas (hasFlippedCard)

    function flipCard() {                                           // função que vira a carta e checa se ela é igual a outra carta virada anteriormente 
        if (lockBoard) return;                                      // se o tabuleiro estiver travado, não vai virar a carta
        if (this === firstCard) return;                             // se a carta clicada for a primeira, não vai virar a carta

        this.classList.add('flip');                                 // adiciona a classe flip ao elemento clicado (carta)
        if (!hasFlippedCard) {                                      // se não tiver virado nenhuma carta ainda (hasFlippedCard = false)
            hasFlippedCard = true;                                  // vira a carta clicada e marca que ela está virada
            firstCard = this;                                       // guarda a carta virada na primeira carta virada
            return;                                                 // retorna para a função flipCard para não virar a segunda carta ainda (return)
        }                                                           // se tiver virado uma carta, vai virar a segunda carta (return) e checa se elas são iguais (return) e reseta o tabuleiro (return)
        secondCard = this;                                          // se tiver virado uma carta, guarda a carta virada na segunda carta virada (secondCard) e vai para a função checkForMatch (return) para checar se as cartas são iguais (return)
        hasFlippedCard = false;                                     // marca que a carta não está mais virada (hasFlippedCard = false) e vai para a função flipCard para virar a próxima carta (return)
        checkForMatch();                                            // chama a função checkForMatch para checar se as cartas são iguais (return)
        checkForWin();                                              // chama a função checkForWin para checar se todas as cartas foram viradas e se as cartas são iguais (return)
    }

    function checkForWin() {                                        // função que verifica se todas as cartas forem viradas e forem iguais, desabilita as cartas, reseta o tabuleiro e retorna para a função flipCard para virar a próxima carta
        let cards = document.querySelectorAll('.card');             // seleciona todas as cartas (return) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
        let cardsFlipped = document.querySelectorAll('.flip');      // seleciona todas as cartas viradas (return) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
        if (cards.length === cardsFlipped.length) {                 // se o número de cartas for igual ao número de cartas viradas (return) e reseta o tabuleiro (return)
            cards.forEach(card => card.removeEventListener('click', flipCard)); // remove o evento de click das cartas (return) e reseta o tabuleiro (return)
            setTimeout(() => alert('Você venceu! Parabéns!'), 1000); // espera 1 segundo (return) mostra a mensagem de vitória (return) e reseta o tabuleiro (return)
        }
    }

    function checkForMatch() {                                      // função que checa se as cartas são iguais (return) e desabilita as cartas (return) ou desvira as cartas (return) e reseta o tabuleiro (return)
        if (firstCard.dataset.card === secondCard.dataset.card) {   // se as cartas forem iguais (return) e desabilita as cartas (return) ou desvira as cartas (return) e reseta o tabuleiro (return)
            disableCards();                                         // desabilita as cartas (return) e reseta o tabuleiro (return)
            return;                                                 // retorna para a função flipCard para virar a próxima carta (return)
        }                                                           // se as cartas não forem iguais (return) e desvira as cartas (return) e reseta o tabuleiro (return) e retorna para a função flipCard para virar a próxima carta (return)
        unflipCards();                                              // desvira as cartas (return) e reseta o tabuleiro (return) e retorna para a função flipCard para virar a próxima carta (return)
    }

    function disableCards() {                                       // desabilita as cartas (return) e reseta o tabuleiro (return) e retorna para a função flipCard para virar a próxima carta (return)
        firstCard.removeEventListener('click', flipCard);           // remove o evento de click da primeira carta (return) e retorna para a função flipCard para virar a próxima carta (return)
        secondCard.removeEventListener('click', flipCard);          // remove o evento de click da segunda carta (return) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
        resetBoard();                                               // reseta o tabuleiro (return) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
    }                                                               // retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)

    function unflipCards() {                                        // desvira as cartas (return) e reseta o tabuleiro (return) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
        lockBoard = true;                                           // marca que o tabuleiro está travado (lockBoard = true) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)

        setTimeout(() => {                                          // setTimeout para desvirar as cartas (return) e reseta o tabuleiro (return) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
            firstCard.classList.remove('flip');                     // remove a classe flip da primeira carta (return) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
            secondCard.classList.remove('flip');                    // remove a classe flip da segunda carta (return) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)

            resetBoard();                                           // reseta o tabuleiro (return) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
        }, 1500);                                                   // retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
    }

    function resetBoard() {                                         // função que reseta o tabuleiro (return) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
        [hasFlippedCard, lockBoard] = [false, false];               // reseta as variáveis (hasFlippedCard = false, lockBoard = false) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
        [firstCard, secondCard] = [null, null];                     // reseta as variáveis (firstCard = null, secondCard = null) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
    }

    (function shuffle() {                                           // função que embaralha as cartas (return) e retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
        cards.forEach((card) => {                                   // para cada carta (return)
            let ramdomPosition = Math.floor(Math.random() * 12);    // gera um número aleatório entre 0 e 12 (return)
            card.style.order = ramdomPosition;                      // atribui a posição aleatória (return) ao elemento (return)
        })                                                          // retorna para a função flipCard para virar a próxima carta (return) e reseta o tabuleiro (return)
    })();

    cards.forEach((card) => {                                       // para cada carta (return)
        card.addEventListener('click', flipCard)                    // adiciona o evento de click (return) ao elemento (return) e aciona a função flipCard (return)
    });
}