const schedule = {
  "Fenella": [
    { // Mondays
      day: 1,
      studio: "Dance102",
      classType: "B/E",
      cost: 25,
      time: {
	start: 1000,
	end: 1130
      },
      dates: [
	"31.10.22",
	"07.11.22",
	"14.11.22"
      ]
    },
    { // Thursdays
      day: 4,
      studio: "Dance102",
      classType: "First Steps Centre & Pointe",
      cost: 25,
      time: {
	start: 1900,
	end: 2100
      },
      dates: [
	"03.11.22",
	"10.11.22",
	"17.11.22"
      ]
    }
  ],
  "Ellena": [
    { // Tuesdays
      day: 2,
      studio: "Dance102",
      classType: "B/E",
      cost: 25,
      time: {
	start: 1900,
	end: 2030
      },
      dates: [
	"01.11.22",
	"20.12.22"
      ]
    },
    { // Tuesdays
      day: 2,
      studio: "Dance102",
      classType: "Beginner Pointe",
      cost: 15,
      time: {
	start: 2030,
	end: 2100
      },
      dates: [
	"01.11.22",
	"20.12.22"
      ]
    },
  ],
  "Mitch": [
    { // Mondays
      day: 1,
      studio: "Dance102",
      classType: "B/E",
      cost: 20,
      time: {
	start: 1915,
	end: 2045
      },
      dates: [
	"07.11.22",
	"14.11.22",
	"21.11.22",
	"28.11.22",
	"05.12.22",
	"12.12.22",
	"19.12.22",
	"26.12.22"
      ]
    },
    { // Wednesdays
      day:3,
      studio: "Dance102",
      classType: "B/E",
      cost: 20,
      time: {
	start: 1830,
	end: 2000
      },
      dates: [
	"02.11.22",
	"09.11.22",
	"16.11.22",
	"23.11.22",
	"30.11.22",
	"07.12.22",
	"14.12.22",
	"21.12.22",
	"28.12.22"
      ]
    },
  ],
  "Fabio": [
    { // Saturdays
      day: 6,
      studio: "Evolution",
      classType: "B/E",
      cost: 22,
      time: {
	start: 1130,
	end: 1300
      },
      dates: [
	"05.11.22"
      ]
    },
    { // Saturdays
      day: 6,
      studio: "Evolution",
      classType: "Intermediate",
      cost: 22,
      time: {
	start: 1300,
	end: 1430
      },
      dates: [
	"19.11.22"
      ]
    },
  ],
  "Vadym": [
    { // Tuesdays
      day: 2,
      studio: "Dance102",
      classType: "B",
      cost: 20,
      time: {
	start: 1000,
	end: 1130
      },
      dates: [
	"01.11.22"
      ]
    },
    { // Thursdays
      day: 4,
      studio: "Dance102",
      classType: "B",
      cost: 20,
      time: {
	start: 1000,
	end: 1130
      },
      dates: [
	"03.11.22"
      ]
    },
    { // Thursdays
      day: 4,
      studio: "Dance102",
      classType: "Workshop",
      cost: 20,
      time: {
	start: 1145,
	end: 1245
      },
      dates: [
	"03.11.22"
      ]
    },
  ]
};

const studios = {
  "Dance102": {
    address: "575 Pacific Highway, St Leonards",
    mapLink: "https://goo.gl/maps/M5HZtic5qryAez4DA",
    phone: "(02) 9437 3900"
  },
  "Evolution": {
    address: "1/15 Falcon St, Crows Nest",
    mapLink: "https://goo.gl/maps/88ShHQQw6Bd3R2LM7",
    phone: "0433 124 068"
  }
};

const classTypes = {
  "B": {
    fullName: "Beginner",
    description: "For dancers with solid base knowledge"
  },
  "B/E": {
    fullName: "Beginner/Elementry",
    description: "For medium-ability dancers"
  }
};

const teachers = {
  "Fenella": {
    fullName: "",
    image: "",
    pricePerClass: 25,
    paymentMethod: "cash"
  },
  "Ellena": {},
  "Fabio": {},
  "Mitch": {}
};