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
                        <h5 className="card-title">Project Name</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">
                            프로젝트에 대해 소개하는 글을 적어주세요.
                        </p>
                    </Paper>

                    <Paper sx={{ maxWidth: '100%' }} elevation={0}>
                        <MenuList>
                            <MenuItem>
                                <ListItemIcon>
                                    <HomeIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>홈</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <TaskIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>태스크</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <PeopleIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>멤버</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <WavingHandIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>팔로워</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Paper>
                </div>
            </div>
        </>
    );
};

export default Leftsidebar;