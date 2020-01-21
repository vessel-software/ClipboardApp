let MainScreenCmdBar = require('./MainScreenCmdBar');
let MainScreenAllShares = require('./MainScreenAllShares');
let MainScreenAllPairedDevices = require('./MainScreenAllPairedDevices');
let dom = require('dominant');

module.exports = () => {
  let model = {
    shares: [
      { type: 'text', author: 'JOHN DOE', content: 'proin euismod malesuada urna et interdum eros tincidunt ac' },
      { type: 'text', author: 'JOHN DOE', content: 'Ut laoreet, odio eget sollicitudin tristique, felis neque dapibus tortor, consectetur imperdiet ligula turpis sed justo. Donec blandit ut diam eu rhoncus. Mauris sed nisl urna. Mauris tempor, sem et hendrerit fringilla, tortor orci pulvinar est, sit amet cursus est arcu ut justo. Duis pretium posuere interdum. Curabitur varius fringilla tempus. Vivamus id risus sed lorem tempus lacinia' },
      // {type: 'link', content: 'proin euismod malesuada urna et interdum eros tincidunt ac'},
      { type: 'link', author: 'JOHN DOE', content: 'etiam quis lacus commodo sollicitudin odio non posuere enim' },
    ],
    devices: [
      { name: 'JOHN DOE', description: 'proin euismod malesuada urna et interdum eros tincidunt ac' },
      { name: 'JOAO SILVA', description: 'etiam quis lacus commodo sollicitudin odio non posuere enim' },
    ],
  };
  return dom.el('div', { class: 'my-6', model }, [
    model.cmdBar = MainScreenCmdBar(),
    model.allPairedDevices = MainScreenAllPairedDevices({'devices': model.devices}),
    model.allShares = MainScreenAllShares({'shares': model.shares}),
  ]);
};
