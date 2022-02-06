import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomH1 } from "../components/CustomTypography/CustomTypography";
import {EventCard, EventHistoryCard} from "../components/EventCard/EventCard";

const EventHistory = () => {
    // dummy
    const [sejarah, setSejarah] = useState<{id: number, title: string, status: string}[]>([
        {id: 1, title: "Nobar LFC", status: "Waiting"},
        {id: 2, title: "Nobar Spiderman", status: "Finished"}
    ]);

    return(
        <Box>
            <Box sx={{
                    minHeight: "900px",
                    padding: {
                    xs: "50px 30px 0px 30px",
                    sm: "50px 40px 0px 40px",
                    md: "50px 100px 0px 100px",
                    },
                }}>
                <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center" }}>
                    <CustomH1 content="Event History" />
                </Box>
                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                    }}>
                    {/* Sub Header */}
                    <Box sx={{ display: { xs: "none", md: "block" }, alignItems: "center" }}>
                        <CustomH1 content="Event History" />
                    </Box>
                </Box>
                <Box sx={{mt:5}}>
                    {sejarah.map((value)=>(
                    <Box key={value.id} sx={{mt:2}}>
                        <EventHistoryCard eventTitle={value.title} status={value.status}/>
                    </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
export default EventHistory;