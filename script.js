let money = +prompt('Ваш бюджет на месяц?',''),
    time = prompt('Введите дату в формате YYYY-MM-DD',''),
    appData = {
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

   
appData.moneyPerDay=appData.budget/30;
alert(appData.moneyPerDay);

if(appData.moneyPerDay<100){
    console.log('низкий уровень');
} else if (appData.moneyPerDay>100 && appData.moneyPerDay<2000){
    console.log('средний уровень');
}else if (appData.moneyPerDay>2000){
    console.log('высокий уровень');
}else {
    console.log('ошибка');
}