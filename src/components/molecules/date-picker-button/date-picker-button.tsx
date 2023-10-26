import React, {useState} from 'react';

import dayjs from 'dayjs';
import DatePicker from 'react-native-date-picker';

import {BasePickerButton} from 'atoms';

import {DatePickerProps} from './types';

export const DatePickerButton: React.FC<DatePickerProps> = ({
  selectedDate,
  setDate,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <>
      <BasePickerButton
        value={dayjs(selectedDate).format('DD/MM/YYYY')}
        onPress={() => setShowDatePicker(true)}
      />
      <DatePicker
        modal
        open={showDatePicker}
        date={selectedDate}
        onConfirm={date => {
          setShowDatePicker(false);
          setDate(date);
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
      />
    </>
  );
};
