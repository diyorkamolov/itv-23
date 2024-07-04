import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Footer from "../Layout/Footer";
import DrawerAppBar from "../Layout/Header";

function Seriallar() {
  const { data, isLoading, error } = useQuery("multifilm", async () => {
    const res = await axios.get("http://localhost:3001/multifilm"); // Update endpoint for TV series data
    console.log("API Response:", res.data);
    return res.data;
  });

  const [hoveredSeriesId, setHoveredSeriesId] = useState(null);
  const [delayedLoading, setDelayedLoading] = useState(true);

  const handleMouseEnter = (seriesId) => {
    setHoveredSeriesId(seriesId);
  };

  const handleMouseLeave = () => {
    setHoveredSeriesId(null);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedLoading(false);
    }, 3000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || delayedLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={80} sx={{ color: "black" }} />
      </Box>
    );
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  // Assuming data is an array of series with title, description, and image URL
  const series = data;

  return (
    <div style={{ backgroundColor: "#1B1B1B", padding: '2%' }}>
      <DrawerAppBar />
        <Typography sx={{ fontWeight: 500, color: "#fff", paddingTop: "3%" }} variant="h3">
          Seriallar {/* Updated heading */}
        </Typography>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Breadcrumbs sx={{ color: "white", paddingTop: "1%" }}>
              <Link sx={{ fontSize: "20px", color: "#fff" }} underline="hover" href="/">
                Bosh sahifa
              </Link>
              <Typography sx={{ fontSize: "20px", color: "gray" }}>Seriallar</Typography>
            </Breadcrumbs>
          </Stack>
        </Grid>
        <Box
          sx={{
            width: "100%",
            bgcolor: "#1B1B1B",
            borderRadius: "10px",
            paddingLeft: "1%",
            paddingRight: "1%",
            marginTop: "2%",
            height: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              width: "100%",
              paddingTop: "2%",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Accordion 1 */}
            <Accordion
              sx={{
                width: { xs: "100%", md: "20%" },
                backgroundColor: "#1B1B1B",
                border: "1px solid #363636", // dark gray border
                borderRadius: "10px",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: "#fff", // white border on hover
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  backgroundColor: "#1B1B1B", // accordions bg color
                  borderRadius: "10px",
                  color: "#363636", // text color
                }}
              >
                Janr
              </AccordionSummary>
            </Accordion>

            {/* Accordion 2 */}
            <Accordion
              sx={{
                width: { xs: "100%", md: "20%" },
                backgroundColor: "#1B1B1B",
                border: "1px solid #363636", // dark gray border
                borderRadius: "10px",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: "#fff", // white border on hover
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                  backgroundColor: "#1B1B1B", // accordions bg color
                  borderRadius: "10px",
                  color: "#363636", // text color
                }}
              >
                Mamlakat
              </AccordionSummary>
            </Accordion>

            {/* Accordion 3 */}
            <Accordion
              sx={{
                width: { xs: "100%", md: "20%" },
                backgroundColor: "#1B1B1B",
                border: "1px solid #363636", // dark gray border
                borderRadius: "10px",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: "#fff", // white border on hover
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel3-content"
                id="panel3-header"
                sx={{
                  backgroundColor: "#1B1B1B", // accordions bg color
                  borderRadius: "10px",
                  color: "#363636", // text color
                }}
              >
                Reyting bo'yicha
              </AccordionSummary>
            </Accordion>

            {/* Accordion 4 */}
            <Accordion
              sx={{
                width: { xs: "100%", md: "20%" },
                backgroundColor: "#1B1B1B",
                border: "1px solid #363636", // dark gray border
                borderRadius: "10px",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: "#fff", // white border on hover
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel4-content"
                id="panel4-header"
                sx={{
                  backgroundColor: "#1B1B1B", // accordions bg color
                  borderRadius: "10px",
                  color: "#363636", // text color
                }}
              >
                Yil
              </AccordionSummary>
            </Accordion>

            {/* Accordion 5 */}
            <Accordion
              sx={{
                width: { xs: "100%", md: "20%" },
                backgroundColor: "#1B1B1B",
                border: "1px solid #363636", // dark gray border
                borderRadius: "10px",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: "#fff", // white border on hover
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel5-content"
                id="panel5-header"
                sx={{
                  backgroundColor: "#1B1B1B", // accordions bg color
                  borderRadius: "10px",
                  color: "#363636", // text color
                }}
              >
                Audio Trek
              </AccordionSummary>
            </Accordion>

            {/* Accordion 6 */}
            <Accordion
              sx={{
                width: { xs: "100%", md: "20%" },
                backgroundColor: "#1B1B1B",
                border: "1px solid #363636", // dark gray border
                borderRadius: "10px",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: "#fff", // white border on hover
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel6-content"
                id="panel6-header"
                sx={{
                  backgroundColor: "#1B1B1B", // accordions bg color
                  borderRadius: "10px",
                  color: "#363636", // text color
                }}
              >
                KinoStudiya
              </AccordionSummary>
            </Accordion>
          </Box>

          <Box sx={{ gap: "10px", display: "flex", marginTop: "20px", marginBottom: "5%" }}>
            <Button
              sx={{
                bgcolor: "#111111",
                color: "#fff",
                width: {
                  xs: "20%", // mobile version
                  md: "7%", // desktop version
                },
                height: {
                  xs: "30px", // mobile version
                  md: "auto", // desktop version (default height)
                },
                borderRadius: {
                  xs: "5px", // mobile version
                  md: "50px", // desktop version
                },
                marginBottom: "3%",
              }}
            >
              + Bepul
            </Button>
            <Button
              sx={{
                bgcolor: "#111111",
                color: "#fff",
                width: {
                  xs: "30%", // mobile version
                  md: "10%", // desktop version
                },
                height: {
                  xs: "30px", // mobile version
                  md: "auto", // desktop version (default height)
                },
                borderRadius: {
                  xs: "5px", // mobile version
                  md: "50px", // desktop version
                },
                marginBottom: "3%",
              }}
            >
              + O'zbek tilida
            </Button>
          </Box>
        </Box>
        {/* Series Cards */}
        <Grid container spacing={{ xs: 0.5, sm: 1 }} sx={{ marginTop: "20px" }}>
          {series.map((seriesItem, index) => (
            <Grid key={index} item xs={6} sm={6} md={4} lg={3} xl={2}>
              <Box key={seriesItem.id} p={0.5}>
                <Card
                  sx={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    position: "relative",
                    marginBottom: "1px",
                    "&:hover": {
                      transform: "scale(1.05)", // Adjust the scale value as needed
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                  onMouseEnter={() => handleMouseEnter(seriesItem.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <CardActionArea
                    sx={{
                      "&:hover .hover-overlay": {
                        opacity: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                      },
                      "&:hover .play-button": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Link style={{ textDecoration: "none" }} to={`Id/${seriesItem.id}`}>
                      <CardMedia
                        component="img"
                        height="auto"
                        image={seriesItem.media && seriesItem.media[1]}
                        sx={{
                          width: "100%",
                          borderRadius: "15px",
                          transition: "transform 0.3s ease, filter 0.3s ease",
                          "&:hover": {
                            filter: "brightness(50%)",
                          },
                        }}
                        className="hover-overlay"
                      />
                      {hoveredSeriesId === seriesItem.id && (
                        <>
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              padding: "5px",
                              borderRadius: "10px",
                              zIndex: 1,
                            }}
                          >
                            <Typography variant="body2" sx={{ color: "white" }}>
                              {seriesItem.id}
                            </Typography>
                            <Typography variant="h6" sx={{ color: "white" }}>
                              iTv
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: "10px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              padding: "5px",
                              borderRadius: "10px",
                              zIndex: 1,
                            }}
                          >
                            <Typography variant="h6" sx={{ color: "white" }}>
                              {seriesItem.title}
                            </Typography>
                          </Box>
                        </>
                      )}
                    </Link>
                    <Box
                      className="play-button"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        zIndex: 1,
                      }}
                    >
                      <Typography
                        variant="h4"
                        component="div"
                        sx={{
                          padding: "10px 20px",
                          borderRadius: "10px",
                          color: "white",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        ▶
                      </Typography>
                    </Box>
                  </CardActionArea>
                </Card>
                <CardContent
                  sx={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "auto",
                    "& .MuiTypography-root": {
                      fontSize: { xs: "0.75rem", sm: "1rem" },
                    },
                  }}
                >
                  <Typography sx={{ textAlign: "start" }} gutterBottom variant="h5" component="div">
                    {seriesItem.title}
                  </Typography>
                  <Typography sx={{ textAlign: "start", color: "green" }} variant="body2" color="white">
                    {seriesItem.type}
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
 
      <Footer />
    </div>
  );
}

export default Seriallar;
