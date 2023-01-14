import React from "react";
import {AppHTMLProps} from "../../utils/typed";

export type FontType = "bold" | "regular" | "medium"

interface AppTextProps extends AppHTMLProps<HTMLParagraphElement> {
  font?: FontType
}

const AppText: React.FC<AppTextProps> = (props) => {
  const {font} = props
  return <p
    style={{
      fontFamily: font === "bold" ? "bold" : font === "medium" ? "medium" : "regular"
    }} {...props}/>
}

export default AppText
