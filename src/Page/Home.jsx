import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

import MovieCard from "../Layout/Cards";
import MovieCarousel from "../Layout/Caroucel";
import Footer from "../Layout/Footer";
import DrawerAppBar from "../Layout/Header";

function HomePage() {
  const { data, isLoading, error } = useQuery("film", async () => {
    const res = await axios.get("http://localhost:3001/film");
    console.log("API Response:", res.data);
    return res.data;
  });

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  if (isLoading) {
    console.log("Loading data...");
    return <div>Loading...</div>;
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
          <Typography sx={{ fontSize: "22px" }} color={"white"} variant="h4" align="start" gutterBottom>
            Eng Kutilgan Filmlar va Seriallar
          </Typography>
          <MovieCard movies={topRated} />
        </Box>
        <Box sx={{ marginTop: "-1%" }}>
          <Typography sx={{ fontSize: "22px" }} color={"white"} variant="h4" align="start" gutterBottom>
            Eng Kutilgan Filmlar va Seriallar
          </Typography>
          <MovieCard movies={popularMovies} />
        </Box>

        {showMore && (
          <>
            <Box sx={{ marginTop: "2%" }}>
              <Typography sx={{ fontSize: "22px" }} color={"white"} variant="h4" align="start" gutterBottom>
                Tim Rotning eng yorqin rollari
              </Typography>
              <MovieCard movies={famousMovies} />
            </Box>
            <Box sx={{ marginTop: "2%" }}>
              <Typography sx={{ fontSize: "22px" }} color={"white"} variant="h4" align="start" gutterBottom>
                Bolalarni himoya qilish kuniga
              </Typography>
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

export default HomePage;
