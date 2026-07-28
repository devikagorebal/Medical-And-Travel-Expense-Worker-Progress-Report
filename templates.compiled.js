window.Templates = {};

// ---- compiled from templates/worker-progress-report.pug ----
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function render_workerProgressReport(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (data) {
      pug_mixins["formHeader"] = pug_interp = function(formTitle, claimNo, formCode){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cheader class=\"form-header\"\u003E\u003Cdiv class=\"header-left\"\u003E\u003Cimg class=\"logo\" src=\"assets\u002Fwcb-logo.png\" alt=\"Workers Compensation Board of Manitoba\"\u002F\u003E\u003Cdiv class=\"address\"\u003E\u003Cspan\u003E333 Broadway\u003C\u002Fspan\u003E\u003Cspan\u003EWinnipeg, MB R3C 4W3\u003C\u002Fspan\u003E\u003Cspan\u003EPhone: (204) 954-4321\u003C\u002Fspan\u003E\u003Cspan\u003EToll Free: 1-855-954-4321\u003C\u002Fspan\u003E\u003Cspan\u003Ewcb.mb.ca\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-right\"\u003E\u003Ch1 class=\"form-title\"\u003E" + (pug_escape(null == (pug_interp = formTitle) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003Cdiv class=\"id-boxes\"\u003E\u003Cdiv class=\"id-box\"\u003E\u003Cspan class=\"id-label\"\u003EClaim No.\u003C\u002Fspan\u003E\u003Cspan class=\"id-value\"\u003E" + (pug_escape(null == (pug_interp = claimNo) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"id-box code-box\"\u003E" + (pug_escape(null == (pug_interp = formCode) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";
};




pug_mixins["optionBox"] = pug_interp = function(caption, options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"option-box\"\u003E";
if (caption) {
pug_html = pug_html + "\u003Cdiv class=\"option-caption\"\u003E" + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"option-row\"\u003E";
// iterate options
;(function(){
  var $$obj = options;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"option\"\u003E\u003Cspan" + (pug_attr("class", pug_classes(["checkbox",opt.checked ? 'checked' : ''], [false,true]), false, false)) + "\u003E";
if (opt.checked) {
pug_html = pug_html + "✓";
}
pug_html = pug_html + ("\u003C\u002Fspan\u003E\u003Cspan class=\"option-label\"\u003E" + (pug_escape(null == (pug_interp = opt.label) ? "" : pug_interp)));
if (opt.trailingValue) {
pug_html = pug_html + "\u003Cspan class=\"inline-fill\"\u003E" + (pug_escape(null == (pug_interp = opt.trailingValue) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"option\"\u003E\u003Cspan" + (pug_attr("class", pug_classes(["checkbox",opt.checked ? 'checked' : ''], [false,true]), false, false)) + "\u003E";
if (opt.checked) {
pug_html = pug_html + "✓";
}
pug_html = pug_html + ("\u003C\u002Fspan\u003E\u003Cspan class=\"option-label\"\u003E" + (pug_escape(null == (pug_interp = opt.label) ? "" : pug_interp)));
if (opt.trailingValue) {
pug_html = pug_html + "\u003Cspan class=\"inline-fill\"\u003E" + (pug_escape(null == (pug_interp = opt.trailingValue) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["textBox"] = pug_interp = function(label, value){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["text-box",!value ? 'empty' : ''], [false,true]), false, false)) + "\u003E\u003Cdiv class=\"text-box-label\"\u003E" + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
if (value) {
pug_html = pug_html + "\u003Cdiv class=\"text-box-value\"\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["fillLine"] = pug_interp = function(label, value, sublabel){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"fill-line\"\u003E\u003Cspan class=\"fill-label\"\u003E" + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (pug_attr("class", pug_classes(["fill-value",!value ? 'empty' : ''], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = value || '') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (sublabel) {
pug_html = pug_html + "\u003Cspan class=\"fill-sublabel\"\u003E" + (pug_escape(null == (pug_interp = sublabel) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_mixins["fillLinePair"] = pug_interp = function(prefix, part1, part2){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"fill-line-pair\"\u003E\u003Cspan class=\"fill-prefix\"\u003E" + (pug_escape(null == (pug_interp = prefix) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cdiv class=\"fill-part\"\u003E\u003Cspan" + (pug_attr("class", pug_classes(["fill-value",!part1.value ? 'empty' : ''], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = part1.value || '') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"fill-sublabel\"\u003E" + (pug_escape(null == (pug_interp = part1.label) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cspan class=\"fill-joiner\"\u003E" + (pug_escape(null == (pug_interp = part2.joiner || 'on') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cdiv class=\"fill-part\"\u003E\u003Cspan" + (pug_attr("class", pug_classes(["fill-value",!part2.value ? 'empty' : ''], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = part2.value || '') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"fill-sublabel\"\u003E" + (pug_escape(null == (pug_interp = part2.label) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["sectionHeading"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ch2 class=\"section-heading\"\u003E" + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
};
pug_mixins["ratingScale"] = pug_interp = function(label, selected){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"rating-scale\"\u003E\u003Cdiv class=\"rating-label\"\u003E" + (null == (pug_interp = label) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"rating-rows\"\u003E\u003Cdiv class=\"rating-row\"\u003E";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var n = $$obj[pug_index1];
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["rating-cell",n === selected ? 'selected' : ''], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var n = $$obj[pug_index1];
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["rating-cell",n === selected ? 'selected' : ''], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"rating-row\"\u003E";
// iterate [6,7,8,9,10]
;(function(){
  var $$obj = [6,7,8,9,10];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var n = $$obj[pug_index2];
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["rating-cell",n === selected ? 'selected' : ''], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var n = $$obj[pug_index2];
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["rating-cell",n === selected ? 'selected' : ''], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = n) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};

pug_html = pug_html + "\u003Cdiv class=\"wcb-form\" id=\"worker-progress-report\"\u003E";
pug_mixins["formHeader"]('Worker Progress Report', data.claimNo, 'WP');
pug_html = pug_html + "\u003Cp class=\"statement\"\u003E\u003Cstrong\u003E" + (pug_escape(null == (pug_interp = data.workerName) ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E provided the following updates in relation to their claim:\u003C\u002Fp\u003E\u003Csection class=\"form-section\"\u003E";
pug_mixins["sectionHeading"]('Return to Work');
pug_mixins["optionBox"]('Select one:', [
      { label: 'I have not missed time from work', checked: data.returnToWork.status === 'notMissed' },
      { label: 'I have not returned to work', checked: data.returnToWork.status === 'notReturned' },
      { label: 'I returned to work on:', checked: data.returnToWork.status === 'returnedOn', trailingValue: data.returnToWork.status === 'returnedOn' ? data.returnToWork.returnDate : '' }
    ]);
pug_mixins["optionBox"]('I am working:', [
      { label: 'Full duties, regular hours', checked: data.workType.key === 'fullRegular' },
      { label: 'Full duties, reduced hours', checked: data.workType.key === 'fullReduced' },
      { label: 'Modified duties, regular hours', checked: data.workType.key === 'modifiedRegular' },
      { label: 'Modified duties, reduced hours', checked: data.workType.key === 'modifiedReduced' },
      { label: 'Other:', checked: data.workType.key === 'other', trailingValue: data.workType.key === 'other' ? data.workType.otherText : '' }
    ]);
pug_mixins["textBox"]('My return to work is going:', data.returnGoingComment);
pug_mixins["fillLine"]('I expect to return to work on:', data.expectedReturnDate, 'Date');
pug_mixins["textBox"]('I have the following concerns about returning to work:', data.returnConcerns);
pug_mixins["fillLinePair"]('I was most recently in contact with:',
      { value: data.recentContact.name, label: '(Name of employer contact)' },
      { value: data.recentContact.date, label: 'Date' });
pug_html = pug_html + "\u003C\u002Fsection\u003E\u003Csection class=\"form-section\"\u003E";
pug_mixins["sectionHeading"]('Recovery');
pug_mixins["optionBox"]('Select one:', [
      { label: 'I have not fully recovered from my workplace injury.', checked: data.recovery.status === 'notRecovered' },
      { label: 'I have fully recovered from my workplace injury.', checked: data.recovery.status === 'recovered' }
    ]);
pug_mixins["textBox"]('I have provided the following comments about my recovery:', data.recovery.comments);
pug_html = pug_html + "\u003C\u002Fsection\u003E\u003Csection class=\"form-section\"\u003E";
pug_mixins["ratingScale"]('I rate my current pain/discomfort on a scale of 1-10,<br>where 1 is no pain and 10 is severe pain out of 10.', data.pain);
pug_mixins["optionBox"]('Select one:', [
      { label: 'I am not continuing to receive medical treatment for my workplace injury.', checked: data.medicalTreatment.status === 'not' },
      { label: 'I am continuing to receive medical treatment for my workplace injury from:', checked: data.medicalTreatment.status === 'continuing', trailingValue: data.medicalTreatment.status === 'continuing' ? data.medicalTreatment.providerType : '' }
    ]);
pug_html = pug_html + "\u003Cdiv class=\"two-col\"\u003E";
pug_mixins["fillLinePair"]('My last medical treatment was from',
        { value: data.medicalTreatment.last.date, label: 'Date' },
        { value: data.medicalTreatment.last.name, label: 'Medical Provider Name', joiner: 'from' });
pug_mixins["fillLinePair"]('My next medical treatment is from',
        { value: data.medicalTreatment.next.date, label: 'Date' },
        { value: data.medicalTreatment.next.name, label: 'Medical Provider Name', joiner: 'from' });
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
pug_mixins["fillLine"]('I am attending a Chiropractor or Physiotherapist', data.medicalTreatment.frequency, 'Frequency');
pug_mixins["optionBox"]('Select one:', [
      { label: 'I am not taking medication for my workplace injury.', checked: data.medication.status === 'not' },
      { label: 'I am taking medication for my workplace injury:', checked: data.medication.status === 'taking', trailingValue: data.medication.status === 'taking' ? data.medication.name : '' }
    ]);
pug_mixins["optionBox"]('Select one:', [
      { label: 'I am not doing home exercises for my workplace injury.', checked: data.homeExercises.status === 'not' },
      { label: 'I am doing home exercises for my workplace injury.', checked: data.homeExercises.status === 'doing' }
    ]);
pug_mixins["textBox"]('List the exercises you are doing:', data.homeExercises.list);
pug_html = pug_html + "\u003C\u002Fsection\u003E\u003Csection class=\"form-section\"\u003E";
pug_mixins["sectionHeading"]('Other Information');
pug_mixins["textBox"]('I would like to provide the following additional information about my claim/injury:', data.otherInfo);
pug_html = pug_html + "\u003C\u002Fsection\u003E\u003Csection class=\"form-section\"\u003E\u003Cp class=\"certification\"\u003EI certify that the information given on this form is true, correct and complete to the best of my\nknowledge. I agree to notify the Workers Compensation Board of Manitoba (WCB) immediately once I\nreturn to any form of work and\u002For employment. I understand that it is an offence to knowingly make\na false statement to the WCB. I also understand that it is an offence to withhold information from\nWCB which affects my entitlement to compensation (e.g., full or partial recovery from injury, ability to\nreturn to work, sources of additional income, etc.). I understand that refusing to co-operate with, or\nfollow my treatment, may result in the WCB reducing or suspending my benefits.\u003C\u002Fp\u003E\u003Cp class=\"certification\"\u003EI understand that the Privacy Notice applies to the personal information collected in this document.\u003C\u002Fp\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "data" in locals_for_with ?
        locals_for_with.data :
        typeof data !== 'undefined' ? data : undefined));
    ;;return pug_html;}
window.Templates.workerProgressReport = render_workerProgressReport;

// ---- compiled from templates/medical-travel-expense.pug ----
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function render_medicalTravelExpense(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (data) {
      pug_mixins["formHeader"] = pug_interp = function(formTitle, claimNo, formCode){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cheader class=\"form-header\"\u003E\u003Cdiv class=\"header-left\"\u003E\u003Cimg class=\"logo\" src=\"assets\u002Fwcb-logo.png\" alt=\"Workers Compensation Board of Manitoba\"\u002F\u003E\u003Cdiv class=\"address\"\u003E\u003Cspan\u003E333 Broadway\u003C\u002Fspan\u003E\u003Cspan\u003EWinnipeg, MB R3C 4W3\u003C\u002Fspan\u003E\u003Cspan\u003EPhone: (204) 954-4321\u003C\u002Fspan\u003E\u003Cspan\u003EToll Free: 1-855-954-4321\u003C\u002Fspan\u003E\u003Cspan\u003Ewcb.mb.ca\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header-right\"\u003E\u003Ch1 class=\"form-title\"\u003E" + (pug_escape(null == (pug_interp = formTitle) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003Cdiv class=\"id-boxes\"\u003E\u003Cdiv class=\"id-box\"\u003E\u003Cspan class=\"id-label\"\u003EClaim No.\u003C\u002Fspan\u003E\u003Cspan class=\"id-value\"\u003E" + (pug_escape(null == (pug_interp = claimNo) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"id-box code-box\"\u003E" + (pug_escape(null == (pug_interp = formCode) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";
};

pug_mixins["optionBox"] = pug_interp = function(caption, options){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"option-box\"\u003E";
if (caption) {
pug_html = pug_html + "\u003Cdiv class=\"option-caption\"\u003E" + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003Cdiv class=\"option-row\"\u003E";
// iterate options
;(function(){
  var $$obj = options;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"option\"\u003E\u003Cspan" + (pug_attr("class", pug_classes(["checkbox",opt.checked ? 'checked' : ''], [false,true]), false, false)) + "\u003E";
if (opt.checked) {
pug_html = pug_html + "✓";
}
pug_html = pug_html + ("\u003C\u002Fspan\u003E\u003Cspan class=\"option-label\"\u003E" + (pug_escape(null == (pug_interp = opt.label) ? "" : pug_interp)));
if (opt.trailingValue) {
pug_html = pug_html + "\u003Cspan class=\"inline-fill\"\u003E" + (pug_escape(null == (pug_interp = opt.trailingValue) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var opt = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"option\"\u003E\u003Cspan" + (pug_attr("class", pug_classes(["checkbox",opt.checked ? 'checked' : ''], [false,true]), false, false)) + "\u003E";
if (opt.checked) {
pug_html = pug_html + "✓";
}
pug_html = pug_html + ("\u003C\u002Fspan\u003E\u003Cspan class=\"option-label\"\u003E" + (pug_escape(null == (pug_interp = opt.label) ? "" : pug_interp)));
if (opt.trailingValue) {
pug_html = pug_html + "\u003Cspan class=\"inline-fill\"\u003E" + (pug_escape(null == (pug_interp = opt.trailingValue) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};

pug_mixins["fillLine"] = pug_interp = function(label, value, sublabel){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"fill-line\"\u003E\u003Cspan class=\"fill-label\"\u003E" + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan" + (pug_attr("class", pug_classes(["fill-value",!value ? 'empty' : ''], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = value || '') ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
if (sublabel) {
pug_html = pug_html + "\u003Cspan class=\"fill-sublabel\"\u003E" + (pug_escape(null == (pug_interp = sublabel) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};




pug_mixins["sectionHeading"] = pug_interp = function(text){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ch2 class=\"section-heading\"\u003E" + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
};

pug_mixins["dataTable"] = pug_interp = function(columns, rows){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Ctable class=\"data-table\"\u003E\u003Cthead\u003E\u003Ctr\u003E";
// iterate columns
;(function(){
  var $$obj = columns;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var col = $$obj[pug_index3];
pug_html = pug_html + "\u003Cth\u003E" + (pug_escape(null == (pug_interp = col) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var col = $$obj[pug_index3];
pug_html = pug_html + "\u003Cth\u003E" + (pug_escape(null == (pug_interp = col) ? "" : pug_interp)) + "\u003C\u002Fth\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Fthead\u003E\u003Ctbody\u003E";
// iterate rows
;(function(){
  var $$obj = rows;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var row = $$obj[pug_index4];
pug_html = pug_html + "\u003Ctr\u003E";
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {
      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
        var cell = $$obj[i];
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes([columns[i] && columns[i].toLowerCase().includes('amount') ? 'num' : ''], [true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = cell) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;
      var cell = $$obj[i];
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes([columns[i] && columns[i].toLowerCase().includes('amount') ? 'num' : ''], [true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = cell) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var row = $$obj[pug_index4];
pug_html = pug_html + "\u003Ctr\u003E";
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {
      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
        var cell = $$obj[i];
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes([columns[i] && columns[i].toLowerCase().includes('amount') ? 'num' : ''], [true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = cell) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
      }
  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;
      var cell = $$obj[i];
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes([columns[i] && columns[i].toLowerCase().includes('amount') ? 'num' : ''], [true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = cell) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E";
};
pug_html = pug_html + "\u003Cdiv class=\"wcb-form\" id=\"medical-travel-expense\"\u003E";
pug_mixins["formHeader"]('Medical & Travel Expense Request', data.claimNo, 'MTE');
pug_html = pug_html + "\u003Cp class=\"statement\"\u003E\u003Cstrong\u003E" + (pug_escape(null == (pug_interp = data.workerName) ? "" : pug_interp)) + "\u003C\u002Fstrong\u003E is requesting reimbursement for the following medical and travel expenses:\u003C\u002Fp\u003E\u003Csection class=\"form-section\"\u003E";
pug_mixins["sectionHeading"]('Traveller Information');
pug_html = pug_html + "\u003Cdiv class=\"two-col\"\u003E";
pug_mixins["fillLine"]('Home address:', data.address, '');
pug_mixins["fillLine"]('Phone number:', data.phone, '');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003Csection class=\"form-section\"\u003E";
pug_mixins["sectionHeading"]('Expense Details');
pug_mixins["dataTable"](
      ['Date', 'Purpose of Trip', 'From', 'To', 'Km', 'Amount ($)'],
      data.expenseRows
    );
pug_html = pug_html + "\u003Cdiv class=\"totals-row\"\u003E\u003Cspan class=\"totals-label\"\u003ETotal claimed:\u003C\u002Fspan\u003E\u003Cspan class=\"totals-value\"\u003E" + (pug_escape(null == (pug_interp = data.totalAmount) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003Csection class=\"form-section\"\u003E";
pug_mixins["sectionHeading"]('Payment Information');
pug_mixins["optionBox"]('Select one:', [
      { label: 'Direct deposit to my account on file', checked: data.payment.method === 'directDeposit' },
      { label: 'Cheque by mail', checked: data.payment.method === 'cheque' }
    ]);
pug_html = pug_html + "\u003Cp class=\"certification\"\u003EI certify that the information given on this form is true, correct and complete to the best of my\nknowledge and that the expenses claimed were incurred as a direct result of my workplace injury.\u003C\u002Fp\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E";
    }.call(this, "data" in locals_for_with ?
        locals_for_with.data :
        typeof data !== 'undefined' ? data : undefined));
    ;;return pug_html;}
window.Templates.medicalTravelExpense = render_medicalTravelExpense;

// ---- compiled from templates/footer.pug ----
function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function render_footer(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (data) {

pug_mixins["formFooter"] = pug_interp = function(appId, submitted, pageNum, totalPages){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cfooter class=\"form-footer\"\u003E\u003Cspan class=\"app-id\"\u003EWorker App ID: " + (pug_escape(null == (pug_interp = appId) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cdiv class=\"footer-right\"\u003E\u003Cspan class=\"submitted\"\u003ESubmitted: " + (pug_escape(null == (pug_interp = submitted) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"page-count\"\u003EPage " + (pug_escape(null == (pug_interp = pageNum) ? "" : pug_interp)) + " of " + (pug_escape(null == (pug_interp = totalPages) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E";
};























































































































pug_mixins["formFooter"](data.appId, data.submitted, data.pageNum, data.totalPages);
    }.call(this, "data" in locals_for_with ?
        locals_for_with.data :
        typeof data !== 'undefined' ? data : undefined));
    ;;return pug_html;}
window.Templates.footer = render_footer;
