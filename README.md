# Pig Latin Translator

#### _{Brief description of application}, {Date of current version}_

#### By _**Jeff Dinsmore & Chloe Hellberg**_

## Description

Describe: `pigLatin()`
Test: "It will add 'way' to the end of words that begin with a vowel"
Expect(pigLatin("a")).toEqual("away");

Test: "For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add 'ay'"
Expect(pigLatin("chosen")).toEqual("osenchay");

Test: "For words beginning with 'y', treat 'y' as a consonant, and add 'ay'"
Expect(pigLatin("your")).toEqual("ouryay");

Tests: "If the first consonants include 'qu', move the 'u' along with the 'q'. Don't forget about words like 'squeal' where 'qu' doesn't come first"
Expect(pigLatin("Squeal")).toEqual("ealSqu");
Expect(pigLatin("question")).toEqual("estionqu");




## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**