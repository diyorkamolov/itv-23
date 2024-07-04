import React, { useState } from "react";
import DrawerAppBar from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Box, Container, Typography } from "@mui/material";
import MovieCard from "../Layout/Cards"; // Adjust the path based on your actual directory structure

const Saralanganlar = ({ movies }) => {
    const [likedMovies, setLikedMovies] = useState([]);

    const handleLike = (movieId) => {
        if (likedMovies.includes(movieId)) {
            setLikedMovies(likedMovies.filter((id) => id !== movieId));
        } else {
            setLikedMovies([...likedMovies, movieId]);
        }
    };

    if (!movies || movies.length === 0) {
        return (
            <Box sx={{ backgroundColor: "#111111", minHeight: "100vh", paddingTop: "10vh" }}>
                <DrawerAppBar />
                <Container maxWidth="lg">
                    <Box sx={{ bgcolor: "#111111", p: 2, borderRadius: 1, marginTop: 2 }}>
                        <Typography variant="h1" sx={{ color: "white" }}>
                            Saralanganlar Page
                        </Typography>
                        <Typography variant="body1" sx={{ color: "white", mt: 2 }}>
                            This is the content for Saralanganlar page.
                        </Typography>
                        <Typography variant="body1" sx={{ color: "white", mt: 2 }}>
                            No movies available.
                        </Typography>
                    </Box>
                </Container>
                <Footer />
            </Box>
        );
    }

    return (
        <Box sx={{ backgroundColor: "#111111", minHeight: "100vh", paddingTop: "10vh" }}>
            <DrawerAppBar />
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: "#111111", p: 2, borderRadius: 1, marginTop: 2 }}>
                    <Typography variant="h1" sx={{ color: "white" }}>
                        Saralanganlar Page
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white", mt: 2 }}>
                        This is the content for Saralanganlar page.
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white", mt: 2 }}>
                        Liked Movies:
                        {likedMovies.length === 0 ? (
                            <Typography variant="body1" sx={{ color: "white", mt: 2 }}>
                                No movies liked yet.
                            </Typography>
                        ) : (
                            likedMovies.map((movieId) => <span key={movieId}> {movieId}</span>)
                        )}
                    </Typography>
                </Box>
                <Box mt={4}>
                    <Typography variant="h2" sx={{ color: "white" }}>
                        Movies
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        {movies.map((movie) => (
                            <Box key={movie.id} p={1} sx={{ width: "25%" }}>
                                <MovieCard movie={movie} handleLike={handleLike} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
};

export default Saralanganlar;
