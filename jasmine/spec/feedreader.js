/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All tests are placed within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This tests that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
         /* The test fails when the array is empty*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


          /* Spec 'should have an URL' loops through the allFeeds object and 
         * checks to make sure the URL's are defined and not empty.
         */
         it('should have an URL', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            } 
         });

        
         /* Loops through the allFeeds object to check that names are defined and not empty*/
         it('names are defined and not empty', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
         });
         
    });


    /* TODO: Write a new test suite named "The menu" */
    describe( 'the menu', function(){


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu changes when toggled', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });
    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        /*  Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done){
            loadFeed(0, done);
         });
         it('loadFeed populates .entry with at least a single element', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
            
            });
         });
        
     
    /* New test suite named "New Feed Selection"*/
    describe('New Feed Selection', function(){
    

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         *  LoadFeed() is asynchronous.
         */
         /* Since loadFeed() is asynchronous, we will be using beforeEach and done functions. */
         var initialFeed, newFeed;

        beforeEach(function(done){
            loadFeed(1,function(){
                initialFeed = $('.feed h2').html();
                done();
            });
        });

         beforeEach(function(done){
            loadFeed(2,function(){
                newFeed = $('.feed h2').html();
                done();
            });
        });
        it('content changes', function(){
            expect(initialFeed).not.toBe(newFeed);
            
        });
    });     
}());
