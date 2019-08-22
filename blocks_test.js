Feature('Check the blocks');


Before((I) => {
  I.amOnPage('http://blog.csssr.ru/qa-engineer/');
  I.see('КРАТКОЕ СОДЕРЖАНИЕ ВАКАНСИИ');
});

Scenario('test block НАХОДИТЬ НЕСОВЕРШЕНСТВА', (I) => {
  I.say('Чекбокс "Чувство прекрасного" становится неинтерактивным после снятия отметки');
  I.click('НАХОДИТЬ НЕСОВЕРШЕНСТВА');
  I.wait(3);
  I.seeCheckboxIsChecked('Чувство прекрасного');
  I.uncheckOption('Чувство прекрасного');
  I.dontSeeCheckboxIsChecked('Чувство прекрасного');
  I.checkOption('Чувство прекрасного');
  I.seeCheckboxIsChecked('Чувство прекрасного');
});

Scenario('test block РАБОТАТЬ С ФАЙЛАМИ ПРОЕКТОВ', (I) => {
  I.say('Чекбокс "Чувство прекрасного" становится неинтерактивным после снятия отметки');
  I.click('РАБОТАТЬ С ФАЙЛАМИ ПРОЕКТОВ');
  I.wait(3);
  I.seeCheckboxIsChecked('Чувство прекрасного');
  I.uncheckOption('Чувство прекрасного');
  I.dontSeeCheckboxIsChecked('Чувство прекрасного');
  I.checkOption('Чувство прекрасного');
  I.seeCheckboxIsChecked('Чувство прекрасного');
});

Scenario('test block СОПРОВОЖДАТЬ ПРОЕКТЫ', (I) => {
  I.say('Чекбокс "Внимательность" становится неинтерактивным после снятия отметки');
  I.click('СОПРОВОЖДАТЬ ПРОЕКТЫ');
  I.wait(3);
  I.seeCheckboxIsChecked('Внимательность');
  I.uncheckOption('Внимательность');
  I.dontSeeCheckboxIsChecked('Внимательность');
  I.checkOption('Внимательность');
  I.seeCheckboxIsChecked('Внимательность');
});


Scenario('test block СОПРОВОЖДАТЬ ПРОЕКТЫ', (I) => {
  I.say('Блоки секции Распределение обязанностей становятся невидимыми после повторного клика');
  I.click('СОПРОВОЖДАТЬ ПРОЕКТЫ');
  I.wait(3);
  I.see('В ЧЕМ ОСОБЕННОСТЬ?');
  I.click('СОПРОВОЖДАТЬ ПРОЕКТЫ');
  I.wait(3);
  I.see('В ЧЕМ ОСОБЕННОСТЬ?');
}).tag('nodisplay');

