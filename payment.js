// creat Payment class and if the payment is cach update tax and total, if the payment is card update total only. by using the Liskove Substitution Principle
class Payment {
  constructor(total) {
    this.total = total;
  }
  makePayment() {
    return this.total;
  }
}

class CashPayment extends Payment {
  constructor(total, tax) {
    super(total);
    this.tax = tax;
  }
  makePayment() {
    return this.total + this.tax;
  }
}

class CardPayment extends Payment {
  constructor(total) {
    super(total);
  }
}

const cashPayment = new CashPayment(100, 10);
console.log(cashPayment.makePayment()); // 110

const cardPyament = new CardPayment(100);
console.log(cardPyament.makePayment()); // 100



