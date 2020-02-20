let money, time,
    startF = document.querySelector('#start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    inputExp = document.querySelectorAll('.expenses-item'),
    optBtn = document.querySelector('.optionalexpenses-btn'),
    countBtn = document.querySelector('.count-budget-btn'),
    inputNoExp = document.querySelectorAll('.optionalexpenses-item'),
    inputIncome = document.querySelector('#income'),
    checkbox = document.querySelector('#savings'),
    inputSum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(money == '' || money == null || isNaN(money)) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = +prompt('Во сколько обойдется?', '');
        
            if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '') {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log('низкий уровень');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('средний уровень');
        } else if (appData.moneyPerDay > 2000) {
            console.log('высокий уровень');
        } else {
            console.log('ошибка');
        }
    },
    checkSaving: function(){
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений', ''),
                percent = +prompt('Под какой процент', '');
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 4; i++) {
            appData.optionalExpenses[i] = prompt('“Статья необязательных расходов?”', '');
        }
    },
    chooseIncome: function(){
        let item = prompt("Что принесет вам доп доход?(перечислите через запятую)", "");
        while(item == null || item == '' || typeof(item)==null){
            item = prompt("Что принесет вам доп доход?(перечислите через запятую)", "");
        }
        appData.income = item.split(',');
        appData.income.push(prompt('Что-то еще?',''));
        appData.income.sort();
        appData.income.forEach(function(item,i){
            console.log(i + 1 + ' - Способ доп. заработка: ' + item);
        });
    }
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