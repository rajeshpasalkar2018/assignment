$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('firstProject\Cucumber\cucumber.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 22,
  "name": "To check scenario_outline feature",
  "description": "",
  "id": "cucumberjava;to-check-scenario-outline-feature;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I am testing \"https://www.cricbuzz.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.openBrowser()"
});
formatter.result({
  "duration": 3269713042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.cricbuzz.com",
      "offset": 14
    }
  ],
  "location": "StepDefinition.I_am_testing_pages(String)"
});
formatter.result({
  "duration": 2415886049,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To check scenario_outline feature",
  "description": "",
  "id": "cucumberjava;to-check-scenario-outline-feature;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I am testing \"https://www.soccer24.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.openBrowser()"
});
formatter.result({
  "duration": 11705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.soccer24.com",
      "offset": 14
    }
  ],
  "location": "StepDefinition.I_am_testing_pages(String)"
});
formatter.result({
  "duration": 3531793281,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "To check scenario_outline feature",
  "description": "",
  "id": "cucumberjava;to-check-scenario-outline-feature;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I am testing \"http://www.tennis.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.openBrowser()"
});
formatter.result({
  "duration": 20011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.tennis.com",
      "offset": 14
    }
  ],
  "location": "StepDefinition.I_am_testing_pages(String)"
});
formatter.result({
  "duration": 8243825698,
  "status": "passed"
});
});