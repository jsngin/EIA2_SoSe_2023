/* Aufgabe: <A_2.3_Memory>
    Name: <Jasenko Dzin>
    Matrikel: <269400>
    Datum: <09.04.2022>
    Quellen: </>
*/
// currently the cards dissappear when they match
// if instead the cards should just be disabled the code has to be refactored in the marked sections (*)
var Memory;
(function (Memory) {
    // global state
    let activeCards = {
        firstCard: undefined,
        secondCard: undefined,
    };
    let timer = {
        start: undefined,
        end: undefined,
        duration: undefined,
    };
    // global variables
    let startButton;
    let endButton;
    let cardsInput;
    let memoryElem;
    let homeElem;
    let memoryContainer;
    window.addEventListener('load', init);
    function init() {
        startButton = document.querySelector('#startMemory');
        endButton = document.querySelector('#endMemory');
        memoryElem = document.querySelector('.memory');
        homeElem = document.querySelector('.home');
        memoryContainer = document.querySelector('.memory-container');
        startButton.addEventListener('click', startMemory);
        endButton.addEventListener('click', endMemory);
    }
    function startMemory() {
        // show memory and init game logic
        cardsInput = document.querySelector('#inputCards');
        toggleGame();
        initMemory();
        timer.start = performance.now();
        document.addEventListener('showCard', handleCardActive);
    }
    function endMemory() {
        // hide an reset game
        toggleGame();
        memoryContainer.replaceChildren();
        resetActiveCards();
    }
    function toggleGame() {
        memoryElem.classList.toggle('hide');
        homeElem.classList.toggle('hide');
    }
    function initMemory() {
        const numberOfCards = isNaN(parseInt(cardsInput.value))
            ? 5
            : parseInt(cardsInput.value);
        createCards(numberOfCards);
    }
    function createCards(_cards) {
        // create card values based on user input
        const cardValues = new Array(_cards)
            .fill(null)
            .map((_item, _index) => (_item = _index));
        // duplicate card values in order to have every number twice
        const duplicateCardValues = cardValues.concat(cardValues);
        for (let i = 0, n = duplicateCardValues.length; i < n; i++) {
            const createCard = document.createElement('div');
            const createCardText = document.createElement('p');
            createCard.classList.add('memory-card', 'hide');
            const randomCardNumber = randomNumber(duplicateCardValues);
            const randomCardNumberIndex = duplicateCardValues.findIndex((elem) => elem === randomCardNumber);
            // delete the first entrie (from the array with all card values) that matches the "random value"
            duplicateCardValues.splice(randomCardNumberIndex, 1);
            createCardText.innerHTML = randomCardNumber.toString();
            createCard.appendChild(createCardText);
            createCard.addEventListener('click', handleCardClick);
            memoryContainer.prepend(createCard);
        }
    }
    function randomNumber(_values) {
        return _values[Math.floor(Math.random() * _values.length)];
    }
    function handleCardClick(_event) {
        const value = parseInt(this.firstElementChild.innerHTML);
        this.classList.remove('hide');
        const event = new CustomEvent('showCard', {
            detail: { value: value, elem: this },
            bubbles: true,
        });
        this.dispatchEvent(event);
    }
    function handleCardActive(_event) {
        // check if first card does not exist, if true set first card to event value
        // else set event value to second card
        if (!activeCards.firstCard) {
            activeCards.firstCard = _event.detail;
        }
        else {
            // check if user clicked on the same card twice
            if (activeCards.firstCard.elem !== _event.detail.elem) {
                activeCards.secondCard = _event.detail;
                removeClicks();
                window.setTimeout(function () {
                    checkIfCardsMatch();
                    addClicks();
                }, 2000);
            }
        }
    }
    function checkIfCardsMatch() {
        // check if cards match, if they match remove them, else reset them
        if (activeCards.firstCard.value === activeCards.secondCard.value) {
            alert('match');
            // (*) possible todo
            activeCards.firstCard.elem.remove();
            activeCards.secondCard.elem.remove();
            resetActiveCards();
            // check if there are still cards left, if no cards are left show endscreen
            // (*) possible todo
            if (memoryContainer.childElementCount === 0) {
                timer.end = performance.now();
                timer.duration = timer.end - timer.start;
                showEndscreen();
            }
        }
        else {
            alert('no match');
            hideActiveCards();
            resetActiveCards();
        }
    }
    function resetActiveCards() {
        activeCards = { firstCard: undefined, secondCard: undefined };
    }
    function hideActiveCards() {
        activeCards.firstCard.elem.classList.add('hide');
        activeCards.secondCard.elem.classList.add('hide');
    }
    function removeClicks() {
        // make cards unclickable
        memoryContainer.classList.add('no-pointer');
    }
    function addClicks() {
        // make cards clickable again
        memoryContainer.classList.remove('no-pointer');
    }
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
        return seconds == 60
            ? minutes + 1 + ':00'
            : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
    function showEndscreen() {
        const timerElem = document.createElement('p');
        timerElem.innerHTML = `Glückwunsch, Sie haben das Spiel in ${millisToMinutesAndSeconds(timer.duration)} Minuten geschafft`;
        memoryContainer.appendChild(timerElem);
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=memory.js.map