import { Box, Grid, Paper, Stack } from '@mui/material'
import React from 'react'

const DeviceConfig = () => {
  return (
   <Grid container spacing={2} pt={5}>
    <Grid item xs={4}>
    <Paper elevation={3} >
                    <Stack
                        direction={'row'}
                        justifyContent='space-between'
                        alignItems='end'
                        padding={2}
                    >
                        <Box sx={{
                            fontWeight: "400"
                        }}>
                            READY TO USE
                        </Box>
                        <Box sx={{
                            color: "red",
                            fontWeight: "bold",
                            display: "flex",
                            fontSize: "1.7rem"
                        }}>
                            53
                        </Box>
                     
                    </Stack>
                </Paper>
    </Grid>
    <Grid item xs={4}>
    <Paper elevation={3} >
                    <Stack
                        direction={'row'}
                        justifyContent='space-between'
                        alignItems='end'
                        padding={2}
                    >
                        <Box sx={{
                            fontWeight: "400"
                        }}>
                            INACTIVE DEVICES
                        </Box>
                        <Box sx={{
                            color: "red",
                            fontWeight: "bold",
                            display: "flex",
                            fontSize: "1.7rem"
                        }}>
                            32
                        </Box>
                     
                    </Stack>
                </Paper>
    </Grid>
    <Grid item xs={4}>
    <Paper elevation={3} >
                    <Stack
                        direction={'row'}
                        justifyContent='space-between'
                        alignItems='end'
                        padding={2}
                    >
                        <Box sx={{
                            fontWeight: "400"
                        }}>
                            ACTIVE VENDORS
                        </Box>
                        <Box sx={{
                            color: "red",
                            fontWeight: "bold",
                            display: "flex",
                            fontSize: "1.7rem"
                        }}>
                            157
                        </Box>
                     
                    </Stack>
                </Paper>
    </Grid>
   </Grid>
  )
}

export default DeviceConfig