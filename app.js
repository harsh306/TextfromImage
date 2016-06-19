// [START server]
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');

var app = express();

var firebase = require('firebase'),
    gcloud = require('gcloud')({
  projectId: 'sample-1347'
});
console.log("Init");
var gcs = gcloud.storage({
  projectId: 'sample-1347'
});
 var  vision = gcloud.vision({
  projectId: 'sample-1347'
});
//API Server Key:AIzaSyCW20pdofjnf0gA9K_dScu7ylES66y_Q04

var bucket = gcs.bucket('newajinkya');

//gcs.createBucket('newajinkya',function(err,bucket){
//if(err)	//
	//console.log(err);//
//});
bucket.file('harshupload1.jpg').download({
        destination: 'harshupload1.jpg'
},function (err){});
  // Make a call to the Vision API to detect the faces
  vision.detectText('./harshupload1.jpg', function(error, text) {
    if (error) throw error;
   // callback(faces);
	console.log(text);
  });

bucket.upload('harshupload.txt',function(err,file){
	if(err)
    console.log(err);
  else console.log("File upload");
});
bucket.file('harshupload1.jpg').download({
	destination: 'harshupload1.jpg'
},function (err){});
// [START hello_world]
/*// Say hello!
app.get('/', function(req, res) {
  res.status(200).send('Hello, world!');
});
// [END hello_world]
*/

// [START server]
// Start the server
var server = app.listen(process.env.PORT || 8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
// [END server]

