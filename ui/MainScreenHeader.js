let MainScreenCmdBar = require('./MainScreenCmdBar');
let d = require('dominant');

class MainScreenHeader extends d.Component {
  classes = {
    root: `
      mainScreenHeader
      mb-4
    `,
  };

  render = () => d.el('div', { model: this, class: this.classes.root }, [
    d.el(MainScreenCmdBar),
  ]);
};

module.exports = MainScreenHeader;
