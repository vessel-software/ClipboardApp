let MainScreenCmdBar = require('./MainScreenCmdBar');
let MainScreenCompartilhamentos = require('./MainScreenCompartilhamentosArray');
let MainScreenDispositivosPareadosArray = require('./MainScreenDispositivosPareadosArray');
let dom = require('dominant');

module.exports = () => {
  let model = {};

  return dom.el('div', { class: 'my-6', model }, [
    model.cmdBar = MainScreenCmdBar(),
    model.MainScreenDispositivosPareadosArray = MainScreenDispositivosPareadosArray(),
    model.MainScreenCmdBar = MainScreenCompartilhamentos(),
  ]);
};
