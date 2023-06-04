window.addEventListener('DOMContentLoaded', init);

function init () {
    TrackJS.track('Testing TrackJS!');

    let onerror;
    const consoleLog = document.querySelector('#log');
    const consoleError = document.querySelector('#error');
    const consoleCount = document.querySelector('#count');
    const consoleWarn = document.querySelector('#warn');
    const consoleAssert = document.querySelector('#assert');
    const consoleClear = document.querySelector('#clear');
    const consoleDir =  document.querySelector('#dir');
    const consoleDirxml = document.querySelector('#dirxml');
    const consoleGroupStart = document.querySelector('#groupStart');
    const consoleGroupEnd = document.querySelector('#groupEnd');
    const consoleTable = document.querySelector('#table');
    const consoleStartTimer = document.querySelector('#timerStart');
    const consoleEndTimer = document.querySelector('#timerEnd');
    const consoleTrace = document.querySelector('#trace');
    const consoleGlobalError = document.querySelector('#globalError');

    window.onerror = function(message, url, linenumber) {
        onerror = 'JavaScript error: ' + message + ' on line ' + linenumber + ' for ' + url;
        return true;
    }

    // log message to console
    consoleLog.addEventListener('click', function () {
        console.log('Logging into the log');
    });

    // log error to console
    consoleError.addEventListener('click', function () {
        console.error('Producing error');
        iAmTheError();
    });

    // increment count of 'fizz' by 2 and 'buzz' by 1
    consoleCount.addEventListener('click', function () {
        console.count('fizz');
        console.count('fizz');
        console.count('buzz');
    });
    
    // log warning to console
    consoleWarn.addEventListener('click', function () {
        console.warn('Potential error?');
        warningWasRight_ErrorOccurred();
    });
    
    // check for boolean expression, if false then log an error
    consoleAssert.addEventListener('click', function () {
        const string = '42';
        const num = 42;
        const reason = 'string and num are of mismatched types';
        console.assert(string === num, {string, num, reason});
    });
    
    // clear console
    consoleClear.addEventListener('click', function () {
        console.clear();
    });
    
    // print JSON representation of document's head
    consoleDir.addEventListener('click', function () {
        console.dir(document.head);
    });
    
    // print XML representation of document node
    consoleDirxml.addEventListener('click', function () {
        console.dirxml(document);
    });
    
    // group up following calls
    consoleGroupStart.addEventListener('click', function () {
        const category = 'Grouped';
        console.group(category);
    });
    
    // close the group of calls
    consoleGroupEnd.addEventListener('click', function () {
        const category = 'Grouped';
        console.groupEnd(category);
    });
    
    // print a table of a given array to the console
    consoleTable.addEventListener('click', function () {
        const sophmoreClasses = [
            {
                fall: 'CSE 30',
                winter: 'CSE 100',
                spring: 'CSE 101',
            },
            {
                fall: 'CSE 21',
                winter: 'CSE 105',
                spring: 'CSE 110',
            },
            {
                fall: 'COMM 10',
                winter: 'CAT 125',
                spring: 'LTWR 8A',
            },
            {
                fall: 'COGS 1',
                winter: 'MATH 180A',
                spring: 'MATH 181A',
            }
        ];
        console.table(sophmoreClasses);
    });
    
    // start a specified timer
    consoleStartTimer.addEventListener('click', function () {
        const label = 'stopwatch';
        console.time(label);
    });
    
    // end the specified timer
    consoleEndTimer.addEventListener('click', function () {
        const label = 'stopwatch';
        console.timeEnd(label);
    });
    
    // stack trace a recursion
    consoleTrace.addEventListener('click', function () {
        const recursion = function (count) {
            if (count < 0) {
                console.trace();
                return;
            }
            recursion(--count);
        };
        recursion(5);
    });
    
    //
    consoleGlobalError.addEventListener('click', function () {
        if (onerror) {
            console.log(onerror);
        }
    });
}