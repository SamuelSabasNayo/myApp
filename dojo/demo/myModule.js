define([
    'dojo/dom',
    'dojo/fx',
    'dojo/domReady!'
], function(dom, fx) {
    // The piece we had before...
    var greeting = dom.byId('greeting');
    greeting.innerHTML += ' from Dojo!';

    // ...but now, with an animation!
    fx.slideTo({
        node: greeting,
        top: 100,
        left: 200
    }).play();
});

// Adding Visual Effects


// define([
//     'dojo/dom',
//     'dojo/domReady!'
// ], function(dom) {
//     var greeting = dom.byId('greeting');
//     greeting.innerHTML += ' from Dojo!';
// });


// define([
//     // The dojo/dom module is required by this module, so it goes
//     // in this list of dependencies.
//     'dojo/dom',
//     'dojo/domReady!'
// ], function(dom) {
//     // Once all modules in the dependency list have loaded, this
//     // function is called to define the demo/myModule module.
//     //
//     // The dojo/dom module is passed as the first argument to this
//     // function; additional modules in the dependency list would be
//     // passed in as subsequent arguments.

//     var oldText = {};

//     // This returned object becomes the defined value of this module
//     return {
//         setText: function (id, text) {
//             var node = dom.byId(id);
//             oldText[id] = node.innerHTML;
//             node.innerHTML = text;
//         },

//         restoreText: function (id) {
//             var node = dom.byId(id);
//             node.innerHTML = oldText[id];
//             delete oldText[id];
//         }
//     };
// });