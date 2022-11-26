import { Box,Container } from "@mui/material";
import logo from "../images/logo.jpg"

export const Home = () => {
  return (
    <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#749F82', height: '100vh',width:"100%",display:{md:'flex'},flexDirection:{xs:'column',md:'row'}, alignItems:'center'}} >
          <Box mt={{md:'10%',sm:'12%',xs:'20%'}} sx={{width:{xs:'100%',md:'50%'},pl:'5%'}} >
            <h1 style={{color:"#7DCE13",fontSize:{md:'3rem'}, textShadow:'1px 1px 4px black'}}>Complete Battery Solution</h1>
            <p style={{fontSize:{md:'1.5rem'}}}>Equbz lithium batteries have been the pioneer of cutting-edge technology that makes it one of the most advanced lithium battery packs on the market today; custom-designed cells to deliver the highest cranking amps possible; and comes complete with a built-in BMS for performance, safety and longevity</p>
          </Box>
          <Box mt="10%" sx={{width:{md:'50%',xs:'100%'}}} textAlign='center'>
            <img src={logo} width={"80%"} style={{borderRadius:'50%'}} />
          </Box>
        </Box>
        <Box sx={{ bgcolor: 'white', height: '100vh' }}> </Box>
        <Box sx={{ bgcolor: '#749F82', height: '100vh' }} />        
    </Container>
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
