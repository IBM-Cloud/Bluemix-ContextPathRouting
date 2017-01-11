/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//------------------------------------------------------------------------------
// Deployment tracking
//------------------------------------------------------------------------------

const express = require('express');
const cfenv = require('cfenv');
const app = express();
const bodyParser = require('body-parser')

// get the app environment from Cloud Foundry, defaulting to local VCAP
var appEnv = cfenv.getAppEnv();

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json()); // parse application/json

app.get('/*', function (req, res) {
  res.render('index', { title: 'Hey, Bluemix User', message: 'Hey, Bluemix User', path: req.path, urls: appEnv.urls })
})


// start server on the specified port and binding host
app.listen(appEnv.port, "0.0.0.0", function () {
    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});
