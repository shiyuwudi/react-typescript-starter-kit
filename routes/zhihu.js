/**
 * Created by lixiaoyang on 2016/11/10.
 */
var express = require('express');
var reqwest = require('reqwest');
var router = express.Router();

router.get('/api/4/news/latest', function (req, res) {
    reqwest({
        url: 'http://news-at.zhihu.com/api/4/news/latest'
        , method: 'get'
        , success: function (resp) {
            res.send(resp);
        }
    })
});

router.get('/api/4/news/:id', function (req, res) {
    var id = req.params.id;
    reqwest({
        url: `http://news-at.zhihu.com/api/4/news/${id}`
        , method: 'get'
        , success: function (resp) {
            res.send(resp);
        }
    })
});

module.exports = router;
