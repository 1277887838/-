/**
 * Created by Administrator on 2016/8/4 0004.
 */

Array.prototype.unique5 = function() {
    var res = [], hash = {};
    for(var i=0, elem; (elem = this[i]) != null; i++)  {
        if (!hash[elem])
        {
            res.push(elem);
            hash[elem] = true;
        }
    }
    return res;
}