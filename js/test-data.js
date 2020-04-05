var generateTestData = (function(){
    var ExampleItem = function(type, desc, sum){
        this.type = type;
        this.desc = desc;
        this.sum = sum;
    }
    
    var testData = [
        new ExampleItem("inc", "Зарплата", 1700),
        new ExampleItem("inc", "Фриланс", 500),
        new ExampleItem("inc", "Партнерская программа", 200),
        new ExampleItem("inc", "Продажи digital", 300),
        new ExampleItem("exp", "Аренда", 500),
        new ExampleItem("exp", "Бензин", 140),
        new ExampleItem("exp", "Продукты", 600),
        new ExampleItem("exp", "Развлечения", 200)
    ];
    
    function getRandomInt(max) {
        return Math.floor(Math.random()*max);
    }
    
    function insertInUI() {
        var random = getRandomInt(testData.length);
        var randomItem = testData[random];
        
        document.querySelector("#input__type").value = randomItem.type;
        document.querySelector("#input__description").value = randomItem.desc;
        document.querySelector("#input__value").value = randomItem.sum;
    }

    return{
        init: insertInUI
    }

})();

generateTestData.init();


