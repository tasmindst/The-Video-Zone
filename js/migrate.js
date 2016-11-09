if (navigator.userAgent.indexOf("PhantomJS") >= 0) {
    jQuery.migrateMute = true;
}

function expectWarning(name, expected, fn) {
    if (!fn) {
        fn = expected;
        expected = null;
    }
    jQuery.migrateReset();
    fn();
    if (expected === 0) {
        deepEqual(jQuery.migrateWarnings, [], name + ": did not warn");
    } else if (expected && jQuery.migrateWarnings.length === expected) {
        equal(jQuery.migrateWarnings.length, expected, name + ": warned");
    } else if (!expected && jQuery.migrateWarnings.length) {
        ok(true, name + ": warned");
    } else {
        deepEqual(jQuery.migrateWarnings, "<warnings: " + (expected || "1+") + ">", name + ": warned");
    }
}

function expectNoWarning(name, expected, fn) {
    return expectWarning(name, 0, fn || expected);
}