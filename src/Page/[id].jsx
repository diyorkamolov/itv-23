import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import Footer from "../Layout/Footer";
import DrawerAppBar from "../Layout/Header";
import VideoCarousel from "../Layout/VideoCaroucel";

function FilmsById() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const [delayedLoading, setDelayedLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/film/${id}`);
        setMovie(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setError("Error fetching movie");
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedLoading(false);
    }, 1000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading || delayedLoading) {
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
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const cardData = [
    {
      imgSrc:
        "https://files.itv.uz/uploads/content/snapshots/2024/06/25//bef8838d52a3b8ad482e262c71e72112-q-640x360.jpeg",
      text: "Card 1",
    },
    {
      imgSrc:
        "https://files.itv.uz/uploads/content/snapshots/2024/06/25//a6cf0b61de7b594b1a273b3e2ccd991e-q-640x360.jpeg",
      text: "Card 2",
    },
    {
      imgSrc:
        "https://files.itv.uz/uploads/content/snapshots/2024/06/25//8dfdf628a81cfdbcf908f0edf4c14cf4-q-640x360.jpeg",
      text: "Card 3",
    },
    {
      imgSrc:
        "https://files.itv.uz/uploads/content/snapshots/2024/06/25//2e76d4caaa4f6f1b9678f8df67815313-q-640x360.jpeg",
      text: "Card 4",
    },
  ];

  const images = [
    "https://files.itv.uz/uploads/content/poster/2024/05/03//5d78a0493fd4ccce14b3c6b40caf89af-q-700x1002.jpeg",
    "https://files.itv.uz/uploads/content/poster/2018/12/09/f6173809ff218ba715bf3e59c82da808-q-700x1002.jpeg",
    "https://files.itv.uz/uploads/content/poster/2018/12/06/87365b6c6483bd4f2c632e71dd6a88e5-q-700x1002.jpeg",
    "https://files.itv.uz/uploads/content/poster/2018/12/06/eeb6461c2043bf2c068a840af5a3e193-q-700x1002.jpeg",
    "https://files.itv.uz/uploads/content/poster/2020/06/08/253996c2266442beafb89ae94c8d4541-q-700x1002.jpeg",
    "https://files.itv.uz/uploads/content/poster/2020/05/25/4548d9f6bab91016ccd75070a9115ed2-q-700x1002.jpeg",
  ];

  return (
    <div style={{ backgroundColor: "#1B1B1B" }}>
      <DrawerAppBar />
      <VideoCarousel />
      <Container maxWidth="xl" sx={{ marginTop: "2%" }}>
        <Grid container spacing={3}>
          <Grid display={"flex"} gap={"20px"} item xs={12} sm={6}>
            <CardMedia
              component="img"
              height="auto"
              image={movie.media && movie.media[0]} // Adjust index based on your API response
              alt={movie.title}
              sx={{
                width: "30%",
                borderRadius: "15px",
                transition: "transform 0.3s ease, filter 0.3s ease",
                "&:hover": {
                  filter: "brightness(50%)",
                },
              }}
              className="hover-overlay"
            />
            <Grid color={"white"} item xs={12} sm={6}>
              <Typography variant="h4" gutterBottom>
                {movie.title}
              </Typography>
              <Typography variant="body1">Category: {movie.category}</Typography>
              <Typography variant="body1">Description: {movie.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Typography pt={2} color={"white"} variant="h4">
          Kadrlar
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: "5%",
            ml: "-15px",
          }}
        >
          {cardData.map((card, index) => (
            <Card
              key={index}
              sx={{
                width: { xs: "48%", sm: "18%" },
                height: { xs: "30vh", sm: "20vh" },
                backgroundColor: "#1b1b1b",
                color: "white",
                margin: "5px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <CardContent>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  src={card.imgSrc}
                  alt=""
                />
                <Typography variant="body2">{card.text}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginBottom: "5%",
            objectFit: "cover",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <Box key={index} p={1} sx={{ width: { xs: "48%", sm: "15%" } }}>
              <Card
                sx={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  marginBottom: "1px",
                  height: { xs: "40vh", sm: "40vh" },
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
                onMouseEnter={() => setHoveredMovieId(index)}
                onMouseLeave={() => setHoveredMovieId(null)}
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
                  <RouterLink to={`/film/${index}`} style={{ textDecoration: "none" }}>
                    <CardMedia
                      component="div"
                      sx={{
                        width: "100%",
                        height: "300px",
                        borderRadius: "15px",
                        backgroundColor: "#1b1b1b",
                        backgroundImage: `url(${images[index]})`,
                        backgroundSize: "cover",
                      }}
                      className="hover-overlay"
                    />
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
                  </RouterLink>
                  {hoveredMovieId === index && (
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
                          {index}
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
                          Movie Title {index + 1}
                        </Typography>
                      </Box>
                    </>
                  )}
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
                  Movie Title {index + 1}
                </Typography>
                <Typography sx={{ textAlign: "start", color: "green" }} variant="body2">
                  Movie Type
                </Typography>
              </CardContent>
            </Box>
          ))}
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default FilmsById;
