let MainScreenCmdBar = require('./MainScreenCmdBar');
let d = require('dominant');

class MainScreenHeader extends d.Component {
  render = () => d.el('div', {
    model: this,
    class: 'shadow-lg mb-4 p-4',
  }, [
    d.el(MainScreenCmdBar),
  ]);
};

module.exports = MainScreenHeader;
