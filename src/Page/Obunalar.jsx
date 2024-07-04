import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Footer from "../Layout/Footer";
import DrawerAppBar from "../Layout/Header";

function Obunalar() {
  return (
    <div style={{ backgroundColor: "#111111" }}>
      <DrawerAppBar />
      <Grid container spacing={3} justifyContent="center" style={{ padding: 20 }}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: "25px", height: "55vh", bgcolor: "#1B1B1B", padding: "5%" }}>
            <CardContent>
              <Typography fontWeight={"200px"} color={"white"} variant="h4" align="start" gutterBottom>
                Premium
              </Typography>
              <Box
                sx={{ display: "flex", gap: "30px", flexDirection: "row", alignItems: "flex-start", color: "white" }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="h5">
                    170+
                  </Typography>
                  <span style={{ fontSize: "14px", color: "#C0C0C0" }}>TV kanallar</span>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "20%" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="h5">
                    50 000+
                  </Typography>
                  <span style={{ fontSize: "14px", color: "#C0C0C0" }}>filmlar va seriallar</span>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "30px",
                  flexDirection: "row",

                  color: "white",
                  marginTop: "4%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="h5">
                    2 200+
                  </Typography>
                  <span style={{ fontSize: "14px", color: "#C0C0C0" }}>Multifilm</span>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "20%" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="h5">
                    2 500+
                  </Typography>
                  <span style={{ fontSize: "14px", color: "#C0C0C0" }}>uz video</span>
                </Box>
              </Box>
              <Typography mt={5} fontSize={"20px"} color={"#C0C0C0"} variant="body2" align="start">
                Obuna Wink, Start, Amediateka va Premier.one kontentini o'z ichiga oladi.
              </Typography>
              <Typography mt={2} variant="h4" align="start" color="white">
                49 000 dan sotib oling
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: "25px", height: "55vh", bgcolor: "#1B1B1B", padding: "5%" }}>
            <CardContent>
              <Typography fontWeight={"bold"} color={"white"} variant="h4" align="start" gutterBottom>
                Pro
              </Typography>
              <Box
                sx={{ display: "flex", gap: "30px", flexDirection: "row", alignItems: "flex-start", color: "white" }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="h5">
                    170+
                  </Typography>
                  <span style={{ fontSize: "14px", color: "#C0C0C0" }}>TV kanallar</span>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "20%" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="h5">
                    25 000+
                  </Typography>
                  <span style={{ fontSize: "14px", color: "#C0C0C0" }}>filmlar va seriallar</span>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "30px",
                  flexDirection: "row",

                  color: "white",
                  marginTop: "4%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="h5">
                    2 200+
                  </Typography>
                  <span style={{ fontSize: "14px", color: "#C0C0C0" }}>Multifilm</span>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "20%" }}></Box>
              </Box>
              <Typography mt={5} fontSize={"20px"} color={"#C0C0C0"} variant="body2" align="start">
                Obuna Wink, Start, Amediateka va Premier.one kontentini o'z ichiga olmayadi.
              </Typography>
              <Typography mt={2} variant="h4" align="start" color="white">
                29 000 dan sotib oling
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: "25px", height: "55vh", bgcolor: "#1B1B1B", padding: "5%" }}>
            <CardContent>
              <Typography fontWeight={"bold"} color={"white"} variant="h4" align="start" gutterBottom>
                Lite
              </Typography>
              <Box
                sx={{ display: "flex", gap: "30px", flexDirection: "row", alignItems: "flex-start", color: "white" }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="h5">
                    120+
                  </Typography>
                  <span style={{ fontSize: "14px", color: "#C0C0C0" }}>TV kanallar</span>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "20%" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="h5">
                    25 000+
                  </Typography>
                  <span style={{ fontSize: "14px", color: "#C0C0C0" }}>filmlar va seriallar</span>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "30px",
                  flexDirection: "row",

                  color: "white",
                  marginTop: "4%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: "bold" }} variant="h5">
                    2 200+
                  </Typography>
                  <span style={{ fontSize: "14px", color: "#C0C0C0" }}>Multifilm</span>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "20%" }}></Box>
              </Box>
              <Typography mt={5} fontSize={"20px"} color={"#C0C0C0"} variant="body2" align="start">
                Obuna Wink, Start, Amediateka va Premier.one kontentini o'z ichiga olmayadi.
              </Typography>
              <Typography mt={2} variant="h4" align="start" color="white">
                19 000 dan sotib oling
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box mt={5} ml={2}>
        <Typography color={"white"} variant="h4">
          Qo'shimcha Obunalar
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center" style={{ padding: 20 }}>
        {/* Card 1 */}
        <Grid item xs={12} sm={3}>
          <Card sx={{ bgcolor: "#1b1b1b", color: "white", borderRadius: "20px", height: "45vh" }}>
            <CardContent>
              <Typography variant="h5">Uz Video</Typography>
              <Typography color={"#C0C0C0"} mt={5} variant="body1">
                O'zbek Milliy filmlari va seriallarini, shuningdek milliy mashhur telekanallarida yoshlarning yorqin
                dasturlarini tomosha qilishdan zavqlaning.
              </Typography>
              <Typography mt={5} variant="h5">
                10 000 dan sotib oling
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={3}>
          <Card sx={{ bgcolor: "#1b1b1b", color: "white", borderRadius: "20px", height: "45vh" }}>
            <CardContent>
              <Typography variant="h5">Setanta-tv</Typography>
              <Typography color={"#C0C0C0"} mt={5} variant="body1">
                Setanta Sports 1 va Setanta Sports 2 telekanallarida dunyodagi turli va eng yirik sport musobaqalarini
                tomosha qiling
              </Typography>
              <Typography mt={6} variant="h5">
                14 999 dan sotib oling
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={3}>
          <Card sx={{ bgcolor: "#1b1b1b", color: "white", borderRadius: "20px", height: "45vh" }}>
            <CardContent>
              <Typography variant="h5">Start-ru</Typography>
              <Typography color={"#C0C0C0"} mt={5} variant="body1">
                START platformasidan, «Содержанки», «Папины дочки. Новые», «Бедные Абрамовичи» va boshqa ko’plab rus
                seriallarining eksklyuziv premyeralari
              </Typography>
              <Typography mt={5} variant="h5">
                16 000 dan sotib oling
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={3}>
          <Card sx={{ bgcolor: "#1b1b1b", color: "white", borderRadius: "20px", height: "45vh" }}>
            <CardContent>
              <Typography variant="h5">premier-one</Typography>
              <Typography color={"#C0C0C0"} mt={5} variant="body1">
                «THT» kanalining yangi komik filmlari, seriallari va ko’rsatuvlari, shu jumladan: «Stand UP», «Comedy
                Club», «Концерты», «Однажды в России» va boshqalar
              </Typography>
              <Typography mt={5} variant="h5">
                15 000 dan sotib oling
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 5 */}
        <Grid item xs={12} sm={3}>
          <Card sx={{ bgcolor: "#1b1b1b", color: "white", borderRadius: "20px", height: "45vh" }}>
            <CardContent>
              <Typography variant="h5">Amediateka</Typography>
              <Typography color={"#C0C0C0"} mt={5} variant="body1">
                Jahon studiyalarining original Amedia dublyajidagi eng yaxshi seriyalar: HBO, FOX, Showtime, Startz,
                BBC, CBS, Sony Pictures.
              </Typography>
              <Typography mt={5} variant="h5">
                16 000 dan sotib oling
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 6 */}
        <Grid item xs={12} sm={3}>
          <Card sx={{ bgcolor: "#1b1b1b", color: "white", borderRadius: "20px", height: "45vh" }}>
            <CardContent>
              <Typography variant="h5">Wink</Typography>
              <Typography color={"#C0C0C0"} mt={5} variant="body1">
                Wink original seriallari, shuningdek, CTC kanalidagi filmlar va seriallar.
              </Typography>
              <Typography mt={5} variant="h5">
                16 000 dan sotib oling
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default Obunalar;
