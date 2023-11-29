import SampleSideMenu from "@/components/sideMenu";
import Table from '@mui/material/Table';
import BasicModal from "@/components/schedule/addScheduleButton";
import CustomizedTables from "@/components/schedule/table";
import ScrollableTabsButtonAuto from "@/components/schedule/ScheduledDate";
import ScrollableTabsButtonAuto2 from "@/components/schedule/screen";


export default function schedule(props) {
return (
  <>
  
  <SampleSideMenu menutitle="スケジュール情報"/>

  <BasicModal />
  <ScrollableTabsButtonAuto />
  <ScrollableTabsButtonAuto2 />

  <CustomizedTables />

  </>
);
}