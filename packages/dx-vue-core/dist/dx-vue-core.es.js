/**
 * Bundle of @devexpress/dx-vue-core
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

import { PluginHost, shallowEqual } from '@devexpress/dx-core';

var PLUGIN_HOST_CONTEXT = Symbol('pluginHost');
var POSITION_CONTEXT = Symbol('position');
var TEMPLATE_HOST_CONTEXT = Symbol('templateHost');

var RERENDER_TEMPLATE_EVENT = Symbol('rerenderTemplate');
var UPDATE_CONNECTION_EVENT = Symbol('updateConnection');

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();













var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var PluginIndexerContext = {
  name: 'PluginIndexerContext',
  props: {
    position: {
      type: Function,
      required: true
    }
  },
  provide: function provide() {
    return defineProperty({}, POSITION_CONTEXT, this.position);
  },
  render: function render() {
    return this.$slots.default && this.$slots.default[0];
  }
};

var PluginIndexer = {
  name: 'PluginIndexer',
  inject: {
    position: {
      from: POSITION_CONTEXT,
      default: undefined
    }
  },
  render: function render() {
    var h = arguments[0];
    var position = this.position;


    return h('div', [this.$slots.default.map(function (child, index) {
      if (!child.componentOptions) return child;

      var childPosition = function childPosition() {
        var calculatedPosition = position && position() || [];
        return [].concat(toConsumableArray(calculatedPosition), [index]);
      };

      return h(
        PluginIndexerContext,
        {
          attrs: { position: childPosition }
        },
        [child]
      );
    })]);
  }
};

var DxTemplatePlaceholder = {
  name: 'DxTemplatePlaceholder',
  inheritAttrs: false,
  props: {
    name: {
      type: String
    }
  },
  provide: function provide() {
    var _this = this;

    var templateHost = {};
    Object.defineProperty(templateHost, 'params', {
      enumerable: true,
      get: function get$$1() {
        return _this.computedParams;
      }
    });
    Object.defineProperty(templateHost, 'templates', {
      enumerable: true,
      get: function get$$1() {
        return _this.computedTemplates.slice(1);
      }
    });
    return defineProperty({}, TEMPLATE_HOST_CONTEXT, templateHost);
  },

  inject: {
    pluginHost: { from: PLUGIN_HOST_CONTEXT },
    templateHost: {
      from: TEMPLATE_HOST_CONTEXT,
      default: { templates: [], params: undefined }
    }
  },
  created: function created() {
    var _this2 = this;

    this.subscription = defineProperty({}, RERENDER_TEMPLATE_EVENT, function (id) {
      if (_this2.computedTemplates[0] && _this2.computedTemplates[0].id === id) {
        _this2.$forceUpdate();
      }
    });
  },
  beforeMount: function beforeMount() {
    this.pluginHost.registerSubscription(this.subscription);
  },

  computed: {
    computedParams: function computedParams() {
      var that = this;
      return !Object.keys(this.$attrs).length && !Object.keys(this.$listeners).length ? this.templateHost.params : {
        get attrs() {
          return that.$attrs;
        },
        get listeners() {
          return that.$listeners;
        },
        get slots() {
          return that.$slots;
        },
        get scopedSlots() {
          return that.$scopedSlots;
        }
      };
    },
    computedTemplates: function computedTemplates() {
      var _this3 = this;

      return this.name ? this.pluginHost.collect(this.name + 'Template').filter(function (template) {
        return template.predicate(_this3.computedParams);
      }).reverse() : this.templateHost.templates;
    }
  },
  render: function render() {
    var template = this.computedTemplates[0];

    var content = template ? template.children() : null;
    if (content && typeof content === 'function') {
      content = content(this.computedParams);
    }
    if (this.$scopedSlots.default) {
      content = this.$scopedSlots.default(content);
    }
    return content && content.length ? content[0] : content;
  },
  destroyed: function destroyed() {
    this.pluginHost.unregisterSubscription(this.subscription);
  }
};

var DxPluginHost = {
  name: 'DxPluginHost',
  beforeCreate: function beforeCreate() {
    this.pluginHost = new PluginHost();
  },
  provide: function provide() {
    return defineProperty({}, PLUGIN_HOST_CONTEXT, this.pluginHost);
  },
  render: function render() {
    var h = arguments[0];

    return h('div', [h(PluginIndexer, [this.$slots.default]), h(DxTemplatePlaceholder, {
      attrs: { name: 'root' }
    })]);
  }
};

var DxPlugin = {
  name: 'DxPlugin',
  props: {
    name: {
      type: String,
      default: ''
    },
    dependencies: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  inject: {
    pluginHost: { from: PLUGIN_HOST_CONTEXT },
    position: { from: POSITION_CONTEXT }
  },
  beforeMount: function beforeMount() {
    var pluginHost = this.pluginHost,
        position = this.position,
        name = this.name,
        dependencies = this.dependencies;


    this.plugin = {
      position: position,
      name: name,
      dependencies: dependencies,
      container: true
    };
    pluginHost.registerPlugin(this.plugin);
  },
  beforeUpdate: function beforeUpdate() {
    this.pluginHost.ensureDependencies();
  },
  beforeDestroy: function beforeDestroy() {
    this.pluginHost.unregisterPlugin(this.plugin);
  },
  render: function render() {
    var h = arguments[0];

    return h(PluginIndexer, [this.$slots.default]);
  }
};

var getAvailableGetters = function getAvailableGetters(pluginHost) {
  var getGetterValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (getterName) {
    return pluginHost.get(getterName + 'Getter');
  };

  var trackedDependencies = {};

  var getters = void 0;
  if (typeof Proxy !== 'undefined') {
    getters = new Proxy({}, {
      get: function get$$1(target, prop) {
        if (typeof prop !== 'string') return undefined;
        var boxedGetter = getGetterValue(prop);
        trackedDependencies[prop] = boxedGetter && boxedGetter.id;
        return boxedGetter && boxedGetter.value;
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
        return { configurable: true, enumerable: true, value: this.get(target, prop) };
      },
      ownKeys: function ownKeys() {
        return pluginHost.knownKeys('Getter');
      }
    });
  } else {
    getters = pluginHost.knownKeys('Getter').reduce(function (acc, getterName) {
      Object.defineProperty(acc, getterName, {
        get: function get$$1() {
          var boxedGetter = getGetterValue(getterName);
          trackedDependencies[getterName] = boxedGetter && boxedGetter.id;
          return boxedGetter && boxedGetter.value;
        }
      });
      return acc;
    }, {});
  }

  return { getters: getters, trackedDependencies: trackedDependencies };
};

var isTrackedDependenciesChanged = function isTrackedDependenciesChanged(pluginHost, prevTrackedDependencies) {
  var getGetterValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (getterName) {
    return pluginHost.get(getterName + 'Getter');
  };

  var trackedDependencies = Object.keys(prevTrackedDependencies).reduce(function (acc, getterName) {
    var boxedGetter = getGetterValue(getterName);
    return Object.assign(acc, defineProperty({}, getterName, boxedGetter && boxedGetter.id));
  }, {});
  return !shallowEqual(prevTrackedDependencies, trackedDependencies);
};

var getAvailableActions = function getAvailableActions(pluginHost) {
  var getAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (actionName) {
    return pluginHost.collect(actionName + 'Action').slice().reverse()[0];
  };

  var actions = void 0;
  if (typeof Proxy !== 'undefined') {
    actions = new Proxy({}, {
      get: function get$$1(target, prop) {
        if (typeof prop !== 'string') return undefined;
        return getAction(prop);
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
        return { configurable: true, enumerable: true, value: this.get(target, prop) };
      },
      ownKeys: function ownKeys() {
        return pluginHost.knownKeys('Action');
      }
    });
  } else {
    actions = pluginHost.knownKeys('Action').reduce(function (acc, actionName) {
      Object.defineProperty(acc, actionName, {
        get: function get$$1() {
          return getAction(actionName);
        }
      });
      return acc;
    }, {});
  }
  return actions;
};

var DxAction = {
  name: 'DxAction',
  props: {
    name: {
      type: String,
      required: true
    },
    action: {
      type: Function,
      required: true
    }
  },
  inject: {
    pluginHost: { from: PLUGIN_HOST_CONTEXT },
    position: { from: POSITION_CONTEXT }
  },
  beforeMount: function beforeMount() {
    var _this = this;

    var pluginHost = this.pluginHost,
        name = this.name;


    this.plugin = defineProperty({
      position: function position() {
        return _this.position();
      }
    }, name + 'Action', function undefined(params) {
      var action = _this.action;

      var _getAvailableGetters = getAvailableGetters(pluginHost, function (getterName) {
        return pluginHost.get(getterName + 'Getter', _this.plugin);
      }),
          getters = _getAvailableGetters.getters;

      var nextParams = params;
      var actions = getAvailableActions(pluginHost, function (actionName) {
        return actionName === name ? function (newParams) {
          nextParams = newParams;
        } : pluginHost.collect(actionName + 'Action', _this.plugin).slice().reverse()[0];
      });
      action(params, getters, actions);
      var nextAction = pluginHost.collect(name + 'Action', _this.plugin).slice().reverse()[0];
      if (nextAction) {
        nextAction(nextParams);
      }
    });

    pluginHost.registerPlugin(this.plugin);
  },
  beforeDestroy: function beforeDestroy() {
    this.pluginHost.unregisterPlugin(this.plugin);
  },
  render: function render() {
    return null;
  }
};

var GLOBAL_SHIFT = 0xffff;

var globalGetterId = 0;
var DxGetter = {
  name: 'DxGetter',
  props: {
    name: {
      type: String,
      required: true
    },
    value: null,
    computed: {
      type: Function,
      default: undefined
    }
  },
  inject: {
    pluginHost: { from: PLUGIN_HOST_CONTEXT },
    position: { from: POSITION_CONTEXT }
  },
  created: function created() {
    this.globalId = globalGetterId;
    globalGetterId += 1;
    this.internalId = 0;
    this.generateId();
  },
  beforeMount: function beforeMount() {
    var _this = this;

    var pluginHost = this.pluginHost,
        name = this.name;


    var lastComputed = void 0;
    var lastTrackedDependencies = {};
    var lastResult = void 0;
    var unwatch = void 0;

    this.plugin = defineProperty({
      position: function position() {
        return _this.position();
      }
    }, name + 'Getter', function (_undefined) {
      function undefined(_x) {
        return _undefined.apply(this, arguments);
      }

      undefined.toString = function () {
        return _undefined.toString();
      };

      return undefined;
    }(function (original) {
      var value = _this.value,
          computed = _this.computed;

      if (computed === undefined) return { id: _this.id, value: value };

      var getGetterValue = function getGetterValue(getterName) {
        return getterName === name ? original : pluginHost.get(getterName + 'Getter', _this.plugin);
      };

      if (computed === lastComputed && !isTrackedDependenciesChanged(pluginHost, lastTrackedDependencies, getGetterValue)) {
        return { id: _this.id, value: lastResult };
      }

      var _getAvailableGetters = getAvailableGetters(pluginHost, getGetterValue),
          getters = _getAvailableGetters.getters,
          trackedDependencies = _getAvailableGetters.trackedDependencies;

      var actions = getAvailableActions(pluginHost);

      lastComputed = computed;
      lastTrackedDependencies = trackedDependencies;
      if (unwatch) unwatch();
      unwatch = _this.$watch(function () {
        return computed(getters, actions);
      }, function (newValue) {
        _this.generateId();
        lastResult = newValue;
      }, { immediate: true });
      return { id: _this.id, value: lastResult };
    }));

    pluginHost.registerPlugin(this.plugin);
  },
  beforeDestroy: function beforeDestroy() {
    this.pluginHost.unregisterPlugin(this.plugin);
  },
  render: function render() {
    return null;
  },

  methods: {
    generateId: function generateId() {
      this.internalId = this.internalId + 1 < GLOBAL_SHIFT ? this.internalId + 1 : 0;
      // eslint-disable-next-line no-bitwise
      this.id = (this.globalId << GLOBAL_SHIFT) + this.internalId;
    }
  },
  watch: {
    value: function value() {
      this.generateId();
      this.pluginHost.broadcast(UPDATE_CONNECTION_EVENT);
    }
  }
};

var globalTemplateId = 0;
var DxTemplate = {
  name: 'DxTemplate',
  props: {
    name: {
      type: String,
      required: true
    },
    predicate: {
      type: Function
    }
  },
  beforeCreate: function beforeCreate() {
    globalTemplateId += 1;
    this.id = globalTemplateId;
  },

  inject: {
    pluginHost: { from: PLUGIN_HOST_CONTEXT },
    position: { from: POSITION_CONTEXT }
  },
  created: function created() {
    var _this = this;

    this.plugin = defineProperty({
      position: function position() {
        return _this.position();
      }
    }, this.name + 'Template', {
      id: this.id,
      predicate: function predicate(params) {
        return _this.predicate ? _this.predicate(params) : true;
      },
      children: function children() {
        return _this.$scopedSlots.default || _this.$slots.default;
      }
    });
  },
  beforeMount: function beforeMount() {
    this.pluginHost.registerPlugin(this.plugin);
  },
  render: function render() {
    return null;
  },
  updated: function updated() {
    this.pluginHost.broadcast(RERENDER_TEMPLATE_EVENT, this.id);
  },
  destroyed: function destroyed() {
    this.pluginHost.unregisterPlugin(this.plugin);
  }
};

var DxTemplateConnector = {
  name: 'DxTemplateConnector',
  inject: {
    pluginHost: { from: PLUGIN_HOST_CONTEXT }
  },
  beforeMount: function beforeMount() {
    var _this = this;

    this.trackedDependencies = {};
    this.subscription = defineProperty({}, UPDATE_CONNECTION_EVENT, function () {
      return _this.updateConnection();
    });
    this.pluginHost.registerSubscription(this.subscription);
  },
  beforeDestroy: function beforeDestroy() {
    this.pluginHost.unregisterSubscription(this.subscription);
  },

  methods: {
    updateConnection: function updateConnection() {
      if (isTrackedDependenciesChanged(this.pluginHost, this.trackedDependencies)) {
        this.$forceUpdate();
      }
    }
  },
  render: function render() {
    var _getAvailableGetters = getAvailableGetters(this.pluginHost),
        getters = _getAvailableGetters.getters,
        trackedDependencies = _getAvailableGetters.trackedDependencies;

    this.trackedDependencies = trackedDependencies;
    var actions = getAvailableActions(this.pluginHost);

    return this.$scopedSlots.default({ getters: getters, actions: actions });
  }
};

var styles = {
  root: {
    position: 'relative'
  },
  triggers: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    zIndex: -1,
    visibility: 'hidden',
    opacity: 0
  },
  expand: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    overflow: 'auto'
  },
  contract: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    overflow: 'auto'
  },
  contractTrigger: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '200%',
    height: '200%'
  }
};

var DxSizer = {
  name: 'DxSizer',
  inheritAttrs: false,
  data: function data() {
    return {
      width: 0,
      height: 0
    };
  },
  mounted: function mounted() {
    this.setupListeners();
  },

  methods: {
    setupListeners: function setupListeners() {
      var size = { height: this.$refs.root.offsetHeight, width: this.$refs.root.offsetWidth };

      this.$refs.contract.scrollTop = size.height;
      this.$refs.contract.scrollLeft = size.width;

      this.$refs.expandTrigger.style.width = size.width + 1 + 'px';
      this.$refs.expandTrigger.style.height = size.height + 1 + 'px';
      this.$refs.expand.scrollTop = 1;
      this.$refs.expand.scrollLeft = 1;

      if (this.width === size.width && this.height === size.height) return;

      this.width = size.width;
      this.height = size.height;
    }
  },
  render: function render() {
    var h = arguments[0];
    var width = this.width,
        height = this.height;

    return h(
      'div',
      {
        ref: 'root',
        style: styles.root
      },
      [width && height && this.$scopedSlots.default({ width: width, height: height }), h(
        'div',
        { style: styles.triggers },
        [h(
          'div',
          {
            ref: 'expand',
            style: styles.expand,
            on: {
              'scroll': this.setupListeners
            }
          },
          [h('div', {
            ref: 'expandTrigger'
          })]
        ), h(
          'div',
          {
            ref: 'contract',
            style: styles.contract,
            on: {
              'scroll': this.setupListeners
            }
          },
          [h('div', {
            style: styles.contractTrigger
          })]
        )]
      )]
    );
  }
};

var DxRefHolder = {
  name: 'DxRefHolder',
  inheritAttrs: false,
  render: function render() {
    return this.$slots.default[0];
  }
};

var createRenderComponent = function createRenderComponent(Component, initialAdditionalProps) {
  var storedAdditionalProps = initialAdditionalProps;
  var components = new Set();

  var RenderComponent = {
    name: 'RenderComponent',
    inheritAttrs: false,
    beforeMount: function beforeMount() {
      components.add(this);
    },
    beforeDestroy: function beforeDestroy() {
      components.delete(this);
    },
    render: function render() {
      var h = arguments[0];

      return h(Component, { attrs: _extends({}, this.$attrs, storedAdditionalProps), on: _extends({}, this.$listeners) });
    }
  };

  return {
    component: RenderComponent,
    update: function update(additionalProps) {
      storedAdditionalProps = additionalProps;
      Array.from(components.values()).forEach(function (component) {
        return component.$forceUpdate();
      });
    }
  };
};

export { DxPluginHost, DxPlugin, DxAction, DxGetter, DxTemplate, DxTemplatePlaceholder, DxTemplateConnector, DxSizer, DxRefHolder, createRenderComponent };
//# sourceMappingURL=dx-vue-core.es.js.map
