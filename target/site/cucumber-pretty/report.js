$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("accountManagement.feature");
formatter.feature({
  "line": 1,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Create an account with a valid email",
  "description": "",
  "id": "account-management;create-an-account-with-a-valid-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cFirstName\u003e\"and \"\u003cLastName\u003e\"and\"\u003cEmail\u003e\"and\"\u003cPassWord\u003e\"and\"\u003cConfirmPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on create an account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "My account page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "account-management;create-an-account-with-a-valid-email;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "PassWord",
        "ConfirmPassword"
      ],
      "line": 14,
      "id": "account-management;create-an-account-with-a-valid-email;;1"
    },
    {
      "cells": [
        "Bee",
        "Cee",
        "ass@yahoo.com",
        "Swer@45",
        "Swer@45"
      ],
      "line": 15,
      "id": "account-management;create-an-account-with-a-valid-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Create an account with a valid email",
  "description": "",
  "id": "account-management;create-an-account-with-a-valid-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"Bee\"and \"Cee\"and\"ass@yahoo.com\"and\"Swer@45\"and\"Swer@45\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on create an account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "My account page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userIsOnCreateAnAccountPage()"
});
formatter.result({
  "duration": 22704797200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bee",
      "offset": 12
    },
    {
      "val": "Cee",
      "offset": 21
    },
    {
      "val": "ass@yahoo.com",
      "offset": 29
    },
    {
      "val": "Swer@45",
      "offset": 47
    },
    {
      "val": "Swer@45",
      "offset": 59
    }
  ],
  "location": "AccountManagementSteps.userEnterAndAndAndAnd(String,String,String,String,String)"
});
formatter.result({
  "duration": 1265618900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#LastName\"}\n  (Session info: chrome\u003d90.0.4430.85)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-5BNF0U6J\u0027, ip: \u0027192.168.1.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.85, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\yemi\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:60465}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bfa38117344e5559896a8ebb18ed54ed\n*** Element info: {Using\u003did, value\u003dLastName}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.lamtech.luma.stepDefinition.AccountManagementSteps.userEnterAndAndAndAnd(AccountManagementSteps.java:33)\r\n\tat ✽.When user enter \"Bee\"and \"Cee\"and\"ass@yahoo.com\"and\"Swer@45\"and\"Swer@45\"(accountManagement.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AccountManagementSteps.userClicksOnCreateAnAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountManagementSteps.myAccountPageIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
});