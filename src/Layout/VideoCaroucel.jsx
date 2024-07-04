import ShareIcon from "@mui/icons-material/Share";
import { Box, Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const movies = [
  {
    id: "1",
    title: "Video Title 1",
    description: "Description for Video 1",
    media: "https://youtu.be/yebOIkkYWuI?si=8ppcJ3c-GeceNKDU",
    type: "video",
  },
  {
    id: "2",
    title: "Video Title 2",
    description: "Description for Video 2",
    media: "https://youtu.be/JN8FupdFRk8?si=3rX7IFI_4-ZE1pnj",
    type: "video",
  },
  // Add more movies as needed
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
      setTimer(10); // Reset timer to 10 seconds on each interval
    }, 10000);

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
    <>
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
          marginTop: "-14%",
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
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ReactPlayer
                  url={movie.media}
                  playing={true}
                  loop={true}
                  muted={true}
                  width="100%"
                  height="100%"
                  config={{
                    youtube: {
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        modestbranding: 1,
                      },
                    },
                  }}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "30px",
                  left: "30px",
                  color: "#fff",
                  zIndex: 1,
                  mt: "15%",
                }}
              >
                <Typography gutterBottom variant="h4" component="div">
                  {movie.title}
                </Typography>
                <Typography sx={{ color: "white", fontSize: "20px" }} variant="body2">
                  {movie.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" sx={{ bgcolor: "green", width: "150px", mr: 1 }}>
                    Watch Now
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "gray", width: "46px", height: "46px", borderRadius: "50%" }}
                  >
                    <ShareIcon sx={{ color: "#fff" }} />
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "30px",
                  right: "30px",
                  color: "#fff",
                  zIndex: 1,
                }}
              >
                <Typography sx={{ fontSize: "25px", color: "green" }}>{timer}s</Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
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
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default VideoCarousel;
