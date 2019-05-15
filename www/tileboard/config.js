/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/


var CONFIG = {
   customTheme: CUSTOM_THEMES.TRANSPARENT, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,
   serverUrl: "http://192.168.1.237:8123",
   wsUrl: "ws://192.168.1.237:8123/api/websocket",
   authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   debug: false, // Prints entities and state change info to the console.
   pingConnection: true, //ping connection to prevent silent disconnections

   // next fields are optional
   events: [],
   timeFormat: 12,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         padding: '30px 130px 0',
         fontSize: '28px'
      },
      left: [
         {
            type: HEADER_ITEMS.DATETIME,
            dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
         }
      ],
      right: [
         {
            type: HEADER_ITEMS.WEATHER,
            styles: {
               margin: '0 0 0'
            },
            icon: '&sensor.dark_sky_icon.state',
            icons: {
               'clear-day': 'clear',
               'clear-night': 'nt-clear',
               'cloudy': 'cloudy',
               'rain': 'rain',
               'sleet': 'sleet',
               'snow': 'snow',
               'wind': 'hazy',
               'fog': 'fog',
               'partly-cloudy-day': 'partlycloudy',
               'partly-cloudy-night': 'nt-partlycloudy'
            },
            fields: {
               summary: '&sensor.dark_sky_summary.state',
               temperature: '&sensor.dark_sky_temperature.state',
               temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
            }
         }
      ]
   },

   screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 30,
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }],
      slides: [
         {
            bg: 'images/bg2.png',
            rightTop: [
               {
                  type: HEADER_ITEMS.WEATHER,
                  styles: {
                     margin: '0 0 0'
                  },
                  icon: '&sensor.dark_sky_icon.state',
                  icons: {
                     'clear-day': 'clear',
                     'clear-night': 'nt-clear',
                     'cloudy': 'cloudy',
                     'rain': 'rain',
                     'sleet': 'sleet',
                     'snow': 'snow',
                     'wind': 'hazy',
                     'fog': 'fog',
                     'partly-cloudy-day': 'partlycloudy',
                     'partly-cloudy-night': 'nt-partlycloudy'
                  },
                  fields: {
                     summary: '&sensor.dark_sky_summary.state',
                     temperature: '&sensor.dark_sky_temperature.state',
                     temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
                  }
               }
            ]
         }
      ]
   },

   pages: [
      {
         title: 'Home',
         bg: 'images/bg3.jpg',
         icon: 'mdi-home-outline', // home icon
         groups: [
            {
               title: '',
               items: [
                  {
                     position: [0, 0],
                     height: 2,
                     //classes: ['-compact'], // enable this if you want a little square tile (1x1)
                     type: TYPES.WEATHER,
                     id: 'group.weather',
                     state: '&sensor.dark_sky_summary.state', // label with weather summary (e.g. Sunny)
                     icon: '&sensor.dark_sky_icon.state',
                     //iconImage: '&sensor.dark_sky_icon.state', // use this one if you want to replace icon with image
                     icons: {
                        'clear-day': 'clear',
                        'clear-night': 'nt-clear',
                        'cloudy': 'cloudy',
                        'rain': 'rain',
                        'sleet': 'sleet',
                        'snow': 'snow',
                        'wind': 'hazy',
                        'fog': 'fog',
                        'partly-cloudy-day': 'partlycloudy',
                        'partly-cloudy-night': 'nt-partlycloudy'
                     },
                     fields: { // most of that fields are optional
                        summary: '&sensor.dark_sky_summary.state',
                        temperature: '&sensor.dark_sky_temperature.state',
                        temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
                        windSpeed: '&sensor.dark_sky_wind_speed.state',
                        windSpeedUnit: '&sensor.dark_sky_wind_speed.attributes.unit_of_measurement',
                        humidity: '&sensor.dark_sky_humidity.state',
                        humidityUnit: '&sensor.dark_sky_humidity.attributes.unit_of_measurement',

                        list: [
                           // custom line
                           'Feels like '
                              + '&sensor.dark_sky_apparent_temperature.state'
                              + '&sensor.dark_sky_apparent_temperature.attributes.unit_of_measurement',

                           // yet another custom line
                           '&sensor.dark_sky_precip_probability.state'
                              + '&sensor.dark_sky_precip_probability.attributes.unit_of_measurement'
                              + ' chance of rain'
                        ]
                     }
                  }
               ]
            },

            {
               title: '',
               items: [
                  {
                     position: [0, 0],
                     type: TYPES.SWITCH,
                     title: 'Lights',
                     subtitle: 'Living Room',
                     id: 'group.first_floor_lights',
                     icons: {
                       on: 'mdi-lightbulb-on',
                       off: 'mdi-lightbulb',
                     },
                     states: {
                        on: "On",
                        off: "Off"
                     },
                      // state: false,
                      // action: function(item, entity) {
                      //     Api.send({
                      //         type: 'call_service',
                      //         domain: 'homeassistant',
                      //         service: 'turn_off',
                      //         service_data: {
                      //             entity_id: item.id,
                      //         }
                      //     });
                      // }
                  },
                  {
                     position: [0, 1],
                     type: TYPES.FAN,
                     title: 'Ceiling fan',
                     id: 'fan.living_room',
                     icons: {
                       on: 'mdi-fan',
                       off: 'mdi-fan-off',
                     },
                  },
                  {
                     position: [1, 0],
                     type: TYPES.LOCK,
                     id: {},
                     title: 'Front door',
                     states: {
                        locked: "Locked",
                        unlocked: "Unlocked"
                     },
                     icons: {
                        locked: "mdi-lock",
                        unlocked: "mdi-lock-open",
                     }
                  }

               ]
            },

            {
               title: 'Scenes',
               items: [
                  {
                      position: [0,0],
                      type: TYPES.AUTOMATION,
                      title: 'Goodnight',
                      subtitle: 'Trigger Automation',
                      id: {},
                      icon: 'mdi-weather-night'
                  },
                  {
                      position: [0,1],
                      type: TYPES.AUTOMATION,
                      title: 'Work',
                      subtitle: 'Trigger Automation',
                      id: {},
                      icon: 'mdi-briefcase'
                  },
                  {
                      position: [1,0],
                      type: TYPES.AUTOMATION,
                      title: 'Work',
                      subtitle: 'Trigger Automation',
                      id: {},
                      icon: 'mdi-briefcase'
                  }
               ]
            }, 
         ]
      },
      {
         title: 'Second page',
         bg: 'images/bg2.png',
         icon: 'mdi-music',
         groups: [
            {
               title: '',
               width: 2,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [1,2,3,4,5].map(function (id) {
                      return {
                        title: function () {
                          return 'test';

                          // var request = new XMLHttpRequest();

                          // request.onreadystatechange = function() {
                          //     if (this.readyState == 4 && this.status == 200) {
                          //         console.log(this.responseText);
                          //         return this.responseText;
                          //     }
                          // };

                          // request.setRequestHeader('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmMyMjhiZDk2ZDA0ZDRmYjY1NGY1MWYxOWMxYmE2YSIsImlhdCI6MTU1NzgxNTQwNywiZXhwIjoxODczMTc1NDA3fQ.QLghUweuxsQdKJGmcRWx3OxRfi8iqlCX3Sav7qMVRMY');
                          // request.open('GET', 'http://192.168.1.237:8123/api/calendars/calendar.family?start=2019-05-14T00:00:00Z&end=2019-05-21T00:00:00Z');
                          // request.send();
                          

                        }, 
                        value: function() {
                          return this.states['calendar.family'].attributes.message
                        },
                      }
                     })
                     // list: [
                     //    {
                     //      title: function () {
                     //        var date = this.states['calendar.family'].attributes.start_time;
                     //        return  moment(date).format("MMM Do");
                     //      },
                     //      value: function () {
                     //        return this.states['calendar.family'].attributes.message;
                     //      },
                     //    },
                     // ]
                  }
               ]
            },
         ]
      }
   ],

   events: [
      {
         command: 'notify',
         action: function(e) {
            Noty.addObject(e);
         }
      }
   ]
}
