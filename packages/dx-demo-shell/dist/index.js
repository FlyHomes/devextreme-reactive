import { Component, PureComponent, createElement } from 'react';
import { render } from 'react-dom';
import { arrayOf, bool, func, node, object, shape, string } from 'prop-types';
import { HashRouter, Link, MemoryRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Button, ControlLabel, Dropdown, FormControl, FormGroup, InputGroup, MenuItem, Nav, NavItem, Tab } from 'react-bootstrap';
import Frame from 'react-frame-component';
import prism from 'prismjs';
import 'prismjs/components/prism-jsx';

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





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Toggle = function (_React$PureComponent) {
  inherits(Toggle, _React$PureComponent);

  function Toggle() {
    classCallCheck(this, Toggle);
    return possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
  }

  createClass(Toggle, [{
    key: 'render',
    value: function render$$1() {
      var _props = this.props,
          children = _props.children,
          _onClick = _props.onClick;


      return createElement(
        'a',
        {
          className: 'toggle',
          href: '',
          onClick: function onClick(e) {
            e.preventDefault();
            _onClick(e);
          }
        },
        createElement(
          'span',
          { className: 'caption' },
          children
        ),
        createElement('span', { className: 'caret' })
      );
    }
  }]);
  return Toggle;
}(PureComponent);

Toggle.propTypes = {
  children: node.isRequired,
  onClick: func
};

Toggle.defaultProps = {
  onClick: function onClick() {}
};

var ThemeSelector = function ThemeSelector(_ref, _ref2) {
  var selectedThemeName = _ref.selectedThemeName,
      selectedVariantName = _ref.selectedVariantName,
      availableThemes = _ref.availableThemes,
      onChange = _ref.onChange;
  var _ref2$embeddedDemoOpt = _ref2.embeddedDemoOptions,
      showThemeVariants = _ref2$embeddedDemoOpt.showThemeVariants,
      themeSources = _ref2$embeddedDemoOpt.themeSources;

  var selectedTheme = themeSources.find(function (_ref3) {
    var name = _ref3.name;
    return name === selectedThemeName;
  });

  return createElement(
    Dropdown,
    {
      id: 'theme-toggle',
      className: 'template-chooser',
      onSelect: function onSelect(eventKey) {
        var _eventKey$split = eventKey.split('|'),
            _eventKey$split2 = slicedToArray(_eventKey$split, 2),
            theme = _eventKey$split2[0],
            variant = _eventKey$split2[1];

        if (selectedThemeName !== theme || selectedVariantName !== variant) {
          onChange(theme, variant);
        }
      }
    },
    createElement(
      Toggle,
      { bsRole: 'toggle' },
      showThemeVariants ? selectedTheme.variants.find(function (_ref4) {
        var name = _ref4.name;
        return name === selectedVariantName;
      }).title : selectedTheme.title
    ),
    createElement(
      Dropdown.Menu,
      null,
      themeSources.reduce(function (acc, _ref5) {
        var themeName = _ref5.name,
            themeTitle = _ref5.title,
            variants = _ref5.variants;

        var available = availableThemes.indexOf(themeName) > -1;
        var activeTheme = themeName === selectedThemeName;

        if (!available) return acc;
        if (!showThemeVariants) {
          acc.push(createElement(
            MenuItem,
            {
              key: themeName,
              eventKey: themeName + '|' + variants[0].name,
              active: activeTheme
            },
            themeTitle
          ));
        } else {
          acc.push(variants.map(function (_ref6) {
            var variantName = _ref6.name,
                variantTitle = _ref6.title;

            var activeVariant = variantName === selectedVariantName;

            return createElement(
              MenuItem,
              {
                key: themeName + '|' + variantName,
                eventKey: themeName + '|' + variantName,
                active: activeTheme && activeVariant
              },
              variantTitle
            );
          }));
        }
        return acc;
      }, [])
    )
  );
};

ThemeSelector.propTypes = {
  selectedThemeName: string.isRequired,
  selectedVariantName: string.isRequired,
  availableThemes: arrayOf(string).isRequired,
  onChange: func.isRequired
};

ThemeSelector.contextTypes = {
  embeddedDemoOptions: object.isRequired
};

var THEME_STORAGE_KEY = 'devextreme-reactive/react/theme';
var VARIANT_STORAGE_KEY = 'devextreme-reactive/react/theme-variant';

var storage = { getItem: function getItem() {
    return undefined;
  }, setItem: function setItem() {
    return undefined;
  } };
try {
  storage = window.localStorage;
} catch (e) {} // eslint-disable-line no-empty

var ThemeViewerBase = function ThemeViewerBase(_ref, _ref2) {
  var availableThemes = _ref.availableThemes,
      url = _ref.match.url,
      history = _ref.history,
      children = _ref.children;
  var _ref2$embeddedDemoOpt = _ref2.embeddedDemoOptions,
      themeSources = _ref2$embeddedDemoOpt.themeSources,
      showThemeVariants = _ref2$embeddedDemoOpt.showThemeVariants,
      showThemeSelector = _ref2$embeddedDemoOpt.showThemeSelector;

  var normalizedAvailableThemes = availableThemes || themeSources.map(function (theme) {
    return theme.name;
  });

  var preferredThemeName = storage.getItem(THEME_STORAGE_KEY) || themeSources[0].name;
  var preferredThemeAvailable = normalizedAvailableThemes.indexOf(preferredThemeName) > -1;
  var fallbackThemeName = preferredThemeAvailable ? preferredThemeName : normalizedAvailableThemes[0];

  var fallbackTheme = themeSources.find(function (_ref3) {
    var name = _ref3.name;
    return name === fallbackThemeName;
  });

  var preferredVariantName = showThemeVariants ? storage.getItem(VARIANT_STORAGE_KEY) : fallbackTheme.variants[0].name;
  var preferredVariantAvailable = fallbackTheme.variants.some(function (_ref4) {
    var name = _ref4.name;
    return name === preferredVariantName;
  });
  var fallbackVariantName = preferredVariantAvailable ? preferredVariantName : fallbackTheme.variants[0].name;

  var changeTheme = function changeTheme(theme, variant) {
    storage.setItem(THEME_STORAGE_KEY, theme);
    storage.setItem(VARIANT_STORAGE_KEY, variant);
    history.push(url + '/' + theme + '/' + variant);
  };

  return createElement(
    Switch,
    null,
    createElement(Route, {
      path: url + '/:themeName/:variantName',
      render: function render$$1(_ref5) {
        var _ref5$match$params = _ref5.match.params,
            themeName = _ref5$match$params.themeName,
            variantName = _ref5$match$params.variantName;
        return createElement(
          'div',
          null,
          showThemeSelector && createElement(ThemeSelector, {
            selectedThemeName: themeName,
            availableThemes: normalizedAvailableThemes,
            selectedVariantName: variantName,
            onChange: changeTheme
          }),
          createElement(
            'div',
            null,
            children({ themeName: themeName, variantName: variantName })
          )
        );
      }
    }),
    createElement(Redirect, { from: '' + url, to: url + '/' + fallbackThemeName + '/' + fallbackVariantName })
  );
};

ThemeViewerBase.propTypes = {
  availableThemes: arrayOf(string),
  match: shape({
    url: string.isRequired
  }).isRequired,
  history: object.isRequired,
  children: func.isRequired
};

ThemeViewerBase.defaultProps = {
  availableThemes: undefined
};

ThemeViewerBase.contextTypes = {
  embeddedDemoOptions: object.isRequired
};

var ThemeViewer = withRouter(ThemeViewerBase);

var DemoRenderer = function (_React$Component) {
  inherits(DemoRenderer, _React$Component);

  function DemoRenderer() {
    classCallCheck(this, DemoRenderer);
    return possibleConstructorReturn(this, (DemoRenderer.__proto__ || Object.getPrototypeOf(DemoRenderer)).apply(this, arguments));
  }

  createClass(DemoRenderer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderDemo();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderDemo();
    }
  }, {
    key: 'renderDemo',
    value: function renderDemo() {
      var _props = this.props,
          sectionName = _props.sectionName,
          demoName = _props.demoName,
          themeName = _props.themeName,
          variantName = _props.variantName;
      var embeddedDemoOptions = this.context.embeddedDemoOptions;
      var renderDemo = embeddedDemoOptions.renderDemo,
          unmountDemo = embeddedDemoOptions.unmountDemo,
          demoSources = embeddedDemoOptions.demoSources,
          themeSources = embeddedDemoOptions.themeSources;


      if (this.demoRenderSkipped) {
        unmountDemo({
          element: this.root
        });
      }

      var demoSource = void 0;
      try {
        demoSource = demoSources[sectionName][demoName][themeName].demo;
      } catch (e) {} // eslint-disable-line no-empty

      if (!demoSource) {
        this.demoRenderSkipped = true;
        this.root.textContent = 'DEMO NOT AVALIABLE!';
        return;
      }

      var demoContainerSource = themeSources.find(function (_ref) {
        var name = _ref.name;
        return name === themeName;
      }).variants.find(function (_ref2) {
        var name = _ref2.name;
        return name === variantName;
      }).DemoContainer;

      renderDemo({
        element: this.root,
        demo: demoSource,
        demoContainer: demoContainerSource
      });
      this.demoRenderSkipped = false;
    }
  }, {
    key: 'render',
    value: function render$$1() {
      var _this2 = this;

      return createElement('div', {
        ref: function ref(node$$1) {
          _this2.root = node$$1;
        }
      });
    }
  }]);
  return DemoRenderer;
}(Component);

DemoRenderer.propTypes = {
  sectionName: string.isRequired,
  demoName: string.isRequired,
  themeName: string.isRequired,
  variantName: string.isRequired
};

DemoRenderer.contextTypes = {
  embeddedDemoOptions: object.isRequired
};

var DemoFrameRenderer = function (_React$PureComponent) {
  inherits(DemoFrameRenderer, _React$PureComponent);

  function DemoFrameRenderer(props, context) {
    classCallCheck(this, DemoFrameRenderer);

    var _this = possibleConstructorReturn(this, (DemoFrameRenderer.__proto__ || Object.getPrototypeOf(DemoFrameRenderer)).call(this, props, context));

    var sectionName = props.sectionName,
        demoName = props.demoName,
        themeName = props.themeName,
        variantName = props.variantName;
    var _this$context$embedde = _this.context.embeddedDemoOptions,
        scriptPath = _this$context$embedde.scriptPath,
        themeSources = _this$context$embedde.themeSources;

    var themeVariantOptions = themeSources.find(function (theme) {
      return theme.name === themeName;
    }).variants.find(function (variant) {
      return variant.name === variantName;
    });
    var frameUrl = '/demo/' + sectionName + '/' + demoName + '/' + themeName + '/' + variantName;
    var themeLinks = themeVariantOptions.links ? themeVariantOptions.links.map(function (link) {
      return '<link rel="stylesheet" href="' + link + '">';
    }).join('\n') : '';
    _this.markup = function (link) {
      return '\n      <!DOCTYPE html>\n      <html>\n      <head>\n        ' + themeLinks + '\n        ' + (link !== undefined ? '<link rel="stylesheet" href="' + link + '">' : '') + '\n        <style>\n          body { margin: 8px; overflow: hidden; }\n          .panel { margin: 0; }\n        </style>\n      </head>\n      <body>\n        <div id="mountPoint"></div>\n        <div class="embedded-demo" data-options=\'{ "path": "' + frameUrl + '/clean", "frame": true }\'>\n          <div style="min-height: 500px;">Loading...</div>\n        </div>\n        <script src="' + scriptPath + '"></script>\n      </body>\n      </html>';
    };
    _this.state = {
      editableLink: themeVariantOptions.editableLink,
      frameHeight: 600
    };
    return _this;
  }

  createClass(DemoFrameRenderer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateFrameHeight();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var editableLink = this.state.editableLink;

      if (editableLink !== prevState.editableLink) {
        if (this.node) this.node.ownerDocument.location.reload();
      }
    }
  }, {
    key: 'updateFrameHeight',
    value: function updateFrameHeight() {
      var frameHeight = this.state.frameHeight;

      setTimeout(this.updateFrameHeight.bind(this));
      if (!this.node) return;
      var height = this.node.ownerDocument.documentElement.offsetHeight;
      if (height !== frameHeight) {
        this.setState({ frameHeight: height });
      }
    }
  }, {
    key: 'render',
    value: function render$$1() {
      var _this2 = this;

      var _props = this.props,
          sectionName = _props.sectionName,
          demoName = _props.demoName,
          themeName = _props.themeName,
          variantName = _props.variantName;
      var frame = this.context.embeddedDemoOptions.frame;
      var _state = this.state,
          editableLink = _state.editableLink,
          frameHeight = _state.frameHeight;


      return createElement(
        'div',
        null,
        !frame && !!editableLink ? createElement(
          'form',
          {
            style: { marginBottom: '20px' }
          },
          createElement(
            FormGroup,
            { controlId: 'customThemeLink' },
            createElement(
              ControlLabel,
              null,
              'Custom theme link'
            ),
            createElement(
              InputGroup,
              null,
              createElement(FormControl, {
                type: 'text',
                inputRef: function inputRef(node$$1) {
                  _this2.customThemeLinkNode = node$$1;
                },
                defaultValue: editableLink
              }),
              createElement(
                InputGroup.Button,
                null,
                createElement(
                  Button,
                  {
                    onClick: function onClick() {
                      _this2.setState({ editableLink: _this2.customThemeLinkNode.value });
                    }
                  },
                  'Apply'
                )
              )
            )
          )
        ) : null,
        frame ? createElement(DemoRenderer, {
          sectionName: sectionName,
          demoName: demoName,
          themeName: themeName,
          variantName: variantName
        }) : createElement(
          'div',
          {
            style: {
              margin: '-8px'
            }
          },
          createElement(
            Frame,
            {
              style: {
                border: 'none',
                width: '100%',
                height: frameHeight + 'px',
                marginBottom: '20px'
              },
              initialContent: this.markup(editableLink),
              mountTarget: '#mountPoint'
            },
            createElement('div', { ref: function ref(node$$1) {
                _this2.node = node$$1;
              } })
          )
        )
      );
    }
  }]);
  return DemoFrameRenderer;
}(PureComponent);

DemoFrameRenderer.propTypes = {
  sectionName: string.isRequired,
  demoName: string.isRequired,
  themeName: string.isRequired,
  variantName: string.isRequired
};

DemoFrameRenderer.contextTypes = {
  embeddedDemoOptions: object.isRequired
};

// eslint-disable-next-line react/no-multi-comp
var DemoFrame = function (_React$PureComponent2) {
  inherits(DemoFrame, _React$PureComponent2);

  function DemoFrame() {
    classCallCheck(this, DemoFrame);
    return possibleConstructorReturn(this, (DemoFrame.__proto__ || Object.getPrototypeOf(DemoFrame)).apply(this, arguments));
  }

  createClass(DemoFrame, [{
    key: 'render',
    value: function render$$1() {
      var Rerenderer = function Rerenderer(_ref) {
        var children = _ref.children;
        return children;
      };
      return createElement(
        Rerenderer,
        null,
        createElement(DemoFrameRenderer, this.props)
      );
    }
  }]);
  return DemoFrame;
}(PureComponent);

var SourceCode = function (_React$PureComponent) {
  inherits(SourceCode, _React$PureComponent);

  function SourceCode() {
    classCallCheck(this, SourceCode);
    return possibleConstructorReturn(this, (SourceCode.__proto__ || Object.getPrototypeOf(SourceCode)).apply(this, arguments));
  }

  createClass(SourceCode, [{
    key: 'render',
    value: function render$$1() {
      var _props = this.props,
          themeName = _props.themeName,
          sectionName = _props.sectionName,
          demoName = _props.demoName;
      var embeddedDemoOptions = this.context.embeddedDemoOptions;
      var demoSources = embeddedDemoOptions.demoSources;

      return createElement(
        'pre',
        { className: 'highlight language-jsx' },
        createElement('code', {
          className: 'language-jsx'
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: {
            __html: prism.highlight(demoSources[sectionName][demoName][themeName].source || '', prism.languages.jsx)
          }
        })
      );
    }
  }]);
  return SourceCode;
}(PureComponent);

SourceCode.propTypes = {
  sectionName: string.isRequired,
  demoName: string.isRequired,
  themeName: string.isRequired
};

SourceCode.contextTypes = {
  embeddedDemoOptions: object.isRequired
};

var DemoViewer = function DemoViewer(_ref, _ref2) {
  var _ref$match = _ref.match,
      _ref$match$params = _ref$match.params,
      demoName = _ref$match$params.demoName,
      sectionName = _ref$match$params.sectionName,
      url = _ref$match.url;
  var _ref2$embeddedDemoOpt = _ref2.embeddedDemoOptions,
      defaultTab = _ref2$embeddedDemoOpt.defaultTab,
      showThemeSelector = _ref2$embeddedDemoOpt.showThemeSelector,
      demoSources = _ref2$embeddedDemoOpt.demoSources;
  return createElement(
    Switch,
    null,
    createElement(Route, {
      path: url + '/:themeName/:variantName/clean',
      render: function render$$1(_ref3) {
        var _ref3$match$params = _ref3.match.params,
            themeName = _ref3$match$params.themeName,
            variantName = _ref3$match$params.variantName;
        return createElement(
          'div',
          null,
          createElement(DemoFrame, {
            themeName: themeName,
            variantName: variantName,
            sectionName: sectionName,
            demoName: demoName
          })
        );
      }
    }),
    createElement(Route, {
      path: url,
      render: function render$$1() {
        return createElement(
          'div',
          { style: { paddingTop: '8px' } },
          createElement(
            ThemeViewer,
            {
              availableThemes: Object.keys(demoSources[sectionName][demoName])
            },
            function (_ref4) {
              var themeName = _ref4.themeName,
                  variantName = _ref4.variantName;
              return createElement(
                Tab.Container,
                {
                  id: sectionName + '-' + demoName + '-demo',
                  defaultActiveKey: defaultTab
                },
                createElement(
                  'div',
                  { style: { marginTop: showThemeSelector ? '-38px' : 0 } },
                  createElement(
                    Nav,
                    { bsStyle: 'tabs' },
                    createElement(
                      NavItem,
                      { eventKey: 'preview' },
                      'Preview'
                    ),
                    createElement(
                      NavItem,
                      { eventKey: 'source' },
                      'Source'
                    )
                  ),
                  createElement(
                    Tab.Content,
                    {
                      animation: true,
                      mountOnEnter: true,
                      style: { marginTop: '20px' }
                    },
                    createElement(
                      Tab.Pane,
                      { eventKey: 'preview' },
                      createElement(DemoFrame, {
                        themeName: themeName,
                        variantName: variantName,
                        sectionName: sectionName,
                        demoName: demoName
                      })
                    ),
                    createElement(
                      Tab.Pane,
                      { eventKey: 'source' },
                      createElement(SourceCode, {
                        themeName: themeName,
                        sectionName: sectionName,
                        demoName: demoName
                      })
                    )
                  )
                )
              );
            }
          )
        );
      }
    })
  );
};

DemoViewer.propTypes = {
  match: shape({
    params: shape({
      sectionName: string.isRequired,
      demoName: string.isRequired
    }),
    url: string.isRequired
  }).isRequired
};

DemoViewer.contextTypes = {
  embeddedDemoOptions: object.isRequired
};

var SectionViewerBase = function SectionViewerBase(_ref, _ref2) {
  var sectionName = _ref.match.params.sectionName;
  var demoSources = _ref2.embeddedDemoOptions.demoSources;
  return createElement(
    ThemeViewer,
    null,
    function (_ref3) {
      var themeName = _ref3.themeName,
          variantName = _ref3.variantName;
      return Object.keys(demoSources[sectionName]).map(function (demoName) {
        return createElement(
          'div',
          { key: demoName },
          createElement(
            'h4',
            null,
            createElement(
              Link,
              { to: '/demo/' + sectionName + '/' + demoName + '/' + themeName + '/' + variantName },
              demoName
            )
          ),
          createElement(DemoFrame, {
            themeName: themeName,
            variantName: variantName,
            sectionName: sectionName,
            demoName: demoName
          })
        );
      });
    }
  );
};

SectionViewerBase.propTypes = {
  match: shape({
    params: shape({
      sectionName: string.isRequired
    })
  }).isRequired
};

SectionViewerBase.contextTypes = {
  embeddedDemoOptions: object.isRequired
};

var SectionViewer = withRouter(SectionViewerBase);

var SectionsViewer = function SectionsViewer(_ref, _ref2) {
  var url = _ref.match.url;
  var demoSources = _ref2.embeddedDemoOptions.demoSources;

  var sections = Object.keys(demoSources);

  return createElement(
    Switch,
    null,
    createElement(Redirect, { exact: true, from: '' + url, to: url + '/' + sections[0] }),
    createElement(Route, {
      path: url + '/:sectionName',
      render: function render$$1(_ref3) {
        var sectionName = _ref3.match.params.sectionName;
        return createElement(
          'div',
          { className: 'container' },
          createElement(
            'div',
            { className: 'row' },
            createElement(
              'div',
              { className: 'col-md-3 main-menu' },
              createElement(
                'h3',
                null,
                'Demo Sections'
              ),
              createElement(
                'ul',
                { className: 'list-unstyled' },
                sections.map(function (section) {
                  return createElement(
                    'li',
                    { key: section },
                    section === sectionName ? createElement(
                      'span',
                      null,
                      section
                    ) : createElement(
                      Link,
                      { to: url + '/' + section },
                      section
                    )
                  );
                })
              )
            ),
            createElement(
              'div',
              { className: 'col-md-9 demo-content' },
              createElement(
                'h2',
                null,
                sectionName
              ),
              createElement(SectionViewer, { sectionName: sectionName })
            )
          )
        );
      }
    })
  );
};

SectionsViewer.propTypes = {
  match: shape({
    url: string.isRequired
  }).isRequired
};

SectionsViewer.contextTypes = {
  embeddedDemoOptions: object.isRequired
};

var App = function (_React$Component) {
  inherits(App, _React$Component);

  function App() {
    classCallCheck(this, App);
    return possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  createClass(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          router = _props.router,
          path = _props.path,
          restProps = objectWithoutProperties(_props, ['router', 'path']);


      return { embeddedDemoOptions: restProps };
    }
  }, {
    key: 'render',
    value: function render$$1() {
      var _props2 = this.props,
          router = _props2.router,
          path = _props2.path;

      var Router = router === 'hash' ? HashRouter : MemoryRouter;

      return createElement(
        Router,
        {
          initialEntries: path ? [path] : undefined
        },
        createElement(
          Switch,
          null,
          createElement(Route, { path: '/demo/:sectionName/:demoName', component: DemoViewer }),
          createElement(Route, { path: '/section', component: SectionsViewer }),
          createElement(Redirect, { from: '/', to: '/section' })
        )
      );
    }
  }]);
  return App;
}(Component);

App.childContextTypes = {
  embeddedDemoOptions: object
};

App.propTypes = {
  router: string,
  path: string,
  scriptPath: string,
  showThemeSelector: bool,
  showThemeVariants: bool,
  defaultTab: string
};

App.defaultProps = {
  router: 'memory',
  path: undefined,
  scriptPath: '/dist/index.js',
  showThemeSelector: false,
  showThemeVariants: false,
  defaultTab: 'preview'
};

var initialize = function initialize(_ref) {
  var themeSources = _ref.themeSources,
      demoSources = _ref.demoSources,
      renderDemo = _ref.renderDemo,
      unmountDemo = _ref.unmountDemo;

  var embeddedDemoPlaceholders = document.getElementsByClassName('embedded-demo');
  var embeddedDemoConfigs = [].concat(toConsumableArray(embeddedDemoPlaceholders)).map(function (placeholder) {
    return {
      options: JSON.parse(placeholder.getAttribute('data-options') || '{}'),
      placeholder: placeholder
    };
  });
  embeddedDemoConfigs.forEach(function (config) {
    render(createElement(App, _extends({}, config.options, {
      themeSources: themeSources,
      demoSources: demoSources,
      renderDemo: renderDemo,
      unmountDemo: unmountDemo
    })), config.placeholder);
  });
};

export { initialize };
//# sourceMappingURL=index.js.map
