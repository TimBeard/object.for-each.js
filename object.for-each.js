(function (proto) {

    "use strict";

    var forEach = function (cb) {

        var obj = this;

        return Object.getOwnPropertyNames(this).forEach(function (key) {

            return cb(obj[key], key, obj);
        });
    };

    if (proto.forEach === undefined) {

        Object.defineProperty(proto, "forEach", {
            value: forEach
        });
    }
}(Object.prototype));
