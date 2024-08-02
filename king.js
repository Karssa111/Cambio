class king extends special{
    constructor(num, suit, active) {
        if(num != "king") {
            throw new error("k must be a king")
        }
        super(num, suit);
        this.active = active;
    }
}