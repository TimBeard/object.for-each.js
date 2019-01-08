# object.for-each.js
A polyfill that allows the use of forEach method on objects the same way it's done with arrays.

# Usage
`Object.prototype.forEach(cb)` where "cb" is a callback function that takes 3 arguments being the current value, the current key and the current object

# Example
```javascript
var foobarbaz = {kfoo: "vfoo", kbar: "vbar", kbaz: "vbaz"};

foobarbaz.forEach((val, key, obj) => console.log(`Object's ${key} is ${val} in ${JSON.stringify(obj)}`));
```

Will output:
```
Object's kfoo is vfoo in {"kfoo":"vfoo","kbar":"vbar","kbaz":"vbaz"}
Object's kbar is vbar in {"kfoo":"vfoo","kbar":"vbar","kbaz":"vbaz"}
Object's kbaz is vbaz in {"kfoo":"vfoo","kbar":"vbar","kbaz":"vbaz"}
```
