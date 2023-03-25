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
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.SocketException: Network is unreachable: connect\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:1423)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1204)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.fallback(WebDriverManager.java:1439)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:1420)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1204)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:1413)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1204)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:419)\r\n\tat org.base.Base.launchbrowser(Base.java:29)\r\n\tat org.identity.Hooks.beforeScnario(Hooks.java:18)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.SocketException: Network is unreachable: connect\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:1577)\r\n\tat io.github.bonigarcia.wdm.managers.ChromeDriverManager.getDriverUrls(ChromeDriverManager.java:103)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.createUrlHandler(WebDriverManager.java:1444)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:1279)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1198)\r\n\t... 46 more\r\nCaused by: java.net.SocketException: Network is unreachable: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.hc.client5.http.ssl.SSLConnectionSocketFactory$1.run(SSLConnectionSocketFactory.java:219)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat org.apache.hc.client5.http.ssl.SSLConnectionSocketFactory.connectSocket(SSLConnectionSocketFactory.java:216)\r\n\tat org.apache.hc.client5.http.impl.io.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:148)\r\n\tat org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:396)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:158)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:168)\r\n\tat org.apache.hc.client5.http.impl.classic.ConnectExec.execute(ConnectExec.java:136)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.ProtocolExec.execute(ProtocolExec.java:175)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.HttpRequestRetryExec.execute(HttpRequestRetryExec.java:96)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.ContentCompressionExec.execute(ContentCompressionExec.java:133)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.RedirectExec.execute(RedirectExec.java:115)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalHttpClient.doExecute(InternalHttpClient.java:170)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:75)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:89)\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:158)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:1562)\r\n\t... 50 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user launches identitydirect application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_launches_identitydirect_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To validate login using Different credentials",
  "keyword": "And "
});
formatter.match({
  "location": "Login.to_validate_login_using_Different_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enter the \"userkmanoj@gmail.com\" and \"Manoj@1995\"",
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
  "error_message": "java.lang.NullPointerException\r\n\tat org.base.Base.Snapshot(Base.java:100)\r\n\tat org.identity.Hooks.afterScnario(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
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
  "error_message": "io.github.bonigarcia.wdm.config.WebDriverManagerException: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.SocketException: Network is unreachable: connect\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:1423)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1204)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.fallback(WebDriverManager.java:1439)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:1420)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1204)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.handleException(WebDriverManager.java:1413)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1204)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.setup(WebDriverManager.java:419)\r\n\tat org.base.Base.launchbrowser(Base.java:29)\r\n\tat org.identity.Hooks.beforeScnario(Hooks.java:18)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\nCaused by: io.github.bonigarcia.wdm.config.WebDriverManagerException: java.net.SocketException: Network is unreachable: connect\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:1577)\r\n\tat io.github.bonigarcia.wdm.managers.ChromeDriverManager.getDriverUrls(ChromeDriverManager.java:103)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.createUrlHandler(WebDriverManager.java:1444)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.download(WebDriverManager.java:1279)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.manage(WebDriverManager.java:1198)\r\n\t... 46 more\r\nCaused by: java.net.SocketException: Network is unreachable: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source)\r\n\tat java.net.AbstractPlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.PlainSocketImpl.connect(Unknown Source)\r\n\tat java.net.SocksSocketImpl.connect(Unknown Source)\r\n\tat java.net.Socket.connect(Unknown Source)\r\n\tat org.apache.hc.client5.http.ssl.SSLConnectionSocketFactory$1.run(SSLConnectionSocketFactory.java:219)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat org.apache.hc.client5.http.ssl.SSLConnectionSocketFactory.connectSocket(SSLConnectionSocketFactory.java:216)\r\n\tat org.apache.hc.client5.http.impl.io.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:148)\r\n\tat org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:396)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:158)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalExecRuntime.connectEndpoint(InternalExecRuntime.java:168)\r\n\tat org.apache.hc.client5.http.impl.classic.ConnectExec.execute(ConnectExec.java:136)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.ProtocolExec.execute(ProtocolExec.java:175)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.HttpRequestRetryExec.execute(HttpRequestRetryExec.java:96)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.ContentCompressionExec.execute(ContentCompressionExec.java:133)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement$1.proceed(ExecChainElement.java:57)\r\n\tat org.apache.hc.client5.http.impl.classic.RedirectExec.execute(RedirectExec.java:115)\r\n\tat org.apache.hc.client5.http.impl.classic.ExecChainElement.execute(ExecChainElement.java:51)\r\n\tat org.apache.hc.client5.http.impl.classic.InternalHttpClient.doExecute(InternalHttpClient.java:170)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:75)\r\n\tat org.apache.hc.client5.http.impl.classic.CloseableHttpClient.execute(CloseableHttpClient.java:89)\r\n\tat io.github.bonigarcia.wdm.online.HttpClient.execute(HttpClient.java:158)\r\n\tat io.github.bonigarcia.wdm.WebDriverManager.getDriversFromXml(WebDriverManager.java:1562)\r\n\t... 50 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user launches identitydirect application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_launches_identitydirect_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To validate login using Different credentials",
  "keyword": "And "
});
formatter.match({
  "location": "Login.to_validate_login_using_Different_credentials()"
});
formatter.result({
  "status": "skipped"
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
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat org.base.Base.Snapshot(Base.java:100)\r\n\tat org.identity.Hooks.afterScnario(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
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
