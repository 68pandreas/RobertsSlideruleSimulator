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

var oak = new Image (); oak . src = 'oak.png'; oak . onload = function () {sliderules . requireRedraw = true;};
var clay1 = new Image (); clay1 . src = 'clay_01.jpg'; clay1 . onload = function () {sliderules . requireRedraw = true;};
var clay2 = new Image (); clay2 . src = 'clay_03.jpg'; clay2 . onload = function () {sliderules . requireRedraw = true;};

var sliderules = new Sliderules ();

var s = new Sliderule (1200, {cursor_markings_shift: 0.002}); sliderules . sliderules . push (s);

s . cursorBraces . push (new CursorWindow (16, 10, oak, 'blue'));

s . backBraces . push (new FlatFloor (0.21, 0.21, -18, -18, 10, 'tan', oak));

s . cursors . push (new Cursor (HairlineD, 84, 156, 'green', {marking_shift: 0.002}));
s . cursors . push (new Cursor (HairlineS, 36, 84, 'green', {marking_align: 'right', marking_shift: -0.002}));

var r = new Rule ({rule_colour: oak}); s . rules . push (r);
r . markings . push (new Screw (-0.175, 30, 6, Math . random () * Math . PI, '#b5a642', '#605321'));
r . markings . push (new Screw (1.175, 30, 6, Math . random () * Math . PI, '#b5a642', '#605321'));
r . scales . push (new spacer (12));
r . scales . push (new scale_P (24, {left: "P", ls: 0.05}));
r . scales . push (new scale_A (24, {left: "A", ls: 0.05}));
r = new Rule ({stator: 1, rule_colour: oak}); s . rules . push (r);
r . scales . push (new scale_B (24, {left: "B", ls: 0.05}));
r . scales . push (new scale_CI (24, {left: "CI", ls: 0.05}));
r . scales . push (new scale_C (24, {left: "C", ls: 0.05}));
r = new Rule ({rule_colour: oak}); s . rules . push (r);
r . markings . push (new Screw (-0.175, 54, 6, Math . random () * Math . PI, '#b5a642', '#605321'));
r . markings . push (new Screw (1.175, 54, 6, Math . random () * Math . PI, '#b5a642', '#605321'));
r . scales . push (new scale_D (24, {left: "D", ls: 0.05}));
r . scales . push (new scale_Sdec_down (24, {left: "S", ls: 0.05}));
r . scales . push (new scale_Tdec_down (24, {left: "T", ls: 0.05}));
r . scales . push (new scale_STdec_down (24, {left: "ST", ls: 0.05}));
r . scales . push (new spacer (12));

