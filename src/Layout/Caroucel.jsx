import ShareIcon from "@mui/icons-material/Share";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const movies = [
  {
    id: "1",

    media: [
      "https://files.itv.uz/uploads/helper/2024/06/20//11ac76fde88811ff5744f28571efb742-q-1920x750.jpeg",
      "https://files.itv.uz/uploads/helper/2024/06/20//11ac76fde88811ff5744f28571efb742-q-1920x750.jpeg",
    ],
  },
  {
    id: "2",
    title: "I Am Captain",

    Rating: "7.6",
    media: [
      "https://files.itv.uz/uploads/helper/2024/06/21//55e6af7db401fb99f075a926ed5f4682-q-1920x750.jpeg",
      "https://example.com/images/i_am_captain.jpg",
    ],
    type: "Drama",
    status: false,
  },
  {
    id: "3",
    title: "Super Bride",

    Rating: "6.6",
    media: [
      "https://files.itv.uz/uploads/helper/2024/06/12//88e1211fcd9bc3bbc416441d703cb60f-q-1920x750.jpeg",
      "https://example.com/images/super_bride.jpg",
    ],
    type: "Romantic Comedy",
    status: false,
  },
  {
    id: "4",
    title: "War and Peace",

    Rating: "8.0",
    media: [
      "https://files.itv.uz/uploads/helper/2024/05/06//88141578c1eeef9831a119f9e631b033-q-1920x750.jpeg",
      "https://example.com/images/war_and_peace.jpg",
    ],
    type: "Historical Drama",
    status: false,
  },
];

const MovieCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
      setTimer(3); // Reset timer to 3 seconds on each interval
    }, 3000);

    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(countdown);
    };
  }, [timer]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setTimer(3); // Reset timer when dot is clicked
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000",
        marginTop: "-9%",
      }}
    >
      {movies.map((movie, index) => (
        <Box
          key={movie.id}
          sx={{
            position: index === currentIndex ? "relative" : "absolute",
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 1s",
            width: "100%",
            height: "90vh",
            display: index === currentIndex ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ width: "100%", height: "90vh", position: "relative" }}>
            <CardMedia
              component="div"
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0)), url(${movie.media[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "30%",
                left: "5%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                color: "#fff",
              }}
            >
              <Typography gutterBottom variant="h4" component="div">
                {movie.title}
              </Typography>
              <Typography sx={{ color: "white", fontSize: "20px" }} variant="body2">
                {movie.description}
              </Typography>
              <Box sx={{ mt: 6, display: "flex", gap: 1 }}>
                <Button variant="contained" sx={{ bgcolor: "green", width: "150px" }}>
                  Batafsil
                </Button>
                <Button sx={{ bgcolor: "gray", width: "16px", height: "46px", borderRadius: "10px" }} color="primary">
                  <ShareIcon sx={{ color: "#fff" }} />
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: "5%",
                right: "5%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ fontSize: "25px", color: "green", display: "flex", alignItems: "center" }}>
                {timer}s
                <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
                  {movies.map((_, dotIndex) => (
                    <Box
                      key={dotIndex}
                      sx={{
                        width: "10px",
                        height: "10px",
                        bgcolor: dotIndex === currentIndex ? "green" : "rgba(255, 255, 255, 0.5)",
                        borderRadius: "50%",
                        ml: dotIndex === 0 ? 0 : 1,
                      }}
                      onClick={() => handleDotClick(dotIndex)}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default MovieCarousel;
