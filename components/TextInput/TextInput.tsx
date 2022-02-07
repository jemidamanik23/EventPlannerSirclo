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

export {TextInput, TextArea}

// how to call
{/* <InputText2 textLabel='Nama' placeholder='nama' width='300px'/> */}