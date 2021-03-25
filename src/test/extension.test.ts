//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';
import { irregularWhitespaces, getIrregularWhiteSpacesRegex } from '../irregularWhitespaces';
// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function () {

    // Defines a Mocha unit test
    test("Fixing is working for all irregular whitespaces", function() {
        const textWithIrregularWhiteSpace = `Go${irregularWhitespaces.join('another')}`;

        const regex = getIrregularWhiteSpacesRegex();

        const fixedText = textWithIrregularWhiteSpace.replace(regex, ' ');

        const expectedText = (() => {
            let text = 'Go';
            for (let i = 0; i < irregularWhitespaces.length - 1; i++) {
                text += ` another`; // normal whitespace
            }
            text += ' ';
            return text;
        })();

        assert.equal(fixedText, expectedText);
    });
});
