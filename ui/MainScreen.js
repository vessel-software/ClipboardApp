let MainScreenCmdBar = require('./MainScreenCmdBar');
let dom = require('dominant');

module.exports = () => {
  let model = {};

  return dom.el('div', { class: 'my-6', model }, [
    model.cmdBar = MainScreenCmdBar(),
  ]);
};
