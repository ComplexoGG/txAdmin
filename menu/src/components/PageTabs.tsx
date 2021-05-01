import React, { ChangeEvent } from "react";
import { Box, makeStyles, Tab, Tabs, Theme } from "@material-ui/core";
import {usePage} from "../atoms/page.atom";

const useStyles = makeStyles((theme: Theme) => ({
  tab: {
    minWidth: '100px',
  }
}))

export const PageTabs: React.FC = () => {
  const classes = useStyles();
  const [page, setPage] = usePage();

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setPage(newValue);
  };

  return (
      <Box width="100%">
      <Tabs
        value={page}
        centered
        indicatorColor="primary"
        textColor="secondary"
        onChange={handleChange}
      >
        <Tab className={classes.tab} label="Main" wrapped disableFocusRipple/>
        <Tab className={classes.tab}label="Players" wrapped disableFocusRipple/>
        <Tab className={classes.tab} label="TXAdmin" wrapped disableFocusRipple/>
      </Tabs>
    </Box>
  );
};