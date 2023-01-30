import { Box, Grid,  Menu, MenuItem,  Paper, Stack } from '@mui/material';

import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

const ITEM_HEIGHT = 48;

const DeviceNumber = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container spacing={4} marginTop={1} textAlign='center' alignItems='baseline'>

            <Grid item xs={6} >
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    paddingBottom={1}

                >
                    <Box fontWeight={600}>Device at Vendor</Box>

                    <Box>
                        <Stack
                            direction='row'
                            justifyContent='space-between'
                        >
                            <Box>
                                All Devices
                            </Box>
                            <Box>
                                <ArrowDropDownIcon onClick={handleClick} sx={{ pl: 1, alignItems: "center" }} />
                            </Box>
                        </Stack>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Stack>

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
                            fontSize: "2rem"
                        }}>
                            24
                        </Box>
                        <Box sx={{
                            fontWeight: "400"
                        }}>
                            DAMAGE DEVICES
                        </Box>
                        <Box sx={{
                            color: "red",
                            fontWeight: "bold",
                            display: "flex",
                            fontSize: "2rem"
                        }}>
                            12
                        </Box>
                    </Stack>
                </Paper>

            </Grid>

            <Grid item xs={6} >
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    paddingBottom={1}

                >
                    <Box fontWeight={600}>Device at Vendor</Box>



                    <Box>
                        <Stack
                            direction='row'
                            justifyContent='space-between'
                        >
                            <Box>
                                All Devices
                            </Box>
                            <Box>
                                <ArrowDropDownIcon onClick={handleClick} sx={{ pl: 1, alignItems: "center" }} />
                            </Box>
                        </Stack>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Stack>
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
                            ACTIVE DEVICES
                        </Box>
                        <Box sx={{
                            color: "red",
                            fontWeight: "bold",
                            display: "flex",
                            fontSize: "2rem"
                        }}>
                            24
                        </Box>
                        <Box sx={{
                            fontWeight: "400"
                        }}>
                            OFFLINE DEVICES
                        </Box>
                        <Box sx={{
                            color: "red",
                            fontWeight: "bold",
                            display: "flex",
                            fontSize: "2rem"
                        }}>
                            12
                        </Box>
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default DeviceNumber