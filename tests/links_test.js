Feature('Check the links');


Before((I) => {
  I.amOnPage('http://blog.csssr.ru/qa-engineer/');
  I.see('КРАТКОЕ СОДЕРЖАНИЕ ВАКАНСИИ');
});

Scenario('test link to https://vk.com/csssr', (I) => {
  I.say('Проверям, что по клику на vk.com/csssr открывается существующая страница (сейчас этот тест падает, т.к. страницы не существует)');
  I.click('vk.com/csssr');
  I.wait(3);
  I.seeInCurrentUrl('https://vk.com/csssr');
  I.dontSeeInTitle('404 Not Found');
});

Scenario('test link to https://vk.com/csssr', (I) => {
  I.seeElement({xpath:"//a[@href='mailto:hr@csssr.com'][contains(text(),'hr@csssr.com')]"});
});


Scenario('test link to https://vk.com/csssr', (I) => {
  I.say('Проверям, что по клику на Софт для быстрого создания скриншотов открывается monosnap.com (сейчас этот тест падает, т.к. открывается другая страница)');
  I.click('НАХОДИТЬ НЕСОВЕРШЕНСТВА');
  I.wait(3);
  I.click('Софт для быстрого создания скриншотов');
  I.wait(3);
  I.closeCurrentTab();
  I.seeInCurrentUrl('https://monosnap.com/');
});

