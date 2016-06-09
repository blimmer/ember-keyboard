"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/key-down-counter', ['exports', 'ember', 'ember-keyboard'], function (exports, _ember, _emberKeyboard) {
  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var on = _ember['default'].on;
  exports['default'] = Component.extend(_emberKeyboard.EKMixin, {
    tagName: 'span',
    classNames: 'counter-container',
    toggleActivated: true,
    hook: 'counter',

    counter: 0,

    keyboardActivated: computed('parentActivated', 'toggleActivated', 'activatedToggle', {
      get: function get() {
        var toggleActivated = this.get('activatedToggle') ? this.get('toggleActivated') : true;

        return toggleActivated && this.get('parentActivated');
      }
    }).readOnly(),

    decrementCounter: on((0, _emberKeyboard.keyDown)('ArrowLeft'), function () {
      this.decrementProperty('counter');
    }),

    incrementCounter: on((0, _emberKeyboard.keyDown)('ArrowRight'), function () {
      this.incrementProperty('counter');
    }),

    decrementCounter10: on((0, _emberKeyboard.keyDown)('ctrl+ArrowLeft'), function () {
      this.decrementProperty('counter', 10);
    }),

    incrementCounter10: on((0, _emberKeyboard.keyDown)('ctrl+ArrowRight'), function () {
      this.incrementProperty('counter', 10);
    }),

    decrementCounter100: on((0, _emberKeyboard.keyDown)('ctrl+shift+ArrowLeft'), function () {
      this.decrementProperty('counter', 100);
    }),

    incrementCounter100: on((0, _emberKeyboard.keyDown)('ctrl+shift+ArrowRight'), function () {
      this.incrementProperty('counter', 100);
    }),

    resetCounter: on((0, _emberKeyboard.keyUp)('r'), function () {
      this.set('counter', 0);
    }),

    setCounterTo5: on((0, _emberKeyboard.keyPress)('5'), function () {
      this.set('counter', 5);
    })
  });
});
define('dummy/components/keyboard-activated-widget', ['exports', 'ember', 'dummy/mixins/enterable'], function (exports, _ember, _dummyMixinsEnterable) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend(_dummyMixinsEnterable['default']);
});
define('dummy/components/keyboard-first-responder-widget', ['exports', 'ember', 'dummy/mixins/enterable'], function (exports, _ember, _dummyMixinsEnterable) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend(_dummyMixinsEnterable['default']);
});
define('dummy/components/keyboard-lax-priority-widget', ['exports', 'ember', 'dummy/mixins/enterable'], function (exports, _ember, _dummyMixinsEnterable) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend(_dummyMixinsEnterable['default']);
});
define('dummy/components/keyboard-priority-widget', ['exports', 'ember', 'dummy/mixins/enterable'], function (exports, _ember, _dummyMixinsEnterable) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend(_dummyMixinsEnterable['default']);
});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/helpers/format-markdown', ['exports', 'ember', 'markdown-code-highlighting/helpers/format-markdown'], function (exports, _ember, _markdownCodeHighlightingHelpersFormatMarkdown) {
  exports['default'] = _markdownCodeHighlightingHelpersFormatMarkdown['default'];
});
define('dummy/helpers/hook', ['exports', 'ember-hook/helpers/hook'], function (exports, _emberHookHelpersHook) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberHookHelpersHook['default'];
    }
  });
  Object.defineProperty(exports, 'hook', {
    enumerable: true,
    get: function get() {
      return _emberHookHelpersHook.hook;
    }
  });
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dummy/initializers/ember-keyboard-first-responder-inputs', ['exports', 'ember-keyboard/initializers/ember-keyboard-first-responder-inputs'], function (exports, _emberKeyboardInitializersEmberKeyboardFirstResponderInputs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardInitializersEmberKeyboardFirstResponderInputs['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardInitializersEmberKeyboardFirstResponderInputs.initialize;
    }
  });
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/hook-component-reopener', ['exports', 'ember-hook/initializers/hook-component-reopener'], function (exports, _emberHookInitializersHookComponentReopener) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberHookInitializersHookComponentReopener['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberHookInitializersHookComponentReopener.initialize;
    }
  });
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('dummy/mixins/enterable', ['exports', 'ember'], function (exports, _ember) {
  var Mixin = _ember['default'].Mixin;
  var service = _ember['default'].inject.service;
  exports['default'] = Mixin.create({
    classNames: ['keyboard-widget'],
    classNameBindings: ['keyboardActivated:active'],
    widgetManager: service(),

    click: function click() {
      this._activate();
    },

    deactivate: function deactivate() {
      this.set('keyboardActivated', false);
    },

    _activate: function _activate() {
      this.get('widgetManager').activate(this);
      this.set('keyboardActivated', true);
    }
  });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('test-scenario');
  });

  exports['default'] = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/keyboard', ['exports', 'ember-keyboard/services/keyboard'], function (exports, _emberKeyboardServicesKeyboard) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardServicesKeyboard['default'];
    }
  });
});
define('dummy/services/widget-manager', ['exports', 'ember'], function (exports, _ember) {
  var Service = _ember['default'].Service;
  var isEqual = _ember['default'].isEqual;
  exports['default'] = Service.extend({
    activate: function activate(widget) {
      var previousWidget = this.get('activeWidget');

      if (previousWidget && !isEqual(widget, previousWidget)) {
        previousWidget.deactivate();
      }

      this.set('activeWidget', widget);
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createElement("code");
        var el4 = dom.createTextNode("ember-keyboard");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 3, 3);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 2], [3, 12]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/key-down-counter", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes", "wrong-type"]
          },
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/key-down-counter.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("keyboardPriority");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(":");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "keyboardPriority", ["loc", [null, [3, 16], [3, 32]]]]], [], []], "classNames", "input-field", "hook", "counter-priority-input"], ["loc", [null, [3, 2], [3, 89]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/key-down-counter.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("keyboardActivated");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(":");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "toggleActivated", ["loc", [null, [8, 34], [8, 49]]]]], [], []], "classNames", "checkbox", "hook", "counter-activated-toggle"], ["loc", [null, [8, 2], [8, 105]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/key-down-counter.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("keyboardFirstResponder");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(":");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "keyboardFirstResponder", ["loc", [null, [13, 34], [13, 56]]]]], [], []], "classNames", "checkbox", "hook", "counter-first-responder-toggle"], ["loc", [null, [13, 2], [13, 118]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 19,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/components/key-down-counter.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createElement("code");
          var el3 = dom.createTextNode("keyboardLaxPriority");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(":");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "keyboardLaxPriority", ["loc", [null, [18, 34], [18, 53]]]]], [], []], "classNames", "checkbox", "hook", "counter-lax-priority-toggle"], ["loc", [null, [18, 2], [18, 112]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/key-down-counter.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [8]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[4] = dom.createAttrMorph(element0, 'data-test');
        morphs[5] = dom.createMorphAt(element0, 0, 0);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "priorityInput", ["loc", [null, [1, 6], [1, 19]]]]], [], 0, null, ["loc", [null, [1, 0], [4, 7]]]], ["block", "if", [["get", "activatedToggle", ["loc", [null, [6, 6], [6, 21]]]]], [], 1, null, ["loc", [null, [6, 0], [9, 7]]]], ["block", "if", [["get", "firstResponderToggle", ["loc", [null, [11, 6], [11, 26]]]]], [], 2, null, ["loc", [null, [11, 0], [14, 7]]]], ["block", "if", [["get", "laxPriorityToggle", ["loc", [null, [16, 6], [16, 23]]]]], [], 3, null, ["loc", [null, [16, 0], [19, 7]]]], ["attribute", "data-test", ["subexpr", "hook", ["counter-counter"], [], ["loc", [null, [21, 15], [21, 41]]]]], ["content", "counter", ["loc", [null, [21, 42], [21, 53]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("dummy/templates/components/keyboard-activated-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/keyboard-activated-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "formatMarkdown", ["\n## `keyboardActivated`\n\nOnce you've included the `EKMixin`, you can activate and deactivate a component's keyboard responders by toggling the `keyboardActivated` property. In the examples below, you can toggle each counter's `keyboardActivated`:\n"], [], ["loc", [null, [1, 0], [5, 3]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [7, 35], [7, 52]]]]], [], []], "activatedToggle", true], ["loc", [null, [7, 0], [7, 75]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [8, 35], [8, 52]]]]], [], []], "activatedToggle", true], ["loc", [null, [8, 0], [8, 75]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [9, 35], [9, 52]]]]], [], []], "activatedToggle", true], ["loc", [null, [9, 0], [9, 75]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/keyboard-first-responder-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/keyboard-first-responder-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "formatMarkdown", ["\n### `keyboardFirstResponder`\n\nSometimes you'll need a component to be the first responder, regardless of its `keyboardPriority` relative to other components. This can be useful if you want a low-priority component to temporarily gain precedence over everything else. To achieve this, use `keyboardFirstResponder`.\n\n```hbs\n{{my-component keyboardPriority=0 keyboardFirstResponder=true}} <!-- has precedence -->\n{{my-component keyboardPriority=1}}\n```\n\nWhen a component resigns `keyboardFirstResponder`, it will fall back to using its `keyboardPriority`.\n"], [], ["loc", [null, [1, 0], [12, 3]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [14, 35], [14, 52]]]]], [], []], "priorityInput", true, "activatedToggle", true, "firstResponderToggle", true, "keyboardPriority", 1], ["loc", [null, [14, 0], [14, 139]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [15, 35], [15, 52]]]]], [], []], "priorityInput", true, "activatedToggle", true, "firstResponderToggle", true, "keyboardFirstResponder", true], ["loc", [null, [15, 0], [15, 148]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [16, 35], [16, 52]]]]], [], []], "priorityInput", true, "activatedToggle", true, "firstResponderToggle", true], ["loc", [null, [16, 0], [16, 120]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/keyboard-lax-priority-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/keyboard-lax-priority-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "formatMarkdown", ["\n### `keyboardLaxPriority`\n\nBy setting `keyboardLaxPriority` to `true`, you're saying that it will not block lower priority responders. This can help if you want a group of high level responders to always get a chance to handle key events without blocking the rest of your app. Note that all components within a given priority must have `keyboardLaxPriority` set to `true` or else the priority level will still block, as per usual.\n"], [], ["loc", [null, [1, 0], [5, 3]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [7, 35], [7, 52]]]]], [], []], "priorityInput", true, "activatedToggle", true, "firstResponderToggle", true, "laxPriorityToggle", true, "keyboardPriority", 1, "hook", "lax-priority-counter"], ["loc", [null, [7, 0], [7, 190]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [8, 35], [8, 52]]]]], [], []], "priorityInput", true, "activatedToggle", true, "firstResponderToggle", true, "laxPriorityToggle", true, "keyboardFirstResponder", true, "keyboardLaxPriority", true, "hook", "lax-priority-counter"], ["loc", [null, [8, 0], [8, 224]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [9, 35], [9, 52]]]]], [], []], "priorityInput", true, "activatedToggle", true, "firstResponderToggle", true, "laxPriorityToggle", true, "hook", "lax-priority-counter"], ["loc", [null, [9, 0], [9, 171]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/components/keyboard-priority-widget", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/keyboard-priority-widget.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "formatMarkdown", ["\n### `keyboardPriority`\n\nBy default, all activated components are treated as equal. If you have two components that respond to `ctrl+a`, then both will respond when there's a `ctrl+a` event. However, this behavior is undesirable in some scenarios. What if you have a modal open, and you only want it and its child components to respond to key events. You can get this behavior by assigning a higher priority to the modal and its children:\n\n```hbs\nnoPriorityComponent; // priority defaults to 0\nlowPriorityComponent.set('keyboardPriority', 0);\n\nmodal.set('keyboardPriority', 1);\nmodalChild.set('keyboardPriority', 1);\n```\n\nIn this scenario, when a key is pressed both `modal` and `modalChild` will have a chance to respond to it, while the remaining components will not. Once `modal` and `modalChild` are deactivated or their priority is lowered, then `lowPriorityComponent` and `noPriorityComponent` will be able to respond to key events.\n\nPerhaps more conveniently, this property can be passed in through your template:\n\n```hbs\n{{my-component keyboardPriority=1}}\n{{my-dynamic-component keyboardPriority=dynamicPriority}}\n```\n"], [], ["loc", [null, [1, 0], [22, 3]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [24, 35], [24, 52]]]]], [], []], "priorityInput", true, "activatedToggle", true, "keyboardPriority", 1], ["loc", [null, [24, 0], [24, 113]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [25, 35], [25, 52]]]]], [], []], "priorityInput", true, "activatedToggle", true], ["loc", [null, [25, 0], [25, 94]]]], ["inline", "key-down-counter", [], ["parentActivated", ["subexpr", "@mut", [["get", "keyboardActivated", ["loc", [null, [26, 35], [26, 52]]]]], [], []], "priorityInput", true, "activatedToggle", true], ["loc", [null, [26, 0], [26, 94]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 258,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        morphs[5] = dom.createMorphAt(fragment, 10, 10, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "formatMarkdown", ["\n## Installation\n\n`ember install ember-keyboard`\n\n## Usage\n\nFirst, add `EKMixin` to your component:\n\n```js\nimport Ember from 'ember';\nimport { EKMixin } from 'ember-keyboard';\n\nexport default Ember.Component.extend(EKMixin, {\n  . . . .\n});\n```\n\nNow your component observes several new properties that'll help it determine when and if it should respond to key events. These properties are outlined in greater detail below, but to simply get things started, you'll need to set `keyboardActivated` to true:\n\n```js\n  activateKeyboard: Ember.on('init', function() {\n    this.set('keyboardActivated', true);\n  })\n```\n\nOr simply activate the component from your template:\n\n```hbs\n{{my-component keyboardActivated=true}}\n```\n\nOnce it's activated, your component will start listening for key events. Let's say you want your component to respond to the key `s` as well as `ctrl+shift+a`. You could do so with:\n\n```js\nimport { keyUp, keyDown } from 'ember-keyboard';\n\n. . . .\n\naFunction: Ember.on(keyUp('s'), function() {\n  console.log('`s` was pressed');\n}),\n\nanotherFunction: Ember.on(keyDown('ctrl+shift+a'), function() {\n  console.log('`ctrl+shift+a` is being held');\n})\n```\n\nYour component will be able to listen to any combination of modifier keys (`ctrl`, `shift`, `alt`, and `meta`) and one principle key, such as `a` in the example above. Note that `keyUp` does not consistently fire on Macs (and possible other OSs) when used in conjunction with modifier keys, so when possible, use `keyDown` with modifier keys.\n\nFor a full list of the primary keys (such as `a`, `1`, ` `, `Escape`, and `ArrowLeft`), look [here](https://github.com/null-null-null/ember-keyboard/blob/master/addon/fixtures/key-map.js).\n\nFinally, if you ever want a component to stop listening to key events, you can deactivate it:\n\n```js\ndeactivateKeyboard: Ember.on('arbitraryTrigger', function() {\n  this.set('keyboardActivated', false);\n})\n```\n\nNote that components will automatically be deactivated on `willDestroyElement`.\n\n## Interactive Property Demos\n\nBelow are several interactive demos of `ember-keyboard` properties. They allow you to see how different properties interact with each other. Simply click the containing box and try using the below key commands.\n\nControls:\n\n* `LeftArrow`: decrement counter by 1\n* `RightArrow`: increment counter by 1\n* `ctrl`+ArrowKey: increment/decrement x10\n* `ctrl+shift`+ArrowKey: increment/decrement x100\n* `r`: resets counter to 0\n"], [], ["loc", [null, [1, 0], [74, 3]]]], ["content", "keyboard-activated-widget", ["loc", [null, [76, 0], [76, 29]]]], ["content", "keyboard-priority-widget", ["loc", [null, [78, 0], [78, 28]]]], ["content", "keyboard-first-responder-widget", ["loc", [null, [80, 0], [80, 35]]]], ["content", "keyboard-lax-priority-widget", ["loc", [null, [82, 0], [82, 32]]]], ["inline", "formatMarkdown", ["\n## Mixins\n\nTo reduce boilerplate, `ember-keyboard` includes several mixins with common patterns.\n\n**Note: these are used alongside `EKMixin`, it must be included as well for these to work.**\n\n### EKOnInsertMixin\n\n`import { EKOnInsertMixin } from 'ember-keyboard';`\n\nThis mixin will activate the component on `didInsertElement`, and as per normal, it will deactivate on `willDestroyElement`.\n\n### EKOnFocusMixin\n\n`import { EKOnFocusMixin } from 'ember-keyboard';`\n\nThis mixin will activate the component whenever it receives focus and deactivate it when it loses focus.\n\n### EKFirstResponderOnFocusMixin\n\n`import { EKFirstResponderOnFocusMixin } from 'ember-keyboard';`\n\nThis mixin grants the component first responder status while it is focused. When it loses focus, it resigns its status.\n\nNote that it will also activate the component on focus in, though it does not deactivate the component on focus out.\n\n## Advanced Usage\n\n### `Ember.TextField` && `Ember.TextArea`\n\nTo prevent `ember-keyboard` from responding to key strokes while an input/textarea is focused, we've reopened `Ember.TextField` and `Ember.TextArea` and applied the `EKOnInsertMixin` and `EKFirstResponderOnFocusMixin`. This ensures that whenever an input is focused, other key responders will not fire. If you want to have responders associated with an input or textarea (such as a rich text editor with `keyUp('ctrl+i')` bindings), you need to extend these components from `Ember.TextField` or `Ember.TextArea` rather than `Ember.component`.\n\nThis applies to `input` and `textarea` helpers:\n\n```hbs\n{{input}}\n{{textarea}}\n```\n\n### `keyUp`, `keyDown`, and `keyPress`\n\nBy default, `ember-keyboard` listens to `keydown`, `keyup`, and `keypress` events, and has corresponding functions:\n\n```js\nimport { keyUp, keyDown, keyPress } from 'ember-keyboard';\n```\n\nIf you want `ember-keyboard` to listen to fewer events, then you can specify them in your `config/environment.js` file like so:\n\n```js\nENV.emberKeyboard = {\n  listeners: ['keyUp', 'keyDown'] // use only `keyUp` and `keyDown`\n}\n```\n\nNote that `keydown` events fire repeatedly while the key is pressed, while `keyup` events fire only once, after the key has been released.\n\n### Testing\n\n`ember-keyboard` comes with some test helpers to help out with your acceptance tests.\n\n```js\n. . . .\n\ntest('test my key bindings', function(assert) {\n  . . . .\n\n  keyUp('ArrowRight');\n\n  andThen(() => {\n    . . . .\n  });\n\n  keyDown('ArrowRight+ctrl+shift');\n\n  andThen(() => {\n    . . . .\n  });\n});\n```\n\nTo use them, you'll need to import them into `tests/helpers/start-app.js` above `application.injectTestHelpers()`:\n\n```js\n. . . .\nimport keyboardRegisterTestHelpers from './ember-keyboard/register-test-helpers';\n\nexport default function startApp(attrs) {\n  . . . .\n\n  Ember.run(function() {\n    . . . .\n    keyboardRegisterTestHelpers();\n    application.injectTestHelpers();\n  });\n\n  . . . .\n}\n```\n\n### `event`\n\nWhen `ember-keyboard` triggers an event, it passes in the `event` object as its first argument:\n\n```js\nsaveDocument: Ember.on(keyDown('ctrl+s'), function(event) {\n  this.performSave();\n  event.preventDefault();\n})\n```\n\nNote that if you want `preventDefault` to prevent `window` level events, you'll need to use `keyDown`, as the default event will fire before `keyUp`.\n\n### `getKey`\n\nDid you know that 65 was the keycode for 'a'? Or that 37 was the keycode for the right arrow? If you don't want to litter your code with keycode references, you can use `getKey`, which `ember-keyboard` uses internally:\n\n```js\nimport { getKey } from 'ember-keyboard';\n\n. . . .\n\nkeyMapper: Ember.on(keyDown('a'), keyDown('b'), keyDown('c'), function(event) {\n  const key = getKey(event);\n  switch (key) {\n    match 'a': console.log('It\\'s an a!'); break;\n    . . . .\n  }\n})\n```\n\n### `getKeyCode`\n\nOn the other end of things, if you need to convert a key into a keycode, you can use `getKeyCode`. This is particularly useful when testing:\n\n```js\nimport { getKeyCode } from 'ember-keyboard';\n\n. . . .\n\nkeyEvent(document, 'keydown', getKeyCode('a'));\nkeyEvent(document, 'keydown', getKeyCode('ArrowRight'));\nkeyEvent(document, 'keydown', getKeyCode('Backspace'));\nkeyEvent(document, 'keydown', getKeyCode(' '));\n```\n\nJust pass in an `event`, and it'll return a human readable key. Look [here](https://github.com/null-null-null/ember-keyboard/blob/master/addon/fixtures/key-map.js) for a full mapping.\n\n### Key Indifference\n\nIf you want an event to fire for every keypress, then simply don't provide a keystring to `keyUp` or `keyDown`. This can be a handy way to trigger events for large ranges of keys, such as on any alphanumeric keypress. For instance:\n\n```js\ntriggerOnAlphaNumeric: Ember.on(keyUp(), function(event) {\n  if (/^\\w(?!.)/.test(getKey(event))) {\n    this.startEditing();\n  }\n})\n```\n\n### `meta` and `alt`\n\nMacs diverge from other PCs in their naming of `meta` and `alt`. The `alt` key is named `options`, while the `meta` key is named `command`. You don't need to do anything special to get `ember-keyboard` to recognize `options` or `command` keys, just use their generic names `alt` and `meta`. This will ensure that your keys fire across platforms.\n\n### Dynamically binding events\n\nIf you'd like to dynamically add and remove key listeners on a component, you can do so with the standard `on` and `off` functions:\n\n```js\ncomponent.on(keyUp('ctrl+s'), someFunction);\ncomponent.off(keyUp('ctrl+s'), someFunction);\n```\n"], [], ["loc", [null, [84, 0], [257, 3]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/test-scenario", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/test-scenario.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "key-down-counter", [], ["parentActivated", true, "priorityInput", true, "activatedToggle", true, "firstResponderToggle", true, "laxPriorityToggle", true], ["loc", [null, [1, 0], [1, 130]]]], ["inline", "key-down-counter", [], ["parentActivated", true, "priorityInput", true, "activatedToggle", true, "firstResponderToggle", true, "laxPriorityToggle", true], ["loc", [null, [2, 0], [2, 130]]]], ["inline", "key-down-counter", [], ["parentActivated", true, "priorityInput", true, "activatedToggle", true, "firstResponderToggle", true, "laxPriorityToggle", true], ["loc", [null, [3, 0], [3, 130]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('dummy/utils/listener-name', ['exports', 'ember-keyboard/utils/listener-name'], function (exports, _emberKeyboardUtilsListenerName) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardUtilsListenerName['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-keyboard","version":"1.1.0+95ab621a"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map