import React from 'react';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/system';
import SliderUnstyled from '@mui/base/SliderUnstyled';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? '#ff014f' : '#90caf9'};
  height: 4px;
  width: 100%;
  padding: 14px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }

  & .MuiSlider-rail {
    display: block;
    position: absolute;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: currentColor;
    opacity: 0.38;
  }

  & .MuiSlider-track {
    display: block;
    position: absolute;
    height: 8px;
    border-radius: 4px;
    background-color: currentColor;
  }

  & .MuiSlider-valueLabelLabel{
    color:#ff014f;
    position: absolute;
    top: -24px;
  }

  & .MuiSlider-thumb {
    position: absolute;
    width: 18px;
    height: 18px;
    margin-left: -6px;
    margin-top: -5px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 2px solid currentColor;
    background-color: #fff;

    :hover,
    &.Mui-focusVisible {
      box-shadow: 0 0 0 0.25rem ${alpha(
    theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
    0.15,
  )};
    }

    &.Mui-active {
      box-shadow: 0 0 0 0.25rem ${alpha(
    theme.palette.mode === 'light' ? '#1976d2' : '#90caf9',
    0.3,
  )};
    }
  }
`,
);

const Skills = () => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Box >
            <Typography variant='h6'>
              Javascript
            </Typography>
            <StyledSlider
              defaultValue={80}
              valueLabelDisplay="on"
            />
          </Box>

          <Box style={{ marginTop: '15px' }}>
            <Typography variant='h6'>
              React JS
            </Typography>
            <StyledSlider
              defaultValue={90}
              valueLabelDisplay="on"
            />
          </Box>

          <Box style={{ marginTop: '15px' }}>
            <Typography variant='h6'>
              Node JS
            </Typography>
            <StyledSlider
              defaultValue={70}
              valueLabelDisplay="on"
            />
          </Box>

          <Box style={{ marginTop: '15px' }}>
            <Typography variant='h6'>
              Mongo DB
            </Typography>
            <StyledSlider
              defaultValue={75}
              valueLabelDisplay="on"
            />
          </Box>

          <Box style={{ marginTop: '15px' }}>
            <Typography variant='h6'>
              Sass
            </Typography>
            <StyledSlider
              defaultValue={68}
              valueLabelDisplay="on"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box>
            <Typography variant='h6'>
              HTML
            </Typography>
            <StyledSlider
              defaultValue={95}
              valueLabelDisplay="on"
            />
          </Box>

          <Box style={{ marginTop: '15px' }}>
            <Typography variant='h6'>
              CSS
            </Typography>
            <StyledSlider
              defaultValue={93}
              valueLabelDisplay="on"
            />
          </Box>

          <Box style={{ marginTop: '15px' }}>
            <Typography variant='h6'>
              Bootstrap
            </Typography>
            <StyledSlider
              defaultValue={99}
              valueLabelDisplay="on"
            />
          </Box>

          <Box style={{ marginTop: '15px' }}>
            <Typography variant='h6'>
              Material Ui
            </Typography>
            <StyledSlider
              defaultValue={96}
              valueLabelDisplay="on"
            />
          </Box>

          <Box style={{ marginTop: '15px' }}>
            <Typography variant='h6'>
              Tailwind CSS
            </Typography>
            <StyledSlider
              defaultValue={90}
              valueLabelDisplay="on"
            />
          </Box>
        </Grid>
      </Grid>

    </div>
  );
};

export default Skills;