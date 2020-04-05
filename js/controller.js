var controller = (function(budgetCtrl, uiCtrl) {
    
    var setupEventListeners = function(){
        var DOM = uiCtrl.getDomstrings();
        document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);
    }
    
    // Функция отправки формы
    function ctrlAddItem (e){
        e.preventDefault();
        console.log('Fired');

        // Получение данных
        var input = uiCtrl.getInput();
        console.log(input);

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // Добавление полученных данных в модель
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            budgetCtrl.test();

            // Добавление записи в UI
            uiCtrl.renderListItem(newItem, input.type);
            uiCtrl.clearFields();
            generateTestData.init();
        } 
        
        
        


    }

    return {
        init: function(){
            console.log("App started");
            setupEventListeners();
        }
    }

})(modelController, viewController);

controller.init();