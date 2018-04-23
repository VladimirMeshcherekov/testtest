////////////////////////

describe('test https://angular.io/docs', function () {
    /*   it('should greet the named user', function() {
           // Load the AngularJS homepage.
         //  browser.get('https://angular.io/docs');

       });*/


///НЕ ДОДЕЛАН


    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.get('https://angular.io/docs');

    })


    it('test', function () {
        element(by.css('input')).sendKeys('angular');

    });


    it('test1 ', function () {
        element(by.className('nav-link home')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/');

    });


    it('test2 ', function () {
        browser.actions().mouseMove($('#what-is-angular')).perform().then(() => {
            $('#what-is-angular').$('.header-link').click();
        });
        expect(browser.getCurrentUrl()).toBe('https://angular.io/docs#what-is-angular');
    });


    it('test2.1 ', function () {
        browser.actions().mouseMove($('#assumptions')).perform().then(() => {
            $('#assumptions').$('.header-link').click();
        });
        expect(browser.getCurrentUrl()).toBe('https://angular.io/docs#assumptions');
    });


    it('test2.2 ', function () {
        browser.actions().mouseMove($('#feedback')).perform().then(() => {
            $('#feedback').$('.header-link').click();
        });
        expect(browser.getCurrentUrl()).toBe('https://angular.io/docs#feedback');
    });


    it('test3.1', function () {
        element(by.cssContainingText('.nav-link', 'Features')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/features');

    });

    it('test3.2', function () {
        element(by.cssContainingText('.nav-link', 'Docs')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/docs');
    });


    it('tes3.3', function () {
        element(by.cssContainingText('.nav-link', 'Resources')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/resources');
        // browser.sleep(10000);
    });

    it('test3.4', function () {
        element(by.cssContainingText('.nav-link', 'Events')).click();
        expect(browser.getCurrentUrl()).toBe('https://angular.io/events');
    });


    it('test4', function () {
        element(by.css('input')).sendKeys('sdfsdfsd');
        browser.sleep(10000);
        element(by.css('[class="search-results"]')).$('[class="ng-star-inserted"]').getText().then(function (text) {
            expect(text).toEqual('No results found.');
        })
    });


///НЕ ДОДЕЛАН

});
