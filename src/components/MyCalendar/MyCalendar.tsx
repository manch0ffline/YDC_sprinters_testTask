import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const MyCalendar = () => {
  const [selected, setSelected] = useState<Date[]>([]);

  return (
    <div className="MyCalendar d-flex flex-column gap-3 p-4 align-items-center justify-content-center">
      <button className="MyCalendar__button">
        <div className="icon icon--plus"></div>
        Купити квиток
      </button>

      <div className="MyCalendar__calendar">
        <DayPicker
          mode="multiple"
          captionLayout="label"
          selected={selected}
          startMonth={new Date()}
          onSelect={(ev) => setSelected(ev || [])}
          showOutsideDays={true}
          modifiersClassNames={{
            today: 'my-today',
            outside: 'my-outside',
          }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
