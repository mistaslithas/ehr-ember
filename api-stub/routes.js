module.exports = function(server) {

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  // server.namespace('/api', function() {

  //   server.get('/charts/', function(req, res) {
  //     res.send({
  //       "charts": [
  //         {
  //           "id": 1,
  //           "patient": "Josh"
  //         },
  //         {
  //           "id": 2,
  //           "patient": "Tina"
  //         }
  //       ]
  //     });
  //   });
  // });
};
