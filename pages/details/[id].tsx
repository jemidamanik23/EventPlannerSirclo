import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CommentBox from "../../components/CommentBox/CommentBox";
import { CustomButtonPrimary, CustomButtonSecondary } from "../../components/CustomButton/CustomButton";
import { CustomH1, CustomParagraph, CustomParticipantNumberBox, CustomTitle } from "../../components/CustomTypography/CustomTypography";
import { ParticipantBox, ParticipantNumber } from "../../components/ParticipantBox/ParticipantBox";
import { TextInput } from "../../components/TextInput/TextInput";

const DetailEvent = () => {
    // dummy
    const [detailEvent, setDetailEvent] = useState<{title: string, image: string, category: string, location: string, start_date: string, end_date: string, details: string}>({
        title: "Nobar LFC",
        image: "https://asset.kompas.com/crops/XkmYW_kYriJrbuoh2iGAokbwDxU=/0x0:1280x853/750x500/data/photo/2019/04/01/2005092166.jpeg",
        category: "Sport",
        location: "Bandung",
        start_date: "23 Februari 2022",
        end_date: "23 Februari 2022",
        details: "Nobar Liverpool Official Fans Club di Bandung"
    })

    const [participants, setParticipants] = useState<{id: number, name: string}[]>([
        {id: 1, name: "Adi"}, 
        {id: 2, name: "Jemi"}, 
        {id: 3, name: "Ryan"},
        {id: 4, name: "Hilmi"}, 
        {id: 5, name: "Eldy"}, 
        {id: 6, name: "Dhaifan"},
        {id: 7, name: "Bahtiar"}
    ]);
    const [countParticipants, setCountParticipants] = useState<number>(7);
    const [inputComment, setInputComment] = useState<string>("");
    const [commentError, setCommentError] = useState<string>("");
    const [comments, setComments] = useState<{id: number, comment: string}[]>([
        {id: 1, comment: "Seruuuuu"},
        {id: 2, comment: "Sugoiiii"}
    ]);
    const [disabledVal, setDisabled] = useState<boolean>(false);

    const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputComment(value);
        var len = e.target.value.length;
        if (len > 50) {
          setCommentError("your password is too long");
        } else {
          setCommentError("");
        }
    };

    const fetchData = async () => {
        if (inputComment === "") {
          setCommentError("Comment Empty");
        } else {
          setDisabled(true);   
        //   const { data } = await client.query({
        //     query: GET_LOGIN,
        //     variables: { email, password },
        //   })
        //   console.log(data);
          //localStorage.setItem("token", data.login.token);

          setInputComment("");
        }    
    };


    return (
        <Box>
            <Box
                sx={{
                    minHeight: "900px",
                    padding: {
                    xs: "50px 30px 0px 30px",
                    sm: "50px 40px 0px 40px",
                    md: "50px 100px 0px 100px",
                    },
                }}>
                <Box sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center" }}>
                    <Typography
                    sx={{
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        fontSize: "36px",
                        color: "#000000",
                    }}>
                    <CustomH1 content={detailEvent.title} />
                    </Typography>
                </Box>
                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                    }}>
                    {/* Sub Header */}
                    <Box sx={{ display: { xs: "none", md: "block" }, alignItems: "center" }}>
                    <Typography
                        sx={{
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        fontSize: "36px",
                        color: "#000000",
                        textAlign: "center"
                        }}>
                        <CustomH1 content={detailEvent.title} />
                    </Typography>
                    </Box>
                </Box>
                <Grid container spacing={0}>
                    <Grid item xs={6} md={5}>
                        <Box sx={{ display: { xs: "block", md: "block" }, alignItems: "center" }}>
                            <img 
                            src={detailEvent.image} 
                            alt={detailEvent.title}
                            width="70%"
                            >
                                {/* <CustomH1 content={detailEvent.title} /> */}
                            </img>
                        </Box>
                        <Box sx={{ display: { xs: "block", md: "block" }, justifyContent: "center" }}>
                            <CustomButtonPrimary width="70%" caption="Join"/>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={5}>
                        <CustomParagraph content={detailEvent.location} />
                        <CustomParagraph content={detailEvent.details} />
                        <CustomParagraph content={detailEvent.start_date} />
                    </Grid>
                </Grid>
                <Box sx={{mt:5}}>
                    <ParticipantNumber content={5}/>
                </Box>
                <Box sx={{mt:5}}>
                    <Grid container spacing={2}>
                        {participants.map((value)=>(
                            <Grid item xs={8} md={3} key={value.id}>
                                <ParticipantBox participant={value.name}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{mt:5}}>
                    <Grid container spacing={1}>
                        <Grid item xs={9} md={9}>
                            <TextInput textLabel='' placeholder='Komentar anda!' type='text' onChange={(e) => handleComment(e)} errorVal={commentError}/>
                        </Grid>
                        <Grid item xs={3} md={3}>
                            <CustomButtonSecondary caption='Kirim' width='60%' OnClick={fetchData} isDisabled={disabledVal}/>
                        </Grid>
                    </Grid>
                </Box>
                {comments.map((value)=>(
                <Box sx={{mt:3}} key={value.id}>
                    <CommentBox  caption={value.comment}/>
                </Box>
                ))}
            </Box>
        </Box>
    )
}
export default DetailEvent;