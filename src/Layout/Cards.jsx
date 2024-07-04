import React, { useRef, useState } from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Slider from "react-slick";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const MovieCard = ({ movies }) => {
  const [hoveredMovieId, setHoveredMovieId] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 10,
    restDelta: 0.001,
  });

  const toggleFavorite = (movieId) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter(id => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
  };

  function useParallax(value, dis) {
    return useTransform(value, [0, 1], [-dis, dis]);
  }

  const isFavorite = (movieId) => {
    return favorites.includes(movieId);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <Box key={movie.id} p={1}>
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
            onMouseEnter={() => setHoveredMovieId(movie.id)}
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
              <RouterLink to={`/film/${movie.id}`} key={movie.id} style={{ textDecoration: "none" }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={movie.media && movie.media[1]}
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
              {hoveredMovieId === movie.id && (
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
                      {movie.id}
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
                    {/* Wrap Typography with motion.div for animation */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Typography variant="h6" sx={{ color: "white" }}>
                        {movie.title}
                      </Typography>
                    </motion.div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 2.5 }}
                    >
                      <Typography variant="h6" sx={{ color: "white" }}>
                        {movie.type}
                      </Typography>
                    </motion.div>
                  </Box>
                </>
              )}
              {/* Favorite icon button */}
              <IconButton
                sx={{
                  position: "absolute",
                  top: 5,
                  right: 5,
                  color: isFavorite(movie.id) ? "red" : "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
                onClick={() => toggleFavorite(movie.id)}
              >
                {isFavorite(movie.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
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
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body2" color="green">
              {movie.type}
            </Typography>
          </CardContent>
        </Box>
      ))}
    </Slider>
  );
};

export default MovieCard;
