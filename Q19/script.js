class BankAccount{
  #balance
constructor(balance){
  this.#balance=balance
}
  deposit(m){
this.#balance+=m
return this.#balance
  }

  withdraw(m) {
this.#balance-=m
return this.#balance
  }
}
const obj=new BankAccount(3000)
console.log(obj.deposit(10))
console.log(obj.withdraw(1000))