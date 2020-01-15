let MainScreenCmdBar = require('./MainScreenCmdBar');
let MainScreenCompartilhamentos = require('./MainScreenCompartilhamentosArray');
let MainScreenDispositivosPareadosArray = require('./MainScreenDispositivosPareadosArray');
let dom = require('dominant');

module.exports = () => {
  let model = {
    compartilhamentosArr: [
      { type: 'fas fa-font', author: 'JOHN DOE', content: 'proin euismod malesuada urna et interdum eros tincidunt ac' },
      { type: 'fas fa-font', author: 'JOHN DOE', content: 'Ut laoreet, odio eget sollicitudin tristique, felis neque dapibus tortor, consectetur imperdiet ligula turpis sed justo. Donec blandit ut diam eu rhoncus. Mauris sed nisl urna. Mauris tempor, sem et hendrerit fringilla, tortor orci pulvinar est, sit amet cursus est arcu ut justo. Duis pretium posuere interdum. Curabitur varius fringilla tempus. Vivamus id risus sed lorem tempus lacinia' },
      // {type: 'link', content: 'proin euismod malesuada urna et interdum eros tincidunt ac'},
      { type: 'fas fa-link', author: 'JOHN DOE', content: 'etiam quis lacus commodo sollicitudin odio non posuere enim' },
    ],
    get compartilhamentos () {
      return this.compartilhamentosArr
    },
    dispositivosArr: [
      { name: 'JOHN DOE', description: 'proin euismod malesuada urna et interdum eros tincidunt ac' },
      { name: 'JOAO SILVA', description: 'etiam quis lacus commodo sollicitudin odio non posuere enim' },
    ],
    get dispositivos() {
      return this.dispositivosArr
    },
  };
  return dom.el('div', { class: 'my-6', model }, [
    model.cmdBar = MainScreenCmdBar(),
    model.MainScreenDispositivosPareadosArray = MainScreenDispositivosPareadosArray({'dispositivos': model.dispositivos}),
    model.MainScreenCmdBar = MainScreenCompartilhamentos({'compartilhamentos': model.compartilhamentos}),
  ]);
};
