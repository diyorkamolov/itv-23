import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <Box sx={{ bgcolor: "#111111", color: "white", p: 4 }}>
      <Grid container spacing={4}>
        {/* Left half */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {isMobile ? (
              <>
                <Grid item xs={12}>
                  <Accordion sx={{ width: "100%", bgcolor: "#111111", color: "white" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        justifyContent: "space-between",
                        borderBottom: "1px solid white", // white hr line
                      }}
                    >
                      <Typography variant="h6">Katalog</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2">
                        Biz haqimizda
                        <br />
                        <Link
                          href="#"
                          color="inherit"
                          underline="none"
                          sx={{ color: "white", "&:hover": { color: "white" } }}
                        >
                          Kontaklar
                        </Link>
                        <br />
                        <Link
                          href="#"
                          color="inherit"
                          underline="none"
                          sx={{ color: "white", "&:hover": { color: "white" } }}
                        >
                          Qo'llab-quvvatlash
                        </Link>
                        <br />
                        <Link
                          href="#"
                          color="inherit"
                          underline="none"
                          sx={{ color: "white", "&:hover": { color: "white" } }}
                        >
                          Obunalar
                        </Link>
                        <br />
                        <Link
                          href="#"
                          color="inherit"
                          underline="none"
                          sx={{ color: "white", "&:hover": { color: "white" } }}
                        >
                          Hamkorlar
                        </Link>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <Grid item xs={12}>
                  <Accordion sx={{ width: "100%", bgcolor: "#111111", color: "white" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                      sx={{
                        justifyContent: "space-between",
                        borderBottom: "1px solid gray", // white hr line
                      }}
                    >
                      <Typography variant="h6">Column 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2">
                        Tv
                        <br />
                        <Link
                          href="#"
                          color="inherit"
                          underline="none"
                          sx={{ color: "white", "&:hover": { color: "white" } }}
                        >
                          Filmlar
                        </Link>
                        <br />
                        <Link
                          href="#"
                          color="inherit"
                          underline="none"
                          sx={{ color: "white", "&:hover": { color: "white" } }}
                        >
                          Seriallar
                        </Link>
                        <br />
                        <Link
                          href="#"
                          color="inherit"
                          underline="none"
                          sx={{ color: "white", "&:hover": { color: "white" } }}
                        >
                          Multifilmlar
                        </Link>
                        <br />
                        <Link
                          href="#"
                          color="inherit"
                          underline="none"
                          sx={{ color: "white", "&:hover": { color: "white" } }}
                        >
                          Uz Video
                        </Link>
                        <br />
                        <Link
                          href="#"
                          color="inherit"
                          underline="none"
                          sx={{ color: "white", "&:hover": { color: "white" } }}
                        >
                          Anime
                        </Link>
                        <br />
                        <Link
                          href="#"
                          color="inherit"
                          underline="none"
                          sx={{ color: "white", "&:hover": { color: "white" } }}
                        >
                          Radio
                        </Link>
                        <br />
                        <Link
                          href="#"
                          color="inherit"
                          underline="none"
                          sx={{ color: "white", "&:hover": { color: "white" } }}
                        >
                          Axborotlar
                        </Link>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={6} sm={3}>
                  <Typography variant="h6">Katalog</Typography>
                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Kontaklar
                  </Link>
                  <br />
                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Qo'llab-quvvatlash
                  </Link>
                  <br />
                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Obunalar
                  </Link>
                  <br />
                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Hamkorlar
                  </Link>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="h6">Column 2</Typography>
                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Tv
                  </Link>
                  <br />
                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Filmlar
                  </Link>
                  <br />
                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Seriallar
                  </Link>
                  <br />
                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Multifilmlar
                  </Link>
                  <br />
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="h6">Biz haqimizda</Typography>

                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Uz Video
                  </Link>
                  <br />
                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Anime
                  </Link>
                  <br />
                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Radio
                  </Link>
                  <br />
                  <Link href="#" color="inherit" underline="none" sx={{ color: "gray", "&:hover": { color: "white" } }}>
                    Axborotlar
                  </Link>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        {/* Right half */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex" }}>
            <Box mt={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
              <Typography variant="h6">Applications</Typography>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                <Box mt={2} sx={{ display: "flex", gap: 2, width: "100%" }}>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "gray",
                      "&:hover": { color: "#ffffff" },
                      backgroundColor: "black",
                      height: "6vh",
                      width: "100%",
                      borderRadius: "10px",
                      textAlign: "center",
                      paddingLeft: "3%",
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/758px-Apple_logo_white.svg.png?20220821122232"
                      alt="App Store"
                      height="32"
                    />
                    App Store
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "gray",
                      "&:hover": { color: "#ffffff" },
                      backgroundColor: "black",
                      height: "6vh",
                      width: "100%",
                      borderRadius: "10px",
                      textAlign: "center",
                      paddingLeft: "3%",
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/163px-Google_Play_2022_icon.svg.png"
                      alt="Google Play"
                      height="32"
                    />
                    Google Play
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "gray",
                      "&:hover": { color: "#ffffff" },
                      backgroundColor: "black",
                      height: "6vh",
                      width: "100%",
                      borderRadius: "10px",
                      textAlign: "center",
                      paddingLeft: "3%",
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Galaxy_store_logo.png?20230106152119"
                      alt="Google Play"
                      height="32"
                    />
                    Galaxy Store
                  </Link>
                </Box>
                <Box mt={2} sx={{ display: "flex", gap: 2, width: "100%" }}>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "gray",
                      "&:hover": { color: "#ffffff" },
                      backgroundColor: "black",
                      height: "6vh",
                      width: "100%",
                      borderRadius: "10px",
                      textAlign: "center",
                      paddingLeft: "3%",
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/758px-Apple_logo_white.svg.png?20220821122232"
                      alt="App Store"
                      height="32"
                    />
                    App Store
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "gray",
                      "&:hover": { color: "#ffffff" },
                      backgroundColor: "black",
                      height: "6vh",
                      width: "100%",
                      borderRadius: "10px",
                      textAlign: "center",
                      paddingLeft: "3%",
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/163px-Google_Play_2022_icon.svg.png"
                      alt="Google Play"
                      height="32"
                    />
                    Google Play
                  </Link>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "gray",
                      "&:hover": { color: "#ffffff" },
                      backgroundColor: "black",
                      height: "6vh",
                      width: "100%",
                      borderRadius: "10px",
                      textAlign: "center",
                      paddingLeft: "3%",
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Galaxy_store_logo.png?20230106152119"
                      alt="Google Play"
                      height="32"
                    />
                    Galaxy Store
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
