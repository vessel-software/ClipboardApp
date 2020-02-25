let d = require('dominant');

class MainScreenCmdBar extends d.Component {
  classes = {
    root: `
      appearance-none
      w-full px-8 py-4
      focus:outline-none
      border border-solid border-gray-300
      bg-gray-200
      leading-tight
      text-gray-700
      placeholder-gray-600
    `,
  };

  render = () => d.el('input', {
    model: this,
    class: this.classes.root,
    placeholder: 'Search, paste, or type to send...',
  })
};

module.exports = MainScreenCmdBar;
