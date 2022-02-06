import { Alert, Box, Grid, IconButton, Menu, MenuItem, Pagination, Snackbar, Typography } from "@mui/material"
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import HomeCard from "../components/HomeCard/HomeCard";
import React, { useEffect, useState } from "react";
import { CustomH1, CustomTitle } from "../components/CustomTypography/CustomTypography";
import FilterListIcon from '@mui/icons-material/FilterList';
import Link from "next/link";
import { useRouter } from "next/router";
import client from "../utils/apollo-client";
import { GET_CATEGORY, GET_EVENT } from "../utils/queries";

const HomePage = () => {
    const router = useRouter();
    const [categoryOpenMenu, setCategoryOpenMenu] = useState<null | HTMLElement>(null);
    const [countProducts, setCountProducts] = useState<number>(0);

    const [events, setEvents] = useState<any[]>([]);
    const [category, setCategory] = useState<any[]>([]);
    const [categoryPage, setCategoryPage] = useState<string>("All Category");
    const openCategory = Boolean(categoryOpenMenu);

    const [page, setPage] = React.useState(1);

    const [openAlert, setOpenAlert] = React.useState(false);

    useEffect(() => {
        fetchData();
        fetchCategory();
    }, []); 

    const fetchData = async() => {
        const { data } = await client.query({
            query: GET_EVENT,
        })
        
        setEvents(data.events)
        console.log(data.events.counts);
        console.log(data);
        
    }

    const fetchCategory = async() => {
        const { data } = await client.query({
            query: GET_CATEGORY,
            context: {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        })

        console.log(data);
        setCategory(data.category);
    }

    const handleCloseAlert = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
        return;
        }
        setOpenAlert(false);
    };

    const handleClickCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCategoryOpenMenu(event.currentTarget);
    };

    const handleCloseCategory = () => {
        setCategoryOpenMenu(null);
    };

    return(
        
        <Box>
            {console.log(events)}
            <Box
                sx={{
                    minHeight: "900px",
                    padding: {
                    xs: "50px 30px 0px 30px",
                    sm: "50px 40px 0px 40px",
                    md: "50px 100px 0px 100px",
                    },
                }}>
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                    <Typography
                    sx={{
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        fontSize: "36px",
                        color: "#000000",
                        textAlign: "center"
                    }}>
                    <CustomH1 content='Events' />
                    </Typography>
                </Box>
                <Box
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    }}>
                    {/* Sub Header */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                            id='category-button'
                            aria-controls="basic-menu"
                            aria-haspopup='true'
                            aria-expanded = "true"
                            //onClick={handleClickCategory}
                            size='small'
                            sx={{
                            backgroundColor: "#FFFFFF",
                            border: "2px solid #F34F51",
                            borderRadius: "5px",
                            "&:hover": { backgroundColor: "#F34F51" },
                            }}>
                            <FilterListIcon sx={{ color: "black" }} />
                        </IconButton>
                        <Typography
                            sx={{
                            marginLeft: "10px",
                            fontFamily: "Nunito",
                            fontWeight: "700",
                            }}>
                             Urutkan
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "block" }, alignItems: "center" }}>
                    <Typography
                        sx={{
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        fontSize: "36px",
                        color: "#000000",
                        textAlign: "center"
                        }}>
                        <CustomTitle content='Events' />
                    </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                            sx={{
                            marginRight: "10px",
                            fontFamily: "Nunito",
                            fontWeight: "700",
                            }}>
                            Kategori
                        </Typography>
                        <IconButton
                            id='category-button'
                            aria-controls="basic-menu"
                            aria-haspopup='true'
                            aria-expanded = "true"
                            onClick={handleClickCategory}
                            size='small'
                            sx={{
                            backgroundColor: "#FFFFFF",
                            border: "2px solid #F34F51",
                            borderRadius: "5px",
                            "&:hover": { backgroundColor: "#F34F51" },
                            }}>
                            <FilterAltRoundedIcon sx={{ color: "black" }} />
                        </IconButton>
                            <Menu
                                id='basic-menu'
                                anchorEl={categoryOpenMenu}
                                open={openCategory}
                                onClose={handleCloseCategory}
                                MenuListProps={{
                                "aria-labelledby": "category-button",
                                }}>
                                <MenuItem 
                                //onClick={handleAllCategory}
                                >
                                    All Category
                                </MenuItem>
                                {category.map((item) => (
                                <MenuItem key={item.id}
                                //onClick={handleCategoryProcessor}
                                >{item.description}
                                </MenuItem>
                                ))}
                            </Menu>
                    </Box>
                </Box>
                {/* Card Grid */}
                <Grid
                    container
                    spacing={4}
                    sx={{
                    maxWidth: "1300px",
                    minHeight: "800px",
                    justifyContent: {
                        xs: "space-between",
                        sm: "space-evenly",
                        md: "flex-start",
                    },
                    }}>
                    {events.map((value) => (
                    <Link href={`/details/${value.id}`}>
                    <Grid item key={value.id}>
                        <HomeCard
                        name={value.title}
                        image={value.photo}
                        time={value.end_date}
                        //OnClick={()=><Link href={`/details/${value.id}`}/>}
                        />
                    </Grid>
                    </Link>
                     ))}
                </Grid>
                <Box
                    sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "30px 0px",
                    }}>
                    <Pagination
                    count={Math.ceil(countProducts / 10)}
                    variant='outlined'
                    shape='rounded'
                    page={page}
                    //onChange={handleChange}
                    sx={{
                        ".MuiButtonBase-root": {
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        color: "white",
                        backgroundColor: "#F34F51",
                        outline: "none",
                        border: "none",
                        },
                        ".Mui-selected": {
                        backgroundColor: "#FFFFFF",
                        border: "2px solid #F34F51",
                        color: "black",
                        },
                        ".MuiButtonBase-root:hover": {
                        backgroundColor: "#F34F51",
                        },
                    }}
                    />
                </Box>
            </Box>
                <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleCloseAlert}>
                <Alert
                    onClose={handleCloseAlert}
                    color="warning"
                    sx={{ width: "100%" }}>
                    Jalan
                </Alert>
                </Snackbar>
        </Box>
    )
}
export default HomePage;