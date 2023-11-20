// Функция расчета скидки
function calculateDiscount() {
    const priceElement = document.getElementById('price');
    if (!priceElement){
        console.error('Ошибка:Элемент с идентификатором "price" не найден');
    }
    const originalPriceText = priceElement.textContent.trim();
    let originalPrice = parseFloat(
        originalPriceText.replace(' руб.', '').replace(/,/g, '.')
        );
    if (isNaN(originalPrice)){
        console.error('Ошибка: Невозможно преобразовать цену в число');
    }
    
    const discountPercentage = 20;
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;

    return {
        originalPrice: originalPrice,
        discountPercentage: discountPercentage,
        discountAmount: discountAmount,
        discountedPrice: discountedPrice
    };
}

// Функция вывода результата в параграф с идентификатором "total"
function displayResult() {
    const result = calculateDiscount();

    if (result !== null) {
        const totalElement = document.getElementById('total');
        if (!result) return;
        
    const totalElement = document.getElementById('total');
    if(!totalElement){
        console.error('Ошибка: Элемент с идентификатором "total" не найден');
    }

    totalElement.textContent = `Цена со скидкой: ${result.discountedPrice.toFixed(2)} руб.`;
    }
}

// Привязка функции displayResult к событию нажатия на кнопку с классом "discount"
const discountButton = document.querySelector('.discount');

if (discountButton) {
    discountButton.addEventListener('click', displayResult);
} else {
    console.error('Ошибка: Кнопка с классом "discount" не найдена');
}
