$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Featurefile/1Login.feature");
formatter.feature({
  "name": "To verify the login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To verify the login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launches identitydirect application",
  "keyword": "Given "
});
formatter.step({
  "name": "To validate login using Different credentials",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user sees the result based on \"\u003ccredential\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "credential"
      ]
    },
    {
      "cells": [
        "userkmanoj@gmail.com",
        "Manoj@1995",
        "passed"
      ]
    },
    {
      "cells": [
        "manoj@152525gmail.com",
        "wsdf@852",
        "failed"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches identitydirect application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_launches_identitydirect_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To validate login using Different credentials",
  "keyword": "And "
});
formatter.match({
  "location": "Login.to_validate_login_using_Different_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"userkmanoj@gmail.com\" and \"Manoj@1995\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enter_the_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.identity.Login.user_enter_the_and(Login.java:34)\r\n\tat ✽.User enter the \"userkmanoj@gmail.com\" and \"Manoj@1995\"(file:src/test/resources/Featurefile/1Login.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees the result based on \"passed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_sees_the_result_based_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user launches identitydirect application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_launches_identitydirect_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To validate login using Different credentials",
  "keyword": "And "
});
formatter.match({
  "location": "Login.to_validate_login_using_Different_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"manoj@152525gmail.com\" and \"wsdf@852\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enter_the_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.identity.Login.user_enter_the_and(Login.java:34)\r\n\tat ✽.User enter the \"manoj@152525gmail.com\" and \"wsdf@852\"(file:src/test/resources/Featurefile/1Login.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees the result based on \"failed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_sees_the_result_based_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});