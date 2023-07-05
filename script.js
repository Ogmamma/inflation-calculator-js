function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate').value;
    let money = document.querySelector('#money').value;
    let years = document.querySelector('#years').value;

/*alternate with parsing to float
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    */

    //transform string to number with +

    let worth = +money + (+money * (+inflationRate / 100));

    for (let i = 1 ; i < +years; i ++) {
        worth += +worth * (+inflationRate / 100);
    }

    worth = +worth.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Today's ${money} € will be worth ${worth} € in ${years} years.` ;
    document.querySelector('.container').appendChild(newElement);
}