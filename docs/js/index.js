(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

$(document).ready(function () {
  var Audio =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Audio, _React$Component);

    function Audio(props) {
      var _this;

      _classCallCheck(this, Audio);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Audio).call(this, props));
      _this.state = {
        node: React.createRef()
      };
      return _this;
    }

    _createClass(Audio, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var id = this.props.id;
        var v = document.getElementById(id);
        this.props.publish({
          id: id,
          v: v
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement("audio", {
          id: this.props.id,
          className: "clip",
          src: this.props.src
        });
      }
    }]);

    return Audio;
  }(React.Component);

  var Button =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(Button, _React$Component2);

    function Button(props) {
      var _this2;

      _classCallCheck(this, Button);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));
      _this2.onClick = _this2.onClick.bind(_assertThisInitialized(_this2));
      return _this2;
    }

    _createClass(Button, [{
      key: "onClick",
      value: function onClick(e) {
        this.props.play(e.target.innerText);
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement("button", {
          id: 'pad' + this.props.name,
          className: "drum-pad",
          onClick: this.onClick
        }, " ", this.props.name, React.createElement(Audio, {
          id: this.props.name,
          src: this.props.url,
          publish: this.props.publish
        }));
      }
    }]);

    return Button;
  }(React.Component);

  var Display =
  /*#__PURE__*/
  function (_React$Component3) {
    _inherits(Display, _React$Component3);

    function Display(props) {
      var _this3;

      _classCallCheck(this, Display);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Display).call(this, props));
      _this3.state = {
        refs: {
          Q: [null, 'Heater 1'],
          W: [null, 'Heater 2'],
          E: [null, 'Heater 3'],
          A: [null, 'Heater 4.1'],
          S: [null, 'Heater 6'],
          D: [null, 'Dsc Oh'],
          Z: [null, 'Kick\'n Hat'],
          X: [null, 'RP4 KICK 1'],
          C: [null, 'Cev H2']
        },
        buttons: [['Q', 'http://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'], ['W', 'http://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'], ['E', 'http://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'], ['A', 'http://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'], ['S', 'http://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'], ['D', 'http://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'], ['Z', 'http://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'], ['X', 'http://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'], ['C', 'http://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']],
        text: 'Click \'n listen'
      };
      _this3.t = null;
      _this3.publish = _this3.publish.bind(_assertThisInitialized(_this3));
      _this3.play = _this3.play.bind(_assertThisInitialized(_this3));
      _this3.keyDown = _this3.keyDown.bind(_assertThisInitialized(_this3));
      return _this3;
    }

    _createClass(Display, [{
      key: "publish",
      value: function publish(ref) {
        var res = this.state.refs;
        res[ref.id][0] = ref.v;
        this.setState({
          refs: res
        });
      }
    }, {
      key: "play",
      value: function play(c) {
        var _this4 = this;

        var o = this.state.refs[c];

        if (o) {
          this.setState({
            text: o[1]
          });
          o[0].play();

          if (this.t) {
            clearTimeout(this.t);
          }

          this.t = setTimeout(function () {
            _this4.t = null;

            _this4.setState({
              text: 'Click \'n listen'
            });
          }, 1000);
        }
      }
    }, {
      key: "keyDown",
      value: function keyDown(e) {
        var c = e.key.toUpperCase();
        this.play(c);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener('keydown', this.keyDown);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('keydown', this.keyDown);
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        return React.createElement("div", {
          className: "display"
        }, React.createElement("p", {
          id: "text"
        }, this.state.text), this.state.buttons.map(function (d, i) {
          return React.createElement(Button, {
            key: i,
            name: d[0],
            url: d[1],
            play: _this5.play,
            publish: _this5.publish
          });
        }));
      }
    }]);

    return Display;
  }(React.Component);

  ReactDOM.render(React.createElement(Display, null), document.getElementById('display'));
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiYWJlbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsQ0FBQyxDQUFFLFFBQUYsQ0FBRCxDQUFjLEtBQWQsQ0FBb0IsWUFBTTtBQUFBLE1BQ2xCLEtBRGtCO0FBQUE7QUFBQTtBQUFBOztBQUV0QixtQkFBYSxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBQ2xCLGlGQUFNLEtBQU47QUFDQSxZQUFLLEtBQUwsR0FBYTtBQUNYLFFBQUEsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFOO0FBREssT0FBYjtBQUZrQjtBQUtuQjs7QUFQcUI7QUFBQTtBQUFBLDBDQVFGO0FBQ2xCLFlBQUksRUFBRSxHQUFHLEtBQUssS0FBTCxDQUFXLEVBQXBCO0FBQ0EsWUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsRUFBeEIsQ0FBUjtBQUNBLGFBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUI7QUFBRSxVQUFBLEVBQUUsRUFBRSxFQUFOO0FBQVUsVUFBQSxDQUFDLEVBQUU7QUFBYixTQUFuQjtBQUNEO0FBWnFCO0FBQUE7QUFBQSwrQkFhWjtBQUNSLGVBQ0U7QUFDRSxVQUFBLEVBQUUsRUFBRSxLQUFLLEtBQUwsQ0FBVyxFQURqQjtBQUVFLFVBQUEsU0FBUyxFQUFDLE1BRlo7QUFHRSxVQUFBLEdBQUcsRUFBRSxLQUFLLEtBQUwsQ0FBVztBQUhsQixVQURGO0FBT0Q7QUFyQnFCOztBQUFBO0FBQUEsSUFDSixLQUFLLENBQUMsU0FERjs7QUFBQSxNQXdCbEIsTUF4QmtCO0FBQUE7QUFBQTtBQUFBOztBQXlCdEIsb0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixtRkFBTSxLQUFOO0FBQ0EsYUFBSyxPQUFMLEdBQWUsT0FBSyxPQUFMLENBQWEsSUFBYixnQ0FBZjtBQUZpQjtBQUdsQjs7QUE1QnFCO0FB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TCxZQUFBLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBRCxDQUZGO0FBR0wsWUFBQSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUQsQ0FIRDtBQUlMLFlBQUEsSUFBSSxFQUFFLE1BQUksQ0FBQyxJQUpOO0FBS0wsWUFBQSxPQUFPLEVBQUUsTUFBSSxDQUFDO0FBTFQsWUFBUDtBQU9ELFNBUkEsQ0FGSCxDQURGO0FBYUQ7QUE5SHFCOztBQUFBO0FBQUEsSUFrREYsS0FBSyxDQUFDLFNBbERKOztBQWlJeEIsRUFBQSxRQUFRLENBQUMsTUFBVCxDQUNFLG9CQUFDLE9BQUQsT0FERixFQUVFLFFBQVEsQ0FBQyxjQUFULENBQXdCLFNBQXhCLENBRkY7QUFJRCxDQXJJRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoIGRvY3VtZW50ICkucmVhZHkoKCkgPT4ge1xuICBjbGFzcyBBdWRpbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIG5vZGU6IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgbGV0IGlkID0gdGhpcy5wcm9wcy5pZFxuICAgICAgbGV0IHYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgIHRoaXMucHJvcHMucHVibGlzaCh7IGlkOiBpZCwgdjogdiB9KVxuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGF1ZGlvIFxuICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNsaXBcIlxuICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5zcmN9PlxuICAgICAgICA8L2F1ZGlvPlxuICAgICAgKVxuICAgIH1cbiAgfVxuICBcbiAgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKVxuICAgIH1cbiAgICBvbkNsaWNrKGUpIHtcbiAgICAgIHRoaXMucHJvcHMucGxheShlLnRhcmdldC5pbm5lclRleHQpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgICAgaWQ9eydwYWQnICsgdGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImRydW0tcGFkXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5hbWVcbiAgICAgICAgICB9IFxuICAgICAgICAgIDxBdWRpb1xuICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy51cmx9XG4gICAgICAgICAgICBwdWJsaXNoPXt0aGlzLnByb3BzLnB1Ymxpc2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApXG4gICAgfVxuICB9XG4gIFxuICBjbGFzcyBEaXNwbGF5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICByZWZzOiB7XG4gICAgICAgICAgUTogW251bGwsICdIZWF0ZXIgMSddLFxuICAgICAgICAgIFc6IFtudWxsLCAnSGVhdGVyIDInXSxcbiAgICAgICAgICBFOiBbbnVsbCwgJ0hlYXRlciAzJ10sXG4gICAgICAgICAgQTogW251bGwsICdIZWF0ZXIgNC4xJ10sXG4gICAgICAgICAgUzogW251bGwsICdIZWF0ZXIgNiddLFxuICAgICAgICAgIEQ6IFtudWxsLCAnRHNjIE9oJ10sXG4gICAgICAgICAgWjogW251bGwsICdLaWNrXFwnbiBIYXQnXSxcbiAgICAgICAgICBYOiBbbnVsbCwgJ1JQNCBLSUNLIDEnXSxcbiAgICAgICAgICBDOiBbbnVsbCwgJ0NldiBIMiddXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICBbJ1EnLCAnaHR0cDovL3MzLmFtYXpvbmF3cy5jb20vZnJlZWNvZGVjYW1wL2RydW1zL0hlYXRlci0xLm1wMyddLFxuICAgICAgICAgIFsnVycsICdodHRwOi8vczMuYW1hem9uYXdzLmNvbS9mcmVlY29kZWNhbXAvZHJ1bXMvSGVhdGVyLTIubXAzJ10sXG4gICAgICAgICAgWydFJywgJ2h0dHA6Ly9zMy5hbWF6b25hd3MuY29tL2ZyZWVjb2RlY2FtcC9kcnVtcy9IZWF0ZXItMy5tcDMnXSxcbiAgICAgICAgICBbJ0EnLCAnaHR0cDovL3MzLmFtYXpvbmF3cy5jb20vZnJlZWNvZGVjYW1wL2RydW1zL0hlYXRlci00XzEubXAzJ10sXG4gICAgICAgICAgWydTJywgJ2h0dHA6Ly9zMy5hbWF6b25hd3MuY29tL2ZyZWVjb2RlY2FtcC9kcnVtcy9IZWF0ZXItNi5tcDMnXSxcbiAgICAgICAgICBbJ0QnLCAnaHR0cDovL3MzLmFtYXpvbmF3cy5jb20vZnJlZWNvZGVjYW1wL2RydW1zL0RzY19PaC5tcDMnXSxcbiAgICAgICAgICBbJ1onLCAnaHR0cDovL3MzLmFtYXpvbmF3cy5jb20vZnJlZWNvZGVjYW1wL2RydW1zL0tpY2tfbl9IYXQubXAzJ10sXG4gICAgICAgICAgWydYJywgJ2h0dHA6Ly9zMy5hbWF6b25hd3MuY29tL2ZyZWVjb2RlY2FtcC9kcnVtcy9SUDRfS0lDS18xLm1wMyddLFxuICAgICAgICAgIFsnQycsICdodHRwOi8vczMuYW1hem9uYXdzLmNvbS9mcmVlY29kZWNhbXAvZHJ1bXMvQ2V2X0gyLm1wMyddXG4gICAgICAgIF0sXG4gICAgICAgIHRleHQ6ICdDbGljayBcXCduIGxpc3RlbidcbiAgICAgIH1cbiAgICAgIHRoaXMudCA9IG51bGxcbiAgICAgIHRoaXMucHVibGlzaCA9IHRoaXMucHVibGlzaC5iaW5kKHRoaXMpXG4gICAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKVxuICAgICAgdGhpcy5rZXlEb3duID0gdGhpcy5rZXlEb3duLmJpbmQodGhpcylcbiAgICB9XG4gICAgcHVibGlzaChyZWYpIHtcbiAgICAgIGxldCByZXMgPSB0aGlzLnN0YXRlLnJlZnNcbiAgICAgIHJlc1tyZWYuaWRdWzBdID0gcmVmLnZcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3JlZnM6IHJlc30pXG4gICAgfVxuICAgIHBsYXkoYykge1xuICAgICAgbGV0IG8gPSB0aGlzLnN0YXRlLnJlZnNbY11cbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0OiBvWzFdfSlcbiAgICAgICAgb1swXS5wbGF5KClcbiAgICAgICAgaWYgKHRoaXMudCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy50ID0gbnVsbFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RleHQ6ICdDbGljayBcXCduIGxpc3Rlbid9KVxuICAgICAgICB9LCAxMDAwKVxuICAgICAgfVxuICAgIH1cbiAgICBrZXlEb3duKGUpIHtcbiAgICAgIGxldCBjID0gZS5rZXkudG9VcHBlckNhc2UoKVxuICAgICAgdGhpcy5wbGF5KGMpXG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RG93bilcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlEb3duKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZGlzcGxheVwiID5cbiAgICAgICAgICA8cCBpZD1cInRleHRcIj57dGhpcy5zdGF0ZS50ZXh0fTwvcD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5idXR0b25zLm1hcCgoZCxpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPEJ1dHRvbiBcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBuYW1lPXtkWzBdfVxuICAgICAgICAgICAgICB1cmw9e2RbMV19XG4gICAgICAgICAgICAgIHBsYXk9e3RoaXMucGxheX1cbiAgICAgICAgICAgICAgcHVibGlzaD17dGhpcy5wdWJsaXNofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbiAgfVxuICBcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxEaXNwbGF5IC8+ICxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheScpXG4gIClcbn0pXG4iXX0=
