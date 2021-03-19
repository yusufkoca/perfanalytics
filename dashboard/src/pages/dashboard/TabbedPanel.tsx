import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Metric } from "../../typings/Metric";
import Dashboard from "./Dashboard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "25%",
  },
}));

export default function VerticalTabs({ metrics }: { metrics: Metric[] }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  //TODO this is better handled at backend
  let hrefMappedMetrics = metrics.reduce(
    (r: Record<string, any>, a: Metric) => {
      r[a.href] = [...(r[a.href] || []), a];
      return r;
    },
    {}
  );
  const tabs = Object.keys(hrefMappedMetrics);

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            {...a11yProps(tab)}
            style={{ wordBreak: "break-all" }}
          />
        ))}
      </Tabs>
      {tabs.map((tab, index) => {
        return (
          <TabPanel key={tab} value={value} index={index}>
            <Dashboard metrics={hrefMappedMetrics[tab]} />
          </TabPanel>
        );
      })}
    </div>
  );
}
