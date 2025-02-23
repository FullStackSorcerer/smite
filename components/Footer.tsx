import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";

export const Footer: FC = () => (
  <footer>
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={4}
      >
        <Typography>
          Data provided by Hi-Rez Studios. © Hi-Rez Studios, Inc. All rights
          reserved.
        </Typography>
      </Box>
    </Container>
  </footer>
);
