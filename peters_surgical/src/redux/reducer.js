const initState = {
  data22: [
    // January
    {
      date: new Date("2022-01-04"),
      year: 2022,
      supplier: "Reliance",
      emissions: 1698,
      revenue: 203456,
      r_e: 120,
      yoy: null,
    },

    //February
    {
      date: new Date("2022-02-02"),
      year: 2022,
      supplier: "Reliance",
      emissions: 2108,
      revenue: 203456,
      r_e: 96.5,
      yoy: null,
    },

    //march
    {
      date: new Date("2022-03-06"),
      year: 2022,
      supplier: "Reliance",
      emissions: 2251,
      revenue: 245647,
      r_e: 109.1,
      yoy: null,
    },
    //april
    {
      date: new Date("2022-04-02"),
      year: 2022,
      supplier: "Shaurya Durga",
      emissions: 1602,
      revenue: 179853,
      r_e: 112.3,
      yoy: null,
    },

    //may
    {
      date: new Date("2022-05-03"),
      year: 2022,
      supplier: "Orlife Healthcare",
      emissions: 3458,
      revenue: 464464,
      r_e: 134.4,
      yoy: null,
    },

    //june
    {
      date: new Date("2022-06-03"),
      year: 2022,
      supplier: "Orlife Healthcare",
      emissions: 3245,
      revenue: 464464,
      r_e: 143.1,
      yoy: null,
    },

    //july
    {
      date: new Date("2022-07-03"),
      year: 2022,
      supplier: "Rezicure Pharmaceuticals",
      emissions: 3543,
      revenue: 464464,
      r_e: 131.1,
      yoy: null,
    },

    //august
    {
      date: new Date("2022-08-03"),
      year: 2022,
      supplier: "Rezicure Pharmaceuticals",
      emissions: 5445,
      revenue: 643864,
      r_e: 118.2,
      yoy: null,
    },

    //september
    {
      date: new Date("2022-09-02"),
      year: 2022,
      supplier: "Rezulte Organics",
      emissions: 4343,
      revenue: 564651,
      r_e: 130,
      yoy: null,
    },

    //october
    {
      date: new Date("2022-10-06"),
      year: 2022,
      supplier: "Steller Bio Labs",
      emissions: 3434,
      revenue: 516513,
      r_e: 150.4,
      yoy: null,
    },

    //november
    {
      date: new Date("2022-11-10"),
      year: 2022,
      supplier: "Eskos Pharma",
      emissions: 3464,
      revenue: 546561,
      r_e: 157.8,
      yoy: null,
    },
    //december
    {
      date: new Date("2022-12-22"),
      year: 2022,
      supplier: "Adani",
      emissions: 2324,
      revenue: 343535,
      r_e: 147.8,
      yoy: null,
    },
  ],
  data23: [
    {
      date: new Date("2023-01-03"),
      year: 2023,
      supplier: "Reliance",
      emissions: 1790,
      revenue: 245678,
      r_e: 137,
      yoy: 15,
    },
    {
      date: new Date("2023-02-05"),
      year: 2023,
      supplier: "Adani",
      emissions: 2205,
      revenue: 220000,
      r_e: 99.8,
      yoy: 3,
    },
    {
      date: new Date("2023-03-07"),
      year: 2023,
      supplier: "Adani",
      emissions: 2345,
      revenue: 287545,
      r_e: 122.6,
      yoy: 12,
    },
    {
      date: new Date("2022-04-02"),
      year: 2023,
      supplier: "Adani",
      emissions: 1503,
      revenue: 195395,
      r_e: 130,
      yoy: 16,
    },
    {
      date: new Date("2023-05-04"),
      year: 2023,
      supplier: "Adani",
      emissions: 4634,
      revenue: 575747,
      r_e: 124.2,
      yoy: -8,
    },
    {
      date: new Date("2023-06-04"),
      year: 2023,
      supplier: "Adani",
      emissions: 4634,
      revenue: 575747,
      r_e: 124.2,
      yoy: -13,
    },
    {
      date: new Date("2023-07-05"),
      year: 2023,
      supplier: "Reliance",
      emissions: 3487,
      revenue: 575747,
      r_e: 165.1,
      yoy: -26,
    },
    {
      date: new Date("2023-08-05"),
      year: 2023,
      supplier: "Merion Care",
      emissions: 5258,
      revenue: 689747,
      r_e: 131.2,
      yoy: 11,
    },
    {
      date: new Date("2023-09-03"),
      year: 2023,
      supplier: "Rezulte Organics",
      emissions: 4524,
      revenue: 578965,
      r_e: 128,
      yoy: -2,
    },
    {
      date: new Date("2023-10-06"),
      year: 2023,
      supplier: "Steller Bio Labs",
      emissions: 3332,
      revenue: 534535,
      r_e: 157.4,
      yoy: -5,
    },
    {
      date: new Date("2023-11-10"),
      year: 2023,
      supplier: "Eskos Pharma",
      emissions: 3535,
      revenue: 576855,
      r_e: 163.2,
      yoy: 3,
    },
    {
      date: new Date("2023-12-23"),
      year: 2023,
      supplier: "Reliance",
      emissions: 2452,
      revenue: 354646,
      r_e: 144.6,
      yoy: -2,
    },
  ],
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

const reducer = (state = initState, { type, payload = null }) => {
  switch (type) {
    default:
      return state;
  }
};

export default reducer;
