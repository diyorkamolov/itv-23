import React, { useEffect, useState, useRef } from "react";
import { Box, Button, CircularProgress, Container, Typography } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import MovieCard from "./Layout/Cards";
import MovieCarousel from "./Layout/Caroucel";
import Footer from "./Layout/Footer";
import DrawerAppBar from "./Layout/Header";

const useDelayedLoading = (isLoading, delay) => {
  const [delayedLoading, setDelayedLoading] = useState(true);

  useEffect(() => {
    let timer;
    if (isLoading) {
      setDelayedLoading(true);
    } else {
      timer = setTimeout(() => {
        setDelayedLoading(false);
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [isLoading, delay]);

  return delayedLoading;
};

function useParallax(value, dis) {
  return useTransform(value, [0, 1], [-dis, dis]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  
  return (
    <section>
      <div ref={ref}>
        <img src={`/${id}.jpg`} alt="Logo" />
      </div>
      <motion.h2 style={{ y }}> {`#00${id}`} </motion.h2>
    </section>
  );
}

function App() {
  const { data, isLoading, error } = useQuery("film", async () => {
    const res = await axios.get("http://localhost:3001/film");
    console.log("API Response:", res.data);
    return res.data;
  });
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 10,
    restDelta: 0.001,
  });

  const delayedLoading = useDelayedLoading(isLoading, 1000); // 1000ms delay

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (delayedLoading) {
    console.log("Loading data...");
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20%",
        }}
      >
        <CircularProgress size={80} sx={{ color: "black" }} />
      </Box>
    );
  }

  if (error) {
    console.error("Error loading data:", error);
    return <div>Error loading data</div>;
  }

  console.log("Data:", data);

  // Filter movies by category
  const famousMovies = data.filter((film) => film.category === "famous");
  const popularMovies = data.filter((film) => film.category === "popular");
  const newReleases = data.filter((film) => film.category === "new-releases");
  const topRated = data.filter((film) => film.category === "top-rated");

  return (
    <div style={{ backgroundColor: "#111111" }}>
      <DrawerAppBar />
      <MovieCarousel />
      <Container maxWidth="2xl" style={{ backgroundColor: "#111111" }}>
        <Box sx={{ marginTop: "2%" }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5 }}
          >
            <Typography sx={{ fontSize: "22px", color: "white" }} variant="h4" align="start" gutterBottom>
              Eng Kutilgan Filmlar va Seriallar
            </Typography>
          </motion.div>
          <MovieCard movies={topRated} />
        </Box>
        <Box sx={{ marginTop: "-1%" }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.5 }}
          >
            <Typography sx={{ fontSize: "22px", color: "white" }} variant="h4" align="start" gutterBottom>
              Eng Kutilgan Filmlar va Seriallar
            </Typography>
          </motion.div>
          <MovieCard movies={popularMovies} />
        </Box>

        {showMore && (
          <>
            <Box sx={{ marginTop: "2%" }}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.5 }}
              >
                <Typography sx={{ fontSize: "22px", color: "white" }} variant="h4" align="start" gutterBottom>
                  Tim Rotning eng yorqin rollari
                </Typography>
              </motion.div>
              <MovieCard movies={famousMovies} />
            </Box>
            <Box sx={{ marginTop: "2%" }}>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.5 }}
              >
                <Typography sx={{ fontSize: "22px", color: "white" }} variant="h4" align="start" gutterBottom>
                  Bolalarni himoya qilish kuniga
                </Typography>
              </motion.div>
              <MovieCard movies={newReleases} />
            </Box>
          </>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={toggleShowMore}
            sx={{
              marginBottom: "10%",
              width: "100%",
            }}
            style={{
              backgroundColor: "black", // This sets the background color to black
              color: "white", // This sets the text color to white
            }}
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
