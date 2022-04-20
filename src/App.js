import "./App.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import placeholder from "./assets/adrian-regeci-SAS0lq2QGLs-unsplash.jpg";

const Input = styled("input")({
  display: "none",
});

function App() {
  return (
    <>
      <Stack direction="row" backgroundColor="#222831" height="100vh">
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          backgroundColor="#393E46"
          width="60%"
        >
          <Typography variant="h5" color="white">
            Music Classifier
          </Typography>
          <label htmlFor="contained-button-file">
            <Input id="contained-button-file" type="file" />
            <Button
              variant="contained"
              component="span"
              startIcon={<AudioFileIcon />}
            >
              Upload
            </Button>
          </label>
          <Button variant="contained" endIcon={<SendIcon />}>
            Classify
          </Button>
        </Stack>
        <img src={placeholder} alt="music" />
      </Stack>
    </>
  );
}

export default App;
