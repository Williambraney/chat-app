import { Typography } from "@mui/material";
import { type ReactNode } from "react";

type TextProps = {
  children: ReactNode;
};

export default function Text({ 
  children 
} : TextProps ) {

  return (
    <Typography 
      variant = 'h5'
    >
      { children }
    </Typography>
  );

};
