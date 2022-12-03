import { Box, Container, Grid, Typography } from "@mui/material";
import { lineHeight } from "@mui/system";
import battery from "../images/Logo_Recreate_RGB.png";
import "./home.css"

export const Home = () => {
  return (
    <>
      <Box
        className="first-box"        
      >
        <Box className="head-pa">
          <h1>
            Lithium Battery <br />
            For e-Bikes
          </h1>
          <p>
            Equbz is an Indian manufacturing and engineering company located in
            Tamilnadu that specializes in lithium battery pack technology and
            manufacturing. The company was founded by two electrical engineers,
            who is passionate about technology and riding and wanted a better
            alternative than the 180+ year old lead-acid technology. The desire
            to remove weight was also very important and after years of research
            and development, Equbz launched a full line of lithium batteries for
            all your motorcycle, scooter, car, automotive, and experimental and
            certified battery needs. we also specialize in custom battery
            applications and can work with you on achieving desired goals and
            finished products. We are proud to be an Indian company with a
            mission to have the highest quality and best performing lithium
            battery in the world!
          </p>
        </Box>
        <Box className="logo">
          <img src={battery} alt="" srcset="" />
        </Box>
      </Box>
      <section className="second-box">
        <h1 style={{textAlign:'center'}}>Products</h1>
        <Container sx={{display:'grid',gridColumn:"auto"}} >
          <Grid item xs={12} md={4}>
            <Box className="product">hi</Box>
          </Grid>
          
        </Container>
      </section>
      <Box sx={{ bgcolor: "#749F82", height: "100vh" }} />
    </>
    // <section>
    //   <Box
    //     sx={{
    //       display:'flex',
    //       flexDirection:'column',
    //       alignContent:"center",
    //       width:'50%'
    //     }}
    //   >
    //     <h1>eQubz</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia
    //       consequuntur dolor perferendis incidunt unde consectetur enim magni,
    //       tempora nulla necessitatibus accusamus, repellat exercitationem ex non
    //       nemo iure. Magni, similique!
    //     </p>
    //   </Box>
    //   <Box style={{ width: "50%" }}>Hi</Box>
    // </section>
  );
};
