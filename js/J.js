(function () {
    "use strict";

    /*模块化
        
        $ -- 底层元素模块
        D -- 动态函数库
        Dy -- 异步模块(Ajax, 异步执行)
        

    */
    var $ = function () {

        //数组去重函数
        function unique(arr) {
            var r = arr.indexOf ? [] : [arr[0]],
                i,
                len = arr.length, str = "";

            if (arr.indexOf) {
                /*jslint plusplus: true */
                for (i = 0; i < len; i++) {
                    if (r.indexOf(arr[i]) === -1) {
                        r.push(arr[i]);
                    }
                }
            } else {
                arr = arr.sort();
                /*jslint plusplus: true */
                for (i = 1; i < len; i++) {
                    if (arr[i] !== r[r.length - 1]) {
                        r.push(arr[i]);
                    }
                }
            }
            
             for (i = 0; i < r.length; i++) {
                str += r[i].className + "\n";
            }
            alert(str);
            
            return r;
        }

        //NO.4 节点过滤器
        function getEl(d) {
            var len = d.length;

            return {
                getID: function (seletor) {
                    var i, Elist, Elarr = [];
                    /*jslint plusplus: true */
                    for (i = 0; i < len; i++) {
                        Elarr = Elarr.concat(this.ID(d[i].getElementsByTagName("*"), seletor));
                    }
                    return Elarr;
                },
                getCLS: function (seletor) {
                    var i, Elist, Elarr = [];
                    /*jslint plusplus: true */
                    for (i = 0; i < len; i++) {
                        Elarr = Elarr.concat(this.CLS(d[i].getElementsByTagName("*"), seletor));
                    }
                    return Elarr;
                },
                getTAG: function (seletor) {
                    var i, Elist, Elarr = [];
                    /*jslint plusplus: true */
                    for (i = 0; i < len; i++) {
                        Elarr = Elarr.concat(this.TAG(d[i].getElementsByTagName("*"), seletor));
                    }
                    return Elarr;
                },
                ID: function (d, s) {
                    var len = d.length,
                        i = 0,
                        re = [];
                    /*jslint plusplus: true */
                    for (i; i < len; i++) {
                        if (d[i].getAttribute("id") === s) {
                            re.push(d[i]);
                        }
                    }
                    return re;
                },
                CLS: function (d, s) {
                    var len = d.length,
                        i = 0,
                        re = [],
                        pattern = new RegExp("(^|\\s)" + s + "(\\s|$)");
                    /*jslint plusplus: true */
                    for (i; i < len; i++) {
                        if (pattern.test(d[i].getAttribute("class"))) {
                            re.push(d[i]);
                        }
                    }
                    return re;
                },
                TAG: function (d, s) {
                    var len = d.length,
                        i = 0,
                        re = [];
                    /*jslint plusplus: true */
                    for (i; i < len; i++) {
                        if (d[i].tagName.toLowerCase() === s) {
                            re.push(d[i]);
                        }
                    }
                    return re;
                }
            };
        }

        //NO.3 分析选择器
        function singleAnalyze(s, d) {
            var idR = /\#(\S{1,})/,
                clsR = /\.(\S{1,})/,
                n = [];
            if (idR.test(s)) {
                n = getEl(d).getID(s.match(idR)[1]);
            } else if (clsR.test(s)) {
                n = getEl(d).getCLS(s.match(clsR)[1]);
            } else {
                n = getEl(d).getTAG(s);
            }
            return n;
        }

        /*jslint white: true */
        //NO.2 分解
        //分解单个选择器(如果有空格 //bb cc//)
        function resolve(m, s, d) {
            s = s.split(" ");
            var len = s.length,
                i, n = [];
            /*jslint plusplus: true */
            for (i = 0; i < len; i++) {
                n = n.concat(singleAnalyze(s[i], d));
            }
            return n;
        }

        /*jslint white: true */
        //NO.1 解析
        //把选择器分解成单个选择器(//aa//bb cc/dd)
        function analyze(str) {
            var reg = /\/{1,2}/g,
                r, i, s, m, d;
            do {
                //进行匹配
                r = reg.exec(str);
                if (r !== null) {
                    if (i !== undefined) {
                        s = str.substring(i, r.index);
                    }
                    i = r.index + r[0].length;
                } else {
                    s = str.substring(i, str.length);
                }
                if (m !== "" && m !== undefined) {
                    d = resolve(m, s, d || [document]);
                }
                m = r;
            } while (r !== null);
            return unique(d);
        }

        return {
            getItem: function () {
                return analyze(this);
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