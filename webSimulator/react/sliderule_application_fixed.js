///////////////////////////////////////////////////////////////////////////////////
//                     Copyright (C) 2017 Dr Robert P. Wolf                      //
//                                                                               //
// Permission is hereby granted, free of charge, to any person obtaining a copy  //
// of this software and associated documentation files (the "Software"), to deal //
// in the Software without restriction, including without limitation the rights  //
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell     //
// copies of the Software, and to permit persons to whom the Software is         //
// furnished to do so, subject to the following conditions:                      //
//                                                                               //
// The above copyright notice and this permission notice shall be included in    //
// all copies or substantial portions of the Software.                           //
//                                                                               //
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR    //
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,      //
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE   //
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER        //
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, //
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN     //
// THE SOFTWARE.                                                                 //
///////////////////////////////////////////////////////////////////////////////////

var changeMarkings = function (type, value) {
	for (var ind in sliderules . sliderules) {
		switch (type) {
		case 'static': case 'stator': case 'rule': sliderules . sliderules [ind] . static_markings = value; break;
		case 'cursor': case 'hairline': sliderules . sliderules [ind] . cursor_markings = value; break;
		case 'cursors': case 'hairlines': case 'extras': sliderules . sliderules [ind] . extra_cursor_markings = value; break;
		default: break;
		}
	}
	sliderules . requireRedraw = true;
};

var changeSide = function (side) {
	switch (side) {
	case 'front': sliderules . sliderules [0] . inactive = false; sliderules . sliderules [1] . inactive = true; break;
	case 'back': sliderules . sliderules [0] . inactive = true; sliderules . sliderules [1] . inactive = false; break;
	default: break;
	}
	sliderules . requireRedraw = true;
};

var changeSize = function (length) {for (var ind in sliderules . sliderules) sliderules . sliderules [ind] . length = length; sliderules . requireRedraw = true;};

var changeVersion = function (version) {
	switch (version) {
	case 'us':
    if (window . front_us_braces != undefined) sliderules . sliderules [0] . cursorBraces = front_us_braces;
    if (window . front_us_cursors != undefined) sliderules . sliderules [0] . cursors = front_us_cursors;
    if (window . back_us_braces != undefined) sliderules . sliderules [1] . cursorBraces = back_us_braces;
    if (window . back_us_cursors != undefined) sliderules . sliderules [1] . cursors = back_us_cursors;
    break;
	case 'german':
    if (window . front_german_braces != undefined) sliderules . sliderules [0] . cursorBraces = front_german_braces;
    if (window . front_german_cursors != undefined) sliderules . sliderules [0] . cursors = front_german_cursors;
    if (window . back_german_braces != undefined) sliderules . sliderules [1] . cursorBraces = back_german_braces;
    if (window . back_german_cursors != undefined) sliderules . sliderules [1] . cursors = back_german_cursors;
    break;
	default: break;
	}
	sliderules . requireRedraw = true;
};

var copyright = "Emulator / Simulator Copyright \u00a9 2017 - " + new Date () . getFullYear () + " Dr Robert Wolf @ http://www.hercsmusicsystems.com.au";
var copyright_colours = ['blue', 'gray', 'yellow', 'lavender', 'green', 'olive', 'silver', 'tan', 'wheat', 'khaki'];
var copyright_colour = copyright_colours [Math . floor (Math . random () * copyright_colours . length)];

var SlideruleApplication = React . createClass ({
  dragging: false,
  mousePosition: {x: 0, y: 0},
  onContext: function (event) {event . preventDefault ();},
  onMouseDown: function (event) {
  	sliderules . resetMovers ();
    var position = subvbc ({x: event . clientX, y: event . clientY}, this . refs . sliderule . getBoundingClientRect ());
    if (event . button === 2) return sliderules . synchroniseTarget (addv (position, {x: 0.5, y: 0}));
    this . dragging = true;
    this . mousePosition = position;
  },
  onMouseMove: function (event) {
    if (! this . dragging) return;
    var position = subvbc ({x: event . clientX, y: event . clientY}, this . refs . sliderule . getBoundingClientRect ());
    var delta = subv (position, this . mousePosition);
    sliderules . synchroniseMove (delta, position, this . mousePosition);
    this . mousePosition = position;
  },
  onMouseUp: function (event) {this . dragging = false; this . setState ({});},
  onWheel: function (event) {
  	event . preventDefault ();
    var delta;
    if (event . deltaY < 0) delta = sliderules . scale * sliderules . scaling_factor;
    if (event . deltaY > 0) delta = sliderules . scale / sliderules . scaling_factor;
    var point = subvbc ({x: event . clientX, y: event . clientY}, this . refs . sliderule . getBoundingClientRect ());
    point = scalv (point, 1 / sliderules . scale);
    var offset = scalv (point, delta - sliderules . scale);
    sliderules . position = subv (sliderules . position, scalv (offset, 1 / delta));
    sliderules . scale = delta;
    sliderules . requireRedraw = true;
  },
  onTouchStart: function (event) {
  	//event . preventDefault ();
  	if (event . targetTouches . length == 1) return this . onMouseDown (event . targetTouches [0]);
  	if (event . targetTouches . length == 2) {
  		this . left_touch = {x: event . targetTouches [0] . clientX, y: event . targetTouches [0] . clientY};
  		this . right_touch = {x: event . targetTouches [1] . clientX, y: event . targetTouches [1] . clientY};
  	}
  },
  onTouchMove: function (event) {
  	event . preventDefault ();
  	if (event . targetTouches . length == 1) return this . onMouseMove (event . targetTouches [0]);
  	if (event . targetTouches . length == 2) {
  		var left_touch = {x: event . targetTouches [0] . clientX, y: event . targetTouches [0] . clientY};
  		var right_touch = {x: event . targetTouches [1] . clientX, y: event . targetTouches [1] . clientY};
  		var x = this . right_touch . x - this . left_touch . x;
  		var y = this . right_touch . y - this . left_touch . y;
  		var d1 = Math . sqrt (x * x + y * y);
  		x = right_touch . x - this . left_touch . x;
  		y = right_touch . y - this . left_touch . y;
  		var d2 = Math . sqrt (x * x + y * y);
  		var delta = sliderules . scale * d2 / d1;
  		var point = subvbc (this . left_touch, this . refs . sliderules . getBoundingClientRect ());
  		point = scalv (point, 1 / sliderules . scale);
  		var offset = scalv (point, delta - sliderules . scale);
  		sliderules . position = subv (sliderules . position, scalv (offset, 1 / delta));
  		sliderules . scale = delta;
  		this . right_touch = right_touch;
  		this . left_touch = left_touch;
  		sliderules . requireRedraw = true;
  	}
  },
  SM: function (event) {changeMarkings ('stator', event . target . checked);},
  CM: function (event) {changeMarkings ('hairline', event . target . checked);},
  EM: function (event) {changeMarkings ('hairlines', event . target . checked);},
  draw: function () {
    var width = window . innerWidth; var height = window . innerHeight;
    var bound = this . refs . sliderule . getBoundingClientRect ();
    var newState = {width: width - bound . left * 4, height: height - bound . top * 4};
    if (this . state . width !== newState . width || this . state . height !== newState . height) sliderules . requireRedraw = true;
  	if (sliderules . noChange ()) return;
    this . setState (newState);
    var ctx = this . refs . sliderule . getContext ('2d');
    ctx . save ();
    sliderules . draw (ctx, width, height);
    ctx . restore ();
    ctx . fillStyle = copyright_colour;
    ctx . textAlign = 'right';
    ctx . fillText (copyright, newState . width - 4, 440 - 4);
  },
  componentDidMount: function () {setInterval (this . draw, 20);},
  getInitialState: function () {return {width: 200, height: 100, dragging: false};},
  render: function render() {
    return React.createElement(
      'div',
      { style: { align: 'center' } }, [//, position: 'relative' } }, [
      React.createElement('canvas', { key: 1, ref: 'sliderule', width: this.state.width, height: '440px',
        onMouseDown: this.onMouseDown,
        onMouseMove: this.onMouseMove,
        onMouseUp: this.onMouseUp,
        onMouseLeave: this.onMouseUp,
        onContextMenu: this.onContext,
        onWheel: this.onWheel,
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onMouseUp,
        onTouchCancel: this.onMouseUp
      })/*,
      React . createElement (
      	'div',
      	{ key: 2, style: {position: 'absolute', left: '0px', top: '0px'}}, [
		  React . createElement ('input', {key: 3, type: 'checkbox', onChange: this . SM}),
		  	'Markings on stator\u2003\u2003',
		  React . createElement ('input', {key: 4, type: 'checkbox', onChange: this . CM}),
		  	'Markings on hairline\u2003\u2003',
		  React . createElement ('input', {key: 5, type: 'checkbox', onChange: this . EM}),
		  	'Markings on additional hairlines\u2003\u2003',
		  ])*/
      ]
    );
  }
});

'use strict';

ReactDOM.render(React.createElement(SlideruleApplication, null), document.getElementById('root'));

