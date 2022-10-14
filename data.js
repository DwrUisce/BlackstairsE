var APP_DATA = {
  "scenes": [
    {
      "id": "0-raw-water-tank",
      "name": "Raw Water Tank",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.09430408055130535,
        "pitch": 0.11888179939706767,
        "fov": 1.4743580089315886
      },
      "linkHotspots": [
        {
          "yaw": -0.07480161711741928,
          "pitch": 0.4296626749090038,
          "rotation": 0,
          "target": "1-turbine"
        },
        {
          "yaw": 0.8973254660378203,
          "pitch": 0.6142469355848625,
          "rotation": 0,
          "target": "2-control-room"
        },
        {
          "yaw": 0.11921484997181508,
          "pitch": -0.14575268037667044,
          "rotation": 0,
          "target": "3-river-intake"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2521901110065041,
          "pitch": -0.19411438766375078,
          "title": "Welcome",
          "text": "<div>Welcome to a virtual tour of the Blackstairs energy recovery water turbine. This system serves as a showcase of the potential for recovering electricity from existing water supply pipes instead of just dissipating it by means of a throttling valve. Here at Blackstairs, water is abstracted from a river intake at a higher elevation and is carried via a 2 km pipeline up to the raw water tank on top of which you are currently located.</div><div>Due to the altitude difference between the river intake and the tank, water traveling by gravity produces an excess pressure which is used to drive the turbine and generate power.</div><div><br></div><div>To proceed with the tour, please make your way to either the turbine floor, the control room or the river intake scenes by clicking on the ^ signs. Click and drag your mouse button to view the whole scene.</div><div><br></div><div>This project is a collaboration between Bangor University, Trinity College Dublin, and Blackstairs Group Water Scheme. It was made possible due to the support the ERDF Interreg Ireland-Wales Programme 2014-2020, through the Dŵr Uisce Project.</div>"
        }
      ]
    },
    {
      "id": "1-turbine",
      "name": "Turbine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4743580089315886
      },
      "linkHotspots": [
        {
          "yaw": -2.451137527333689,
          "pitch": -0.6351999466884628,
          "rotation": 0,
          "target": "0-raw-water-tank"
        },
        {
          "yaw": 1.4106614406793128,
          "pitch": -0.00886298430371113,
          "rotation": 0,
          "target": "2-control-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.24289309832010098,
          "pitch": 0.3122697377978234,
          "title": "Turbine",
          "text": "This turbine is derived from a conventional water pump modified to operate in reverse as a turbine. The maximum power output is 3.3 kW, and the unit is coupled to a 5.5 kW induction generator.&nbsp;<div><br></div><div>Please continue the tour by clicking on the ^ sign on the shed to the right of this turbine to proceed to the Control Room, or click back on the second ^ sign to return to the raw water tank.<br></div>"
        }
      ]
    },
    {
      "id": "2-control-room",
      "name": "Control Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2400469527371385,
        "pitch": 0.13813313292122942,
        "fov": 1.4743580089315886
      },
      "linkHotspots": [
        {
          "yaw": -2.8907319712669874,
          "pitch": 0.12011641631703185,
          "rotation": 0,
          "target": "0-raw-water-tank"
        },
        {
          "yaw": -1.1435974696118194,
          "pitch": -0.07779243798561097,
          "rotation": 0,
          "target": "1-turbine"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.01189646191966709,
          "pitch": -0.10902449487892696,
          "title": "Control Panel",
          "text": "This control panel is responsible for feeding the power generated by the turbine into the water treatment plant, and therefore offsetting an equivalent amount of electricity that would be otherwise consumed. Please note that only this small cabinet relates to the turbine, and the other equipment in the room is linked to other parts of the water treatment works.&nbsp;<div><br></div><div>Please continue the tour by clicking on the ^ sign on the door behind you to revert to the raw water tank and continue on to the River Intake Scene after<br></div>"
        }
      ]
    },
    {
      "id": "3-river-intake",
      "name": "River Intake",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.053205282315325,
        "pitch": 0.27675756047216993,
        "fov": 1.4743580089315886
      },
      "linkHotspots": [
        {
          "yaw": 2.851776944038102,
          "pitch": -0.12600268681486426,
          "rotation": 0,
          "target": "0-raw-water-tank"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8209685076062456,
          "pitch": 0.13568044081665143,
          "title": "River Diversion and Settling Tank",
          "text": "The water is abstracted thanks to a diversion on the river and channeled to this settling tank. From here, the 2 km long pipeline leading to the turbine and eventually to the raw water treatment works departs."
        },
        {
          "yaw": -2.2464719708938574,
          "pitch": 0.032040363523965,
          "title": "Thank You!",
          "text": "Once you finish looking around this scene, this concludes our tour. Thank you for your interest in our project!&nbsp;"
        }
      ]
    }
  ],
  "name": "Blackstairs Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
