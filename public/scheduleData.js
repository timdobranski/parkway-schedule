const scheduleData = [
  {
    day: "Monday",
    schedule: [
      {
        period: "Period 1",
        startTime: "09:00",
        endTime: "9:48",
      },
      {
        period: "Period 2",
        startTime: "9:53",
        endTime: "10:41",
      },
      {
        period: "Period 3",
        startTime: "10:46",
        endTime: "11:34",
      },
      // Midway split into 3 different schedules
      {
        period: "Split Block",
        splitSchedules: [
          {
            group: "6th Grade",
            activities: [
              { period: "Lunch", startTime: "11:34", endTime: "12:04" },
              { period: "Period 4", startTime: "12:09", endTime: "12:57" },
              { period: "Period 5", startTime: "1:02", endTime: "1:50" },
            ],
          },
          {
            group: "7/8th Grade Lunch 1",
            activities: [
              { period: "Period 4", startTime: "11:39", endTime: "12:27" },
              { period: "Lunch", startTime: "12:27", endTime: "12:57" },
              { period: "Period 5", startTime: "1:02", endTime: "1:50" },
            ],
          },
          {
            group: "7/8th Grade Lunch 2",
            activities: [
              { period: "Period 4", startTime: "11:39", endTime: "12:27" },
              { period: "Period 5", startTime: "12:32", endTime: "1:20" },
              { period: "Lunch", startTime: "1:20", endTime: "1:50" },
            ],
          },
        ],
      },
      {
        period: "Period 6",
        startTime: "1:55",
        endTime: "2:43",
      },
      {
        period: "Period 7",
        startTime: "2:48",
        endTime: "3:35",
      },
    ],
  },
  // Repeat structure for other days (Tuesday, Wednesday, etc.)
  {
    day: "Tuesday",
    schedule: [
      {
        period: "First Class",
        startTime: "09:00",
        endTime: "10:00",
      },
      // Same structure as Monday
    ],
  },
  // And so on for the rest of the week...
];

export default scheduleData;