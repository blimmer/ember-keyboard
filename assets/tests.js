define('dummy/tests/acceptance/ember-keyboard-test', ['exports', 'ember', 'qunit', 'dummy/tests/helpers/start-app', 'ember-hook'], function (exports, _ember, _qunit, _dummyTestsHelpersStartApp, _emberHook) {

  function getValues() {
    return find('' + (0, _emberHook.hook)('counter-counter')).map(function (index, counter) {
      return parseInt($(counter).text().trim(), 10);
    }).get();
  }

  (0, _qunit.module)('Acceptance | ember keyboard', {
    beforeEach: function beforeEach() {
      this.application = (0, _dummyTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('test standard functionality', function (assert) {
    assert.expect(7);

    visit('/test-scenario').then(function () {
      return keyDown('ArrowRight');
    }).then(function () {
      assert.deepEqual(getValues(), [1, 1, 1], 'equal responders all respond');

      fillIn((0, _emberHook.hook)('counter') + ':nth(0) ' + (0, _emberHook.hook)('counter-priority-input'), '1');

      triggerEvent((0, _emberHook.hook)('counter') + ':nth(0) ' + (0, _emberHook.hook)('counter-priority-input'), 'blur');

      return keyDown('ArrowRight');
    }).then(function () {
      assert.deepEqual(getValues(), [2, 1, 1], 'highest responder responds first');

      click((0, _emberHook.hook)('counter') + ':nth(1) ' + (0, _emberHook.hook)('counter-first-responder-toggle'));

      return keyDown('ArrowRight');
    }).then(function () {
      assert.deepEqual(getValues(), [2, 2, 1], 'first responder responds first');

      click((0, _emberHook.hook)('counter') + ':nth(1) ' + (0, _emberHook.hook)('counter-lax-priority-toggle'));

      return keyDown('ArrowRight');
    }).then(function () {
      assert.deepEqual(getValues(), [3, 3, 1], 'lax priority does not block lower priority responders');

      click((0, _emberHook.hook)('counter') + ':nth(0) ' + (0, _emberHook.hook)('counter-activated-toggle'));

      return keyDown('ArrowRight');
    }).then(function () {
      assert.deepEqual(getValues(), [3, 4, 2], 'deactivating a responder removes it from the stack');

      return keyDown('ArrowRight+ctrl+shift');
    }).then(function () {
      assert.deepEqual(getValues(), [3, 104, 102], 'modifier keys work');

      return keyUp('KeyR');
    }).then(function () {
      assert.deepEqual(getValues(), [3, 0, 0], 'keyUp works');
    });
  });
});
define('dummy/tests/acceptance/ember-keyboard-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/ember-keyboard-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/ember-keyboard-test.js should pass jshint.');
  });
});
define('dummy/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/blanket-options', ['exports'], function (exports) {
  /* globals blanket, module */

  var options = {
    modulePrefix: 'ember-keyboard',
    filter: '//.*ember-keyboard/.*/',
    antifilter: '//.*(tests|template).*/',
    loaderExclusions: [],
    enableCoverage: true,
    cliOptions: {
      reporters: ['lcov'],
      autostart: true,
      lcovOptions: {
        outputFile: 'lcov.info',
        //provide a function to rename es6 modules to a file path
        renamer: function renamer(moduleName) {
          var root = /^ember-keyboard/;
          return moduleName.replace(root, 'addon') + '.js';
        }
      }
    }
  };
  if (typeof exports === 'undefined') {
    blanket.options(options);
  } else {
    module.exports = options;
  }
});
define('dummy/tests/blanket-options.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | blanket-options.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'blanket-options.js should pass jshint.');
  });
});
define('dummy/tests/components/key-down-counter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/key-down-counter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/key-down-counter.js should pass jshint.');
  });
});
define('dummy/tests/components/keyboard-activated-widget.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/keyboard-activated-widget.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/keyboard-activated-widget.js should pass jshint.');
  });
});
define('dummy/tests/components/keyboard-first-responder-widget.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/keyboard-first-responder-widget.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/keyboard-first-responder-widget.js should pass jshint.');
  });
});
define('dummy/tests/components/keyboard-lax-priority-widget.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/keyboard-lax-priority-widget.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/keyboard-lax-priority-widget.js should pass jshint.');
  });
});
define('dummy/tests/components/keyboard-priority-widget.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/keyboard-priority-widget.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/keyboard-priority-widget.js should pass jshint.');
  });
});
define('dummy/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember', 'ember-keyboard'], function (exports, _ember, _emberKeyboard) {

  var keyEvent = function keyEvent(app, attributes, type) {
    var event = attributes.split('+').reduce(function (event, attribute) {
      if (['ctrl', 'meta', 'alt', 'shift'].indexOf(attribute) > -1) {
        event[attribute + 'Key'] = true;
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(document, type, event);
  };

  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('keyDown', function (app, attributes) {
      return keyEvent(app, attributes, 'keydown');
    });

    _ember['default'].Test.registerAsyncHelper('keyUp', function (app, attributes) {
      return keyEvent(app, attributes, 'keyup');
    });

    _ember['default'].Test.registerAsyncHelper('keyPress', function (app, attributes) {
      return keyEvent(app, attributes, 'keypress');
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment', 'dummy/tests/helpers/ember-keyboard/register-test-helpers'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment, _dummyTestsHelpersEmberKeyboardRegisterTestHelpers) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      (0, _dummyTestsHelpersEmberKeyboardRegisterTestHelpers['default'])();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/mixins/enterable.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | mixins/enterable.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/enterable.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/routes/mixins.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/mixins.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/mixins.js should pass jshint.');
  });
});
define('dummy/tests/routes/priority.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/priority.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/priority.js should pass jshint.');
  });
});
define('dummy/tests/routes/testing.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/testing.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/testing.js should pass jshint.');
  });
});
define('dummy/tests/routes/usage.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/usage.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/usage.js should pass jshint.');
  });
});
define('dummy/tests/services/widget-manager.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/widget-manager.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/widget-manager.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/unit/listeners/key-events-test', ['exports', 'ember-keyboard', 'qunit'], function (exports, _emberKeyboard, _qunit) {

  (0, _qunit.module)('Unit | Listener | key events');

  (0, _qunit.test)('`keyDown` sorts the provided keys and prefixes `keydown:`', function (assert) {
    var result = (0, _emberKeyboard.keyDown)('m+shift+ctrl');

    assert.equal(result, 'keydown:ctrl+m+shift', 'it returns the correct value');
  });

  (0, _qunit.test)('`keyUp` sorts the provided keys and prefixes `keyup:`', function (assert) {
    var result = (0, _emberKeyboard.keyUp)('m+shift+ctrl');

    assert.equal(result, 'keyup:ctrl+m+shift', 'it returns the correct value');
  });

  (0, _qunit.test)('`keyUp` and `keyDown` error is provided an unparsable keys', function (assert) {
    assert.expect(1);

    assert.logs('error', '`asdf` is not a valid key name', function () {
      (0, _emberKeyboard.keyUp)('asdf+shift+ctrl');
    });
  });
});
define('dummy/tests/unit/listeners/key-events-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/listeners/key-events-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/listeners/key-events-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/services/keyboard-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {
  var get = _ember['default'].get;

  (0, _emberQunit.moduleFor)('service:keyboard', 'Unit | Service | keyboard');

  (0, _emberQunit.test)('`isDestroying` removes the jquery listeners', function (assert) {
    var service = this.subject();

    service.isDestroying();

    var listeners = _ember['default'].$._data(document);

    assert.ok(!get(listeners, 'events.keyup'), 'listeners have been removed');
  });
});
define('dummy/tests/unit/services/keyboard-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/keyboard-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/keyboard-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/utils/generate-code-map-test', ['exports', 'ember', 'ember-keyboard/utils/generate-code-map', 'qunit', 'ember-keyboard/fixtures/code-maps/default'], function (exports, _ember, _emberKeyboardUtilsGenerateCodeMap, _qunit, _emberKeyboardFixturesCodeMapsDefault) {
  var isNone = _ember['default'].isNone;

  (0, _qunit.module)('Unit | Utility | generate code map');

  (0, _qunit.test)('without navigator-derived arguments, it returns default values', function (assert) {
    assert.expect(1);

    var result = (0, _emberKeyboardUtilsGenerateCodeMap['default'])();

    assert.deepEqual(result, _emberKeyboardFixturesCodeMapsDefault['default'], 'uses default');
  });

  (0, _qunit.test)('when product===gecko', function (assert) {
    assert.expect(4);

    var result = (0, _emberKeyboardUtilsGenerateCodeMap['default'])('', 'Gecko');

    assert.equal(result[91], 'OSRight', 'trumps default');
    assert.ok(isNone(result[108]), 'does not use gecko/linux map');
    assert.equal(result[12], 'NumpadEqual', 'does not use gecko/mac map');
    assert.equal(result[65], 'KeyA', 'based on default map');
  });

  (0, _qunit.test)('when product===gecko and platform===linux', function (assert) {
    assert.expect(3);

    var result = (0, _emberKeyboardUtilsGenerateCodeMap['default'])('Linux', 'Gecko');

    assert.equal(result[91], 'OSRight', 'trumps default with gecko map');
    assert.equal(result[225], 'AltRight', 'applies gecko/linux map');
    assert.equal(result[65], 'KeyA', 'based on default map');
  });

  (0, _qunit.test)('when product===gecko and platform===mac', function (assert) {
    assert.expect(3);

    var result = (0, _emberKeyboardUtilsGenerateCodeMap['default'])('Mac', 'Gecko');

    assert.equal(result[91], 'OSRight', 'trumps default with gecko map');
    assert.equal(result[12], 'NumLock', 'applies gecko/mac map');
    assert.equal(result[65], 'KeyA', 'based on default map');
  });

  (0, _qunit.test)('when product===chromium and platform===linux', function (assert) {
    assert.expect(2);

    var result = (0, _emberKeyboardUtilsGenerateCodeMap['default'])('Linux', 'Chromium');

    assert.equal(result[187], 'NumpadEqual', 'trumps default with chromium linux');
    assert.equal(result[65], 'KeyA', 'based on default map');
  });

  (0, _qunit.test)('when product===chrome and platform===mac', function (assert) {
    assert.expect(2);

    var result = (0, _emberKeyboardUtilsGenerateCodeMap['default'])('Mac', 'Chrome');

    assert.equal(result[190], 'NumpadComma', 'trumps default with mac map');
    assert.equal(result[65], 'KeyA', 'based on default map');
  });

  (0, _qunit.test)('when product===safari and platform===mac', function (assert) {
    assert.expect(2);

    var result = (0, _emberKeyboardUtilsGenerateCodeMap['default'])('Mac', 'Safari');

    assert.equal(result[190], 'NumpadComma', 'trumps default with mac map');
    assert.equal(result[65], 'KeyA', 'based on default map');
  });
});
define('dummy/tests/unit/utils/generate-code-map-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/generate-code-map-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/generate-code-map-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/utils/get-code-test', ['exports', 'ember-keyboard', 'qunit'], function (exports, _emberKeyboard, _qunit) {

  (0, _qunit.module)('Unit | Utility | get code');

  (0, _qunit.test)('`getCode` will get the `key` off the event if available', function (assert) {
    var result = (0, _emberKeyboard.getCode)({ code: 'foo' });

    assert.equal(result, 'foo', 'it returns the correct value');
  });

  (0, _qunit.test)('`getCode` will translate the `keyCode` if there is no `key`', function (assert) {
    var result = (0, _emberKeyboard.getCode)({ keyCode: 219 });

    assert.equal(result, 'BracketLeft', 'it returns the correct value');
  });
});
define('dummy/tests/unit/utils/get-code-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/get-code-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/get-code-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/utils/get-key-code-test', ['exports', 'ember-keyboard', 'qunit'], function (exports, _emberKeyboard, _qunit) {

  (0, _qunit.module)('Unit | Utility | get key code');

  (0, _qunit.test)('`getKeyCode` will return the `keyCode` associated with the provided `key`', function (assert) {
    var result = (0, _emberKeyboard.getKeyCode)('BracketLeft');

    assert.equal(result, '219', 'it returns the correct keyCode');
  });
});
define('dummy/tests/unit/utils/get-key-code-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/get-key-code-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/get-key-code-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/utils/listener-name-test', ['exports', 'dummy/utils/listener-name', 'qunit'], function (exports, _dummyUtilsListenerName, _qunit) {

  (0, _qunit.module)('Unit | Utility | listener name');

  (0, _qunit.test)('it returns a sorted list of keys after the event name', function (assert) {
    var result = (0, _dummyUtilsListenerName['default'])('keydown', ['c', 'a', 'b']);

    assert.equal(result, 'keydown:a+b+c', 'name is correctly formatted');
  });

  (0, _qunit.test)('it returns `_all` if the keys array is empty', function (assert) {
    var result = (0, _dummyUtilsListenerName['default'])('keydown');

    assert.equal(result, 'keydown:_all', 'name is correctly formatted');
  });
});
define('dummy/tests/unit/utils/listener-name-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/listener-name-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/listener-name-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map