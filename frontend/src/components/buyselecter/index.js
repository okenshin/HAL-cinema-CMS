import Buybuttons from  "@/components/buyselecter/buybutton";
import { Box } from "@mui/material";

export default function buyselecter(props) {
    return (
      <Box sx={{ position: "absolute" , top: "30%" , left: "25%"  }}>
          <Buybuttons></Buybuttons> 
      </Box>
    )
  }