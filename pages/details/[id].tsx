import Context from "@mui/base/TabsUnstyled/TabsContext";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CommentBox from "../../components/CommentBox/CommentBox";
import { CustomButtonPrimary, CustomButtonSecondary } from "../../components/CustomButton/CustomButton";
import { CustomH1, CustomParagraph, CustomParticipantNumberBox, CustomTitle } from "../../components/CustomTypography/CustomTypography";
import { ParticipantBox, ParticipantNumber } from "../../components/ParticipantBox/ParticipantBox";
import { TextInput } from "../../components/TextInput/TextInput";
import { useEffect } from "react";
import client from "../../utils/apollo-client";
import {  JOIN_EVENT, GET_EVENT_DETAILS, POST_COMMENT, GET_COMMENT } from "../../utils/queries";
import { ApolloError, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";

export type participantTypes = {
    id: number,
    id_event: number,
    id_user: number,
    name: string,
    email: string,
    photo: string
  };

  export type commentTypes = {
      id_user: number,
      comment: string,
      name: string,
      email: string,
      photo: string,
      id: number,
      id_event: number


  }

const DetailEvent = (props:any) => {
    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [category, setCategory] = useState<number>(1);
    const [location, setLocation] = useState<string>("");
    const [start, setStart] = useState<string>("");
    const [end, setEnd] = useState<string>("");
    const [details, setdetails] = useState<string>("");
    const [token, setToken] = useState<string | null>("");
    const [idUser, setIdUsers] = useState<string | null>("");
    
    const [sumParticipant, setSumParticipant] = useState<number | null>(0);
    const [postComment] = useMutation(POST_COMMENT);
    const [setJoinEvent] = useMutation(JOIN_EVENT);
    const router = useRouter();
    // const {id} = router.query;
    const id = parseInt(router.query.id as string, 10)
    const [idEvent, setIdEvent] = useState<number>(5);
    
    const participantDefault: participantTypes[] = [];
    const [dataParticipant, setDataParticipant] = useState(participantDefault);
    const commentDefault: commentTypes[] = [];
    const [dataComment, setDataComment] = useState<commentTypes[]>([])
    const [countParticipants, setCountParticipants] = useState<number>(7);
    const [inputComment, setInputComment] = useState<string>("");
    const [commentError, setCommentError] = useState<string>("");
    const [disabledVal, setDisabled] = useState<boolean>(false);

    // if(id!==undefined)(
    // setIdEvent(parseInt(id))
    // )


    const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputComment(value);
        var len = e.target.value.length;
        if (len > 50) {
          setCommentError("your comment is too long");
        } else {
          setCommentError("");
        }
    };

    useEffect(() => {
        if(localStorage.getItem("token")!==null){            
            setToken(localStorage.getItem("token"));  
            setIdUsers(localStorage.getItem("id_user")) 
            setIdEvent(id)
                fetchData();        
                //fetchComment();          
            
        }else{
        }

      }, []);  

      const fetchData = async () => {      
        const { data } = await client.query({
            query: GET_EVENT_DETAILS,
            variables : {id:id},
        })
        console.log(id)
        console.log(idEvent)        
        console.log(data)
        console.log(data.eventsById.comments);  
        setDataComment(data.eventsById.comments)
        // setIdEvent(data.eventsById.id)
        setTitle(data.eventsById.title)
        setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxiA3wZcNw_qdIFKsVKrKLX3ObK3qxQ7Hig&usqp=CAU")
        setCategory(data.eventsById.id_category)
        setLocation(data.eventsById.location)
        setStart(data.eventsById.start_date)
        setEnd(data.eventsById.end_date)
        setdetails(data.eventsById.details)        
        if(data.eventsById.participant!==null && data.eventsById.participant!==undefined){
            setSumParticipant((data.eventsById.participant).length)
        }
        const datas = data.eventsById.participant
        setDataParticipant(data.eventsById.participant);

    };

    const join = async () => {
        setJoinEvent({
            variables: {id_event:id, id_user: idUser},
            onCompleted: (data)=> {
                console.log(data);
            },
              onError:(error:ApolloError)=>{
                console.log(error.message);
            },
            context: {
                headers: { 
                  Authorization: `Bearer ${token}`,
                },
            },
        })        
    }

    const fetchComment = async () => {
        // const { data } = await client.query({
        //     query: GET_COMMENT,
        //     variables : {id_event:id},
        //     errorPolicy: `ignore`,
        //     context: {
        //         headers: { 
        //           Authorization: `Bearer ${token}`,
        //         },
        //     },
        // })
        // console.log(data.comments)
        //setDataComment(data.comments)
        
    };

    const sendComment = async () => {
        if (inputComment === "") {
          setCommentError("Comment Empty");
        } else {
          setDisabled(true);

        postComment({
            variables: { id_event: id, id_user: idUser, comment: inputComment },
            context: {
                      headers: { 
                        Authorization: `Bearer ${token}`,
                      },
                    },
        })
          setInputComment("");
          
          router.push(`/details/${id}`)
        }    
    };


    return (
        <Box>
            <Header isHidden={true}/>
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
                    <CustomH1 content={title} />
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
                        <CustomH1 content={title} />
                    </Typography>
                    </Box>
                </Box>
                <Grid container spacing={0}>
                    <Grid item xs={6} md={5}>
                        <Box sx={{ display: { xs: "block", md: "block" }, alignItems: "center" }}>
                            <img 
                            src={image} 
                            alt={title}
                            width="70%"
                            >
                                {/* <CustomH1 content={detailEvent.title} /> */}
                            </img>
                        </Box>
                        <Box sx={{ display: { xs: "block", md: "block" }, justifyContent: "center" }}>
                            <CustomButtonPrimary width="70%" caption="Join" OnClick={join}/>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={5}>
                        <CustomParagraph content={location} />
                        <CustomParagraph content={details} />
                        <CustomParagraph content={start} />
                    </Grid>
                </Grid>
                <Box sx={{mt:5}}>
                    <ParticipantNumber content={sumParticipant}/>
                </Box>
                <Box sx={{mt:5}}>
                    <Grid container spacing={2}>
                        {dataParticipant.map((item:any)=>(
                            <Grid item xs={8} md={3} key={item.id}>
                                <ParticipantBox participant={item.name}/>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box sx={{mt:5}}>
                    <Grid container spacing={1}>
                        <Grid item xs={9} md={9}>
                            <TextInput value={inputComment} textLabel='' placeholder='Komentar anda!' type='text' onChange={(e) => handleComment(e)} errorVal={commentError}/>
                        </Grid>
                        <Grid item xs={3} md={3}>
                            <CustomButtonSecondary caption='Kirim' width='60%' OnClick={sendComment} isDisabled={disabledVal}/>
                        </Grid>
                    </Grid>
                </Box>
                {dataComment.map((value)=>(
                <Box sx={{mt:3}} key={value.id}>
                    <CommentBox  caption={value.comment}/>
                </Box>
                ))}
            </Box>
            <Footer/>
        </Box>
    )
}
export default DetailEvent;