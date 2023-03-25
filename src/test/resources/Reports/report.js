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
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the result based on \"passed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_sees_the_result_based_on(String)"
});
formatter.result({
  "status": "passed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//*[text()\u003d\u0027Sign In\u0027])[1]\"}\n  (Session info: chrome\u003d111.0.5563.65)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-C7GICGI\u0027, ip: \u0027192.168.1.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_361\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.65, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54260}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 599b923239bacc389f69d87472a66627\n*** Element info: {Using\u003dxpath, value\u003d(//*[text()\u003d\u0027Sign In\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat org.identity.Login.to_validate_login_using_Different_credentials(Login.java:26)\r\n\tat ✽.To validate login using Different credentials(file:src/test/resources/Featurefile/1Login.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter the \"manoj@152525gmail.com\" and \"wsdf@852\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enter_the_and(String,String)"
});
formatter.result({
  "status": "skipped"
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
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Featurefile/2Search.feature");
formatter.feature({
  "name": "To verify the search functionality of the application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Search"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To verify the search relevance using search functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the \"\u003cText\u003e\" in search bar",
  "keyword": "When "
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.step({
  "name": "user sees the results based on \"\u003cText\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Text"
      ]
    },
    {
      "cells": [
        "WineGlass"
      ]
    },
    {
      "cells": [
        "Toys"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "user sees the home page",
  "keyword": "And "
});
formatter.match({
  "location": "search.user_sees_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the search relevance using search functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search"
    }
  ]
});
formatter.step({
  "name": "user enter the \"WineGlass\" in search bar",
  "keyword": "When "
});
formatter.match({
  "location": "search.user_enter_the_in_search_bar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "search.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the results based on \"WineGlass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "search.user_sees_the_results_based_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "user sees the home page",
  "keyword": "And "
});
formatter.match({
  "location": "search.user_sees_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the search relevance using search functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search"
    }
  ]
});
formatter.step({
  "name": "user enter the \"Toys\" in search bar",
  "keyword": "When "
});
formatter.match({
  "location": "search.user_enter_the_in_search_bar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "search.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the results based on \"Toys\"",
  "keyword": "Then "
});
formatter.match({
  "location": "search.user_sees_the_results_based_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify the search relevance using category and sub-category navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user click the category \"\u003ccategory\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click the sub-category \"\u003csubcategory\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user sees the results based on \"\u003ccategory\u003e\" and \"\u003csubcategory\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "category",
        "subcategory"
      ]
    },
    {
      "cells": [
        "Kids \u0026 School",
        "Money Boxes"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "user sees the home page",
  "keyword": "And "
});
formatter.match({
  "location": "search.user_sees_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the search relevance using category and sub-category navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user click the category \"Kids \u0026 School\"",
  "keyword": "When "
});
formatter.match({
  "location": "search.user_click_the_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the sub-category \"Money Boxes\"",
  "keyword": "And "
});
formatter.match({
  "location": "search.user_click_the_sub_category(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the results based on \"Kids \u0026 School\" and \"Money Boxes\"",
  "keyword": "Then "
});
formatter.match({
  "location": "search.user_sees_the_results_based_on_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Featurefile/Addtocart.feature");
formatter.feature({
  "name": "To verify the Add to Cart functionality of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "user enter search product",
  "keyword": "When "
});
formatter.match({
  "location": "AddCart.user_enter_search_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "search.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the results based on search and select product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCart.user_sees_the_results_based_on_search_and_select_product()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the  Add to cart with selected product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click the Add to cart button",
  "keyword": "When "
});
formatter.match({
  "location": "AddCart.click_the_Add_to_cart_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027xuJkw\u0027]\"}\n  (Session info: chrome\u003d111.0.5563.65)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-C7GICGI\u0027, ip: \u0027192.168.1.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_361\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.65, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54559}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9861c575197e748f943127a6c2d32ac1\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027xuJkw\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat org.identity.AddCart.click_the_Add_to_cart_button(AddCart.java:37)\r\n\tat ✽.Click the Add to cart button(file:src/test/resources/Featurefile/Addtocart.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click The Viewbag",
  "keyword": "And "
});
formatter.match({
  "location": "AddCart.click_The_Viewbag()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter  the personal details",
  "keyword": "And "
});
formatter.match({
  "location": "AddCart.enter_the_personal_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCart.click_the_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "user enter search product",
  "keyword": "When "
});
formatter.match({
  "location": "AddCart.user_enter_search_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "search.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the results based on search and select product",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCart.user_sees_the_results_based_on_search_and_select_product()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To  increase the count of product in addtocart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user add product to addtocart",
  "keyword": "When "
});
formatter.match({
  "location": "AddCart.user_add_product_to_addtocart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user increase the count in addtocount",
  "keyword": "And "
});
formatter.match({
  "location": "AddCart.user_increase_the_count_in_addtocount()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//span[@class\u003d\u0027list-item-description-qty-wrapper\u0027])[4]\"}\n  (Session info: chrome\u003d111.0.5563.65)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-C7GICGI\u0027, ip: \u0027192.168.1.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_361\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.65, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\lenovo\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:54726}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9b8f527140ef235e264f2af4518bd1c8\n*** Element info: {Using\u003dxpath, value\u003d(//span[@class\u003d\u0027list-item-description-qty-wrapper\u0027])[4]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat org.identity.AddCart.user_increase_the_count_in_addtocount(AddCart.java:90)\r\n\tat ✽.user increase the count in addtocount(file:src/test/resources/Featurefile/Addtocart.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user sees the addtocart page with increae number",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCart.user_sees_the_addtocart_page_with_increae_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       formatter.before({
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
  "name": "user sees the home page",
  "keyword": "And "
});
formatter.match({
  "location": "search.user_sees_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the search relevance using search functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search"
    }
  ]
});
formatter.step({
  "name": "user enter the \"WineGlass\" in search bar",
  "keyword": "When "
});
formatter.match({
  "location": "search.user_enter_the_in_search_bar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "search.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the results based on \"WineGlass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "search.user_sees_the_results_based_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
