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

var front_german_cursors = [], front_us_cursors = [];

var oak = new Image (); oak . src = 'oak.png'; oak . onload = function () {sliderules . requireRedraw = true;};
var tc = new Image (); tc . src = "templar_cross.png"; tc . onload = function () {sliderules . requireRedraw = true;};

sliderules . position . x += 60;

var s = new Sliderule (1200, {cursor_top_margin: 13, cursor_bottom_margin: 13, hairline_top: -10, hairline_bottom: -10, cursor_limit_left: 0.052, cursor_limit_right: 0.052, markings_background: 'yellow', cursor_left_extension: 0.08, cursor_right_extension: 0.08, cursor_markings_shift: 0.005}); sliderules . sliderules . push (s);
s . braces . push (new LeftBrace (2, 0.066, 8, 'gold', 'black', 74, 1));
s . braces . push (new LeftBrace (4, 0.06, 8, 'tan', 'black', 76, 1));
s . braces . push (new RightBrace (2, 0.066, 8, 'gold', 'black', 74, 1));
s . braces . push (new RightBrace (4, 0.06, 8, 'tan', 'black', 76, 1));
s . cursorGlassBraces . push (new DecilonCursorBrace (1, 0.08, 12, 8, 0.04, 18, 4, 'tan', 'black'));
s . cursorBraces . push (new Logo (tc, 0.06, 16, 0.08));
s . cursorBraces . push (new Logo (tc, -0.06, 16, 0.08));
s . cursorBraces . push (new Screw (-0.06, -9, 6, Math . random () * Math . PI, 'gold', 'silver'));
s . cursorBraces . push (new Screw (0.06, -9, 6, Math . random () * Math . PI, 'gold', 'silver'));
s . cursorBraces . push (new Screw (-0.06, 447, 6, Math . random () * Math . PI, 'gold', 'silver'));
s . cursorBraces . push (new Screw (0.06, 447, 6, Math . random () * Math . PI, 'gold', 'silver'));
front_german_cursors . push (new Cursor (HairlinePS, 74, 122, 'red', {marking_shift: 0.005}));
front_german_cursors . push (new Cursor (HairlineS, 74, 122, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_german_cursors . push (new Cursor (HairlineS, 146, 194, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_german_cursors . push (new Cursor (HairlineD, 244, 292, 'red', {marking_shift: 0.005}));
front_german_cursors . push (new Cursor (HairlineD, 316, 364, 'red', {marking_shift: 0.005}));
front_us_cursors . push (new Cursor (HairlineHPUS, 74, 122, 'red', {marking_shift: 0.005}));
front_us_cursors . push (new Cursor (HairlineS, 74, 122, 'red', {marking_align: 'right', marking_shift: -0.005}));
front_us_cursors . push (new Cursor (HairlineD, 172, 220, 'red', {marking_shift: 0.005}));
var r = new Rule ({rule_colour: oak}); s . rules . push (r);
//r . markings . push (new Engraving (sliderules . name, 'italic 16px cursive', 'left', 'red', 0.125, 20));
r . markings . push (new Engraving (sliderules . made_in, 'italic 12px cursive', 'right', 'black', 1, 16));
r . scales . push (new spacer (26));
r . scales . push (new scale_P (24, {left: "P", right: "\u221a1-\u{1d465}\u00b2", rs: 0.07, left_extension: 0.05}));
r . scales . push (new scale_K (24, {left: "K", right: "\u{1d465}\u00b3", rs: 0.07, left_extension: 0.052, right_extension: 0.04, indices: ['1', '10', '100', '1000']}));
r . scales . push (new scale_A (24, {left: "A", right: "\u{1d465}\u00b2", rs: 0.07, left_extension: 0.05, right_extension: 0.042, indices: ['1', '10', '100']}));
r = new Rule ({stator: 1, left_margin: 0.24, alt_left_margin: 0.26, right_margin: 0.24, alt_right_margin: 0.26, rule_colour: oak}); s . rules . push (r);
r . markings . push (new Logo (tc, -0.15, 36, 0.125));
r . markings . push (new Logo (tc, 1.15, 36, 0.125));
r . scales . push (new scale_B (24, {left: "B", right: "\u{1d465}\u00b2", rs: 0.07, left_extension: 0.05, right_extension: 0.042, indices: ['1', '10', '100']}));
r . scales . push (new scale_SCdec (24, {left: "S", right: "sin \u{1d465}", rs: 0.07, left_extension: 0.06}));
r . scales . push (new scale_A (24, {left: "AA", right: "\u{1d465}\u00b2", rs: 0.07, left_extension: 0.05, right_extension: 0.042, indices: ['1', '10', '100']}));
r = new Rule ({stator: 2, left_margin: 0.27, right_margin: 0.27, rule_colour: oak}); s . rules . push (r);
r . markings . push (new RuleBars (-0.264, 1, 4, 94, 9, 6, 4, 'brown'));
r . markings . push (new RuleBars (1.264, -1, 4, 96, 9, 6, 4, 'brown'));
r . markings . push (new Logo (tc, -0.15, 49, 0.25));
r . markings . push (new Logo (tc, 1.15, 49, 0.25));
r . scales . push (new scale_B (24, {left: "BB", right: "\u{1d465}\u00b2", rs: 0.07, left_extension: 0.05, right_extension: 0.042, indices: ['1', '10', '100']}));
r . scales . push (new scale_SCdec (24, {left: "SS", right: "sin \u{1d465}", rs: 0.07, left_extension: 0.06}));
r . scales . push (new spacer (2));
r . scales . push (new scale_TCTdec_down (24, {left: "TT", right: "tan \u{1d465}", rs: 0.07, left_extension: 0.06, right_extension: 0.046}));
r . scales . push (new scale_C (24, {left: "CC", right: "\u{1d465}", rs: 0.07, left_extension: 0.048, right_extension: 0.044, draw_st_corrections: true, draw_r: true, draw_q: true}));
r = new Rule ({stator: 1, left_margin: 0.26, alt_left_margin: 0.24, right_margin: 0.26, alt_right_margin: 0.24, rule_colour: oak}); s . rules . push (r);
r . markings . push (new Logo (tc, -0.15, 36, 0.125));
r . markings . push (new Logo (tc, 1.15, 36, 0.125));
r . markings . push (new StaedtlerLeftBrace (4, 0.39, 0.43, 0.43, 0.45, 106, 160, 170, 'gold', 'black', -268));
r . markings . push (new StaedtlerLeftBrace (4, 0.396, 0.42, 0.428, 0.446, 108, 158, 170, 'tan', 'black', -268));
r . markings . push (new StaedtlerRightBrace (4, -0.01, 0.03, 0.03, 0.05, 106, 160, 170, 'gold', 'black', -268));
r . markings . push (new StaedtlerRightBrace (4, -0.004, 0.02, 0.028, 0.046, 108, 158, 170, 'tan', 'black', -268));
r . scales . push (new scale_D (24, {left: "DD", right: "\u{1d465}", rs: 0.07, left_extension: 0.048, right_extension: 0.044, draw_r: true, draw_q: true}));
r . scales . push (new scale_TCTdec_down (24, {left: "T", right: "tan \u{1d465}", rs: 0.07, left_extension: 0.06, right_extension: 0.046}));
r . scales . push (new scale_C (24, {left: "C", right: "\u{1d465}", rs: 0.07, left_extension: 0.048, right_extension: 0.044, draw_st_corrections: true, draw_r: true, draw_q: true}));
r = new Rule ({rule_colour: oak}); s . rules . push (r);
r . scales . push (new scale_D (24, {left: "D", right: "\u{1d465}", rs: 0.07, left_extension: 0.048, right_extension: 0.044, draw_r: true, draw_q: true}));
r . scales . push (new scale_DI (24, {left: "DI", right: "10/\u{1d465}", rs: 0.07, left_extension: 0.042, right_extension: 0.048, marking_colour: 'red'}));
r . scales . push (new scale_LL01_down (24, {left: "LL01", marking_colour: 'red', right: "e\u207b\u2070\u22c5\u2070\u00b9\u02e3", rs: 0.02, left_extension: 0.046}));
r . scales . push (new scale_LL00_down (24, {left: "LL00", marking_colour: 'red', right: "e\u207b\u2070\u22c5\u2070\u2070\u00b9\u02e3", rs: 0.02, left_extension: 0.046, right_extension: 0.004}));
r . scales . push (new spacer (2));

var s = new Sliderule (1200, {cursor_top_margin: 13, cursor_bottom_margin: 13, hairline_top: -10, hairline_bottom: -10, cursor_limit_left: 0.052, cursor_limit_right: 0.052, markings_background: 'yellow', cursor_left_extension: 0.08, cursor_right_extension: 0.08, cursor_markings_shift: 0.005}); sliderules . sliderules . push (s);
s . braces . push (new LeftBrace (2, 0.066, 8, 'gold', 'black', 74, 1));
s . braces . push (new LeftBrace (4, 0.06, 8, 'tan', 'black', 76, 1));
s . braces . push (new RightBrace (2, 0.066, 8, 'gold', 'black', 74, 1));
s . braces . push (new RightBrace (4, 0.06, 8, 'tan', 'black', 76, 1));
s . cursorGlassBraces . push (new DecilonCursorBrace (1, 0.08, 12, 8, 0.04, 18, 4, 'tan', 'black'));
s . cursorBraces . push (new Logo (tc, 0.06, 16, 0.08));
s . cursorBraces . push (new Logo (tc, -0.06, 16, 0.08));
s . cursorBraces . push (new Screw (-0.06, -9, 6, Math . random () * Math . PI, 'gold', 'silver'));
s . cursorBraces . push (new Screw (0.06, -9, 6, Math . random () * Math . PI, 'gold', 'silver'));
s . cursorBraces . push (new Screw (-0.06, 447, 6, Math . random () * Math . PI, 'gold', 'silver'));
s . cursorBraces . push (new Screw (0.06, 447, 6, Math . random () * Math . PI, 'gold', 'silver'));
s . cursors . push (new Cursor (Hairline360, 74, 122, 'red', {marking_shift: 0.005}));
s . cursors . push (new Cursor (Hairline360, 146, 194, 'red', {marking_shift: 0.005}));
var r = new Rule ({rule_colour: oak}); s . rules . push (r);
r . scales . push (new spacer (2));
r . scales . push (new scale_L (24, {left: "L", right: "log \u{1d465}", rs: 0.07, left_extension: 0.05, right_extension: 0.05}));
r . scales . push (new scale_LL03 (24, {left: "LL03", marking_colour: 'red', right: "e\u207b\u02e3", left_extension: 0.04, rs: 0.02}));
r . scales . push (new scale_LL02 (24, {left: "LL02", marking_colour: 'red', right: "e\u207b\u2070\u22c5\u00b9\u02e3", rs: 0.02, left_extension: 0.026, right_extension: 0.01}));
r . scales . push (new scale_CF (24, {left: "DF", right: "\u03c0\u{1d465}", rs: 0.07, left_extension: 0.05, right_extension: 0.048, indices: ['>>1<<']}));
r = new Rule ({stator: 1, left_margin: 0.24, alt_left_margin: 0.26, right_margin: 0.24, alt_right_margin: 0.26, rule_colour: oak}); s . rules . push (r);
r . markings . push (new Logo (tc, -0.15, 36, 0.125));
r . markings . push (new Logo (tc, 1.15, 36, 0.125));
r . scales . push (new scale_DF (24, {left: "CF", right: "\u03c0\u{1d465}", rs: 0.07, left_extension: 0.05, right_extension: 0.048, indices: ['>>1<<'], draw_r: true, draw_q: true}));
r . scales . push (new scale_CIF (24, {left: "CIF", right: "10/\u03c0\u{1d465}", rs: 0.07, left_extension: 0.042, right_extension: 0.056, marking_colour: 'red', indices: ['>>1<<']}));
r . scales . push (new scale_CF (24, {left: "DDF", right: "\u03c0\u{1d465}", rs: 0.07, left_extension: 0.05, right_extension: 0.048, indices: ['>>1<<']}));
r = new Rule ({stator: 2, left_margin: 0.27, right_margin: 0.27, rule_colour: oak}); s . rules . push (r);
r . markings . push (new RuleBars (-0.264, 1, 4, 94, 9, 6, 4, 'brown'));
r . markings . push (new RuleBars (1.264, -1, 4, 96, 9, 6, 4, 'brown'));
r . markings . push (new Logo (tc, -0.15, 49, 0.25));
r . markings . push (new Logo (tc, 1.15, 49, 0.25));
r . scales . push (new scale_DF (24, {left: "CCF", right: "\u03c0\u{1d465}", rs: 0.07, left_extension: 0.05, right_extension: 0.048, indices: ['>>1<<'], draw_r: true, draw_q: true}));
r . scales . push (new scale_CIF (24, {left: "CCIF", right: "10/\u03c0\u{1d465}", rs: 0.07, left_extension: 0.042, right_extension: 0.056, marking_colour: 'red', indices: ['>>1<<']}));
r . scales . push (new spacer (2));
r . scales . push (new scale_DI (24, {left: "CCI", right: "10/\u{1d465}", rs: 0.07, left_extension: 0.042, right_extension: 0.048, marking_colour: 'red'}));
r . scales . push (new scale_C (24, {left: "CC", right: "\u{1d465}", rs: 0.07, left_extension: 0.048, right_extension: 0.042, draw_c: false}));
r = new Rule ({stator: 1, left_margin: 0.26, alt_left_margin: 0.24, right_margin: 0.26, alt_right_margin: 0.24, rule_colour: oak}); s . rules . push (r);
r . markings . push (new Logo (tc, -0.15, 36, 0.125));
r . markings . push (new Logo (tc, 1.15, 36, 0.125));
r . markings . push (new StaedtlerLeftBrace (4, 0.39, 0.43, 0.43, 0.45, 106, 160, 170, 'gold', 'black', -268));
r . markings . push (new StaedtlerLeftBrace (4, 0.396, 0.42, 0.428, 0.446, 108, 158, 170, 'tan', 'black', -268));
r . markings . push (new StaedtlerRightBrace (4, -0.01, 0.03, 0.03, 0.05, 106, 160, 170, 'gold', 'black', -268));
r . markings . push (new StaedtlerRightBrace (4, -0.004, 0.02, 0.028, 0.046, 108, 158, 170, 'tan', 'black', -268));
r . scales . push (new scale_D (24, {left: "DD", right: "\u{1d465}", rs: 0.07, left_extension: 0.048, right_extension: 0.044, draw_r: true, draw_q: true}));
r . scales . push (new scale_DI (24, {left: "CI", right: "10/\u{1d465}", rs: 0.07, left_extension: 0.042, right_extension: 0.048, marking_colour: 'red'}));
r . scales . push (new scale_C (24, {left: "C", right: "\u{1d465}", rs: 0.07, left_extension: 0.048, right_extension: 0.042, draw_c: false}));
r = new Rule ({rule_colour: oak}); s . rules . push (r);
r . scales . push (new scale_DLL0 (24, {left: "D", right: "\u{1d465}", rs: 0.07, centre: "e\u2070\u22c5\u2070\u2070\u00b9\u02e3", cs: 1.02, ca: 'left', cc: 'red', left_extension: 0.048, draw_c: false}));
r . markings . push (new Engraving ("LL", 'italic 12px arial', 'left', 'red', -0.08, 18));
r . scales . push (new scale_LL1_down (24, {left: "LL1", right: "e\u2070\u22c5\u2070\u00b9\u02e3", rs: 0.02, left_extension: 0.05}));
r . scales . push (new scale_LL2_down (24, {left: "LL2", right: "e\u2070\u22c5\u00b9\u02e3", rs: 0.02, left_extension: 0.046, right_extension: 0.014}));
r . scales . push (new scale_LL3_down (24, {left: "LL3", right: "e\u02e3", rs: 0.02, left_extension: 0.04, right_extension: 0.014}));
r . scales . push (new spacer (2));

