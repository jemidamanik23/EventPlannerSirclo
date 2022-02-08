// import React from "react";
import * as React from 'react';
import { alpha, styled, Theme, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { CustomParagraph } from '../CustomTypography/CustomTypography';
import { Typography } from '@mui/material';
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';


  interface inputDetail {
    placeholder?: string;
    type?: string;
    label?: string;
    textLabel?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    defValue?: string;
    value?: string | number;
    errorVal?: string
}


type inputSelect = {
  label?: string,
  onChange?: (e: SelectChangeEvent) => void ,
  data?: string[],
  value?: string,
  placeholder?: string
  errorVal?: string

}

  
  const StyledInputElement = styled('input')(
    ({ theme }) => `
    width: 100%;
    height:100%;
    font-size: 0.875rem;
    font-family: nunito;
    font-weight: 400;
    line-height: 1.5;
    color: "#E0E1E5";
    background: #E0E1E5;
    border: 1px solid #E0E1E5;
    border-radius: 8px;
    padding: 12px 12px;
    transition: all 150ms ease;  
    &:hover {
      background: #E0E1E5;
      border-color: #E0E1E5;
    }  
    &:focus {
      outline: 2px solid #E0E1E5;
      outline-offset: 2px;
    }
  `,
  );  
  const CustomInput = React.forwardRef(function CustomInput(
    props: InputUnstyledProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
  });  
function TextInput(props:inputDetail) {
    return (
    <Box>
        <Typography><CustomParagraph content={props.textLabel}/> <span style={{ color: "red" }}>{props.errorVal}</span></Typography>
        
        <CustomInput value={props.value}  placeholder={props.placeholder} type={props.type} onChange={props.onChange} />
    </Box>
    
    )
  }

  const StyledInputElementText = styled('input')(
    ({ theme }) => `
    width: 100%;
    height:20vh;
    font-size: 0.875rem;
    font-family: nunito;
    font-weight: 400;
    line-height: 1.5;
    color: "#E0E1E5";
    background: #E0E1E5;
    border: 1px solid #E0E1E5;
    border-radius: 8px;
    padding: 12px 12px;
    transition: all 150ms ease;  
    &:hover {
      background: #E0E1E5;
      border-color: #E0E1E5;
    }  
    &:focus {
      outline: 2px solid #E0E1E5;
      outline-offset: 2px;
    }
  `,
  );
  
  const CustomTextArea = React.forwardRef(function CustomInput(
    props: InputUnstyledProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <InputUnstyled components={{ Input: StyledInputElementText }} {...props} ref={ref} />
    );
  });
  
function TextArea(props:inputDetail) {
    return (
    <Box>
        <Typography><CustomParagraph content={props.textLabel}/> <span style={{ color: "red" }}>{props.errorVal}</span></Typography>
        
        <CustomTextArea value={props.value} placeholder={props.placeholder} type={props.type} onChange={props.onChange} />
    </Box>
    
    )
  }

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: "10px",
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#ECE8E8' : '#fcfcfb',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
          'Nunito',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));


 
  
  function InputText3({label, onChange, data,value,placeholder,errorVal}: inputSelect){
  
    return (
      <div>     
          <p>{label}  <span style={{ color: "red" }}>{errorVal}</span></p>  
        <FormControl sx={{width:"100%", height: "45px" }} variant="standard" >        
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={value}
            onChange={onChange}
            defaultValue="okelash"
            
            input={<BootstrapInput placeholder= {placeholder} defaultValue="oke"/>}
          >
            {data !== undefined ? data.map((datas, index)=>(
              <MenuItem key={index} value={datas}>{datas}</MenuItem>
            )) : <MenuItem value="kosong">Kosong</MenuItem>}
          </Select>
        </FormControl>
        
      </div>
    );
  }
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
    
  
  };
  
  const inputVals = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  
  function getStyles(inputVal: string, inputValue: readonly string[], theme: Theme) {
    return {
      fontWeight:
        inputValue.indexOf(inputVal) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }


  const StyledButton = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0.75em;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: #000;

  &.${selectUnstyledClasses.focusVisible} {
    outline: 4px solid rgba(100, 100, 100, 0.3);
  }

  &.${selectUnstyledClasses.expanded} {
    border-radius: 0.75em 0.75em 0 0;

    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
`;

const StyledListbox = styled('ul')`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: #fff;
  min-width: 200px;
  border: 1px solid #ccc;
  border-top: none;
  color: #000;
`;

const StyledOption = styled(OptionUnstyled)`
  list-style: none;
  padding: 4px 10px;
  margin: 0;
  border-bottom: 1px solid #ddd;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.disabled} {
    color: #888;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: rgba(25, 118, 210, 0.08);
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #16d;
    color: #fff;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #05e;
    color: #fff;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #39e;
  }
`;

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

function CustomSelect(props: SelectUnstyledProps<number>) {
  const components: SelectUnstyledProps<number>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
}

export default function TextSelect() {
  const [value, setValue] = React.useState<number | null>(10);
  return (
    <div>
      <CustomSelect value={value} onChange={setValue}>
        <StyledOption value={10}>Ten</StyledOption>
        <StyledOption value={20}>Twenty</StyledOption>
        <StyledOption value={30}>Thirty</StyledOption>
      </CustomSelect>

      <p>Selected value: {value}</p>
    </div>
  );
}

export {TextInput, TextArea, InputText3, TextSelect}

// how to call
{/* <InputText2 textLabel='Nama' placeholder='nama' width='300px'/> */}