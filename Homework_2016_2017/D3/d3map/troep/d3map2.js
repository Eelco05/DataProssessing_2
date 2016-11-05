var map = new Datamap({
        scope: 'world',
        element: document.getElementById('container'),
        projection: 'mercator',
        fills: {
          defaultFill: 'gray',
          lt50: 'rgba(0,244,244,0.9)',
          gt50: 'red'
        },
        
        data: {
          USA: {fillKey: 'lt50' },
          RUS: {fillKey: 'lt50' },
          CAN: {fillKey: 'lt50' },
          BRA: {fillKey: 'gt50' },
          ARG: {fillKey: 'gt50'},
          COL: {fillKey: 'gt50' },
          AUS: {fillKey: 'gt50' },
          ZAF: {fillKey: 'gt50' },
          MAD: {fillKey: 'gt50' }       
        }
      })
      
      
      //sample of the arc plugin
      map.arc([
       {
        origin: {
            latitude: 40.639722,
            longitude: 73.778889
        },
        destination: {
            latitude: 37.618889,
            longitude: -122.375
        }
      },
      {
          origin: {
              latitude: 30.194444,
              longitude: -97.67
          },
          destination: {
              latitude: 25.793333,
              longitude: -0.290556
          }
      }
      ], {strokeWidth: 2});
       
      
       //bubbles, custom popup on hover template
     map.bubbles([
       {name: 'Hot', latitude: 21.32, longitude: 5.32, radius: 10, fillKey: 'gt50'},
       {name: 'Chilly', latitude: -25.32, longitude: 120.32, radius: 18, fillKey: 'lt50'},
       {name: 'Hot again', latitude: 21.32, longitude: -84.32, radius: 8, fillKey: 'gt50'},

     ]);
     //  {
     //   popupTemplate: function(geo, data) {
     //     return "<div class='hoverinfo'>It is " + data.name + "</div>";
     //   }
     // });