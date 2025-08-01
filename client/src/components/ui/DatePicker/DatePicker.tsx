// components/DatePicker.tsx

import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import type { JSX } from 'react';

interface DatePickerProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  disableFuture?: boolean;
  minDate?: Date;
  maxDate?: Date;
//   renderInput?: (params: import('@mui/material/TextField').TextFieldProps) => JSX.Element;
}

export default function DatePicker({
    label,
    value,
    onChange,
    disableFuture,
    minDate,
    maxDate,
}: DatePickerProps): JSX.Element {

    return (
        <MUIDatePicker
            label = { label }
            value = { value }
            onChange = { onChange }
            disableFuture = { disableFuture }
            minDate = { minDate }
            maxDate = { maxDate }
            sx = { {
                backgroundColor : 'white',
                borderRadius : '4px',
            } }
            // renderInput={ (params) => <TextField { ...params } /> }
        />
    );
}