class sevenEight extends special{
    constructor(num, suit, active) {
        if(num != "seven" && num != "eight") {
            throw new error("se must be a seven or an eight")
        }
        super(num, suit);
        this.active = active;
    }
}