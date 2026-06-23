/*
Реализовать МЕТОД `addResource` ВНУТРИ ОБЪЕКТА(game), который будет ДОБАВЛЯТЬ(УВЕЛИЧИВАТЬ) указанное КОЛИЧЕСТВО РЕСУРСОВ(gold, lumber)
к уже существующим(ИЗНАЧАЛЬНЫМ) РЕСУРСАМ в ОБЪЕКТЕ `game`.

Требования к МЕТОДУ:

1. МЕТОД `addResource` должен принимать ДВА ПАРАМЕТРА(ДВА АРГУМЕНТА):
  - `resource`(СТРОКА) — ТИП РЕСУРСА(`gold`, `lumber` и т.д.).
  - `amount`(ЧИСЛО) — КОЛИЧЕСТВО РЕСУРСОВ, которое нужно ДОБАВИТЬ(УВЕЛИЧИТЬ).
2. Если ТИП РЕСУРСА НЕ СУЩЕСТВУЕТ(false) в ВНУТРЕННЕМ ОБЪЕКТЕ `game.resources`, САМ МЕТОД `addResource` должен выводить
В КОНСОЛЬ(console.log) сообщение "Invalid resource"(false).
3. Если РЕСУРС СУЩЕСТВУЕТ(true), МЕТОД `addResource` должен ДОБАВЛЯТЬ(УВЕЛИЧИВАТЬ) значение `amount`(ЧИСЛО)
к текущему(ИЗНАЧАЛЬНОМУ) КОЛИЧЕСТВУ этого РЕСУРСА в ОБЪЕКТЕ(game), ДОБАВЛЯТЬ(УВЕЛИЧИТЬ) ЧИСЛО во ВНУТРЕННЕМ ОБЪЕКТЕ `game.resources`.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) { // МЕТОД принимает ДВА ПАРАМЕТРА(ДВА АРГУМЕНТА) — СТРОКА(resource) и ЧИСЛО(amount)
    if (resource === "gold") {
      game.resources.gold = game.resources.gold + amount
    } else if (resource === "lumber") {
      game.resources.lumber = game.resources.lumber + amount
    } else {
      console.log("Invalid resource"); 
    }
  }
}
