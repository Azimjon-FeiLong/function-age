function malumot () {
  let ism = prompt('Введите ваше имя');
  let tugYil = +prompt('Введите год рождения');
  let buYil = +prompt('Введите нынешний год');
  let age = (buYil - tugYil);

  let yearsOld =  ism + ". Вам " + age + " лет ";
  return yearsOld;
  
}
alert (malumot());


    
     