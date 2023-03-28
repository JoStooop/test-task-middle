import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 46;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const DropdownList = (props) => {
  const {array, state, setState} = props;

  const handleChange = (event) => {
    const {
      target: {value},
    } = event;
    setState(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{width: 200}}>
        <InputLabel sx={{lineHeight: .8}} id="demo-multiple-checkbox-label">Выберите</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={state}
          onChange={handleChange}
          input={<OutlinedInput sx={{height: '45px', borderRadius: '20px', backgroundColor: '#F8F8F8'}} label="Выберите"/>}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {array?.map((el) => (
            <MenuItem key={el} value={el}>
              <Checkbox checked={state.indexOf(el) > -1}/>
              <ListItemText primary={el}/>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export {DropdownList};
