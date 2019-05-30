
var sliderules = new Sliderules ();

var s = new Sliderule (1200); sliderules . sliderules . push (s);

var r = new Rule (); s . rules . push (r);
r . scales . push (new scale_Sdec_down (24));
r . scales . push (new scale_STdec (24));
r . scales . push (new spacer (2));
r . scales . push (new scale_Tdec_down (24));
r . scales . push (new scale_A (24));

r = new Rule ({stator: 1}); s . rules . push (r);
r . scales . push (new scale_B (24));
r . scales . push (new scale_L (24));
r . scales . push (new spacer (2));
r . scales . push (new scale_J (24));
r . scales . push (new scale_C (24));

r = new Rule (); s . rules . push (r);
r . scales . push (new scale_D (24));
r . scales . push (new scale_CI (24));
r . scales . push (new spacer (2));
r . scales . push (new scale_P_down (24));
r . scales . push (new scale_PT (24, {right_extension: 0.01}));

s = new Sliderule (1200); sliderules . sliderules . push (s);