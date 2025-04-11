import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const AgentList: NextPage = () => {
    console.log('PROPERTYLIST COMPONENT - PAGES ROUTER');
    return (
       <div style={{ margin: '20px 0'}}>
        <Stack className={'container'}>AGENT LIST</Stack>
       </div>
    );
};

export default withLayoutBasic(AgentList);