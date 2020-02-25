let MainScreenDeviceList = require('./MainScreenDeviceList');
let MainScreenHeader = require('./MainScreenHeader');
let MainScreenShareList = require('./MainScreenShareList');
let d = require('dominant');

class MainScreen extends d.Component {
  devices = [
    { type: 'laptop', name: 'Home Laptop' },
    { type: 'mobile', name: 'Phone' },
  ];

  shares = [
    {
      type: 'link',
      source: 'Phone',
      url: 'https://github.com/vessel-software/ClipboardApp',
    },

    {
      type: 'text',
      source: 'Phone',
      content: 'proin euismod malesuada urna et interdum eros tincidunt ac',
    },

    {
      type: 'text',
      source: 'Phone',
      content: 'Ut laoreet, odio eget sollicitudin tristique, felis neque dapibus tortor, consectetur imperdiet ligula turpis sed justo. Donec blandit ut diam eu rhoncus. Mauris sed nisl urna. Mauris tempor, sem et hendrerit fringilla, tortor orci pulvinar est, sit amet cursus est arcu ut justo. Duis pretium posuere interdum. Curabitur varius fringilla tempus. Vivamus id risus sed lorem tempus lacinia',
    },
  ];

  classes = {
    root: `
      MainScreen
      flex flex-col items-center
      min-h-screen
      py-16
      bg-gray-100
    `,

    logoWrapper: `
      MainScreen-logoWrapper
      flex justify-center items-center
      w-32 h-32
      mb-12
      rounded-full
      text-6xl
      text-gray-400
      bg-white
      shadow-lg
    `,

    contentWrapper: `
      MainScreen-contentWrapper
      mx-auto
      pb-6
      rounded
      overflow-hidden
      bg-white
      shadow
    `,

    sectionWrapper: `
      MainScreen-sectionWrapper
      px-8
    `,

    sectionLabel: `
      MainScreen-sectionLabel
      pt-2
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

      d.el('div', { class: this.classes.sectionWrapper }, [
        this.deviceList = d.el(MainScreenDeviceList, { devices: this.devices }),
      ]),

      d.el('div', { class: this.classes.sectionWrapper }, [
        this.shareList = d.el(MainScreenShareList, { shares: this.shares }),
      ]),
    ]),
  ]);
};

module.exports = MainScreen;
