import React, { useState, useEffect } from 'react';

const DateCalculator = ({ startDate, endDate, workload }) => {
  const [days, setDays] = useState(null);
  const [cost, setCost] = useState(null);
  const baseRatePerDay = 224;

  // Define workload modifiers
  const workloadModifiers = {
    soundDesign: {cost: 50,description: 'Sound Design'},            // Additional cost for sound design
    technicalSoundDesign: {cost: 100,description: 'Technical Sound Design'},  // Additional cost for technical sound design
    implementation: {cost: 75,description: 'Engine Implementation'},       // Additional cost for implementation
    dialogueEditing: {cost: 25,description: 'Dialogue Editing'},       // Additional cost for dialogue editing
    frontend: {cost: 10,description: 'Front End Development'},
    datasci: {cost: 15,description: 'Data Science'},
  };

  // Helper function to count weekdays between two dates
  const countWeekdays = (start, end) => {
    let count = 0;
    let currentDate = new Date(start);

    while (currentDate <= end) {
      const dayOfWeek = currentDate.getDay();
      // Only count weekdays (Monday to Friday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        count++;
      }
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return count;
  };

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Ensure that the start date is before the end date
      if (start <= end) {
        const weekdayCount = countWeekdays(start, end);

        // Calculate workload modifier total
        const totalModifiers = Object.keys(workload).reduce((acc, key) => {
          return acc + (workload[key] ? workloadModifiers[key].cost : 0);
        }, 0);

        // Calculate the total cost
        const totalCost = weekdayCount * (baseRatePerDay + totalModifiers);
        setDays(weekdayCount);
        setCost(totalCost);
      } else {
        setDays(null);
        setCost(null);
        alert('End date should be after the start date');
      }
    }
  }, [startDate, endDate, workload]);

  // Get the list of workload modifiers that are true
  const activeWorkloadModifiers = Object.keys(workload).filter(key => workload[key]);

  return (
    <div>
      <div>
        <p>Start Date: {startDate}</p>
        <p>End Date: {endDate}</p>
      </div>
      {days !== null && cost !== null ? (
        <div className='m-4 font-semibold'>
          <h2 className='underline'>Results:</h2>
          <p className='font-normal'>Number of weekdays: {days}</p>
          <p className='font-normal'>Estimated cost: £{cost.toFixed(2)}</p> {/* Format cost to 2 decimal places */}
          {activeWorkloadModifiers.length > 0 && (
            <div className='m-4'>
              <h3 className='underline'>Active Workload Modifiers:</h3>
              <ul className='font-normal'>
                {activeWorkloadModifiers.map(modifier => (
                  <li key={modifier}>{workloadModifiers[modifier].description} (+£{workloadModifiers[modifier].cost}<span> per-day</span>)</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p>Please select valid dates to calculate the cost.</p>
      )}
    </div>
  );
};

export default DateCalculator;
