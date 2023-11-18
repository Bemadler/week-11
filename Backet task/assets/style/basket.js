// Функция расчета скидки
function calculateDiscount() {
    const priceElement = document.getElementById('price');
    const originalPriceText = priceElement.textContent.trim();
    const originalPrice = parseFloat(originalPriceText.replace(' руб.', '').replace(',', '.'));
    
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
        if (totalElement) {
            totalElement.textContent = `Цена со скидкой: ${result.discountedPrice.toFixed(2)} руб.`;
        } else {
            console.error('Ошибка: Элемент с идентификатором "total" не найден');
        }
    }
}

// Привязка функции displayResult к событию нажатия на кнопку с классом "discount"
const discountButton = document.querySelector('.discount');

if (discountButton) {
    discountButton.addEventListener('click', displayResult);
} else {
    console.error('Ошибка: Кнопка с классом "discount" не найдена');
}
