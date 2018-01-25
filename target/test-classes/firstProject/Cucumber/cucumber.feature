Feature: CucumberJava

@E2E
Scenario: Travel site available
Given Open the browser
When Open Cleartrip website
Then Page Title should contain cleartrip


@E2E
Scenario: Sport site exists
Given Open the browser
When Open cricket website
Then Page Title should contain cricket

@Sanity
Scenario Outline: To check scenario_outline feature
Given Open the browser
When I am testing "<page>"
Examples:
|page|
|https://www.cricbuzz.com|
|https://www.soccer24.com|
|http://www.tennis.com|

@Smoke
Scenario: Testing data table
Then Display the data table
| Fields                 | Values              |
| First Name             | Rajesh                 |
| Last Name              | Pasalkar               |
| Email Address          | test@test.com |
| Password               | Password1           |
| Address              | Pune                  |
