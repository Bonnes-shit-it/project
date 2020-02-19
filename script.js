let money , time;

function start (){
    money = +prompt('Ваш бюджет на месяц?','');
    time = prompt('Введите дату в формате YYYY-MM-DD','');

    if(money=='' || money==null || isNaN(money) ){
        money = +prompt('Ваш бюджет на месяц?','');
    }
}

start();




let appData = {
        budget: money,
        timeData: time,
        expenses: {} ,
        optionalExpenses : {} ,
        income : [],
        savings : false
    };

for (let i=0 ; i<2 ; i++){
    let a=prompt('Введите обязательную статью расходов в этом месяце', ''),
        b= +prompt('Во сколько обойдется?', '');

    if ( (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' ) {
        console.log('done');
        appData.expenses[a] = b;
    }
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

   
function detectDayBudget (){
    appData.moneyPerDay=appData.budget/30;
    alert(appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
    if(appData.moneyPerDay<100){
        console.log('низкий уровень');
    } else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000){
        console.log('средний уровень');
    }else if (appData.moneyPerDay>2000){
        console.log('высокий уровень');
    }else {
        console.log('ошибка');
    }
}
detectLevel();

function chooseOptExpenses(){
    for ( let i = 1; i<4 ; i++){
        appData.optionalExpenses[i]=
        prompt('“Статья необязательных расходов?”','');
    }
}
