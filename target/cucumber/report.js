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
  "duration": 3696237818,
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
  "duration": 2788779948,
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
  "duration": 20767,
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
  "duration": 8715329,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027EPINPUNW0054\u0027, ip: \u002710.22.95.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1), userDataDir\u003dC:\\Users\\RAJESH~1\\AppData\\Local\\Temp\\scoped_dir3224_23732}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: a5b32b781492329e2e24c790c7ed9aaf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:311)\r\n\tat stepDef.StepDefinition.I_am_testing_pages(StepDefinition.java:63)\r\n\tat ✽.When I am testing \"https://www.soccer24.com\"(firstProject\\Cucumber\\cucumber.feature:19)\r\n",
  "status": "failed"
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
  "duration": 47198,
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
  "duration": 4005759,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027EPINPUNW0054\u0027, ip: \u002710.22.95.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1), userDataDir\u003dC:\\Users\\RAJESH~1\\AppData\\Local\\Temp\\scoped_dir3224_23732}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: a5b32b781492329e2e24c790c7ed9aaf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:311)\r\n\tat stepDef.StepDefinition.I_am_testing_pages(StepDefinition.java:63)\r\n\tat ✽.When I am testing \"http://www.tennis.com\"(firstProject\\Cucumber\\cucumber.feature:19)\r\n",
  "status": "failed"
});
});