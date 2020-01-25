let d = require('dominant');

module.exports = class MainScreenCmdBar extends d.Component {
  render = () => d.el('input', {
    model: this,
    class: 'bg-gray-300 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 placeholder-gray-600 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-400',
    placeholder: 'Search, paste, or type to send...',
  })
};
