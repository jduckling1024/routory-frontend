import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import TaskIcon from '@mui/icons-material/Task';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from "@mui/material";
import React from "react";

const Leftsidebar: React.FC = () => {
    return (
        <>
            <div className="col-md-3">
                <div className="card">
                    <Paper sx={{ maxWidth: '100%' }} className="card-body" elevation={0}>
                        <h5 className="card-title">좌측 패널</h5>
                        <h6 className="card-subtitle mb-2 text-muted">뭔가가 들어갈 예정</h6>
                    </Paper>

                    <Paper sx={{ maxWidth: '100%' }} elevation={0}>
                        <MenuList>
                            <MenuItem>
                                <ListItemIcon>
                                    <HomeIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>목록 1</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <PeopleIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>목록 2</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Paper>
                </div>
            </div>
        </>
    );
};

export default Leftsidebar;