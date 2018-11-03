using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.IE;
using OpenQA.Selenium.Support.UI;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace MyHealth.Web.UITests
{
    [TestClass]
    [DeploymentItem("chromedriver.exe")]
    public class LoginTests
    {
        private TestContext testContextInstance;
        private IWebDriver driver;
        private string appURL;

        [TestMethod]
        public void ValidUser_Can_Login()
        {
            driver.Navigate().GoToUrl(appURL);
            driver.FindElement(By.LinkText("Login")).Click();
            driver.FindElement(By.Name("UserName")).SendKeys("User");
            driver.FindElement(By.Id("Password")).SendKeys("P2ssw0rd@1");
            driver.FindElement(By.ClassName("button")).Click();

            var userGreeting = GetElementWhenVisible(By.XPath("//div[@class='header-avatar']")).Text;
            //var userGreeting = driver.FindElement(By.XPath("//div[@class='header-avatar']")).Text;

            Assert.AreEqual("Hi User!", userGreeting);
        }

        [TestMethod]
        public void InvalidUser_Cant_Login()
        {
            driver.Navigate().GoToUrl(appURL);
            driver.FindElement(By.LinkText("Login")).Click();
            driver.FindElement(By.Name("UserName")).SendKeys("UnknownUser");
            driver.FindElement(By.Id("Password")).SendKeys("asdasd");
            driver.FindElement(By.ClassName("button")).Click();

            var errorMessage = GetElementWhenVisible(By.XPath("//div[@class='margin-top-67 login-error']")).Text;

            Assert.AreEqual("Incorrect username or password\r\nPlease try again.", errorMessage);
        }

        [TestMethod]
        public void ValidAdmin_Can_Login()
        {
            driver.Navigate().GoToUrl(appURL);
            driver.FindElement(By.LinkText("Login")).Click();
            driver.FindElement(By.Name("UserName")).SendKeys("Admin");
            driver.FindElement(By.Id("Password")).SendKeys("P2ssw0rd@123");
            driver.FindElement(By.ClassName("button")).Click();

            var userGreeting = GetElementWhenVisible(By.XPath("//div[@class='header-avatar']")).Text;

            Assert.AreEqual("Hi Admin!", userGreeting);
        }

        protected IWebElement GetElementWhenVisible(By by)
        {
            var wait = new WebDriverWait(driver, new TimeSpan(0, 0, 10));
            var element = wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(by));

            return driver.FindElement(by);
        }

        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }


        [TestInitialize()]
        public void SetupTest()
        {
            //appURL = "http://13.73.139.162/";
            appURL = TestContext.Properties["webAppUrl"].ToString();
            string browser = "Chrome";
            switch (browser)
            {
                case "Chrome":
                    driver = GetChromeDriver();
                    //driver = new ChromeDriver();
                    //driver = new ChromeDriver(Environment.GetEnvironmentVariable("ChromeWebDriver"));
                    break;
                case "Firefox":
                    driver = new FirefoxDriver();
                    break;
                case "IE":
                    driver = new InternetExplorerDriver();
                    break;
                default:
                    driver = new ChromeDriver();
                    break;
            }

        }

        [TestCleanup()]
        public void MyTestCleanup()
        {
            driver.Quit();
        }

        private IWebDriver GetChromeDriver()
        {
            var options = new ChromeOptions();
            options.AddArgument("--start-maximized");
            // Environment.GetEnvironmentVariable("ChromeWebDriver")
            return new ChromeDriver(options);
        }
    }
}
