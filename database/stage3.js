var locationsNew = [
    {
      "id": "3-1",
      "found": true,
      "image":"images/stage3/1.jpg",
      "coords": {
        "lat": 51.054830,
        "long": 3.721949
      }
    },
    {
      "id": "3-2",
      "found": false,
      "image":"images/stage3/2.jpg",
      "coords": {
        "lat": 51.055055,
        "long": 3.724366
      }
    },    {
      "id": "3-3",
      "found": false,
      "image":"images/stage3/3.jpg",
      "coords": {
        "lat": 51.057001,
        "long": 3.728684
      }
    },    {
      "id": "3-4",
      "found": false,
      "image":"images/stage3/4.jpg",
      "coords": {
        "lat": 51.053893,
        "long": 3.725079
      }
    },    {
      "id": "3-5",
      "found": false,
      "image":"images/stage3/5.jpg",
      "coords": {
        "lat": 51.054001,
        "long": 3.720758
      }
    },    {
      "id": "3-6",
      "found": false,
      "image":"images/stage3/6.jpg",
      "coords": {
        "lat": 51.056759,
        "long": 3.721456
      }
    },    {
      "id": "3-7",
      "found": false,
      "image":"images/stage3/7.jpg",
      "coords": {
        "lat": 51.056895,
        "long": 3.725532
      }
    },    {
      "id": "3-8",
      "found": false,
      "image":"images/stage3/8.jpg",
      "coords": {
        "lat": 51.057315,
        "long": 3.724156
      }
    },    {
      "id": "3-9",
      "found": false,
      "image":"images/stage3/9.jpg",
      "coords": {
        "lat": 51.055805,
        "long": 3.722539
      }
    }
  ];

      var stageId = "locations3";
      var locations = JSON.parse(window.localStorage.getItem(stageId));

      if(!locations){
          locations = locationsNew;
      }
var bgImg = "url('images/stage3/fene.jpg')";

var lastStage = true;