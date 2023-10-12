import React, {useState} from 'react';

import dayjs from 'dayjs';
import DatePicker from 'react-native-date-picker';

import {DatePickerProps} from './types';
import {BasePickerButton} from 'atoms/base-picker-button';

export const DatePickerButton = ({selectedDate, setDate}: DatePickerProps) => {
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
