var width  = 1000,
    height = 1000,
    colors = d3.scale.category10();

var svg = d3.select('body')
    .append('svg')
    .attr('oncontextmenu', 'return false;')
    .attr('width', width)
    .attr('height', height);

// set up initial nodes and links
//  - nodes are known by 'id', not by index in array.
//  - reflexive edges are indicated on the node (as a bold black circle).
//  - links are always source < target; edge directions are set by 'left' and 'right'.

var edges = [
    {
        "source": "29",
        "right": 1,
        "target": "48",
        "left": 1
    },
    {
        "source": "70",
        "right": 1,
        "target": "0",
        "left": 1
    },
    {
        "source": "96",
        "right": 1,
        "target": "21",
        "left": 1
    },
    {
        "source": "72",
        "right": 1,
        "target": "27",
        "left": 1
    },
    {
        "source": "24",
        "right": 1,
        "target": "54",
        "left": 1
    },
    {
        "source": "26",
        "right": 1,
        "target": "4",
        "left": 1
    },
    {
        "source": "69",
        "right": 1,
        "target": "26",
        "left": 1
    },
    {
        "source": "16",
        "right": 1,
        "target": "59",
        "left": 1
    },
    {
        "source": "69",
        "right": 1,
        "target": "21",
        "left": 1
    },
    {
        "source": "88",
        "right": 1,
        "target": "35",
        "left": 1
    },
    {
        "source": "98",
        "right": 1,
        "target": "61",
        "left": 1
    },
    {
        "source": "16",
        "right": 1,
        "target": "50",
        "left": 1
    },
    {
        "source": "69",
        "right": 1,
        "target": "28",
        "left": 1
    },
    {
        "source": "49",
        "right": 1,
        "target": "1",
        "left": 1
    },
    {
        "source": "35",
        "right": 1,
        "target": "89",
        "left": 1
    },
    {
        "source": "39",
        "right": 1,
        "target": "11",
        "left": 1
    },
    {
        "source": "97",
        "right": 1,
        "target": "85",
        "left": 1
    },
    {
        "source": "97",
        "right": 1,
        "target": "14",
        "left": 1
    },
    {
        "source": "20",
        "right": 1,
        "target": "40",
        "left": 1
    },
    {
        "source": "46",
        "right": 1,
        "target": "24",
        "left": 1
    },
    {
        "source": "75",
        "right": 1,
        "target": "67",
        "left": 1
    },
    {
        "source": "18",
        "right": 1,
        "target": "19",
        "left": 1
    },
    {
        "source": "92",
        "right": 1,
        "target": "93",
        "left": 1
    },
    {
        "source": "79",
        "right": 1,
        "target": "4",
        "left": 1
    },
    {
        "source": "10",
        "right": 1,
        "target": "43",
        "left": 1
    },
    {
        "source": "31",
        "right": 1,
        "target": "79",
        "left": 1
    },
    {
        "source": "65",
        "right": 1,
        "target": "20",
        "left": 1
    },
    {
        "source": "65",
        "right": 1,
        "target": "26",
        "left": 1
    },
    {
        "source": "71",
        "right": 1,
        "target": "62",
        "left": 1
    },
    {
        "source": "7",
        "right": 1,
        "target": "8",
        "left": 1
    },
    {
        "source": "36",
        "right": 1,
        "target": "57",
        "left": 1
    },
    {
        "source": "98",
        "right": 1,
        "target": "6",
        "left": 1
    },
    {
        "source": "54",
        "right": 1,
        "target": "27",
        "left": 1
    },
    {
        "source": "82",
        "right": 1,
        "target": "79",
        "left": 1
    },
    {
        "source": "54",
        "right": 1,
        "target": "29",
        "left": 1
    },
    {
        "source": "84",
        "right": 1,
        "target": "62",
        "left": 1
    },
    {
        "source": "68",
        "right": 1,
        "target": "78",
        "left": 1
    },
    {
        "source": "34",
        "right": 1,
        "target": "75",
        "left": 1
    },
    {
        "source": "93",
        "right": 1,
        "target": "83",
        "left": 1
    },
    {
        "source": "50",
        "right": 1,
        "target": "51",
        "left": 1
    },
    {
        "source": "68",
        "right": 1,
        "target": "95",
        "left": 1
    },
    {
        "source": "11",
        "right": 1,
        "target": "14",
        "left": 1
    },
    {
        "source": "68",
        "right": 1,
        "target": "93",
        "left": 1
    },
    {
        "source": "16",
        "right": 1,
        "target": "86",
        "left": 1
    },
    {
        "source": "87",
        "right": 1,
        "target": "47",
        "left": 1
    },
    {
        "source": "48",
        "right": 1,
        "target": "41",
        "left": 1
    },
    {
        "source": "55",
        "right": 1,
        "target": "53",
        "left": 1
    },
    {
        "source": "55",
        "right": 1,
        "target": "57",
        "left": 1
    },
    {
        "source": "6",
        "right": 1,
        "target": "2",
        "left": 1
    },
    {
        "source": "25",
        "right": 1,
        "target": "53",
        "left": 1
    },
    {
        "source": "33",
        "right": 1,
        "target": "71",
        "left": 1
    },
    {
        "source": "78",
        "right": 1,
        "target": "56",
        "left": 1
    },
    {
        "source": "49",
        "right": 1,
        "target": "63",
        "left": 1
    },
    {
        "source": "78",
        "right": 1,
        "target": "58",
        "left": 1
    },
    {
        "source": "90",
        "right": 1,
        "target": "48",
        "left": 1
    },
    {
        "source": "56",
        "right": 1,
        "target": "60",
        "left": 1
    },
    {
        "source": "74",
        "right": 1,
        "target": "40",
        "left": 1
    },
    {
        "source": "73",
        "right": 1,
        "target": "65",
        "left": 1
    },
    {
        "source": "13",
        "right": 1,
        "target": "28",
        "left": 1
    },
    {
        "source": "98",
        "right": 1,
        "target": "67",
        "left": 1
    },
    {
        "source": "4",
        "right": 1,
        "target": "78",
        "left": 1
    },
    {
        "source": "16",
        "right": 1,
        "target": "13",
        "left": 1
    },
    {
        "source": "8",
        "right": 1,
        "target": "69",
        "left": 1
    },
    {
        "source": "41",
        "right": 0,
        "target": "49",
        "left": 1
    },
    {
        "source": "48",
        "right": 1,
        "target": "33",
        "left": 1
    },
    {
        "source": "91",
        "right": 1,
        "target": "45",
        "left": 1
    },
    {
        "source": "9",
        "right": 1,
        "target": "11",
        "left": 1
    },
    {
        "source": "91",
        "right": 1,
        "target": "48",
        "left": 1
    },
    {
        "source": "41",
        "right": 1,
        "target": "44",
        "left": 1
    },
    {
        "source": "4",
        "right": 1,
        "target": "84",
        "left": 1
    },
    {
        "source": "23",
        "right": 1,
        "target": "1",
        "left": 1
    },
    {
        "source": "23",
        "right": 1,
        "target": "8",
        "left": 1
    },
    {
        "source": "70",
        "right": 1,
        "target": "22",
        "left": 1
    },
    {
        "source": "80",
        "right": 1,
        "target": "55",
        "left": 1
    },
    {
        "source": "66",
        "right": 1,
        "target": "29",
        "left": 1
    },
    {
        "source": "3",
        "right": 1,
        "target": "47",
        "left": 1
    },
    {
        "source": "15",
        "right": 1,
        "target": "94",
        "left": 1
    },
    {
        "source": "91",
        "right": 1,
        "target": "50",
        "left": 1
    },
    {
        "source": "23",
        "right": 1,
        "target": "96",
        "left": 1
    },
    {
        "source": "31",
        "right": 1,
        "target": "32",
        "left": 1
    },
    {
        "source": "65",
        "right": 1,
        "target": "69",
        "left": 1
    },
    {
        "source": "78",
        "right": 1,
        "target": "2",
        "left": 1
    },
    {
        "source": "75",
        "right": 1,
        "target": "23",
        "left": 1
    },
    {
        "source": "65",
        "right": 1,
        "target": "63",
        "left": 1
    },
    {
        "source": "16",
        "right": 1,
        "target": "67",
        "left": 1
    },
    {
        "source": "20",
        "right": 1,
        "target": "4",
        "left": 1
    },
    {
        "source": "33",
        "right": 1,
        "target": "97",
        "left": 1
    },
    {
        "source": "81",
        "right": 1,
        "target": "23",
        "left": 1
    },
    {
        "source": "33",
        "right": 1,
        "target": "92",
        "left": 1
    },
    {
        "source": "24",
        "right": 1,
        "target": "95",
        "left": 1
    },
    {
        "source": "79",
        "right": 1,
        "target": "24",
        "left": 1
    },
    {
        "source": "24",
        "right": 1,
        "target": "91",
        "left": 1
    },
    {
        "source": "60",
        "right": 1,
        "target": "29",
        "left": 1
    },
    {
        "source": "9",
        "right": 1,
        "target": "46",
        "left": 1
    },
    {
        "source": "73",
        "right": 1,
        "target": "77",
        "left": 1
    },
    {
        "source": "32",
        "right": 1,
        "target": "84",
        "left": 1
    },
    {
        "source": "6",
        "right": 1,
        "target": "82",
        "left": 1
    },
    {
        "source": "6",
        "right": 1,
        "target": "80",
        "left": 1
    },
    {
        "source": "64",
        "right": 1,
        "target": "31",
        "left": 1
    },
    {
        "source": "37",
        "right": 1,
        "target": "80",
        "left": 1
    },
    {
        "source": "34",
        "right": 1,
        "target": "45",
        "left": 1
    },
    {
        "source": "93",
        "right": 1,
        "target": "45",
        "left": 1
    },
    {
        "source": "67",
        "right": 1,
        "target": "12",
        "left": 1
    },
    {
        "source": "46",
        "right": 1,
        "target": "18",
        "left": 1
    },
    {
        "source": "2",
        "right": 1,
        "target": "69",
        "left": 1
    },
    {
        "source": "95",
        "right": 1,
        "target": "40",
        "left": 1
    },
    {
        "source": "3",
        "right": 1,
        "target": "37",
        "left": 1
    },
    {
        "source": "11",
        "right": 1,
        "target": "59",
        "left": 1
    },
    {
        "source": "36",
        "right": 1,
        "target": "22",
        "left": 1
    },
    {
        "source": "36",
        "right": 1,
        "target": "21",
        "left": 1
    },
    {
        "source": "93",
        "right": 1,
        "target": "46",
        "left": 1
    },
    {
        "source": "84",
        "right": 1,
        "target": "82",
        "left": 1
    },
    {
        "source": "44",
        "right": 1,
        "target": "25",
        "left": 1
    },
    {
        "source": "70",
        "right": 1,
        "target": "93",
        "left": 1
    },
    {
        "source": "97",
        "right": 1,
        "target": "3",
        "left": 1
    },
    {
        "source": "72",
        "right": 1,
        "target": "76",
        "left": 1
    },
    {
        "source": "95",
        "right": 1,
        "target": "83",
        "left": 1
    },
    {
        "source": "12",
        "right": 1,
        "target": "10",
        "left": 1
    },
    {
        "source": "56",
        "right": 1,
        "target": "15",
        "left": 1
    },
    {
        "source": "94",
        "right": 1,
        "target": "8",
        "left": 1
    },
    {
        "source": "54",
        "right": 1,
        "target": "72",
        "left": 1
    },
    {
        "source": "46",
        "right": 1,
        "target": "85",
        "left": 1
    },
    {
        "source": "50",
        "right": 1,
        "target": "75",
        "left": 1
    },
    {
        "source": "35",
        "right": 1,
        "target": "75",
        "left": 1
    },
    {
        "source": "51",
        "right": 1,
        "target": "13",
        "left": 1
    },
    {
        "source": "67",
        "right": 1,
        "target": "68",
        "left": 1
    },
    {
        "source": "35",
        "right": 1,
        "target": "74",
        "left": 1
    },
    {
        "source": "14",
        "right": 1,
        "target": "42",
        "left": 1
    },
    {
        "source": "33",
        "right": 1,
        "target": "26",
        "left": 1
    },
    {
        "source": "1",
        "right": 1,
        "target": "16",
        "left": 1
    },
    {
        "source": "22",
        "right": 1,
        "target": "52",
        "left": 1
    },
    {
        "source": "1",
        "right": 1,
        "target": "18",
        "left": 1
    },
    {
        "source": "87",
        "right": 1,
        "target": "39",
        "left": 1
    },
    {
        "source": "59",
        "right": 1,
        "target": "14",
        "left": 1
    },
    {
        "source": "78",
        "right": 1,
        "target": "65",
        "left": 1
    },
    {
        "source": "66",
        "right": 1,
        "target": "61",
        "left": 1
    },
    {
        "source": "61",
        "right": 1,
        "target": "94",
        "left": 1
    },
    {
        "source": "29",
        "right": 1,
        "target": "50",
        "left": 1
    },
    {
        "source": "43",
        "right": 1,
        "target": "31",
        "left": 1
    },
    {
        "source": "43",
        "right": 1,
        "target": "33",
        "left": 1
    },
    {
        "source": "45",
        "right": 1,
        "target": "44",
        "left": 1
    },
    {
        "source": "76",
        "right": 1,
        "target": "16",
        "left": 1
    },
    {
        "source": "5",
        "right": 1,
        "target": "55",
        "left": 1
    },
    {
        "source": "76",
        "right": 1,
        "target": "19",
        "left": 1
    },
    {
        "source": "58",
        "right": 1,
        "target": "95",
        "left": 1
    },
    {
        "source": "58",
        "right": 1,
        "target": "92",
        "left": 1
    },
    {
        "source": "70",
        "right": 1,
        "target": "75",
        "left": 1
    },
    {
        "source": "80",
        "right": 1,
        "target": "89",
        "left": 1
    },
    {
        "source": "72",
        "right": 1,
        "target": "99",
        "left": 1
    },
    {
        "source": "72",
        "right": 1,
        "target": "47",
        "left": 1
    },
    {
        "source": "92",
        "right": 1,
        "target": "0",
        "left": 1
    },
    {
        "source": "40",
        "right": 1,
        "target": "2",
        "left": 1
    },
    {
        "source": "52",
        "right": 1,
        "target": "18",
        "left": 1
    },
    {
        "source": "75",
        "right": 1,
        "target": "57",
        "left": 1
    },
    {
        "source": "65",
        "right": 1,
        "target": "32",
        "left": 1
    },
    {
        "source": "46",
        "right": 1,
        "target": "58",
        "left": 1
    },
    {
        "source": "10",
        "right": 1,
        "target": "54",
        "left": 1
    },
    {
        "source": "48",
        "right": 1,
        "target": "65",
        "left": 1
    },
    {
        "source": "52",
        "right": 1,
        "target": "15",
        "left": 1
    },
    {
        "source": "57",
        "right": 1,
        "target": "84",
        "left": 1
    },
    {
        "source": "31",
        "right": 1,
        "target": "68",
        "left": 1
    },
    {
        "source": "37",
        "right": 1,
        "target": "56",
        "left": 1
    },
    {
        "source": "99",
        "right": 1,
        "target": "50",
        "left": 1
    },
    {
        "source": "33",
        "right": 1,
        "target": "6",
        "left": 1
    },
    {
        "source": "26",
        "right": 1,
        "target": "49",
        "left": 1
    },
    {
        "source": "24",
        "right": 1,
        "target": "20",
        "left": 1
    },
    {
        "source": "50",
        "right": 1,
        "target": "47",
        "left": 1
    },
    {
        "source": "60",
        "right": 1,
        "target": "15",
        "left": 1
    },
    {
        "source": "89",
        "right": 1,
        "target": "36",
        "left": 1
    },
    {
        "source": "56",
        "right": 1,
        "target": "54",
        "left": 1
    },
    {
        "source": "91",
        "right": 1,
        "target": "88",
        "left": 1
    },
    {
        "source": "96",
        "right": 1,
        "target": "5",
        "left": 1
    },
    {
        "source": "82",
        "right": 1,
        "target": "45",
        "left": 1
    },
    {
        "source": "49",
        "right": 1,
        "target": "55",
        "left": 1
    },
    {
        "source": "12",
        "right": 1,
        "target": "52",
        "left": 1
    },
    {
        "source": "52",
        "right": 1,
        "target": "61",
        "left": 1
    },
    {
        "source": "23",
        "right": 1,
        "target": "34",
        "left": 1
    },
    {
        "source": "47",
        "right": 1,
        "target": "0",
        "left": 1
    },
    {
        "source": "6",
        "right": 1,
        "target": "42",
        "left": 1
    },
    {
        "source": "2",
        "right": 1,
        "target": "56",
        "left": 1
    },
    {
        "source": "2",
        "right": 1,
        "target": "57",
        "left": 1
    },
    {
        "source": "74",
        "right": 1,
        "target": "29",
        "left": 1
    },
    {
        "source": "77",
        "right": 1,
        "target": "94",
        "left": 1
    },
    {
        "source": "59",
        "right": 0,
        "target": "41",
        "left": 1
    },
    {
        "source": "72",
        "right": 1,
        "target": "41",
        "left": 1
    },
    {
        "source": "53",
        "right": 1,
        "target": "61",
        "left": 1
    },
    {
        "source": "53",
        "right": 1,
        "target": "64",
        "left": 1
    },
    {
        "source": "1",
        "right": 1,
        "target": "50",
        "left": 1
    },
    {
        "source": "22",
        "right": 1,
        "target": "97",
        "left": 1
    },
    {
        "source": "56",
        "right": 1,
        "target": "20",
        "left": 1
    },
    {
        "source": "61",
        "right": 1,
        "target": "57",
        "left": 1
    },
    {
        "source": "61",
        "right": 1,
        "target": "55",
        "left": 1
    },
    {
        "source": "36",
        "right": 1,
        "target": "61",
        "left": 1
    },
    {
        "source": "5",
        "right": 1,
        "target": "17",
        "left": 1
    },
    {
        "source": "39",
        "right": 1,
        "target": "33",
        "left": 1
    },
    {
        "source": "98",
        "right": 1,
        "target": "38",
        "left": 1
    },
    {
        "source": "28",
        "right": 1,
        "target": "89",
        "left": 1
    },
    {
        "source": "48",
        "right": 1,
        "target": "27",
        "left": 1
    },
    {
        "source": "0",
        "right": 1,
        "target": "11",
        "left": 1
    },
    {
        "source": "33",
        "right": 1,
        "target": "12",
        "left": 1
    },
    {
        "source": "66",
        "right": 1,
        "target": "12",
        "left": 1
    },
    {
        "source": "17",
        "right": 1,
        "target": "3",
        "left": 1
    },
    {
        "source": "10",
        "right": 1,
        "target": "7",
        "left": 1
    },
    {
        "source": "91",
        "right": 1,
        "target": "90",
        "left": 1
    },
    {
        "source": "24",
        "right": 1,
        "target": "38",
        "left": 1
    },
    {
        "source": "76",
        "right": 1,
        "target": "61",
        "left": 1
    },
    {
        "source": "71",
        "right": 1,
        "target": "90",
        "left": 1
    },
    {
        "source": "71",
        "right": 1,
        "target": "96",
        "left": 1
    },
    {
        "source": "63",
        "right": 1,
        "target": "1",
        "left": 1
    },
    {
        "source": "83",
        "right": 1,
        "target": "60",
        "left": 1
    },
    {
        "source": "24",
        "right": 1,
        "target": "88",
        "left": 1
    },
    {
        "source": "42",
        "right": 1,
        "target": "17",
        "left": 1
    },
    {
        "source": "60",
        "right": 1,
        "target": "59",
        "left": 1
    },
    {
        "source": "89",
        "right": 1,
        "target": "82",
        "left": 1
    },
    {
        "source": "51",
        "right": 1,
        "target": "93",
        "left": 1
    },
    {
        "source": "89",
        "right": 1,
        "target": "85",
        "left": 1
    },
    {
        "source": "51",
        "right": 1,
        "target": "98",
        "left": 1
    },
    {
        "source": "5",
        "right": 1,
        "target": "7",
        "left": 1
    },
    {
        "source": "31",
        "right": 1,
        "target": "94",
        "left": 1
    },
    {
        "source": "26",
        "right": 1,
        "target": "95",
        "left": 1
    },
    {
        "source": "83",
        "right": 1,
        "target": "43",
        "left": 1
    },
    {
        "source": "64",
        "right": 1,
        "target": "55",
        "left": 1
    },
    {
        "source": "64",
        "right": 1,
        "target": "52",
        "left": 1
    },
    {
        "source": "37",
        "right": 1,
        "target": "22",
        "left": 1
    },
    {
        "source": "37",
        "right": 1,
        "target": "28",
        "left": 1
    },
    {
        "source": "37",
        "right": 1,
        "target": "29",
        "left": 1
    },
    {
        "source": "83",
        "right": 1,
        "target": "82",
        "left": 1
    },
    {
        "source": "1",
        "right": 1,
        "target": "64",
        "left": 1
    },
    {
        "source": "33",
        "right": 1,
        "target": "57",
        "left": 1
    },
    {
        "source": "77",
        "right": 1,
        "target": "44",
        "left": 1
    },
    {
        "source": "91",
        "right": 1,
        "target": "78",
        "left": 1
    },
    {
        "source": "48",
        "right": 1,
        "target": "66",
        "left": 1
    },
    {
        "source": "62",
        "right": 1,
        "target": "63",
        "left": 1
    },
    {
        "source": "75",
        "right": 1,
        "target": "73",
        "left": 1
    },
    {
        "source": "43",
        "right": 1,
        "target": "42",
        "left": 1
    },
    {
        "source": "15",
        "right": 1,
        "target": "3",
        "left": 1
    },
    {
        "source": "80",
        "right": 1,
        "target": "71",
        "left": 1
    },
    {
        "source": "81",
        "right": 1,
        "target": "74",
        "left": 1
    },
    {
        "source": "87",
        "right": 1,
        "target": "63",
        "left": 1
    },
    {
        "source": "31",
        "right": 1,
        "target": "1",
        "left": 1
    },
    {
        "source": "63",
        "right": 1,
        "target": "23",
        "left": 1
    },
    {
        "source": "46",
        "right": 1,
        "target": "42",
        "left": 1
    },
    {
        "source": "75",
        "right": 1,
        "target": "42",
        "left": 1
    },
    {
        "source": "45",
        "right": 1,
        "target": "25",
        "left": 1
    },
    {
        "source": "47",
        "right": 1,
        "target": "48",
        "left": 1
    },
    {
        "source": "19",
        "right": 1,
        "target": "92",
        "left": 1
    },
    {
        "source": "34",
        "right": 1,
        "target": "52",
        "left": 1
    },
    {
        "source": "9",
        "right": 1,
        "target": "62",
        "left": 1
    },
    {
        "source": "92",
        "right": 1,
        "target": "42",
        "left": 1
    },
    {
        "source": "38",
        "right": 1,
        "target": "49",
        "left": 1
    },
    {
        "source": "86",
        "right": 1,
        "target": "21",
        "left": 1
    },
    {
        "source": "84",
        "right": 1,
        "target": "43",
        "left": 1
    },
    {
        "source": "96",
        "right": 1,
        "target": "85",
        "left": 1
    },
    {
        "source": "35",
        "right": 1,
        "target": "51",
        "left": 1
    },
    {
        "source": "67",
        "right": 1,
        "target": "30",
        "left": 1
    },
    {
        "source": "62",
        "right": 1,
        "target": "15",
        "left": 1
    },
    {
        "source": "10",
        "right": 1,
        "target": "19",
        "left": 1
    },
    {
        "source": "25",
        "right": 1,
        "target": "71",
        "left": 1
    },
    {
        "source": "74",
        "right": 1,
        "target": "36",
        "left": 1
    },
    {
        "source": "30",
        "right": 1,
        "target": "33",
        "left": 1
    },
    {
        "source": "90",
        "right": 1,
        "target": "49",
        "left": 1
    },
    {
        "source": "99",
        "right": 1,
        "target": "12",
        "left": 1
    },
    {
        "source": "1",
        "right": 1,
        "target": "32",
        "left": 1
    },
    {
        "source": "72",
        "right": 1,
        "target": "62",
        "left": 1
    },
    {
        "source": "81",
        "right": 1,
        "target": "2",
        "left": 1
    },
    {
        "source": "29",
        "right": 1,
        "target": "30",
        "left": 1
    },
    {
        "source": "27",
        "right": 1,
        "target": "92",
        "left": 1
    },
    {
        "source": "36",
        "right": 1,
        "target": "5",
        "left": 1
    },
    {
        "source": "36",
        "right": 1,
        "target": "7",
        "left": 1
    },
    {
        "source": "31",
        "right": 1,
        "target": "17",
        "left": 1
    },
    {
        "source": "38",
        "right": 1,
        "target": "0",
        "left": 1
    },
    {
        "source": "98",
        "right": 1,
        "target": "59",
        "left": 1
    },
    {
        "source": "0",
        "right": 1,
        "target": "75",
        "left": 1
    },
    {
        "source": "1",
        "right": 1,
        "target": "86",
        "left": 1
    },
    {
        "source": "86",
        "right": 1,
        "target": "88",
        "left": 1
    },
    {
        "source": "69",
        "right": 1,
        "target": "15",
        "left": 1
    },
    {
        "source": "86",
        "right": 1,
        "target": "54",
        "left": 1
    },
    {
        "source": "86",
        "right": 1,
        "target": "51",
        "left": 1
    },
    {
        "source": "75",
        "right": 1,
        "target": "74",
        "left": 1
    },
    {
        "source": "51",
        "right": 1,
        "target": "85",
        "left": 1
    },
    {
        "source": "65",
        "right": 1,
        "target": "19",
        "left": 1
    },
    {
        "source": "46",
        "right": 1,
        "target": "37",
        "left": 1
    },
    {
        "source": "63",
        "right": 1,
        "target": "69",
        "left": 1
    },
    {
        "source": "71",
        "right": 1,
        "target": "73",
        "left": 1
    },
    {
        "source": "28",
        "right": 1,
        "target": "58",
        "left": 1
    },
    {
        "source": "71",
        "right": 1,
        "target": "77",
        "left": 1
    },
    {
        "source": "36",
        "right": 1,
        "target": "44",
        "left": 1
    },
    {
        "source": "79",
        "right": 1,
        "target": "12",
        "left": 1
    },
    {
        "source": "61",
        "right": 1,
        "target": "24",
        "left": 1
    },
    {
        "source": "38",
        "right": 1,
        "target": "17",
        "left": 1
    },
    {
        "source": "88",
        "right": 1,
        "target": "66",
        "left": 1
    },
    {
        "source": "37",
        "right": 1,
        "target": "49",
        "left": 1
    },
    {
        "source": "37",
        "right": 1,
        "target": "8",
        "left": 1
    },
    {
        "source": "83",
        "right": 1,
        "target": "13",
        "left": 1
    },
    {
        "source": "49",
        "right": 1,
        "target": "94",
        "left": 1
    },
    {
        "source": "87",
        "right": 1,
        "target": "23",
        "left": 1
    },
    {
        "source": "87",
        "right": 1,
        "target": "70",
        "left": 1
    },
    {
        "source": "60",
        "right": 1,
        "target": "82",
        "left": 1
    },
    {
        "source": "76",
        "right": 0,
        "target": "44",
        "left": 1
    },
    {
        "source": "23",
        "right": 1,
        "target": "11",
        "left": 1
    },
    {
        "source": "30",
        "right": 1,
        "target": "68",
        "left": 1
    },
    {
        "source": "51",
        "right": 1,
        "target": "69",
        "left": 1
    }
]

// var nodes = [
//         {id: 0, reflexive: false},
//         {id: 1, reflexive: true },
//         {id: 2, reflexive: false}
//     ],
//     lastNodeId = 2,
//     links = [
//         {source: nodes[0], target: nodes[1], left: false, right: true },
//         {source: nodes[1], target: nodes[2], left: false, right: true }
//     ];

var nodes = [];
var lastNodeId = 99;
var links = [];

for (var i = 0; i < 100; i++) {
    nodes.push({
        id: i, reflexive: false
    });
}

for (var j = 0; j < edges.length; j++) {
    var edge = edges[j];
    links.push({
        source: nodes[parseInt(edge.source)],
        target: nodes[parseInt(edge.target)],
        left: (edge.left === 1),
        right: (edge.right === 1)
    })
}

// init D3 force layout
var force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([width, height])
    .linkDistance(150)
    .charge(-500)
    .on('tick', tick)

// define arrow markers for graph links
svg.append('svg:defs').append('svg:marker')
    .attr('id', 'end-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 6)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
    .append('svg:path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', '#000');

svg.append('svg:defs').append('svg:marker')
    .attr('id', 'start-arrow')
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 4)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
    .append('svg:path')
    .attr('d', 'M10,-5L0,0L10,5')
    .attr('fill', '#000');

// line displayed when dragging new nodes
var drag_line = svg.append('svg:path')
    .attr('class', 'link dragline hidden')
    .attr('d', 'M0,0L0,0');

// handles to link and node element groups
var path = svg.append('svg:g').selectAll('path'),
    circle = svg.append('svg:g').selectAll('g');

// mouse event vars
var selected_node = null,
    selected_link = null,
    mousedown_link = null,
    mousedown_node = null,
    mouseup_node = null;

function resetMouseVars() {
    mousedown_node = null;
    mouseup_node = null;
    mousedown_link = null;
}

// update force layout (called automatically each iteration)
function tick() {
    // draw directed edges with proper padding from node centers
    path.attr('d', function(d) {
        var deltaX = d.target.x - d.source.x,
            deltaY = d.target.y - d.source.y,
            dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
            normX = deltaX / dist,
            normY = deltaY / dist,
            sourcePadding = d.left ? 17 : 12,
            targetPadding = d.right ? 17 : 12,
            sourceX = d.source.x + (sourcePadding * normX),
            sourceY = d.source.y + (sourcePadding * normY),
            targetX = d.target.x - (targetPadding * normX),
            targetY = d.target.y - (targetPadding * normY);
        return 'M' + sourceX + ',' + sourceY + 'L' + targetX + ',' + targetY;
    });

    circle.attr('transform', function(d) {
        return 'translate(' + d.x + ',' + d.y + ')';
    });
}

// update graph (called when needed)
function restart() {
    // path (link) group
    path = path.data(links);

    // update existing links
    path.classed('selected', function(d) { return d === selected_link; })
        .style('marker-start', function(d) { return d.left ? 'url(#start-arrow)' : ''; })
        .style('marker-end', function(d) { return d.right ? 'url(#end-arrow)' : ''; });


    // add new links
    path.enter().append('svg:path')
        .attr('class', 'link')
        .classed('selected', function(d) { return d === selected_link; })
        .style('marker-start', function(d) { return d.left ? 'url(#start-arrow)' : ''; })
        .style('marker-end', function(d) { return d.right ? 'url(#end-arrow)' : ''; })
        .on('mousedown', function(d) {
            if(d3.event.ctrlKey) return;

            // select link
            mousedown_link = d;
            if(mousedown_link === selected_link) selected_link = null;
            else selected_link = mousedown_link;
            selected_node = null;
            restart();
        });

    // remove old links
    path.exit().remove();


    // circle (node) group
    // NB: the function arg is crucial here! nodes are known by id, not by index!
    circle = circle.data(nodes, function(d) { return d.id; });

    // update existing nodes (reflexive & selected visual states)
    circle.selectAll('circle')
        .style('fill', function(d) { return (d === selected_node) ? d3.rgb(colors(d.id)).brighter().toString() : colors(d.id); })
        .classed('reflexive', function(d) { return d.reflexive; });

    // add new nodes
    var g = circle.enter().append('svg:g');

    g.append('svg:circle')
        .attr('class', 'node')
        .attr('r', 12)
        .style('fill', function(d) { return (d === selected_node) ? d3.rgb(colors(d.id)).brighter().toString() : colors(d.id); })
        .style('stroke', function(d) { return d3.rgb(colors(d.id)).darker().toString(); })
        .classed('reflexive', function(d) { return d.reflexive; })
        .on('mouseover', function(d) {
            if(!mousedown_node || d === mousedown_node) return;
            // enlarge target node
            d3.select(this).attr('transform', 'scale(1.1)');
        })
        .on('mouseout', function(d) {
            if(!mousedown_node || d === mousedown_node) return;
            // unenlarge target node
            d3.select(this).attr('transform', '');
        })
        // .on('mousedown', function(d) {
        //     if(d3.event.ctrlKey) return;
        //
        //     // select node
        //     mousedown_node = d;
        //     if(mousedown_node === selected_node) selected_node = null;
        //     else selected_node = mousedown_node;
        //     selected_link = null;
        //
        //     // reposition drag line
        //     drag_line
        //         .style('marker-end', 'url(#end-arrow)')
        //         .classed('hidden', false)
        //         .attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + mousedown_node.x + ',' + mousedown_node.y);
        //
        //     restart();
        // })
        // .on('mouseup', function(d) {
        //     if(!mousedown_node) return;
        //
        //     // needed by FF
        //     drag_line
        //         .classed('hidden', true)
        //         .style('marker-end', '');
        //
        //     // check for drag-to-self
        //     mouseup_node = d;
        //     if(mouseup_node === mousedown_node) { resetMouseVars(); return; }
        //
        //     // unenlarge target node
        //     d3.select(this).attr('transform', '');
        //
        //     // add link to graph (update if exists)
        //     // NB: links are strictly source < target; arrows separately specified by booleans
        //     var source, target, direction;
        //     if(mousedown_node.id < mouseup_node.id) {
        //         source = mousedown_node;
        //         target = mouseup_node;
        //         direction = 'right';
        //     } else {
        //         source = mouseup_node;
        //         target = mousedown_node;
        //         direction = 'left';
        //     }
        //
        //     var link;
        //     link = links.filter(function(l) {
        //         return (l.source === source && l.target === target);
        //     })[0];
        //
        //     if(link) {
        //         link[direction] = true;
        //     } else {
        //         link = {source: source, target: target, left: false, right: false};
        //         link[direction] = true;
        //         links.push(link);
        //     }
        //
        //     // select new link
        //     selected_link = link;
        //     selected_node = null;
        //     restart();
        // });

    // show node IDs
    g.append('svg:text')
        .attr('x', 0)
        .attr('y', 4)
        .attr('class', 'id')
        .text(function(d) { return d.id; });

    // remove old nodes
    circle.exit().remove();

    // set the graph in motion
    force.start();
}

function mousedown() {
    // prevent I-bar on drag
    //d3.event.preventDefault();

    // because :active only works in WebKit?
    svg.classed('active', true);

    if(d3.event.ctrlKey || mousedown_node || mousedown_link) return;

    // insert new node at point
    var point = d3.mouse(this),
        node = {id: ++lastNodeId, reflexive: false};
    node.x = point[0];
    node.y = point[1];
    nodes.push(node);

    restart();
}

function mousemove() {
    if(!mousedown_node) return;

    // update drag line
    drag_line.attr('d', 'M' + mousedown_node.x + ',' + mousedown_node.y + 'L' + d3.mouse(this)[0] + ',' + d3.mouse(this)[1]);

    restart();
}

function mouseup() {
    if(mousedown_node) {
        // hide drag line
        drag_line
            .classed('hidden', true)
            .style('marker-end', '');
    }

    // because :active only works in WebKit?
    svg.classed('active', false);

    // clear mouse event vars
    resetMouseVars();
}

function spliceLinksForNode(node) {
    var toSplice = links.filter(function(l) {
        return (l.source === node || l.target === node);
    });
    toSplice.map(function(l) {
        links.splice(links.indexOf(l), 1);
    });
}

// only respond once per keydown
var lastKeyDown = -1;

function keydown() {
    d3.event.preventDefault();

    if(lastKeyDown !== -1) return;
    lastKeyDown = d3.event.keyCode;

    // ctrl
    if(d3.event.keyCode === 17) {
        circle.call(force.drag);
        svg.classed('ctrl', true);
    }

    if(!selected_node && !selected_link) return;
    switch(d3.event.keyCode) {
        case 8: // backspace
        case 46: // delete
            if(selected_node) {
                nodes.splice(nodes.indexOf(selected_node), 1);
                spliceLinksForNode(selected_node);
            } else if(selected_link) {
                links.splice(links.indexOf(selected_link), 1);
            }
            selected_link = null;
            selected_node = null;
            restart();
            break;
        case 66: // B
            if(selected_link) {
                // set link direction to both left and right
                selected_link.left = true;
                selected_link.right = true;
            }
            restart();
            break;
        case 76: // L
            if(selected_link) {
                // set link direction to left only
                selected_link.left = true;
                selected_link.right = false;
            }
            restart();
            break;
        case 82: // R
            if(selected_node) {
                // toggle node reflexivity
                selected_node.reflexive = !selected_node.reflexive;
            } else if(selected_link) {
                // set link direction to right only
                selected_link.left = false;
                selected_link.right = true;
            }
            restart();
            break;
    }
}

function keyup() {
    lastKeyDown = -1;

    // ctrl
    if(d3.event.keyCode === 17) {
        circle
            .on('mousedown.drag', null)
            .on('touchstart.drag', null);
        svg.classed('ctrl', false);
    }
}

// app starts here
svg.on('mousedown', mousedown)
    .on('mousemove', mousemove)
    .on('mouseup', mouseup);
d3.select(window)
    .on('keydown', keydown)
    .on('keyup', keyup);
restart();