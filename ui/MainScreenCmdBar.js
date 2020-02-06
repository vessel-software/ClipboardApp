let d = require('dominant');

class MainScreenCmdBar extends d.Component {
  render = () => d.el('input', {
    model: this,
    class: 'bg-gray-300 appearance-none rounded w-full py-2 px-4 placeholder-gray-600 text-gray-700 leading-tight shadow-inner focus:outline-none focus:bg-gray-200',
    placeholder: 'Search, paste, or type to send...',
  })
};

module.exports = MainScreenCmdBar;
