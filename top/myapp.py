#
# Copyright IBM Corp. 2016
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

from flask import Flask, abort, request, render_template
import os
import json

app = Flask(__name__)

APPLICATION_URIS=''

if 'VCAP_APPLICATION' in os.environ:
    VCAP_APPLICATION = json.loads(os.environ['VCAP_APPLICATION'])

    if 'application_uris' in VCAP_APPLICATION:
        APPLICATION_URIS = VCAP_APPLICATION['application_uris']

# Serve up index.html when requests come to root
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html', title='Hey, Bluemix User',path=path, urls=APPLICATION_URIS)


port = os.getenv('PORT', '5000')
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(port), debug = True, use_reloader=False)
