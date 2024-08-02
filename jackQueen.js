class jackQueen extends special{
    constructor(num, suit, active) {
        if(num != "jack" && num != "queen") {
            throw new error("jq must be a jack or a queen")
        }
        super(num, suit);
        this.active = active;
    }
}