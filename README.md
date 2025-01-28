# Калькулятор с AJAX-запросом

Этот проект представляет собой интерактивный калькулятор с дополнительными функциями, такими как история вычислений, оценка калькулятора и отправка оценки на вымышленный сервер с использованием AJAX.

## Функциональность

1. **Калькулятор**:
   - Поддерживает базовые арифметические операции: сложение, вычитание, умножение и деление.
   - Ввод данных возможен как с помощью кнопок, так и с клавиатуры.
   - История последних 5 вычислений сохраняется в локальном хранилище браузера.
   - Кнопка "C" очищает текущий ввод, а кнопка "Очистить историю" удаляет всю историю вычислений.

2. **Оценка калькулятора**:
   - Пользователь может оценить калькулятор с помощью ползунка (минимальная оценка — 20 баллов).
   - При нажатии кнопки "Оценить" оценка отправляется на вымышленный сервер с использованием AJAX-запроса.
   - После отправки оценки открывается модальное окно с изображением.

3. **Включение/выключение калькулятора**:
   - Калькулятор можно включать и выключать с помощью кнопки "Включить калькулятор".

4. **Дизайн**:
   - Простой и интуитивно понятный интерфейс.
   - Адаптивный дизайн, который корректно отображается на различных устройствах.

## Структура проекта

- **index.html** — основной HTML-файл с разметкой калькулятора.
- **style.css** — файл стилей для оформления калькулятора.
- **script.js** — JavaScript-код, реализующий логику калькулятора и AJAX-запрос.

## Примеры использования

1. **Вычисления**:
   - Введите выражение, например: `2 + 3 * 4`.
   - Нажмите `=` или клавишу `Enter`, чтобы получить результат.

2. **Оценка калькулятора**:
   - Нажмите на фото, чтобы открыть меню оценки.
   - Установите оценку с помощью ползунка.
   - Нажмите кнопку "Оценить", чтобы отправить оценку на сервер.

3. **История вычислений**:
   - История последних 5 вычислений отображается под калькулятором.
   - Используйте кнопку "Очистить историю", чтобы удалить все записи.

## Технологии

- HTML
- CSS
- JavaScript (ES6+)
- AJAX (Fetch API)

## Лицензия

Этот проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](LICENSE).

---

## Автор

Ярош Тимур Дмитриевич, 11-309, 2 курс. 28.01.2025
