const scheduleData = [
  {
    day: "Monday",
    schedule: [
      {
        title: "Period 1",
        startTime: "9:00",
        endTime: "9:48",
        duration: "48",
        type: "class",
        period: '1'
      },
      {
        title: "Passing",
        duration: "5",
        type: "passing",
      },
      {
        title: "Period 2",
        startTime: "9:53",
        endTime: "10:41",
        duration: "48",
        type: "class",
        period: '2'
      },
      {
        title: "Passing",
        duration: "5",
        type: "passing",
      },
      {
        title: "Period 3",
        startTime: "10:46",
        endTime: "11:34",
        duration: "48",
        type: "class",
        period: '3'
      },
      // Midway split into 3 different schedules
      {
        type: "split",
        splitSchedules: {

            '6th Grade': [
              { title: "6th Lunch", startTime: "11:34", endTime: "12:04", duration: "30", type: "lunch"},
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 4", startTime: "12:09", endTime: "12:57", duration: "48", type: "class", period: '4' },
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 5", startTime: "1:02", endTime: "1:50", duration: "48", type: "class", period: '5' },
            ],
              "7/8th Grade Lunch 1": [
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 4", startTime: "11:39", endTime: "12:27", duration: "48", type: "class", period: '4' },
              { title: "Lunch 1", startTime: "12:27", endTime: "12:57", duration: "30", type: "lunch"},
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 5", startTime: "1:02", endTime: "1:50", duration: "48", type: "class", period: '5' },
            ],
            "7/8th Grade Lunch 2": [
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 4", startTime: "11:39", endTime: "12:27", duration: "48", type: "class", period: '4' },
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 5", startTime: "12:32", endTime: "1:20", duration: "48", type: "class", period: '5' },
              { title: "Lunch 2", startTime: "1:20", endTime: "1:50", duration: "30", type: "lunch" },
            ],
        },
      },
      { title: "Passing", duration: "5", type: "passing",},
      {
        title: "Period 6",
        startTime: "1:55",
        endTime: "2:43",
        duration: "48",
        type: "class",
        period: '6'
      },
      { title: "Passing", duration: "5", type: "passing",},
      {
        title: "Period 7",
        startTime: "2:48",
        endTime: "3:35",
        duration: "48",
        type: "class",
        period: '7'
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
  {
    day: "Thursday",
    schedule: [
      {
        title: "Period 1",
        startTime: "9:00",
        endTime: "9:48",
        duration: "48",
        type: "class",
        period: '1'
      },
      {
        title: "Passing",
        duration: "5",
        type: "passing",
      },
      {
        title: "Period 2",
        startTime: "9:53",
        endTime: "10:41",
        duration: "48",
        type: "class",
        period: '2'
      },
      {
        title: "Passing",
        duration: "5",
        type: "passing",
      },
      {
        title: "Period 3",
        startTime: "10:46",
        endTime: "11:34",
        duration: "48",
        type: "class",
        period: '3'
      },
      // Midway split into 3 different schedules
      {
        type: "split",
        splitSchedules: {

            '6th Grade': [
              { title: "6th Lunch", startTime: "11:34", endTime: "12:04", duration: "30", type: "lunch"},
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 4", startTime: "12:09", endTime: "12:57", duration: "48", type: "class", period: '4' },
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 5", startTime: "1:02", endTime: "1:50", duration: "48", type: "class", period: '5' },
            ],
              "7/8th Grade Lunch 1": [
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 4", startTime: "11:39", endTime: "12:27", duration: "48", type: "class", period: '4' },
              { title: "Lunch 1", startTime: "12:27", endTime: "12:57", duration: "30", type: "lunch"},
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 5", startTime: "1:02", endTime: "1:50", duration: "48", type: "class", period: '5' },
            ],
            "7/8th Grade Lunch 2": [
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 4", startTime: "11:39", endTime: "12:27", duration: "48", type: "class", period: '4' },
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 5", startTime: "12:32", endTime: "1:20", duration: "48", type: "class", period: '5' },
              { title: "Lunch 2", startTime: "1:20", endTime: "1:50", duration: "30", type: "lunch" },
            ],
        },
      },
      { title: "Passing", duration: "5", type: "passing",},
      {
        title: "Period 6",
        startTime: "1:55",
        endTime: "2:43",
        duration: "48",
        type: "class",
        period: '6'
      },
      { title: "Passing", duration: "5", type: "passing",},
      {
        title: "Period 7",
        startTime: "2:48",
        endTime: "3:35",
        duration: "48",
        type: "class",
        period: '7'
      },
    ],
  },
  {
    day: "Friday",
    schedule: [
      {
        title: "Period 1",
        startTime: "9:00",
        endTime: "9:48",
        duration: "48",
        type: "class",
        period: '1'
      },
      {
        title: "Passing",
        duration: "5",
        type: "passing",
      },
      {
        title: "Period 2",
        startTime: "9:53",
        endTime: "10:41",
        duration: "48",
        type: "class",
        period: '2'
      },
      {
        title: "Passing",
        duration: "5",
        type: "passing",
      },
      {
        title: "Period 3",
        startTime: "10:46",
        endTime: "11:34",
        duration: "48",
        type: "class",
        period: '3'
      },
      // Midway split into 3 different schedules
      {
        type: "split",
        splitSchedules: {

            '6th Grade': [
              { title: "6th Lunch", startTime: "11:34", endTime: "12:04", duration: "30", type: "lunch"},
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 4", startTime: "12:09", endTime: "12:57", duration: "48", type: "class", period: '4' },
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 5", startTime: "1:02", endTime: "1:50", duration: "48", type: "class", period: '5' },
            ],
              "7/8th Grade Lunch 1": [
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 4", startTime: "11:39", endTime: "12:27", duration: "48", type: "class", period: '4' },
              { title: "Lunch 1", startTime: "12:27", endTime: "12:57", duration: "30", type: "lunch"},
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 5", startTime: "1:02", endTime: "1:50", duration: "48", type: "class", period: '5' },
            ],
            "7/8th Grade Lunch 2": [
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 4", startTime: "11:39", endTime: "12:27", duration: "48", type: "class", period: '4' },
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 5", startTime: "12:32", endTime: "1:20", duration: "48", type: "class", period: '5' },
              { title: "Lunch 2", startTime: "1:20", endTime: "1:50", duration: "30", type: "lunch" },
            ],
        },
      },
      { title: "Passing", duration: "5", type: "passing",},
      {
        title: "Period 6",
        startTime: "1:55",
        endTime: "2:43",
        duration: "48",
        type: "class",
        period: '6'
      },
      { title: "Passing", duration: "5", type: "passing",},
      {
        title: "Period 7",
        startTime: "2:48",
        endTime: "3:35",
        duration: "48",
        type: "class",
        period: '7'
      },
    ],
  },
  // And so on for the rest of the week...
];

export default scheduleData;