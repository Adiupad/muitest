import { Box, Container, Grid, Paper, Stack } from '@mui/material'
import React from 'react'

const DeviceLocation = () => {
  return (
    <Grid container spacing={2} pt={5} >
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Container>
            <Stack
              direction={'row'}
              justifyContent='space-between'
              alignItems='end'
              padding="1.5rem 1rem 1rem 1rem"
            >
              <Box sx={{
                fontWeight: "500"
              }}>
                # OF LOCATIONS
              </Box>
              <Box sx={{
                color: "red",
                fontWeight: "bold",
                display: "flex",
                fontSize: "1.4rem"
              }}>
                3
              </Box>

            </Stack>
          </Container>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={3}>
        <Container>
          <Stack
            direction={'row'}
            justifyContent='space-between'
            alignItems='end'
            padding="1.5rem 1rem 1rem 1rem"
          >
            <Box sx={{
              fontWeight: "500"
            }}>
              # OF DEVICES
            </Box>
            <Box sx={{
              color: "red",
              fontWeight: "bold",
              display: "flex",
              fontSize: "1.4rem"

            }}>
              4
            </Box>

          </Stack>
        </Container>
      </Paper></Grid>
      <Grid item xs={3}><Paper elevation={3}>
        <Container>
          <Stack
            direction={'row'}
            justifyContent='space-between'
            alignItems='end'
            padding="1.5rem 1rem 1rem 1rem"
          >
            <Box sx={{
              fontWeight: "500"
            }}>
              START DATE
            </Box>
            <Box sx={{
              color: "red",
              fontWeight: "bold",
              display: "flex",
              fontSize: "1.4rem"

            }}>
              JAN 1, 2023
            </Box>

          </Stack>
        </Container>
      </Paper>
      </Grid>
      <Grid item xs={3}><Paper elevation={3}>
        <Container>
          <Stack
            direction={'row'}
            justifyContent='space-between'
            alignItems='end'
            padding="1.5rem 1rem 1rem 1rem"
          >
            <Box sx={{
              fontWeight: "500"
            }}>
              END DATE
            </Box>
            <Box sx={{
              color: "red",
              fontWeight: "bold",
              display: "flex",
              fontSize: "1.4rem"

            }}>
              FEB 1, 2023
            </Box>

          </Stack>
        </Container>
      </Paper></Grid>
    </Grid>
  )
}

export default DeviceLocation