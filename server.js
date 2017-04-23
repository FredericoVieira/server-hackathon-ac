var express = require('express');
var app = express();

var challenge = 'ACBA' //'Hackathon=AvenueCode=Access_code_isNotSecret_4nym0r3';
var urlParams = ['coder', 'test', 'challenge'];
var paramTestValues = ['true', 'false'];
var response = {};

app.get('/', function(req, res){
     urlParams.forEach(function(param){
        if (req.query.hasOwnProperty(param)){
            if ((param === 'coder' && req.query['coder'].length < 10) ||
                (param === 'test' && paramTestValues.indexOf(req.query['test']) == -1))
                res.status(400).send('Missing parameters coder, test or challenge. Test must be true or false and \
                                        coder parameter must have a lenght greater than 10 chars.');
            
            if (param === 'challenge' && req.query['challenge'] === '')
                res.json({'length': challenge.length});
        }
    });

    if (req.query['challenge'].length !== challenge.length)
        res.status(409).send('Incorresponding string length.');

    if (req.query['challenge'].length === challenge.length && req.query['challenge'] !== challenge){
        var result = '';
        var wordChallenge = challenge.split('');

        wordChallenge.forEach(function(char, index){
            if (req.query['challenge'][index] === wordChallenge[index])
                result = result.concat('R');

            else if (wordChallenge.indexOf(req.query['challenge'][index]) != -1)
                        result = result.concat('U');
            
            else result = result.concat('W');
        });
        
        response = {
            message: 'Strings length match but words mismatch!',
            input: req.query['challenge'],
            result: result
        }

        res.status(206).json(response);
    }

    response = {
            message: 'Strings match!',
            input: req.query['challenge'],
            result: result,
            coder: req.query['coder'],
            test: req.query['test']
    }

    res.status(200).json(response);
});

app.listen(3000, function(){
    console.log('Server running (PORT=3000) with express...');
});
