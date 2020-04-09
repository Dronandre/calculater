var controller = (function(budgetCtrl, uiCtrl) {
    
    var setupEventListeners = function(){
        var DOM = uiCtrl.getDomstrings();
        document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);

        // Клик по таблице бюджета
        document.querySelector(DOM.budgetTable).addEventListener("click", ctrlDeleteItem);

    }
    
    // Функция отправки формы
    function ctrlAddItem (e){
        e.preventDefault();        

        // Получение данных
        var input = uiCtrl.getInput();
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // Добавление полученных данных в модель
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            budgetCtrl.test();

            // Добавление записи в UI
            uiCtrl.renderListItem(newItem, input.type);
            uiCtrl.clearFields();
            // Добавление теста
            generateTestData.init();
            // Посчитать бюджет
            updateBudget();

        }    
    }

    function ctrlDeleteItem(event){
        var itemID, splitID, type, ID;

        if (event.target.closest(".item__remove")) {
            
            itemID = event.target.closest("li.budget-list__item").id;
            
            splitID = itemID.split("-");
            type = splitID[0];
            ID = parseInt(splitID[1]);
            // Удаляем запись из модели
            budgetCtrl.deleteItem(type, ID);
            // Удаляем запись из шаблона
            uiCtrl.deleteListItem(itemID);
            // Обновить бюджет
            updateBudget();
        }
    }

    function updateBudget(){
        // Рассчитать бюджет
        budgetCtrl.calculateBudget();

        // Получить рассчитанный бюджет
        budgetObj = budgetCtrl.getBudget();
        
        // Отобразить бюджет
        uiCtrl.updateBudget(budgetObj);
    }

    return {
        init: function(){
            console.log("App started");
            setupEventListeners();
            uiCtrl.updateBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
        }
    }

})(modelController, viewController);

controller.init();