Template.foo.helpers({
    methodResult: function () {
        // Super fun!
        return ReactiveMethod.call("http://127.0.0.1:8001/pcbuildapp-1170c5b/case.json?_shape=array");
        
        // Can also use 'apply' style
        // return ReactiveMethod.apply("myMethod", ["a", "b"]);
    }
});
