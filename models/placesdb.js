const place = [
  {
    location: "Lakuri_Bhanjyang",
    details: {
      name: "Lakuri Bhanjyang",
      origins: ["Tamang", "Rai"],
      details:
        "This is the place if you want to see the kathmandu valley below and mountains above you."
    },
    itenary: {
      "1": {
        day: 1,
        to: "Lakuri Bhanjyang",
        from: "kathmandu",
        details: "A bus goes from kathmandu to Lakuri Bhanjyang.",
        duration:
          "5 hours in bus upto lakuri Bhanjyang and 1 hour of hike up the hill."
      },
      "2": {
        day: 2,
        to: "kathmandu",
        from: "Lakuri Bhanjyang",
        details: "A bus goes from Lakuri Bhanjyang to  kathmandu.",
        duration: "5 hours in bus from lakuri Bhanjyang."
      }
    }
  },
  {
    location: "Nagarkot",
    details: {
      name: "Nagarkot",
      origins: ["Tamang", "Rai", "Chhetri"],
      details:
        "This is the place is famous for sunrise. One can also enjoy the beautiful mountain range and overlapping hills below !"
    },
    itenary: {
      "1": {
        day: 1,
        to: "Nagarkot",
        from: "Bhaktapur",
        details: "A bus goes from Bhaktapur to Nagarkot",
        duration: "3-4  hours in bus upto Nagarkot."
      },
      "2": {
        day: 2,
        to: "kathmandu",
        from: "Nagarkot",
        details: "A bus goes from Nagarkot to  Bhaktapur.",
        duration: "5 hours in bus from Nagarkot."
      }
    }
  },
  {
    location: "Sundarijal",
    details: {
      name: "Sundarijal",
      origins: ["Brahmins", "Rai", "Chhetri", "Newari"],
      details:
        "This is the place very near to Kathmandu city where there is natural abundance , clean water , fresh air, full of wildlives and popular among hikers and cyclist.~"
    },
    itenary: {
      "1": {
        day: 1,
        to: "Sundarijal",
        from: "kathmandu",
        details: "A bus goes from kathmandu to Shivapuri.",
        duration:
          "1 hours in bus upto Shivapuri and nearly 1 hour of hike up the hill. and return back on the same day."
      }
    }
  }
];

module.exports = place;
