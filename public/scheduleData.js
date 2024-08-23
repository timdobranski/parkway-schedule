
const scheduleData = [
  // monday
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
  // tuesday
  {
    day: "Tuesday",
    schedule: [
      {
        title: "Period 1",
        startTime: "9:00",
        endTime: "10:25",
        duration: "85",
        type: "class",
        period: '1'
      },
      {
        title: "Passing",
        duration: "5",
        type: "passing",
      },
      // Midway split into 3 different schedules
      {
        type: "split",
        splitSchedules: {

            '6th Grade': [
              { title: "Period 2", startTime: "10:30", endTime: "11:50", duration: "80", type: "class", period: '2' },
              { title: "6th Lunch", startTime: "11:50", endTime: "12:20", duration: "30", type: "lunch"},
              { title: "Passing", duration: "5", type: "passing",},
              { title: "6th WIN", startTime: "12:25", endTime: "12:55", duration: "30", type: "win", period: '' },
            ],
              "7/8th Grade Lunch 1": [
                { title: "7/8th WIN", startTime: "10:30", endTime: "11:00", duration: "30", type: "win", period: '' },
                { title: "Lunch 1", startTime: "11:00", endTime: "11:30", duration: "30", type: "lunch"},
                { title: "Passing", duration: "5", type: "passing",},
                { title: "Period 2", startTime: "11:35", endTime: "12:55", duration: "80", type: "class", period: '2' },
            ],
            "7/8th Grade Lunch 2": [
              { title: "7/8th WIN", startTime: "10:30", endTime: "11:00", duration: "30", type: "win", period: '' },
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 2", startTime: "11:05", endTime: "12:25", duration: "80", type: "class", period: '2' },
              { title: "Lunch 2", startTime: "12:25", endTime: "12:55", duration: "30", type: "lunch" },
            ],
        },
      },
      { title: "Passing", duration: "5", type: "passing",},
      {
        title: "Period 3",
        startTime: "1:00",
        endTime: "2:30",
        duration: "90",
        type: "class",
        period: '3'
      },
    ],
  },
  // wednesday
  {
    day: "Wednesday",
    schedule: [
      {
        title: "Period 4",
        startTime: "9:00",
        endTime: "10:20",
        duration: "80",
        type: "class",
        period: '4'
      },
      {
        title: "Passing",
        duration: "5",
        type: "passing",
      },
      {
        title: "Period 5",
        startTime: "10:25",
        endTime: "11:45",
        duration: "80",
        type: "class",
        period: '5'
      },
      // Midway split into 3 different schedules
      {
        type: "split",
        splitSchedules: {

            '6th Grade': [
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 6", startTime: "11:50", endTime: "1:10", duration: "80", type: "class", period: '6' },
              { title: "6th Lunch", startTime: "1:10", endTime: "1:40", duration: "30", type: "lunch"},
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Home Base", startTime: "1:45", endTime: "2:10", duration: "25", type: "win", period: '' },
            ],
              "7/8th Grade Lunch 1": [
                { title: "Lunch 1", startTime: "11:45", endTime: "12:15", duration: "30", type: "lunch"},
                { title: "Passing", duration: "5", type: "passing",},
                { title: "Home Base", startTime: "12:20", endTime: "12:45", duration: "25", type: "win", period: '' },
                { title: "Passing", duration: "5", type: "passing",},
                { title: "Period 6", startTime: "12:50", endTime: "2:10", duration: "80", type: "class", period: '6' },
              ],
            "7/8th Grade Lunch 2": [
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Home Base", startTime: "11:50", endTime: "12:10", duration: "25", type: "win", period: '' },
              { title: "Lunch 2", startTime: "12:15", endTime: "12:45", duration: "30", type: "lunch" },
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 6", startTime: "12:50", endTime: "2:10", duration: "80", type: "class", period: '6' },
            ],
        },
      },
      { title: "Passing", duration: "5", type: "passing",},
      {
        title: "Period 7",
        startTime: "2:15",
        endTime: "3:35",
        duration: "80",
        type: "class",
        period: '7'
      },
    ],
  },
  // thursday
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
  // friday
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
  // testing thursday
  {
    day: "Testing: Thurs, 8/22 & 29",
    schedule: [
      {
        title: "Period 1",
        startTime: "9:00",
        endTime: "10:35",
        duration: "95",
        type: "class",
        period: '1'
      },
      {
        title: "Passing",
        duration: "5",
        type: "passing",
      },
      // Midway split into 3 different schedules
      {
        type: "split",
        splitSchedules: {

            '6th Grade': [
              { title: "Period 2", startTime: "10:40", endTime: "12:15", duration: "95", type: "class", period: '2' },
              { title: "6th Lunch", startTime: "12:15", endTime: "12:45", duration: "30", type: "lunch"},
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Home Base", startTime: "12:50", endTime: "1:55", duration: "65", type: "win", period: '' },
            ],
              "7/8th Grade Lunch 1": [
                { title: "Home Base", startTime: "10:40", endTime: "11:45", duration: "65", type: "win", period: '' },
                { title: "Lunch 1", startTime: "11:45", endTime: "12:15", duration: "30", type: "lunch"},
                { title: "Passing", duration: "5", type: "passing",},
                { title: "Period 2", startTime: "12:20", endTime: "1:55", duration: "95", type: "class", period: '2' },
            ],
            "7/8th Grade Lunch 2": [
              { title: "Home Base", startTime: "10:40", endTime: "11:45", duration: "65", type: "win", period: '' },
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 2", startTime: "11:50", endTime: "1:25", duration: "95", type: "class", period: '2' },
              { title: "Lunch 2", startTime: "1:25", endTime: "1:55", duration: "30", type: "lunch" },
            ],
        },
      },
      { title: "Passing", duration: "5", type: "passing",},
      {
        title: "Period 3",
        startTime: "2:00",
        endTime: "3:35",
        duration: "95",
        type: "class",
        period: '3'
      },
    ],
  },
 // testing friday
 {
  day: "Testing: Fri, 8/23 & 30",
  schedule: [
    {
      title: "Period 4",
      startTime: "9:00",
      endTime: "10:20",
      duration: "80",
      type: "class",
      period: '4'
    },
    {
      title: "Passing",
      duration: "5",
      type: "passing",
    },
    {
      title: "Period 5",
      startTime: "10:25",
      endTime: "11:45",
      duration: "80",
      type: "class",
      period: '5'
    },
    // Midway split into 3 different schedules
    {
      type: "split",
      splitSchedules: {

          '6th Grade': [
            { title: "Passing", duration: "5", type: "passing",},
            { title: "Period 6", startTime: "11:50", endTime: "1:10", duration: "80", type: "class", period: '6' },
            { title: "6th Lunch", startTime: "1:10", endTime: "1:40", duration: "30", type: "lunch"},
            { title: "Passing", duration: "5", type: "passing",},
            { title: "Home Base", startTime: "1:45", endTime: "2:10", duration: "25", type: "win", period: '' },
          ],
            "7/8th Grade Lunch 1": [
              { title: "Lunch 1", startTime: "11:45", endTime: "12:15", duration: "30", type: "lunch"},
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Home Base", startTime: "12:20", endTime: "12:45", duration: "25", type: "win", period: '' },
              { title: "Passing", duration: "5", type: "passing",},
              { title: "Period 6", startTime: "12:50", endTime: "2:10", duration: "80", type: "class", period: '6' },
            ],
          "7/8th Grade Lunch 2": [
            { title: "Passing", duration: "5", type: "passing",},
            { title: "Home Base", startTime: "11:50", endTime: "12:10", duration: "25", type: "win", period: '' },
            { title: "Lunch 2", startTime: "12:15", endTime: "12:45", duration: "30", type: "lunch" },
            { title: "Passing", duration: "5", type: "passing",},
            { title: "Period 6", startTime: "12:50", endTime: "2:10", duration: "80", type: "class", period: '6' },
          ],
      },
    },
    { title: "Passing", duration: "5", type: "passing",},
    {
      title: "Period 7",
      startTime: "2:15",
      endTime: "3:35",
      duration: "80",
      type: "class",
      period: '7'
    },
  ],
},
];

export default scheduleData;