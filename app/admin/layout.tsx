import { FC, PropsWithChildren } from "react";
import MenuBar from "./components/MenuBar";
import { Box } from "@mui/material";

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <MenuBar />
      {children}
    </Box>
  );
};

export default AdminLayout;
