# React useEffect Hook Missing Log Statement

This repository demonstrates a subtle issue with the React `useEffect` hook where a log statement within an effect with an empty dependency array does not appear in the console.  The expected behavior is that the log statement executes once when the component mounts.  However, due to browser optimization or other factors, it may be missed.

## Bug

The `bug.js` file contains a simple component using `useEffect` with an empty dependency array. The `console.log` statement is expected to print 'Mounted!' to the console, but it does not.

## Solution

The `bugSolution.js` file shows a potential solution that demonstrates how to ensure the effect executes as intended. It showcases how the console log works appropriately after minor refactoring, like using `console.error`. Although this isn't necessarily a fix for all instances of this issue, it shows how a workaround might be done.