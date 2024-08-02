class nineTen extends special{
    constructor(num, suit, active) {
        if(num != "nine" && num != "ten") {
            throw new error("nt must be a nine or a ten")
        }
        super(num, suit);
        this.active = active;
    }
}