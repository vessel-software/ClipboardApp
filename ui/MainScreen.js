let MainScreenDeviceList = require('./MainScreenDeviceList');
let MainScreenHeader = require('./MainScreenHeader');
let MainScreenShareList = require('./MainScreenShareList');
let d = require('dominant');

class MainScreen extends d.Component {
  devices = [
    { type: 'laptop', name: 'Home Laptop' },
  ];

  shares = [
    {
      type: 'text',
      source: 'Home Laptop',
      content: 'proin euismod malesuada urna et interdum eros tincidunt ac',
    },

    {
      type: 'text',
      source: 'Home Laptop',
      content: 'Ut laoreet, odio eget sollicitudin tristique, felis neque dapibus tortor, consectetur imperdiet ligula turpis sed justo. Donec blandit ut diam eu rhoncus. Mauris sed nisl urna. Mauris tempor, sem et hendrerit fringilla, tortor orci pulvinar est, sit amet cursus est arcu ut justo. Duis pretium posuere interdum. Curabitur varius fringilla tempus. Vivamus id risus sed lorem tempus lacinia',
    },

    // {type: 'link', content: 'proin euismod malesuada urna et interdum eros tincidunt ac'},

    {
      type: 'link',
      source: 'Home Laptop',
      url: 'https://github.com/vessel-software/ClipboardApp',
    },
  ];

  render = () => d.el('div', {
    model: this,
    style: () => ({ padding: '64px 0' }),
    class: 'flex flex-col items-center min-h-screen bg-gray-900',
  }, [
    d.el('div', {
      style: () => ({
        width: '150px',
        height: '150px',
        'margin-bottom': '64px',
        'border-radius': '100%',
        'font-size': '100px',
      }),

      class: 'flex items-center justify-center text-gray-400 bg-gray-800 shadow-xl',
    }, [
      d.el('i', {
        class: 'fas fa-clipboard-list',
      }),
    ]),

    d.el('div', {
      style: () => ({ width: '600px' }),
      class: 'shadow-2xl mx-auto pb-4 rounded overflow-hidden bg-gray-800',
    }, [
      this.header = d.el(MainScreenHeader),

      this.renderSection('Devices', [
        this.deviceList = d.el(MainScreenDeviceList, { devices: this.devices }),
      ]),

      this.renderSection('Shares', [
        this.shareList = d.el(MainScreenShareList, { shares: this.shares }),
      ]),
    ]),
  ]);

  renderSection = (label, ...children) => d.el('div', { class: 'px-4' }, [
    d.el('div', { class: 'py-2 font-bold text-gray-600' }, label),
    ...children,
  ]);
};

module.exports = MainScreen;
