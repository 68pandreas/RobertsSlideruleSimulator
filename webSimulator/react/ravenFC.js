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

var front_german_cursors = [], front_us_cursors = [], front_german_braces = [], front_us_braces = [], back_german_cursors = [], back_us_cursors = [];

var s = new Sliderule (1200, {left_margin: 0.18, right_margin: 0.18, cursor_top_margin: 13, cursor_bottom_margin: 13, hairline_top: -10, hairline_bottom: -10, cursor_limit_left: 0.022, cursor_limit_right: 0.022, markings_background: 'yellow', cursor_left_extension: 0.09, cursor_right_extension: 0.09, cursor_markings_shift: 0.005}); sliderules . sliderules . push (s);
s . braces . push (new LeftBrace (2, 0.066, 8, 'gold', 'black', 74, 1));
s . braces . push (new LeftBrace (4, 0.06, 8, 'tan', 'black', 76, 1));
s . braces . push (new LeftBraceBar (0.052, 20, 20, 4, 'red', 'black'));
s . braces . push (new LeftBraceBar (0.052, 20, 244, 4, 'gray', 'black'));
s . braces . push (new LeftBraceBar (0.052, 244, 20, 4, 'gray', 'black'));
s . braces . push (new RightBrace (2, 0.066, 8, 'gold', 'black', 74, 1));
s . braces . push (new RightBrace (4, 0.06, 8, 'tan', 'black', 76, 1));
s . braces . push (new RightBraceBar (0.052, 20, 20, 4, 'red', 'black'));
s . braces . push (new RightBraceBar (0.052, 20, 244, 4, 'gray', 'black'));
s . braces . push (new RightBraceBar (0.052, 244, 20, 4, 'gray', 'black'));
s . braces . push (new Screw (0.026, 42, 12, Math . random () * Math . PI, '#b5a642', '#605321'));
s . braces . push (new Screw (0.016, 222, 8, Math . random () * Math . PI, '#b5a642', '#605321'));
s . braces . push (new Screw (0.032, 268, 8, Math . random () * Math . PI, '#b5a642', '#605321'));
s . braces . push (new Screw (1.36 - 0.026, 42, 12, Math . random () * Math . PI, '#b5a642', '#605321'));
s . braces . push (new Screw (1.36 - 0.016, 222, 8, Math . random () * Math . PI, '#b5a642', '#605321'));
s . braces . push (new Screw (1.36 - 0.032, 268, 8, Math . random () * Math . PI, '#b5a642', '#605321'));
s . cursorGlassBraces . push (new DecilonCursorBrace (1, 0.09, 12, 8, 0.04, 18, 4, 'tan', 'black'));
var screw_angles = [Math . random () * Math . PI, Math . random () * Math . PI, Math . random () * Math . PI, Math . random () * Math . PI];
var GRHairlineLeft = HairlineD - HairlinePS - HairlinePS;
var GRHairlineRight = GRHairlineLeft - Math . log10 (Math . log (2));
var USHairlineLeft = HairlineD - HairlineHPUS - HairlineHPUS;
var USHairlineRight = USHairlineLeft - Math . log10 (Math . log (2));
front_german_braces . push (new Engraving (sliderules . manufacturer, '12px arial', 'right', 'red', 0.07, 289));
front_german_braces . push (new Engraving (sliderules . name, '12px arial', 'left', 'red', -0.07, 12));
front_german_braces . push (new Engraving ('PS', '12px arial', 'center', 'red', HairlinePS, 68));
front_german_braces . push (new Engraving ('s', '12px arial', 'center', 'red', HairlineS, 68));
front_german_braces . push (new Engraving ('d', '12px arial', 'center', 'red', HairlineD, 166));
front_german_braces . push (new Engraving ('PS', '12px arial', 'center', 'red', HairlineD, 235));
front_german_braces . push (new Engraving ('kW', '12px arial', 'left', 'red', GRHairlineLeft + 0.0025, 235));
front_german_braces . push (new Screw (-0.06, -9, 6, screw_angles [0], 'gold', 'silver'));
front_german_braces . push (new Screw (0.06, -9, 6, screw_angles [1], 'gold', 'silver'));
front_german_braces . push (new Screw (-0.06, 303, 6, screw_angles [2], 'gold', 'silver'));
front_german_braces . push (new Screw (0.06, 303, 6, screw_angles [3], 'gold', 'silver'));
front_us_braces . push (new Engraving (sliderules . manufacturer, '12px arial', 'right', 'red', 0.07, 289));
front_us_braces . push (new Engraving (sliderules . name, '12px arial', 'left', 'red', -0.07, 12));
front_us_braces . push (new Engraving ('HP', '12px arial', 'center', 'red', HairlineHPUS, 68));
front_us_braces . push (new Engraving ('s', '12px arial', 'center', 'red', HairlineS, 68));
front_us_braces . push (new Engraving ('d', '12px arial', 'center', 'red', HairlineD, 166));
front_us_braces . push (new Engraving ('HP', '12px arial', 'center', 'red', HairlineD, 235));
front_us_braces . push (new Engraving ('kW', '12px arial', 'left', 'red', USHairlineLeft + 0.0025, 235));
front_us_braces . push (new Screw (-0.06, -9, 6, screw_angles [0], 'gold', 'silver'));
front_us_braces . push (new Screw (0.06, -9, 6, screw_angles [1], 'gold', 'silver'));
front_us_braces . push (new Screw (-0.06, 303, 6, screw_angles [2], 'gold', 'silver'));
front_us_braces . push (new Screw (0.06, 303, 6, screw_angles [3], 'gold', 'silver'));
front_german_cursors . push (new Cursor (HairlinePS, 74, 122, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_german_cursors . push (new Cursor (HairlineS, 74, 122, 'red', {marking_shift: 0.005}));
front_german_cursors . push (new Cursor (HairlineD, 172, 220, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_german_cursors . push (new Cursor (GRHairlineLeft, 26, 74, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_german_cursors . push (new Cursor (GRHairlineLeft, 76, 120, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_german_cursors . push (new Cursor (GRHairlineLeft, 122, 170, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_german_cursors . push (new Cursor (GRHairlineLeft, 172, 218, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_german_cursors . push (new Cursor (GRHairlineLeft, 220, 284, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_german_cursors . push (new Cursor (GRHairlineRight, 26, 74, 'red', {marking_shift: 0.005}));
front_german_cursors . push (new Cursor (GRHairlineRight, 76, 120, 'red', {marking_shift: 'right', marking_shift: 0.005}));
front_german_cursors . push (new Cursor (GRHairlineRight, 122, 170, 'red', {marking_shift: 'right', marking_shift: 0.005}));
front_german_cursors . push (new Cursor (GRHairlineRight, 172, 218, 'red', {marking_shift: 'right', marking_shift: 0.005}));
front_german_cursors . push (new Cursor (GRHairlineRight, 220, 284, 'red', {marking_shift: 'right', marking_shift: 0.005}));
front_us_cursors . push (new Cursor (HairlineHPUS, 74, 122, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_us_cursors . push (new Cursor (HairlineS, 74, 122, 'red', {marking_shift: 0.005}));
front_us_cursors . push (new Cursor (HairlineD, 172, 220, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_us_cursors . push (new Cursor (USHairlineLeft, 26, 74, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_us_cursors . push (new Cursor (USHairlineLeft, 76, 120, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_us_cursors . push (new Cursor (USHairlineLeft, 122, 170, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_us_cursors . push (new Cursor (USHairlineLeft, 172, 218, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_us_cursors . push (new Cursor (USHairlineLeft, 220, 284, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_us_cursors . push (new Cursor (USHairlineRight, 26, 74, 'red', {marking_shift: 0.005}));
front_us_cursors . push (new Cursor (USHairlineRight, 76, 120, 'red', {marking_shift: 'right', marking_shift: 0.005}));
front_us_cursors . push (new Cursor (USHairlineRight, 122, 170, 'red', {marking_shift: 'right', marking_shift: 0.005}));
front_us_cursors . push (new Cursor (USHairlineRight, 172, 218, 'red', {marking_shift: 'right', marking_shift: 0.005}));
front_us_cursors . push (new Cursor (USHairlineRight, 220, 284, 'red', {marking_shift: 'right', marking_shift: 0.005}));
var r = new Rule ({left_margin: 0.18, right_margin: 0.18}); s . rules . push (r);
r . markings . push (new Engraving (sliderules . name, '16px arial', 'left', 'red', 0, 20));
r . markings . push (new Engraving (sliderules . made_in, '12px arial', 'right', 'black', 1, 16));
r . scales . push (new spacer (26));
r . scales . push (new scale_P (24, {left: "P", right: "\u221a1-\u{1d465}\u00b2", rs: 0.07, left_extension: 0.05}));
r . scales . push (new scale_K (24, {left: "K", right: "\u{1d465}\u00b3", rs: 0.07, left_extension: 0.052, right_extension: 0.04, indices: ['1', '10', '100', '1000']}));
r . scales . push (new scale_A (24, {left: "A", right: "\u{1d465}\u00b2", rs: 0.07, left_extension: 0.05, right_extension: 0.042, indices: ['1', '10', '100'], highlight: '#eeeeff'}));
r = new Rule ({stator: 1, left_margin: 0.19, right_margin: 0.19}); s . rules . push (r);
r . markings . push (new RuleBars (-0.184, 1, 4, 94, 9, 6, 4, 'tan'));
r . markings . push (new RuleBars (1.184, -1, 4, 94, 9, 6, 4, 'tan'));
r . scales . push (new scale_B (24, {left: "B", right: "\u{1d465}\u00b2", rs: 0.07, left_extension: 0.05, right_extension: 0.042, indices: ['1', '10', '100'], highlight: '#eeeeff'}));
r . scales . push (new scale_SCdec (24, {left: "S", right: "sin \u{1d465}", rs: 0.07, left_extension: 0.06}));
r . scales . push (new spacer (2));
r . scales . push (new scale_TCTdec_down (24, {left: "T", right: "tan \u{1d465}", rs: 0.07, left_extension: 0.06, right_extension: 0.046}));
r . scales . push (new scale_C (24, {left: "C", right: "\u{1d465}", rs: 0.07, left_extension: 0.048, right_extension: 0.044, draw_st_corrections: true, draw_r: true, draw_q: true, highlight: '#ccffcc'}));
r = new Rule ({left_margin: 0.18, right_margin: 0.18}); s . rules . push (r);
r . scales . push (new scale_D (24, {left: "D", right: "\u{1d465}", rs: 0.07, left_extension: 0.048, right_extension: 0.044, draw_r: true, draw_q: true, highlight: '#ccffcc'}));
r . scales . push (new scale_DI (24, {left: "DI", right: "10/\u{1d465}", rs: 0.07, left_extension: 0.042, right_extension: 0.048, marking_colour: 'red'}));
r . scales . push (new scale_LL01_down (24, {left: "LL01", marking_colour: 'red', right: "e\u207b\u2070\u22c5\u2070\u00b9\u02e3", rs: 0.02, left_extension: 0.046}));
r . scales . push (new scale_LL00_down (24, {left: "LL00", marking_colour: 'red', right: "e\u207b\u2070\u22c5\u2070\u2070\u00b9\u02e3", rs: 0.02, left_extension: 0.046, right_extension: 0.004}));
r . scales . push (new spacer (2));


var s = new Sliderule (1200, {left_margin: 0.18, right_margin: 0.18, cursor_top_margin: 13, cursor_bottom_margin: 13, hairline_top: -10, hairline_bottom: -10, cursor_limit_left: 0.022, cursor_limit_right: 0.022, cursor_markings_align: 'right', markings_background: 'yellow', cursor_left_extension: 0.09, cursor_right_extension: 0.09, cursor_markings_shift: -0.005}); sliderules . sliderules . push (s);
s . braces . push (new LeftBrace (2, 0.066, 8, 'gold', 'black', 74, 1));
s . braces . push (new LeftBrace (4, 0.06, 8, 'tan', 'black', 76, 1));
s . braces . push (new LeftBraceBar (0.052, 20, 20, 4, 'red', 'black'));
s . braces . push (new LeftBraceBar (0.052, 20, 244, 4, 'gray', 'black'));
s . braces . push (new LeftBraceBar (0.052, 244, 20, 4, 'gray', 'black'));
s . braces . push (new RightBrace (2, 0.066, 8, 'gold', 'black', 74, 1));
s . braces . push (new RightBrace (4, 0.06, 8, 'tan', 'black', 76, 1));
s . braces . push (new RightBraceBar (0.052, 20, 20, 4, 'red', 'black'));
s . braces . push (new RightBraceBar (0.052, 20, 244, 4, 'gray', 'black'));
s . braces . push (new RightBraceBar (0.052, 244, 20, 4, 'gray', 'black'));
s . braces . push (new Screw (0.026, 294 - 42, 12, Math . random () * Math . PI, '#b5a642', '#605321'));
s . braces . push (new Screw (0.016, 294 - 222, 8, Math . random () * Math . PI, '#b5a642', '#605321'));
s . braces . push (new Screw (0.032, 294 - 268, 8, Math . random () * Math . PI, '#b5a642', '#605321'));
s . braces . push (new Screw (1.36 - 0.026, 294 - 42, 12, Math . random () * Math . PI, '#b5a642', '#605321'));
s . braces . push (new Screw (1.36 - 0.016, 294 - 222, 8, Math . random () * Math . PI, '#b5a642', '#605321'));
s . braces . push (new Screw (1.36 - 0.032, 294 - 268, 8, Math . random () * Math . PI, '#b5a642', '#605321'));
s . cursorGlassBraces . push (new DecilonCursorBrace (1, 0.09, 12, 8, 0.04, 18, 4, 'tan', 'black'));
s . cursorBraces . push (new Engraving (sliderules . manufacturer, '12px arial', 'right', 'red', 0.07, 289));
s . cursorBraces . push (new Engraving (sliderules . name, '12px arial', 'left', 'red', -0.07, 12));
s . cursorBraces . push (new Engraving ('360', '12px arial', 'center', 'red', Hairline360, 68));
s . cursorBraces . push (new Screw (-0.06, -9, 6, Math . random () * Math . PI, 'gold', 'silver'));
s . cursorBraces . push (new Screw (0.06, -9, 6, Math . random () * Math . PI, 'gold', 'silver'));
s . cursorBraces . push (new Screw (-0.06, 303, 6, Math . random () * Math . PI, 'gold', 'silver'));
s . cursorBraces . push (new Screw (0.06, 303, 6, Math . random () * Math . PI, 'gold', 'silver'));
back_german_cursors . push (new Cursor (Hairline360, 74, 122, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_german_cursors . push (new Cursor (GRHairlineLeft, 10, 74, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_german_cursors . push (new Cursor (GRHairlineLeft, 76, 120, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_german_cursors . push (new Cursor (GRHairlineLeft, 122, 170, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_german_cursors . push (new Cursor (GRHairlineLeft, 172, 218, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_german_cursors . push (new Cursor (GRHairlineLeft, 220, 284, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_german_cursors . push (new Cursor (GRHairlineRight, 10, 74, 'red', {marking_shift: 0.005}));
back_german_cursors . push (new Cursor (GRHairlineRight, 76, 120, 'red', {marking_shift: 'right', marking_shift: 0.005}));
back_german_cursors . push (new Cursor (GRHairlineRight, 122, 170, 'red', {marking_shift: 'right', marking_shift: 0.005}));
back_german_cursors . push (new Cursor (GRHairlineRight, 172, 218, 'red', {marking_shift: 'right', marking_shift: 0.005}));
back_german_cursors . push (new Cursor (GRHairlineRight, 220, 284, 'red', {marking_shift: 'right', marking_shift: 0.005}));
back_us_cursors . push (new Cursor (Hairline360, 74, 122, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_us_cursors . push (new Cursor (USHairlineLeft, 10, 74, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_us_cursors . push (new Cursor (USHairlineLeft, 76, 120, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_us_cursors . push (new Cursor (USHairlineLeft, 122, 170, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_us_cursors . push (new Cursor (USHairlineLeft, 172, 218, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_us_cursors . push (new Cursor (USHairlineLeft, 220, 284, 'red', {marking_align: 'right', marking_shift: -0.005}));
back_us_cursors . push (new Cursor (USHairlineRight, 10, 74, 'red', {marking_shift: 0.005}));
back_us_cursors . push (new Cursor (USHairlineRight, 76, 120, 'red', {marking_shift: 'right', marking_shift: 0.005}));
back_us_cursors . push (new Cursor (USHairlineRight, 122, 170, 'red', {marking_shift: 'right', marking_shift: 0.005}));
back_us_cursors . push (new Cursor (USHairlineRight, 172, 218, 'red', {marking_shift: 'right', marking_shift: 0.005}));
back_us_cursors . push (new Cursor (USHairlineRight, 220, 284, 'red', {marking_shift: 'right', marking_shift: 0.005}));
var r = new Rule ({left_margin: 0.18, right_margin: 0.18}); s . rules . push (r);
r . markings . push (new Engraving (sliderules . name, '12px arial', 'center', 'red', 0.05, 12));
r . markings . push (new Engraving (sliderules . made_in, '12px arial', 'center', 'black', 0.95, 12));
r . scales . push (new spacer (2));
r . scales . push (new scale_L (24, {left: "L", right: "log \u{1d465}", rs: 0.07, left_extension: 0.05, right_extension: 0.05}));
r . scales . push (new scale_LL03 (24, {left: "LL03", marking_colour: 'red', right: "e\u207b\u02e3", left_extension: 0.04, rs: 0.02}));
r . scales . push (new scale_LL02 (24, {left: "LL02", marking_colour: 'red', right: "e\u207b\u2070\u22c5\u00b9\u02e3", rs: 0.02, left_extension: 0.026, right_extension: 0.01}));
r . scales . push (new scale_CF (24, {left: "DF", right: "\u03c0\u{1d465}", rs: 0.07, left_extension: 0.05, right_extension: 0.048, indices: ['>>1<<'], highlight: '#eeeeff'}));
r = new Rule ({stator: 1, left_margin: 0.19, right_margin: 0.19}); s . rules . push (r);
r . markings . push (new RuleBars (-0.184, 1, 4, 94, 9, 6, 4, 'tan'));
r . markings . push (new RuleBars (1.184, -1, 4, 94, 9, 6, 4, 'tan'));
r . scales . push (new scale_DF (24, {left: "CF", right: "\u03c0\u{1d465}", rs: 0.07, left_extension: 0.05, right_extension: 0.048, indices: ['>>1<<'], draw_r: true, draw_q: true, highlight: '#ccffcc'}));
r . scales . push (new scale_CIF (24, {left: "CIF", right: "10/\u03c0\u{1d465}", rs: 0.07, left_extension: 0.042, right_extension: 0.056, marking_colour: 'red', indices: ['>>1<<']}));
r . scales . push (new spacer (2));
r . scales . push (new scale_DI (24, {left: "CI", right: "10/\u{1d465}", rs: 0.07, left_extension: 0.042, right_extension: 0.048, marking_colour: 'red'}));
r . scales . push (new scale_C (24, {left: "C", right: "\u{1d465}", rs: 0.07, left_extension: 0.048, right_extension: 0.042, draw_c: false, highlight: '#ccffcc'}));
r = new Rule ({left_margin: 0.18, right_margin: 0.18}); s . rules . push (r);
r . scales . push (new scale_DLL0 (24, {left: "D", right: "\u{1d465}", rs: 0.07, centre: "e\u2070\u22c5\u2070\u2070\u00b9\u02e3", cs: 1.02, ca: 'left', cc: 'red', left_extension: 0.048, draw_c: false, highlight: '#eeeeff'}));
r . markings . push (new Engraving ("LL0", 'italic 12px arial', 'left', 'red', -0.08, 18));
r . scales . push (new scale_LL1_down (24, {left: "LL1", right: "e\u2070\u22c5\u2070\u00b9\u02e3", rs: 0.02, left_extension: 0.05}));
r . scales . push (new scale_LL2_down (24, {left: "LL2", right: "e\u2070\u22c5\u00b9\u02e3", rs: 0.02, left_extension: 0.046, right_extension: 0.014}));
r . scales . push (new scale_LL3_down (24, {left: "LL3", right: "e\u02e3", rs: 0.02, left_extension: 0.04, right_extension: 0.014}));
r . scales . push (new spacer (2));

