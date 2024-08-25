import scheduleData from '../public/scheduleData';

export default function dayHasEvent(day, eventTitle) {
  // Find the day object from the scheduleData
  const daySchedule = scheduleData.find(d => d.day === day);

  if (!daySchedule) {
    return false; // If the day doesn't exist, return false
  }

  // Function to search in the schedule array
  const eventExistsInSchedule = (schedule) => {
    return schedule.some(e => e.title === eventTitle);
  };

  // First, check the main schedule
  if (eventExistsInSchedule(daySchedule.schedule)) {
    return true;
  }

  // Check split schedules if they exist
  for (const scheduleItem of daySchedule.schedule) {
    if (scheduleItem.type === 'split' && scheduleItem.splitSchedules) {
      for (const key in scheduleItem.splitSchedules) {
        if (eventExistsInSchedule(scheduleItem.splitSchedules[key])) {
          return true;
        }
      }
    }
  }

  return false; // Event not found
}