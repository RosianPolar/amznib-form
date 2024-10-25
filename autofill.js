// ==UserScript==
// @name         Autofill
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author  anncorte
// Forked and updated by RosianPolar
// @description  Apollo Autofill
// @match        https://apollo-audit.corp.amazon.com/audits/new?audit_type_id=19769
// @icon         https://apollo-audit.corp.amazon.com/assets/logo-dd85fb4df17c677f72dfe230a166634f262b989d378eb197330a715439f9062f.png//
// @grant none

// ==/UserScript==

(function () {

  "use strict";

let main = document.querySelector("form.new_audit");

  console.log(main);

    //

let auditor = main[14];

let shift = main[15];

let jam = main[18];

//

let jamUnCheck = main[20];

let hardHats = main[26];

//

let wallUnCheck = main[31];

let wallCheck = main[36];

//

    let controlledFallRequired = main[38];

let controlledFallPerformed = main[39];

//

    let enviromentUncheck = main[41];

let enviromentCheck = main[46];

//

let congestionUnCheck = main[48];

let congestionCheck = main[52];

let congestionCoach = main[53];

//

    let behavioralUncheck = main[55];

let behavioralCheck = main[64];

let behavioralCompetency = main[65];

let behavioralCoach = main[66];

let additionalFindings = main[67];

 

      /*

   CHANGE THE VALUES BELOW, example:

auditor.value = "ASC";

  shift.value = "BHN";

   */

 

    auditor.value = "";

shift.value = "";

jam.value = "Yes";

//

jamUnCheck.checked = false;

hardHats.value = "Yes";

//

    wallUnCheck.checked = false;

wallCheck.checked = true;

//

    controlledFallRequired.value = "No";

controlledFallPerformed.value = "Not Required ";

//

    enviromentUncheck.checked = false;

enviromentCheck.checked = true;

//

congestionUnCheck.checked = false;

congestionCheck.checked = true;

congestionCoach.value = "No Coaching Required ";

    //

    behavioralUncheck.checked = false;

behavioralCheck.checked = true;

behavioralCompetency.value = "5 - Expert, no risks present ";

behavioralCoach.value = "No";

additionalFindings.value = "-";

 

})();
