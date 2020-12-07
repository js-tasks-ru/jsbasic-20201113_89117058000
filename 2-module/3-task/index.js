let calculator = {
  read(a,b) {
    calculator['num1'] = a;
    calculator['num2'] = b;
  },
  sum(){
    return this.num1 + this.num2
  },
  mul(){
    return this.num1 * this.num2
  },
};
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
