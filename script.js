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
    let hasFlippedCard = false;                                     // vari??vel que indica se a carta est?? virada ou n??o (false) e se o tabuleiro est?? travado ou n??o (false)
    let firstCard, secondCard;                                      // vari??veis que guardam as cartas viradas e o tabuleiro travado (lockBoard)
    let lockBoard = false;                                          // vari??vel que controla se o tabuleiro est?? travado ou n??o (lockBoard) e se as cartas est??o viradas (hasFlippedCard)

    function flipCard() {                                           // fun????o que vira a carta e checa se ela ?? igual a outra carta virada anteriormente 
        if (lockBoard) return;                                      // se o tabuleiro estiver travado, n??o vai virar a carta
        if (this === firstCard) return;                             // se a carta clicada for a primeira, n??o vai virar a carta

        this.classList.add('flip');                                 // adiciona a classe flip ao elemento clicado (carta)
        if (!hasFlippedCard) {                                      // se n??o tiver virado nenhuma carta ainda (hasFlippedCard = false)
            hasFlippedCard = true;                                  // vira a carta clicada e marca que ela est?? virada
            firstCard = this;                                       // guarda a carta virada na primeira carta virada
            return;                                                 // retorna para a fun????o flipCard para n??o virar a segunda carta ainda (return)
        }                                                           // se tiver virado uma carta, vai virar a segunda carta (return) e checa se elas s??o iguais (return) e reseta o tabuleiro (return)
        secondCard = this;                                          // se tiver virado uma carta, guarda a carta virada na segunda carta virada (secondCard) e vai para a fun????o checkForMatch (return) para checar se as cartas s??o iguais (return)
        hasFlippedCard = false;                                     // marca que a carta n??o est?? mais virada (hasFlippedCard = false) e vai para a fun????o flipCard para virar a pr??xima carta (return)
        checkForMatch();                                            // chama a fun????o checkForMatch para checar se as cartas s??o iguais (return)
        checkForWin();                                              // chama a fun????o checkForWin para checar se todas as cartas foram viradas e se as cartas s??o iguais (return)
    }

    function checkForWin() {                                        // fun????o que verifica se todas as cartas forem viradas e forem iguais, desabilita as cartas, reseta o tabuleiro e retorna para a fun????o flipCard para virar a pr??xima carta
        let cards = document.querySelectorAll('.card');             // seleciona todas as cartas (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
        let cardsFlipped = document.querySelectorAll('.flip');      // seleciona todas as cartas viradas (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
        if (cards.length === cardsFlipped.length) {                 // se o n??mero de cartas for igual ao n??mero de cartas viradas (return) e reseta o tabuleiro (return)
            cards.forEach(card => card.removeEventListener('click', flipCard)); // remove o evento de click das cartas (return) e reseta o tabuleiro (return)
            setTimeout(() => alert('Voc?? venceu! Parab??ns!'), 1000); // espera 1 segundo (return) mostra a mensagem de vit??ria (return) e reseta o tabuleiro (return)
        }
    }

    function checkForMatch() {                                      // fun????o que checa se as cartas s??o iguais (return) e desabilita as cartas (return) ou desvira as cartas (return) e reseta o tabuleiro (return)
        if (firstCard.dataset.card === secondCard.dataset.card) {   // se as cartas forem iguais (return) e desabilita as cartas (return) ou desvira as cartas (return) e reseta o tabuleiro (return)
            disableCards();                                         // desabilita as cartas (return) e reseta o tabuleiro (return)
            return;                                                 // retorna para a fun????o flipCard para virar a pr??xima carta (return)
        }                                                           // se as cartas n??o forem iguais (return) e desvira as cartas (return) e reseta o tabuleiro (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return)
        unflipCards();                                              // desvira as cartas (return) e reseta o tabuleiro (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return)
    }

    function disableCards() {                                       // desabilita as cartas (return) e reseta o tabuleiro (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return)
        firstCard.removeEventListener('click', flipCard);           // remove o evento de click da primeira carta (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return)
        secondCard.removeEventListener('click', flipCard);          // remove o evento de click da segunda carta (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
        resetBoard();                                               // reseta o tabuleiro (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
    }                                                               // retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)

    function unflipCards() {                                        // desvira as cartas (return) e reseta o tabuleiro (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
        lockBoard = true;                                           // marca que o tabuleiro est?? travado (lockBoard = true) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)

        setTimeout(() => {                                          // setTimeout para desvirar as cartas (return) e reseta o tabuleiro (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
            firstCard.classList.remove('flip');                     // remove a classe flip da primeira carta (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
            secondCard.classList.remove('flip');                    // remove a classe flip da segunda carta (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)

            resetBoard();                                           // reseta o tabuleiro (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
        }, 1500);                                                   // retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
    }

    function resetBoard() {                                         // fun????o que reseta o tabuleiro (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
        [hasFlippedCard, lockBoard] = [false, false];               // reseta as vari??veis (hasFlippedCard = false, lockBoard = false) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
        [firstCard, secondCard] = [null, null];                     // reseta as vari??veis (firstCard = null, secondCard = null) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
    }

    (function shuffle() {                                           // fun????o que embaralha as cartas (return) e retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
        cards.forEach((card) => {                                   // para cada carta (return)
            let ramdomPosition = Math.floor(Math.random() * 12);    // gera um n??mero aleat??rio entre 0 e 12 (return)
            card.style.order = ramdomPosition;                      // atribui a posi????o aleat??ria (return) ao elemento (return)
        })                                                          // retorna para a fun????o flipCard para virar a pr??xima carta (return) e reseta o tabuleiro (return)
    })();

    cards.forEach((card) => {                                       // para cada carta (return)
        card.addEventListener('click', flipCard)                    // adiciona o evento de click (return) ao elemento (return) e aciona a fun????o flipCard (return)
    });
}