let money, time,
    startBtn = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    inputExp = document.querySelectorAll('.expenses-item'),
    expensesItemBtn = document.querySelector('.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBtn = document.querySelector('.count-budget-btn'),
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    checkSaving = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


startBtn.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while(money == '' || money == null || isNaN(money)) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();


expensesItemBtn.addEventListener('click', function(){
    let sum=0;
    for (let i = 0; i < inputExp.length; i++) {
        let a = inputExp[i].value,
            b = inputExp[++i].value;
    
        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '') {
            console.log('done');
            appData.expenses[a] = b;
            sum+= +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length ; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function(){

    if(appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget-expensesValue.textContent) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent='низкий уровень';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent='средний уровень';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent='высокий уровень';
        } else {
            levelValue.textContent='Произошла ошибка';
        }
    }else{
        daybudgetValue.textContent='Произошла ошибка';
    }

});

incomeItem.addEventListener('input', function(){
    let item = incomeItem.value;
        while(item == null || item == '' || typeof(item)==null){
            item = incomeItem.value;
        }
        appData.income = item.split(',');
        incomeValue.textContent = appData.income;
});

checkSaving.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings =false;
    }else{
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if(appData.savings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if(appData.savings == true){
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;
    
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let key in appData){
    console.log('Наша программа включает в себя данные: ' + key);
}


// let i=0;
// while(i<2) {
//     let a=prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b= +prompt('Во сколько обойдется?', '');

//     if ( (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     }
//     i++;
// }
// do{
//     let a=prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b= prompt('Во сколько обойдется?', '');

//     if ( (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     }
//     i++;
// }while(i<2);