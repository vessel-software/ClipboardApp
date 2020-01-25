let MainScreenDeviceList = require('./MainScreenDeviceList');
let MainScreenHeader = require('./MainScreenHeader');
let MainScreenShareList = require('./MainScreenShareList');
let d = require('dominant');

module.exports = class MainScreen extends d.Component {
  devices = [
    {
      name: 'JOHN DOE',
      description: 'proin euismod malesuada urna et interdum eros tincidunt ac',
    },

    {
      name: 'JOAO SILVA',
      description: 'etiam quis lacus commodo sollicitudin odio non posuere enim',
    },
  ];

  shares = [
    {
      type: 'text',
      author: 'JOHN DOE',
      content: 'proin euismod malesuada urna et interdum eros tincidunt ac',
    },

    {
      type: 'text',
      author: 'JOHN DOE',
      content: 'Ut laoreet, odio eget sollicitudin tristique, felis neque dapibus tortor, consectetur imperdiet ligula turpis sed justo. Donec blandit ut diam eu rhoncus. Mauris sed nisl urna. Mauris tempor, sem et hendrerit fringilla, tortor orci pulvinar est, sit amet cursus est arcu ut justo. Duis pretium posuere interdum. Curabitur varius fringilla tempus. Vivamus id risus sed lorem tempus lacinia',
    },

    // {type: 'link', content: 'proin euismod malesuada urna et interdum eros tincidunt ac'},

    {
      type: 'link',
      author: 'JOHN DOE',
      content: 'etiam quis lacus commodo sollicitudin odio non posuere enim',
    },
  ];

  renderSection = (label, ...children) => d.el('div', { class: 'px-4' }, [
    d.el('div', { class: 'py-2 font-bold text-gray-600' }, label),
    ...children,
  ]);

  render = () => d.el('div', { model: this, class: 'bg-gray-900' }, [
    d.el('div', {
      style: () => ({ width: '600px' }),
      class: 'shadow-2xl mx-auto min-h-screen bg-gray-800',
    }, [
      this.header = d.el(MainScreenHeader),

      this.renderSection('Dispositivos pareados', [
        this.deviceList = d.el(MainScreenDeviceList, { devices: this.devices }),
      ]),

      this.renderSection('Compartilhamentos', [
        this.shareList = d.el(MainScreenShareList, { shares: this.shares }),
      ]),
    ]),
  ]);
};
