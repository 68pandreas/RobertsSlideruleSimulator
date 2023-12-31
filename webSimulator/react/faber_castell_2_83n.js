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

var faber_castell = new Image (); faber_castell . src = "Faber-Castell-gold.png"; faber_castell . onload = function () {sliderules . requireRedraw = true;};
var logo = new Image (); logo . src = "Logo_1951.png"; logo . onload = function () {sliderules . requireRedraw = true;};

var front_german_braces = [], front_german_cursors = [], front_us_braces = [], front_us_cursors = [];
var back_german_braces = [], back_german_cursors = [], back_us_braces = [], back_us_cursors = [];

var sliderules = new Sliderules ({background: faber_castell, background_colour: '#081818'});
var s = new Sliderule (1200, {left_margin: 0.24, right_margin: 0.24, cursor_rounding: 16, hairline_top: -8, hairline_bottom: -8,
  cursor_left_extension: 0.093, cursor_right_extension: 0.093, markings_background: 'black', markings_colour: 'gold', markings_size: 15, cursor_limit_left: 0.074, cursor_limit_right: 0.074});
sliderules . sliderules . push (s);
s . braces . push (new LeftBrace (2, 0.07, 8, 'white', 'black', 84, 1));
s . braces . push (new LeftBrace (4, 0.063, 8, 'white', 'black', 86, 1));
s . braces . push (new LeftBraceBar (0.054, 20, 20, 4, 'red', 'black'));
s . braces . push (new LeftBraceBar (0.054, 20, 310, 4, 'gray', 'black'));
s . braces . push (new LeftBraceBar (0.054, 310, 20, 4, 'gray', 'black'));
s . braces . push (new RightBrace (2, 0.07, 8, 'white', 'black', 84, 1));
s . braces . push (new RightBrace (4, 0.063, 8, 'white', 'black', 86, 1));
s . braces . push (new RightBraceBar (0.054, 20, 20, 4, 'red', 'black'));
s . braces . push (new RightBraceBar (0.054, 20, 310, 4, 'gray', 'black'));
s . braces . push (new RightBraceBar (0.054, 310, 20, 4, 'gray', 'black'));
s . braces . push (new Screw (0.03, 48, 12, 0.5, '#b5a642', '#605321'));
s . braces . push (new Screw (0.016, 276, 8, 0.1, '#b5a642', '#605321'));
s . braces . push (new Screw (0.036, 330, 8, 0.8, '#b5a642', '#605321'));
s . braces . push (new Screw (1.45, 48, 12, 1.4, '#b5a642', '#605321'));
s . braces . push (new Screw (1.464, 276, 8, 2.5, '#b5a642', '#605321'));
s . braces . push (new Screw (1.444, 330, 8, 3.1, '#b5a642', '#605321'));
s . braces . push (new Logo (logo, 0.105, 48, 0.125));
s . braces . push (new Engraving ("CASTELL", 'italic 16px arial', 'center', 'black', 0.102, 296));
s . braces . push (new Engraving ("NOVO", '16px arial', 'center', 'black', 0.102, 316));
s . braces . push (new Engraving ("DUPLEX", '16px arial', 'center', 'black', 0.102, 336));
s . cursorGlassBraces . push (new CursorBrace (0.098, 0.098, 20, 0, 20, '#deb887'));
var HairlineLeft = HairlineD - HairlinePS - HairlinePS;
var HairlineRight = HairlineLeft - Math . log10 (Math . log (2));
front_german_braces . push (new Screw (-0.075, -8, 6, 0.5, '#b5a642', '#605321'));
front_german_braces . push (new Screw (0.075, -8, 6, 0.5, '#b5a642', '#605321'));
front_german_braces . push (new Screw (-0.075, 374, 6, 0.5, '#b5a642', '#605321'));
front_german_braces . push (new Screw (0.075, 374, 6, 0.5, '#b5a642', '#605321'));
front_german_braces . push (new Engraving ("CASTELL", 'italic 12px arial', 'right', 'black', -0.015, 378));
front_german_braces . push (new Engraving ("2/83 N", '12px arial', 'left', 'black', 0.015, 378));
front_german_braces . push (new Engraving ("A", '12px arial', 'center', 'red', HairlineS, 74));
front_german_braces . push (new Engraving ("360", '12px arial', 'center', 'red', Hairline360, 96));
front_german_braces . push (new Engraving ("PS", '12px arial', 'center', 'red', HairlineD, 278));
front_german_braces . push (new Engraving ("kW", '12px arial', 'left', 'red', HairlineLeft + 0.006, 278));
front_german_braces . push (new Engraving ("d", '12px arial', 'left', 'red', 0.006, 278));
front_german_cursors . push (new Cursor (HairlineS, 74, 98, 'red', {marking_shift: 0.002}));
front_german_cursors . push (new Cursor (HairlineS, 146, 170, 'red', {marking_shift: 0.002}));
front_german_cursors . push (new Cursor (Hairline360, 98, 146, 'red', {marking_align: 'right', marking_shift: -0.002}));
front_german_cursors . push (new Cursor (Hairline360, 170, 194, 'red', {marking_align: 'right', marking_shift: -0.002}));
front_german_cursors . push (new Cursor (HairlineD, 222, 268, 'red', {marking_align: 'right', marking_shift: -0.002}));
front_german_cursors . push (new Cursor (- Hairline360, 318, 342, 'red', {marking_shift: 0.002}));
front_german_cursors . push (new Cursor (HairlineLeft, 8, 98, 'red', {marking_align: 'right', marking_shift: -0.01}));
front_german_cursors . push (new Cursor (HairlineLeft, 104, 194, 'red', {marking_align: 'right', marking_shift: -0.01}));
front_german_cursors . push (new Cursor (HairlineLeft, 196, 264, 'red', {marking_align: 'right', marking_shift: -0.01}));
front_german_cursors . push (new Cursor (HairlineLeft, 268, 358, 'red', {marking_align: 'right', marking_shift: -0.01}));
front_german_cursors . push (new Cursor (HairlineRight, 8, 98, 'red'));
front_german_cursors . push (new Cursor (HairlineRight, 104, 194, 'red'));
front_german_cursors . push (new Cursor (HairlineRight, 196, 264, 'red'));
front_german_cursors . push (new Cursor (HairlineRight, 268, 358, 'red'));
HairlineLeft = HairlineD - HairlineHPUS - HairlineHPUS;
HairlineRight = HairlineLeft - Math . log10 (Math . log (2));
front_us_braces . push (new Screw (-0.075, -8, 6, 0.5, '#b5a642', '#605321'));
front_us_braces . push (new Screw (0.075, -8, 6, 0.5, '#b5a642', '#605321'));
front_us_braces . push (new Screw (-0.075, 374, 6, 0.5, '#b5a642', '#605321'));
front_us_braces . push (new Screw (0.075, 374, 6, 0.5, '#b5a642', '#605321'));
front_us_braces . push (new Engraving ("CASTELL", 'italic 12px arial', 'right', 'black', -0.015, 378));
front_us_braces . push (new Engraving ("2/83 N", '12px arial', 'left', 'black', 0.015, 378));
front_us_braces . push (new Engraving ("A", '12px arial', 'center', 'red', HairlineS, 74));
front_us_braces . push (new Engraving ("360", '12px arial', 'center', 'red', Hairline360, 96));
front_us_braces . push (new Engraving ("HP", '12px arial', 'center', 'red', HairlineD, 278));
front_us_braces . push (new Engraving ("kW", '12px arial', 'left', 'red', HairlineLeft + 0.006, 278));
front_us_braces . push (new Engraving ("d", '12px arial', 'left', 'red', 0.006, 278));
front_us_cursors . push (new Cursor (HairlineS, 74, 98, 'red', {marking_shift: 0.002}));
front_us_cursors . push (new Cursor (HairlineS, 146, 170, 'red', {marking_shift: 0.002}));
front_us_cursors . push (new Cursor (Hairline360, 98, 146, 'red', {marking_align: 'right', marking_shift: -0.002}));
front_us_cursors . push (new Cursor (Hairline360, 170, 194, 'red', {marking_align: 'right', marking_shift: -0.002}));
front_us_cursors . push (new Cursor (HairlineD, 222, 268, 'red', {marking_align: 'right', marking_shift: -0.002}));
front_us_cursors . push (new Cursor (- Hairline360, 318, 342, 'red', {marking_shift: 0.002}));
front_us_cursors . push (new Cursor (HairlineLeft, 8, 98, 'red', {marking_align: 'right', marking_shift: -0.01}));
front_us_cursors . push (new Cursor (HairlineLeft, 104, 194, 'red', {marking_align: 'right', marking_shift: -0.01}));
front_us_cursors . push (new Cursor (HairlineLeft, 196, 264, 'red', {marking_align: 'right', marking_shift: -0.01}));
front_us_cursors . push (new Cursor (HairlineLeft, 268, 358, 'red', {marking_align: 'right', marking_shift: -0.01}));
front_us_cursors . push (new Cursor (HairlineRight, 8, 98, 'red'));
front_us_cursors . push (new Cursor (HairlineRight, 104, 194, 'red'));
front_us_cursors . push (new Cursor (HairlineRight, 196, 264, 'red'));
front_us_cursors . push (new Cursor (HairlineRight, 268, 358, 'red'));

var r = new Rule ({left_margin: 0.24, right_margin: 0.24});
s . rules . push (r);
r . scales . push (new scale_TCTdec (24, {left_extension: 0.06, right_extension: 0.061, left: "T\u2081", right: "\u2222 tan 0.1X", rs: 0.08, centre: "cot", ca: 'left', cs: 1.13, cc: 'red'}));
r . scales . push (new spacer (2));
r . scales . push (new scale_TCT1dec_down (24, {left_extension: 0.061, right_extension: 0.06, left: "T\u2082", right: "\u2222 tan X", rs: 0.08, centre: "cot", ca: 'left', cs: 1.12, cc: 'red'}));
r . scales . push (new scale_K (24, {left_extension: 0.064, right_extension: 0.06, left: "K", right: "X\u00b3", rs: 0.08, alt: 'black'}));
r . scales . push (new scale_A (24, {left_extension: 0.065, right_extension: 0.06, left: "A", right: "X\u00b2", rs: 0.08, alt: 'black', highlight: '#eeeeff'}));
r . scales . push (new scale_CF (24, {left_extension: 0.0628, right_extension: 0.06, left: "DF", right: "\u03c0X", rs: 0.08, indices: ["\u21e61\u21e8"]}));

r = new Rule ({stator: 1, left_margin: 0.26, right_margin: 0.26}); s . rules . push (r);
r . markings . push (new RuleBars (-0.254, 1, 4, 116, 9, 6, 4, 'black'));
r . markings . push (new RuleBars (1.254, -1, 4, 116, 9, 6, 4, 'black'));
r . markings . push (new Engraving ("2/83 N", '12px arial', 'center', 'black', -0.14, 61, Math . PI * -0.5));
r . markings . push (new Engraving ("MADE IN GERMANY", '10px arial', 'center', 'black', -0.13, 61, Math . PI * -0.5));
r . scales . push (new scale_DF (24, {left_extension: 0.0628, right_extension: 0.06, left: "CF", right: "\u03c0X", rs: 0.08, alt: 'black', highlight: '#ccffcc', indices: ["\u21e61\u21e8"]}));
r . scales . push (new scale_B (24, {left_extension: 0.065, right_extension: 0.06, left: "B", right: "X\u00b2", rs: 0.08, alt: 'black', highlight: '#eeeeff'}));
r . scales . push (new scale_CIF (24, {left_extension: 0.0623, right_extension: 0.058, left: "CIF", right: "10/\u03c0X", rs: 0.08, colour: 'red'}));
r . scales . push (new spacer (2));
r . scales . push (new scale_DI (24, {left_extension: 0.064, right_extension: 0.062, left: "CI", right: "10/X", rs: 0.08, cc: 'red', colour: 'red'}));
r . scales . push (new scale_C (24, {left_extension: 0.062, right_extension: 0.064, left: "C", right: "X", rs: 0.08, alt: 'black', highlight: '#ccffcc', draw_q: true}));

r = new Rule ({left_margin: 0.24, right_margin: 0.24}); s . rules . push (r);
r . scales . push (new scale_D (24, {left_extension: 0.062, right_extension: 0.064, left: "D", right: "X", rs: 0.08, alt: 'black', draw_q: true}));
r . scales . push (new scale_DI (24, {left_extension: 0.062, right_extension: 0.062, left: "DI", right: "10/X", rs: 0.08, colour: 'red', draw_q: true}));
r . scales . push (new scale_SCdec (24, {left_extension: 0.065, left: "S", right: "\u2222 sin 0.1X", rs: 0.08, centre: "cos", ca: 'left', cs: 1.13, cc: 'red'}));
r . scales . push (new spacer (2));
r . scales . push (new scale_STdec_down (24, {left_extension: 0.061, right_extension: 0.058, left: "ST", right: "\u2222 arc 0.01X", rs: 0.08}));
r . scales . push (new scale_P_down (24, {left_extension: 0.07, left: "P", right: "\u221a1-(0.1X)\u00b2", rs: 0.08, colour: 'red'}));



s = new Sliderule (1200, {left_margin: 0.24, right_margin: 0.24, cursor_rounding: 16, hairline_top: -8, hairline_bottom: -8,
  cursor_left_extension: 0.093, cursor_right_extension: 0.093, markings_background: 'black', markings_colour: 'gold', markings_size: 15, inactive: true,
  cursor_limit_left: 0.074, cursor_limit_right: 0.074});
sliderules . sliderules . push (s);
s . braces . push (new LeftBrace (2, 0.07, 8, 'white', 'black', 84, 1));
s . braces . push (new LeftBrace (4, 0.063, 8, 'white', 'black', 86, 1));
s . braces . push (new LeftBraceBar (0.054, 20, 20, 4, 'red', 'black'));
s . braces . push (new LeftBraceBar (0.054, 20, 310, 4, 'gray', 'black'));
s . braces . push (new LeftBraceBar (0.054, 310, 20, 4, 'gray', 'black'));
s . braces . push (new RightBrace (2, 0.07, 8, 'white', 'black', 84, 1));
s . braces . push (new RightBrace (4, 0.063, 8, 'white', 'black', 86, 1));
s . braces . push (new RightBraceBar (0.054, 20, 20, 4, 'red', 'black'));
s . braces . push (new RightBraceBar (0.054, 20, 310, 4, 'gray', 'black'));
s . braces . push (new RightBraceBar (0.054, 310, 20, 4, 'gray', 'black'));
s . braces . push (new Screw (0.03, 318, 12, 0.5, '#b5a642', '#605321'));
s . braces . push (new Screw (0.016, 90, 8, 0.1, '#b5a642', '#605321'));
s . braces . push (new Screw (0.036, 36, 8, 0.8, '#b5a642', '#605321'));
s . braces . push (new Screw (1.45, 318, 12, 1.4, '#b5a642', '#605321'));
s . braces . push (new Screw (1.464, 90, 8, 2.5, '#b5a642', '#605321'));
s . braces . push (new Screw (1.444, 36, 8, 3.1, '#b5a642', '#605321'));
s . cursorGlassBraces . push (new CursorBrace (0.098, 0.098, 20, 0, 20, '#deb887'));
HairlineLeft = HairlineD - HairlinePS - HairlinePS;
HairlineRight = HairlineLeft - Math . log10 (Math . log (2));
back_german_braces . push (new Screw (-0.06, -8, 6, 0.5, '#b5a642', '#605321'));
back_german_braces . push (new Screw (0.06, -8, 6, 0.5, '#b5a642', '#605321'));
back_german_braces . push (new Screw (-0.06, 374, 6, 0.5, '#b5a642', '#605321'));
back_german_braces . push (new Screw (0.06, 374, 6, 0.5, '#b5a642', '#605321'));
back_german_braces . push (new Engraving ("CASTELL", 'italic 12px arial', 'center', 'black', 0, 378));
back_german_braces . push (new Engraving ("d", '12px arial', 'right', 'red', HairlineRight - 0.006, 304));
back_german_braces . push (new Engraving ("A", '12px arial', 'center', 'red', HairlineRight + HairlineS + HairlineS, 304));
back_german_cursors . push (new Cursor (HairlineRight + HairlineS + HairlineS, 146, 170, 'red', {marking_align: 'right', marking_shift: -0.002}));
back_german_cursors . push (new Cursor (HairlineRight + HairlineS + HairlineS, 196, 220, 'red', {marking_align: 'right', marking_shift: -0.002}));
back_german_cursors . push (new Cursor (HairlineRight + HairlineS + HairlineS, 268, 292, 'red', {marking_align: 'right', marking_shift: -0.002}));
back_german_cursors . push (new Cursor (HairlineLeft, 8, 98, 'red', {marking_align: 'right', marking_shift: -0.01}));
back_german_cursors . push (new Cursor (HairlineLeft, 104, 194, 'red', {marking_align: 'right', marking_shift: -0.01}));
back_german_cursors . push (new Cursor (HairlineLeft, 196, 268, 'red', {marking_align: 'right', marking_shift: -0.01}));
back_german_cursors . push (new Cursor (HairlineLeft, 274, 358, 'red', {marking_align: 'right', marking_shift: -0.01}));
back_german_cursors . push (new Cursor (HairlineRight, 8, 98, 'red'));
back_german_cursors . push (new Cursor (HairlineRight, 104, 194, 'red'));
back_german_cursors . push (new Cursor (HairlineRight, 196, 268, 'red'));
back_german_cursors . push (new Cursor (HairlineRight, 274, 358, 'red'));
HairlineLeft = HairlineD - HairlineHPUS - HairlineHPUS;
HairlineRight = HairlineLeft - Math . log10 (Math . log (2));
back_us_braces . push (new Screw (-0.06, -8, 6, 0.5, '#b5a642', '#605321'));
back_us_braces . push (new Screw (0.06, -8, 6, 0.5, '#b5a642', '#605321'));
back_us_braces . push (new Screw (-0.06, 374, 6, 0.5, '#b5a642', '#605321'));
back_us_braces . push (new Screw (0.06, 374, 6, 0.5, '#b5a642', '#605321'));
back_us_braces . push (new Engraving ("CASTELL", 'italic 12px arial', 'center', 'black', 0, 378));
back_us_braces . push (new Engraving ("d", '12px arial', 'right', 'red', HairlineRight - 0.006, 304));
back_us_braces . push (new Engraving ("A", '12px arial', 'center', 'red', HairlineRight + HairlineS + HairlineS, 304));
back_us_cursors . push (new Cursor (HairlineRight + HairlineS + HairlineS, 146, 170, 'red', {marking_align: 'right', marking_shift: -0.002}));
back_us_cursors . push (new Cursor (HairlineRight + HairlineS + HairlineS, 196, 220, 'red', {marking_align: 'right', marking_shift: -0.002}));
back_us_cursors . push (new Cursor (HairlineRight + HairlineS + HairlineS, 268, 292, 'red', {marking_align: 'right', marking_shift: -0.002}));
back_us_cursors . push (new Cursor (HairlineLeft, 8, 98, 'red', {marking_align: 'right', marking_shift: -0.01}));
back_us_cursors . push (new Cursor (HairlineLeft, 104, 194, 'red', {marking_align: 'right', marking_shift: -0.01}));
back_us_cursors . push (new Cursor (HairlineLeft, 196, 268, 'red', {marking_align: 'right', marking_shift: -0.01}));
back_us_cursors . push (new Cursor (HairlineLeft, 274, 358, 'red', {marking_align: 'right', marking_shift: -0.01}));
back_us_cursors . push (new Cursor (HairlineRight, 8, 98, 'red'));
back_us_cursors . push (new Cursor (HairlineRight, 104, 194, 'red'));
back_us_cursors . push (new Cursor (HairlineRight, 196, 268, 'red'));
back_us_cursors . push (new Cursor (HairlineRight, 274, 358, 'red'));

r = new Rule ({left_margin: 0.24, right_margin: 0.24});
s . rules . push (r);
r . scales . push (new scale_LL03 (24, {left_extension: 0.04, right_extension: 0.065, left: "LL\u2080\u2083", right: "e^-x", rs: 0.08, colour: 'red'}));
r . scales . push (new spacer (1));
r . scales . push (new scale_LL02_down (24, {left_extension: 0.026, right_extension: 0.058, left: "LL\u2080\u2082", right: "e^-0.1x", rs: 0.08, colour: 'red'}));
r . scales . push (new scale_LL01 (24, {left_extension: 0.046, right_extension: 0.048, left: "LL\u2080\u2081", right: "e^-0.01x", rs: 0.08, colour: 'red'}));
r . scales . push (new spacer (1));
r . scales . push (new scale_LL00_down (24, {left_extension: 0.046, right_extension: 0.046, left: "LL\u2080\u2080", right: "e^-0.001x", rs: 0.08, colour: 'red'}));
r . markings . push (new Engraving ('\u2207', '12px arial', 'center', 'red', 0, 110));
r . markings . push (new VLine (0, 110, 122, 'red', 1));
r . scales . push (new scale_R2 (24, {left_extension: 0.106, ls: 0.14, right_extension: 0.084, left: "W\u2082", right: "\u221a10 X\u00b3", rs: 0.13, draw_q: true}));

r = new Rule ({stator: 1, left_margin: 0.26, right_margin: 0.26}); s . rules . push (r);
r . markings . push (new RuleBars (-0.254, 1, 4, 116, 9, 6, 4, 'black'));
r . markings . push (new RuleBars (1.254, -1, 4, 116, 9, 6, 4, 'black'));
r . markings . push (new Engraving ('\u0394', '12px arial', 'center', 'red', 0, 22));
r . markings . push (new VLine (0, 0, 12, 'red', 1));
r . scales . push (new scale_W2 (24, {left_extension: 0.106, ls: 0.14, right_extension: 0.084, left: "W\u2082'", right: "\u221a10 X\u00b3", rs: 0.13, alt: 'black', draw_q: true}));
r . scales . push (new scale_DI (24, {left_extension: 0.114, right_extension: 0.098, left: "CI", ls: 0.14, right: "10/x", rs: 0.13, colour: 'red'}));
r . scales . push (new scale_LR12 (24, {left_extension: 0.1, ls: 0.14, right_extension: 0.1, left: "L", right: "\u00bdlg X", rs: 0.13}));
r . scales . push (new spacer (2));
r . scales . push (new scale_D (24, {left_extension: 0.098, right_extension: 0.08, ls: 0.14, left: "C", right: "X", rs: 0.13, highlight: '#ccffcc', alt: 'black'}));
r . scales . push (new scale_R1 (24, {left_extension: 0.092, right_extension: 0.09, ls: 0.14, left: "W\u2081'", right: "\u221aX", rs: 0.13, alt: 'black', draw_q: true}));
r . markings . push (new Engraving ('\u2207', '12px arial', 'center', 'red', 1, 110));
r . markings . push (new VLine (1, 110, 122, 'red', 1));

r = new Rule ({left_margin: 0.24, right_margin: 0.24}); s . rules . push (r);
r . scales . push (new scale_W1 (24, {left_extension: 0.092, right_extension: 0.09, left: "W\u2081'", ls: 0.14, right: "\u221aX", rs: 0.13, alt: 'black', draw_q: true}));
r . markings . push (new Engraving ('\u0394', '12px arial', 'center', 'red', 1, 22));
r . markings . push (new VLine (1, 0, 12, 'red', 1));
r . scales . push (new scale_CLL0 (24, {left_extension: 0.048, right_extension: 0.042, left: "D", ls: 0.14, right: "X", rs: 0.13, centre: "LL", cs: -0.1, ca: 'left', cf: 'italic 12px arial', highlight: '#ccffcc'}));
r . markings . push (new Engraving ("e^0.001x", 'italic 12px arial', 'left', 'black', 1.08, 42));
r . scales . push (new spacer (1));
r . scales . push (new scale_LL1_down (24, {left_extension: 0.028, right_extension: 0.056, left: "LL\u2081", right: "e^0.01x", rs: 0.08}));
r . scales . push (new scale_LL2 (24, {left_extension: 0.046, right_extension: 0.042, left: "LL\u2082", right: "e^0.1x", rs: 0.08}));
r . scales . push (new spacer (1));
r . scales . push (new scale_LL3_down (24, {left_extension: 0.04, right_extension: 0.064, left: "LL\u2083", right: "e^x", rs: 0.08}));


