class Customer{
    constructor(id, credits){
        this.id = id;
        this.credits = credits;
    }

    updateCustomerCredits(balance, debit){
        return balance - debit;
    }
}