(function () {
    "use strict";

    /*模块化
        
        $ -- 底层元素模块
        D -- 动态函数库
        Dy -- 异步模块(Ajax, 异步执行)
        

    */
    var $ = function () {
        /*jslint white: true */
        function analyze(str) {
            var reg = /\/{1,2}/g;
            
            
        }
        return {
            getItem: function () {
                analyze(this);
            }
        };
    };
    /*jslint white: true */
    function D() {

        return {

        };

    }

    function Dy() {

        return {

        };
    }

    /*jshint forin: true */
    String.prototype.extend = function (n, o) {

        /*eslint guard-for-in: 1 */
        var i;
        for (i in o) {
            if (o.hasOwnProperty(i)) {
                n[i] = o[i];
            }
        }
    };

    "".extend(String.prototype, $());

}());

"aa".getItem();

/*
    function a() {
    var reg = /\/{1,2}/g,
        i, t = this,
        s = [];
    do {
        r = reg.exec(t);
        if (r == null) {
            s[s.length - 1].s = t.substring(i, t.length);
            r = undefined;
        } else {
            if (i != undefined)
                s[s.length - 1].s = t.substring(i, r.index);
            s.push({
                r: r
            });
            i = r.index + r[0].length;
        }
    } while (r != null);
    return s;
}



function b() {
    var s = this.a(),
        len = s.length,
        n;
    (function (rsult, index) {
        var nodes = [];
        if (index > 0) {
            for (var i = 0; i < rsult.length; i++) {
                var set = getNodeSet(s[index], rsult[i]);
                for (var k = 0; k < set.length; k++)
                    nodes.push(set [k]);
            }
        } else {
            var set = getNodeSet(s[index]);
            for (var i = 0; i < set.length; i++)
                nodes.push(set [i]);
        }

        if (index < (len - 1)) {
            arguments.callee(nodes, ++index);
        } else {
            n = nodes;
        }
    })([], 0);
    return n;
}

function chooseNode(s, r) {
    var n = [];
    if (/^(.*)#(.*)$/.test(s.s)) {
        var m = s.s.match(/^(.*)#(.*)$/),
            c;

        if (s.r[0] == "//") {
            c = r.getElementsByTagName(m[1]);
        } else {
            c = r.childNodes;
        };
        var len = c.length;
        for (var i = 0; i < len; i++)
            if (!(c[i].nodeType == 3) || /\S/.test(c[i].nodeValue)) {
                if (c[i].nodeName.toLowerCase() == m[1] && c[i].id == m[2]) {
                    n.push(c[i]);
                }
            }
    } else if (/^(.*)\.(.*)$/.test(s.s)) {
        var m = s.s.match(/^(.*)\.(.*)$/),
            c;

        if (s.r[0] == "//") {
            c = r.getElementsByTagName(m[1]);
        } else {
            c = r.childNodes;
        };
        var len = c.length;

        for (var i = 0; i < len; i++)
            if (!(c[i].nodeType == 3) || /\S/.test(c[i].nodeValue)) {
                var ca = c[i].className.split(" ");
                for (var k = 0; k < ca.length; k++) {
                    if (c[k].nodeName.toLowerCase() == m[1] && ca[k] == m[2]) {
                        n.push(c[i]);
                    }
                }
            }
    } else if (/^(.*)@(.*)$/.test(s.s)) {

        var m = s.s.match(/^(.*)@(.*)$/),
            c;

        if (s.r[0] == "//") {
            c = r.getElementsByTagName(m[1]);
        } else {
            c = r.childNodes;
        };
        var len = c.length;

        if (/^(.*)=(.*)$/.test(m[2]))
            var a = m[2].match(/^(.*)=[\'|\"]{0,1}(.*)[\'|\"]{0,1}$/);

        for (var i = 0; i < len; i++)
            if (!(c[i].nodeType == 3) || /\S/.test(c[i].nodeValue)) {
                if (c[i].nodeName.toLowerCase() == m[1]) {
                    if (a == undefined) {
                        var attr = c[i].getAttribute(m[2]);
                        if (attr != null)
                            n.push(c[i]);
                    } else {
                        var attr = c[i].getAttribute(a[1]);
                        if (attr != null) {
                            var ca = attr.split(" "),
                                clen = ca.length;

                            for (var k = 0; k < clen; k++) {
                                if (ca[k] == a[2])
                                    n.push(c[i]);
                            }
                        }

                    }
                }
            }


    } else {

        if (s.r[0] == "//") {
            c = r.getElementsByTagName(s.s);
        } else {
            c = r.childNodes;
        }
        var len = c.length,
            n = [],
            c;
        for (var i = 0; i < len; i++)
            if (!(c[i].nodeType == 3) || /\S/.test(c[i].nodeValue)) {
                if (c[i].nodeName.toLowerCase() == s.s)
                    n.push(c[i]);
            }
    }

    return n;
}

function getNodeSet(s, r) {
    var r = r || document,
        o;
    o = chooseNode(s, r);
    return typeof o == "undefined" ? {} : o;
}

String.prototype.a = a;
String.prototype.b = b;*/