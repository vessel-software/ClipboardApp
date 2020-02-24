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

  classes = {
    root: `
      mainScreen-root
      flex flex-col items-center
      min-h-screen
      py-16
      bg-gray-900
    `,

    logoWrapper: `
      mainScreen-logoWrapper
      flex justify-center items-center
      w-32 h-32
      mb-12
      rounded-full
      text-6xl
      text-gray-400
      bg-gray-800
      shadow-xl
    `,

    contentWrapper: `
      mainScreen-contentWrapper
      mx-auto
      pb-4
      rounded
      overflow-hidden
      bg-gray-800
      shadow-2xl
    `,

    sectionWrapper: `
      mainScreen-sectionWrapper
      px-4
    `,

    sectionLabel: `
      mainScreen-sectionLabel
      py-2
      font-bold
      text-gray-600
    `,
  };

  render = () => d.el('div', {
    model: this,
    class: this.classes.root,
  }, [
    d.el('div', { class: this.classes.logoWrapper }, [
      d.el('i', { class: 'fas fa-clipboard-list' }),
    ]),

    d.el('div', {
      style: () => ({ width: '600px' }),
      class: this.classes.contentWrapper,
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

  renderSection = (label, ...children) => d.el('div', {
    class: this.classes.sectionWrapper,
  }, [
    d.el('div', { class: this.classes.sectionLabel }, label),
    ...children,
  ]);
};

module.exports = MainScreen;
