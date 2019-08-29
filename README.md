Переходим в терминал

mkdir test - создаем новую папку, имя может быть любым

cd test - переходим в созданную папку

git init - инициализируем пустой гит репозиторий

git clone https://gitlab.com/InnaLisovskaya/test-qa.git - клонируем репозиторий с проектом

cd test-qa - переходим в папку с проектом

npx codeceptjs run - запускаем тесты

npx codeceptjs run --reporter mochawesome запускаем с отчетом html и скриншотами



