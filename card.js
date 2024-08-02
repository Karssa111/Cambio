class card {
    constructor(num, suit) {
        this.num = num;
        this.suit = suit;
    }

    getNumber() {
        return this.num;
    }

    setNumber(newNum) {
        this.num = newNum;
    }

    getSuit() {
        return this.suit;
    }
    
    setSuit(newSuit) {
        this.suit = newSuit
    }
}