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
         padding: '30px 130px 50px 50px',
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
                     position: [2, 1],
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

                           // another custom line
                           'Pressure '
                              + '&sensor.dark_sky_pressure.state'
                              + '&sensor.dark_sky_pressure.attributes.unit_of_measurement',

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
                     width: 1,
                     type: TYPES.SLIDER,
                     //id: "input_number.volume",
                     id: {state: 50}, // replace it with real string id
                     state: false,
                     title: 'Custom slider',
                     subtitle: 'Example of subtitle',
                     slider: {
                        min: 0,
                        max: 100,
                        step: 2,
                        request: {
                           type: "call_service",
                           domain: "input_number",
                           service: "set_value",
                           field: "value"
                        }
                     }
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     type: TYPES.SWITCH,
                     //id: "switch.lights",
                     id: {state: 'off'}, // replace it with real string id (e.g. "switch.lights")
                     state: false,
                     title: 'Custom switch',
                     icons: {'off': 'mdi-volume-off', 'on': 'mdi-volume-high'}
                  },
                  {
                     position: [0, 1],
                     type: TYPES.ALARM,
                     //id: "alarm_control_panel.home_alarm",
                     id: { state: 'disarmed' }, // replace it with real string id
                     title: 'Home Alarm',
                     icons: {
                        disarmed: 'mdi-bell-off',
                        pending: 'mdi-bell',
                        armed_home: 'mdi-bell-plus',
                        armed_away: 'mdi-bell',
                        triggered: 'mdi-bell-ring'
                     },
                     states: {
                        disarmed: 'Disarmed',
                        pending: 'Pending',
                        armed_home: 'Armed home',
                        armed_away: 'Armed away',
                        triggered: 'Triggered'
                     }
                  }

               ]
            },

            {
               title: 'Automations',
               items: [
                  {
                     // please read README.md for more information
                     // this is just an example
                     position: [0, 0],
                     height: 2, // 1 for compact
                     //classes: ['-compact'],
                     type: TYPES.WEATHER,
                     id: {},
                     state: function () {return 'Sunny'}, // https://github.com/resoai/TileBoard/wiki/Anonymous-functions
                     icon: 'clear-day',
                     icons: { 'clear-day': 'clear'},
                     fields: {
                        summary: 'Sunny',
                        temperature: '18',
                        temperatureUnit: 'C',
                        windSpeed: '5',
                        windSpeedUnit: 'kmh',
                        humidity: '50',
                        humidityUnit: '%',
                        list: [
                           'Feels like 16 C'
                           /*
                           'Feels like '
                              + '&sensor.dark_sky_apparent_temperature.state'
                              + '&sensor.dark_sky_apparent_temperature.attributes.unit_of_measurement',

                           'Pressure '
                              + '&sensor.dark_sky_pressure.state'
                              + '&sensor.dark_sky_pressure.attributes.unit_of_measurement',

                           '&sensor.dark_sky_precip_probability.state'
                              + '&sensor.dark_sky_precip_probability.attributes.unit_of_measurement'
                              + ' chance of rain'
                           */
                        ]
                     }
                  }

               ]
            }
         ]
      },
      {
         title: 'Second page',
         bg: 'images/bg2.png',
         icon: 'mdi-numeric-2-box-outline',
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
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        }
                     ]
                  }
               ]
            },
         ]
      }
   ],
}
