let dom = require('dominant');
let MainScreenCompartilhamento = require('./MainScreenCompartilhamento');

let arr = [
  { type: 'fas fa-font', author: 'JOHN DOE', content: 'proin euismod malesuada urna et interdum eros tincidunt ac' },
  { type: 'fas fa-font', author: 'JOHN DOE', content: 'Ut laoreet, odio eget sollicitudin tristique, felis neque dapibus tortor, consectetur imperdiet ligula turpis sed justo. Donec blandit ut diam eu rhoncus. Mauris sed nisl urna. Mauris tempor, sem et hendrerit fringilla, tortor orci pulvinar est, sit amet cursus est arcu ut justo. Duis pretium posuere interdum. Curabitur varius fringilla tempus. Vivamus id risus sed lorem tempus lacinia' },
  // {type: 'link', content: 'proin euismod malesuada urna et interdum eros tincidunt ac'},
  { type: 'fas fa-link', author: 'JOHN DOE', content: 'etiam quis lacus commodo sollicitudin odio non posuere enim' },
];
console.log(123);
module.exports = () => dom.el('div', {
  class: 'my-6 text-gray-700 pt-4 flex flex-col',
}, [
  dom.el('div', {
    class: 'pl-1'
  }, [
    'Compartilhamentos',
  ]),
  dom.el('div', {
  }, [
  ]),
  dom.map(
    () => (console.log(arr), arr), compartilhamento => dom.el('div', {
    }, [
      MainScreenCompartilhamento({ compartilhamento })
    ]),
  ),
  // dom.MainScreenCompartilhamento = dom_arr
])

// dom.el('div', {
//   class: 'text-gray-700 pt-4 flex flex-col',
// }, [
//   dom.el('div', {
//     class: 'pl-1'
//   }, [
//     'Compartilhamentos',
//   ]),
//   dom.el('div', {
//   }, [
//   ]),
//   dom.MainScreenCompartilhamento = dom_arr
// ]);
