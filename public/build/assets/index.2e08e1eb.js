import{d as F}from"./index.a95d9f5e.js";function d(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function c(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function g(t){c(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function b(t,e){c(1,arguments);var r=e||{},a=r.locale,n=a&&a.options&&a.options.weekStartsOn,i=n==null?0:d(n),s=r.weekStartsOn==null?i:d(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=g(t),u=l.getUTCDay(),h=(u<s?7:0)+u-s;return l.setUTCDate(l.getUTCDate()-h),l.setUTCHours(0,0,0,0),l}function H(t,e){c(2,arguments);var r=g(t).getTime(),a=d(e);return new Date(r+a)}function L(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function le(t){c(1,arguments);var e=g(t);return e.setHours(0,0,0,0),e}function G(t){c(1,arguments);var e=g(t);return!isNaN(e)}function I(t,e){c(2,arguments);var r=d(e);return H(t,-r)}function o(t,e){for(var r=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return r+a}var Q={y:function(t,e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return o(e==="yy"?a%100:a,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):o(r+1,2)},d:function(t,e){return o(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return o(t.getUTCHours()%12||12,e.length)},H:function(t,e){return o(t.getUTCHours(),e.length)},m:function(t,e){return o(t.getUTCMinutes(),e.length)},s:function(t,e){return o(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,a=t.getUTCMilliseconds(),n=Math.floor(a*Math.pow(10,r-3));return o(n,e.length)}},v=Q,R=864e5;function _(t){c(1,arguments);var e=g(t),r=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),n=r-a;return Math.floor(n/R)+1}function O(t){c(1,arguments);var e=1,r=g(t),a=r.getUTCDay(),n=(a<e?7:0)+a-e;return r.setUTCDate(r.getUTCDate()-n),r.setUTCHours(0,0,0,0),r}function E(t){c(1,arguments);var e=g(t),r=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var n=O(a),i=new Date(0);i.setUTCFullYear(r,0,4),i.setUTCHours(0,0,0,0);var s=O(i);return e.getTime()>=n.getTime()?r+1:e.getTime()>=s.getTime()?r:r-1}function B(t){c(1,arguments);var e=E(t),r=new Date(0);r.setUTCFullYear(e,0,4),r.setUTCHours(0,0,0,0);var a=O(r);return a}var X=6048e5;function j(t){c(1,arguments);var e=g(t),r=O(e).getTime()-B(e).getTime();return Math.round(r/X)+1}function S(t,e){c(1,arguments);var r=g(t,e),a=r.getUTCFullYear(),n=e||{},i=n.locale,s=i&&i.options&&i.options.firstWeekContainsDate,l=s==null?1:d(s),u=n.firstWeekContainsDate==null?l:d(n.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(a+1,0,u),h.setUTCHours(0,0,0,0);var p=b(h,e),w=new Date(0);w.setUTCFullYear(a,0,u),w.setUTCHours(0,0,0,0);var C=b(w,e);return r.getTime()>=p.getTime()?a+1:r.getTime()>=C.getTime()?a:a-1}function $(t,e){c(1,arguments);var r=e||{},a=r.locale,n=a&&a.options&&a.options.firstWeekContainsDate,i=n==null?1:d(n),s=r.firstWeekContainsDate==null?i:d(r.firstWeekContainsDate),l=S(t,e),u=new Date(0);u.setUTCFullYear(l,0,s),u.setUTCHours(0,0,0,0);var h=b(u,e);return h}var A=6048e5;function K(t,e){c(1,arguments);var r=g(t),a=b(r,e).getTime()-$(r,e).getTime();return Math.round(a/A)+1}var y={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},V={G:function(t,e,r){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var a=t.getUTCFullYear(),n=a>0?a:1-a;return r.ordinalNumber(n,{unit:"year"})}return v.y(t,e)},Y:function(t,e,r,a){var n=S(t,a),i=n>0?n:1-n;if(e==="YY"){var s=i%100;return o(s,2)}return e==="Yo"?r.ordinalNumber(i,{unit:"year"}):o(i,e.length)},R:function(t,e){var r=E(t);return o(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return o(r,e.length)},Q:function(t,e,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return o(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return o(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,r){var a=t.getUTCMonth();switch(e){case"M":case"MM":return v.M(t,e);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,r){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return o(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,r,a){var n=K(t,a);return e==="wo"?r.ordinalNumber(n,{unit:"week"}):o(n,e.length)},I:function(t,e,r){var a=j(t);return e==="Io"?r.ordinalNumber(a,{unit:"week"}):o(a,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):v.d(t,e)},D:function(t,e,r){var a=_(t);return e==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):o(a,e.length)},E:function(t,e,r){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,r,a){var n=t.getUTCDay(),i=(n-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return o(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})}},c:function(t,e,r,a){var n=t.getUTCDay(),i=(n-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return o(i,e.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})}},i:function(t,e,r){var a=t.getUTCDay(),n=a===0?7:a;switch(e){case"i":return String(n);case"ii":return o(n,e.length);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,r){var a=t.getUTCHours(),n=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(t,e,r){var a=t.getUTCHours(),n;switch(a===12?n=y.noon:a===0?n=y.midnight:n=a/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(t,e,r){var a=t.getUTCHours(),n;switch(a>=17?n=y.evening:a>=12?n=y.afternoon:a>=4?n=y.morning:n=y.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return v.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):v.H(t,e)},K:function(t,e,r){var a=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(a,{unit:"hour"}):o(a,e.length)},k:function(t,e,r){var a=t.getUTCHours();return a===0&&(a=24),e==="ko"?r.ordinalNumber(a,{unit:"hour"}):o(a,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):v.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):v.s(t,e)},S:function(t,e){return v.S(t,e)},X:function(t,e,r,a){var n=a._originalDate||t,i=n.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return k(i);case"XXXX":case"XX":return T(i);case"XXXXX":case"XXX":default:return T(i,":")}},x:function(t,e,r,a){var n=a._originalDate||t,i=n.getTimezoneOffset();switch(e){case"x":return k(i);case"xxxx":case"xx":return T(i);case"xxxxx":case"xxx":default:return T(i,":")}},O:function(t,e,r,a){var n=a._originalDate||t,i=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+U(i,":");case"OOOO":default:return"GMT"+T(i,":")}},z:function(t,e,r,a){var n=a._originalDate||t,i=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+U(i,":");case"zzzz":default:return"GMT"+T(i,":")}},t:function(t,e,r,a){var n=a._originalDate||t,i=Math.floor(n.getTime()/1e3);return o(i,e.length)},T:function(t,e,r,a){var n=a._originalDate||t,i=n.getTime();return o(i,e.length)}};function U(t,e){var r=t>0?"-":"+",a=Math.abs(t),n=Math.floor(a/60),i=a%60;if(i===0)return r+String(n);var s=e||"";return r+String(n)+s+o(i,2)}function k(t,e){if(t%60===0){var r=t>0?"-":"+";return r+o(Math.abs(t)/60,2)}return T(t,e)}function T(t,e){var r=e||"",a=t>0?"-":"+",n=Math.abs(t),i=o(Math.floor(n/60),2),s=o(n%60,2);return a+i+r+s}var J=V;function Y(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function W(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}function Z(t,e){var r=t.match(/(P+)(p+)?/),a=r[1],n=r[2];if(!n)return Y(t,e);var i;switch(a){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",Y(a,e)).replace("{{time}}",W(n,e))}var z={p:W,P:Z},ee=z,te=["D","DD"],re=["YY","YYYY"];function ae(t){return te.indexOf(t)!==-1}function ne(t){return re.indexOf(t)!==-1}function M(t,e,r){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"))}var ie=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,oe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,se=/^'([^]*?)'?$/,ue=/''/g,ce=/[a-zA-Z]/;function ge(t,e,r){c(2,arguments);var a=String(e),n=r||{},i=n.locale||F,s=i.options&&i.options.firstWeekContainsDate,l=s==null?1:d(s),u=n.firstWeekContainsDate==null?l:d(n.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=i.options&&i.options.weekStartsOn,p=h==null?0:d(h),w=n.weekStartsOn==null?p:d(n.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var C=g(t);if(!G(C))throw new RangeError("Invalid time value");var P=L(C),N=I(C,P),x={firstWeekContainsDate:u,weekStartsOn:w,locale:i,_originalDate:C},q=a.match(oe).map(function(f){var m=f[0];if(m==="p"||m==="P"){var D=ee[m];return D(f,i.formatLong,x)}return f}).join("").match(ie).map(function(f){if(f==="''")return"'";var m=f[0];if(m==="'")return fe(f);var D=J[m];if(D)return!n.useAdditionalWeekYearTokens&&ne(f)&&M(f,e,t),!n.useAdditionalDayOfYearTokens&&ae(f)&&M(f,e,t),D(N,f,i.localize,x);if(m.match(ce))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return f}).join("");return q}function fe(t){return t.match(se)[1].replace(ue,"'")}export{d as a,K as b,S as c,b as d,O as e,ge as f,j as g,M as h,ne as i,ae as j,I as k,ee as l,L as m,G as n,c as r,le as s,g as t};