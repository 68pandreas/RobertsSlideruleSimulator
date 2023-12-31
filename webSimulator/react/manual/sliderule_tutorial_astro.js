
var astroLessons = {};

astroLessons ['Calculate parsec'] = function (message) {
	var rt = crnu (60 * 60 * 180 / Math . PI, 0);
	var auf = 1.495978707;
	var aum = 149.5978707;
	var pc = crnu (149.5978707 * 60 * 60 * 180 / Math . PI, 2);
	return [
		{action: function () {ensureSide (['C', 'D', 'CF', 'DF', 'CIF']); isolate (['C', 'D', 'CF', 'DF', 'CIF']); changeMarkings ('hairline', true); dimmm (255, 40, 8);}, delay: 100},
		{action: function () {message ("The task: calculate the distance of one parsec in kilometers.");}, delay: 500},
		{action: function () {message ("One parsec is the distance from wich one Astronomical Unit (distance from Earth to Sun = 149,597,870.7 km)");}, delay: 3000},
		{action: function () {message (".... is perceived as one arcsecond.");}, delay: 2000},
		{action: function () {message ("As tangent of one arcsecond can be approximated as \u03c0 / (180 \u00d7 60 \u00d7 60)....");}, delay: 5000},
		{action: function () {message (".... one parsec is equal to one AU multiplied by reciprocal of the tangent of one arcsecond.");}, delay: 2000},
		{action: function () {message ("1 pc = (180 \u00d7 60 \u00d7 60) / \u03c0 \u00d7 " + aum + " million kilometers.");}, delay: 3000},
		{action: function () {message ("First multiply 60 \u00d7 60. Move the cursor to 0.6 on the DF scale.");}, delay: 4000},
		{action: function () {cursorTo ('DF', 0.6);}, delay: 1000},
		{action: function () {message ("Align 0.6 on the CIF scale with the cursor.");}, delay: 3000},
		{action: function () {slideTo ('CIF', 0.6);}, delay: 1000},
		{action: function () {message (".... and move cursor to 1 on the CF scale.");}, delay: 3000},
		{action: function () {cursorTo ('CF', 1);}, delay: 1000},
		{action: function () {message ("The result so far (after adjusting the decimal point) is: 3600 (on the DF scale).");}, delay: 3000},
		{action: function () {message ("Now multiply this result by 180 / \u03c0. This can be obtained by moving the cursor to the R gauge mark on the C scale.");}, delay: 4000},
		{action: function () {cursorTo ('C', 18 / Math . PI);}, delay: 1000},
		{action: function () {message ("After adjusting the decimal point you can read the result of " + rt + " on the D scale.");}, delay: 3000},
		{action: function () {message ("Now, multiply " + rt + " by Astronomical Unit (" + aum + " million kilometers).");}, delay: 3000},
		{action: function () {message ("Align 1 on the C scale with the cursor.");}, delay: 1000},
		{action: function () {slideTo ('C', 1);}, delay: 1000},
		{action: function () {message ("Move the cursor to " + crnu (auf, 5) + " on the C scale.");}, delay: 3000},
		{action: function () {cursorTo ('C', auf);}, delay: 1000},
		{action: function () {message ("Adjust the decimal point and read the result on the D scale. 1 parsec = " + pc + " million kilometers.");}, delay: 3000},
		{action: function () {cursorTo ('D', 1); slideTo ('D', 1); dimmm (40, 255, 8);
		sliderules . objective = function () {
			if (checkValue ('D', pc / 10000000) && checkValue  ('C', auf)) {
				message ("Mission accomplished! 1 parsec = " + pc + " million kilometers.");
				increaseCookieResult ('Calculate parsec');
				return true;
			}
			return false;
		};}, delay: 6000},
		{action: function () {isolate (); message ("Try these instructions again.");}, delay: 4000}
	];
};

astroLessons ['Calculate light year'] = function (message) {
  var speed_of_light = 299792458;
  var year = 60 * 60 * 24 * 365.25;
  return [
  {action: function () {ensureSide (['C', 'D']); isolate (['C', 'D']); changeMarkings ('hairline', true); dimmm (255, 40, 8);}, delay: 100},
  {action: function () {message ("The task: calculate the length of one light year in kilometers.");}, delay: 500},
  {action: function () {message ("Light year is the distance the light travels in vacuum in one Julian year (365.25 days).");}, delay: 3000},
  {action: function () {message ("The speed of light = 299,792.458 kilometers per second.");}, delay: 2000},
  {action: function () {message ("Hence the length of one light year = 60 \u00d7 60 \u00d7 24 \u00d7 365.25 \u00d7 299,792.458 kilometers.");}, delay: 2000},
  {action: function () {message ("Move the cursor to 6 on the D scale.");}, delay: 3000},
  {action: function () {cursorTo ('D', 6);}, delay: 1000},
  {action: function () {message ("Align 10 on the C scale with the cursor.");}, delay: 3000},
  {action: function () {slideTo ('C', 10);}, delay: 1000},
  {action: function () {message ("Move the cursor to 6 on the C scale.");}, delay: 3000},
  {action: function () {cursorTo ('C', 6);}, delay: 1000},
  {action: function () {message ("Align 1 on the C scale with the cursor.");}, delay: 3000},
  {action: function () {slideTo ('C', 1);}, delay: 1000},
  {action: function () {message ("Move the cursor to 2.4 on the C scale.");}, delay: 3000},
  {action: function () {cursorTo ('C', 2.4);}, delay: 1000},
  {action: function () {message ("Align 10 on the C scale with the cursor.");}, delay: 3000},
  {action: function () {slideTo ('C', 10);}, delay: 1000},
  {action: function () {message ("Move the cursor to 3.6525 on the D scale.");}, delay: 3000},
  {action: function () {cursorTo ('C', 3.6525);}, delay: 1000},
  {action: function () {message ("Adjust the decimal point and read the length of one Julian year in seconds = 31,557,600");}, delay: 3000},
  {action: function () {message ("Now multiply it by the speed of light (299,792.458 km/second).");}, delay: 3000},
  {action: function () {message ("Align 1 on the C scale with the cursor.");}, delay: 2000},
  {action: function () {slideTo ('C', 1);}, delay: 1000},
  {action: function () {message ("Move the cursor to 2.99792 on the C scale.");}, delay: 3000},
  {action: function () {cursorTo ('C', 2.99792458);}, delay: 1000},
  {action: function () {message ("Adjust the decimal point and read the length of one light year = 9,460,730,000,000 kilometers.");}, delay: 3000},
  {action: function () {cursorTo ('D', 1); slideTo ('D', 1); dimmm (40, 255, 8);
  sliderules . objective = function () {
    if (checkValue ('C', 2.99792) && checkValue ('D', 9.46073)) {
      message ("Mission accomplished! One light year = 9,460,730,000,000 kilometers.");
      increaseCookieResult ('Calculate light year');
      return true;
    }
    return false;
  };}, delay: 6000},
  {action: function () {isolate (); message ("Try these instructions again.");}, delay: 4000}
  ];
};

astroLessons ['Parsec to light year conversion'] = function (message) {
  var au = 149597870.7;
  var parsec = au * 60 * 60 * 180 / Math . PI;
  var year = 60 * 60 * 24 * 365.25;
  var light_speed = 299792.458;
  var light_year = year * light_speed;
  var conversion = crnu (parsec / light_year, 5);
  var parsecs = 0;
  while (parsecs < 1 || parsecs > 10) parsecs = crnu (Math . floor (Math . random () * 100) / 10);
  return [
  {action: function () {ensureSide (['CF', 'D']); isolate (['CF', 'D']); changeMarkings ('hairline', true); dimmm (255, 40, 8);}, delay: 100},
  {action: function () {message ("The task: convert " + parsecs + " parsecs to light years.");}, delay: 500},
  {action: function () {message ("Since one parsec = " + conversion + " light years, align 1 on the CF scale with " + conversion + " on the D scale.");}, delay: 3000},
  {action: function () {cursorTo ('D', conversion);}, delay: 1000},
  {action: function () {slideTo ('CF', 1);}, delay: 3000},
  {action: function () {message ("Now move the cursor to " + parsecs + " parsecs on the CF scale....");}, delay: 3000},
  {action: function () {cursorTo ('CF', parsecs > 3 ? parsecs / 10 : parsecs);}, delay: 1000},
  {action: function () {message ("Read the result on the D scale. " + parsecs + " parsecs = " + crnu (conversion * parsecs, parsecs > 3 ? 4 : 5) + " light years.");}, delay: 3000},
  {action: function () {cursorTo ('D', 1); slideTo ('C', 1); dimmm (40, 255, 8);
  sliderules . objective = function () {
    if (checkValue ('CF', parsecs > 3 ? parsecs / 10 : parsecs) && checkValue ('D', conversion * parsecs * (parsecs > 3 ? 0.1 : 1))) {
      message ("Mission accomplished! " + parsecs + " parsecs = " + crnu (conversion * parsecs, parsecs > 3 ? 4 : 5) + " light years.");
      increaseCookieResult ('Parsec to light year conversion');
      return true;
    }
    return false;
  };}, delay: 6000},
  {action: function () {isolate (); message ("Try these instructions again.");}, delay: 4000}
  ];
};

slideruleLessons . push (astroLessons);

