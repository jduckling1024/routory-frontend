import { People, Person, Public } from "@mui/icons-material";
import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import Feed from "./Feed";
import AppTheme from "./accounts/shared-theme/AppTheme";

export default function Maincontent(): JSX.Element {
    const [tabValue, setTabValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFiles(Array.from(event.target.files));
        }
    };

    return (
        <AppTheme>
            <div className="col-md-6 gedf-main">
                <div className="card gedf-card">
                    <div className="card-header">
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab label="Make a publication" />
                            <Tab label="Contents" />
                        </Tabs>
                    </div>
                    <div
                        className="card-body"
                        style={{
                            minHeight: "200px", // 고정 높이 설정
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        {tabValue === 0 && (
                            <Box>
                                <TextField
                                    fullWidth
                                    id="message"
                                    multiline
                                    rows={3}
                                    placeholder="당신의 팀로그를 남겨보세요."
                                    variant="outlined"
                                />
                            </Box>
                        )}
                        {tabValue === 1 && (
                            <Box>
                                <Button
                                    variant="contained"
                                    component="label"
                                    fullWidth
                                    sx={{ marginBottom: 2 }}
                                >
                                    파일 선택
                                    <input
                                        type="file"
                                        hidden
                                        multiple
                                        onChange={handleFileChange}
                                    />
                                </Button>
                                <List dense>
                                    {selectedFiles.map((file, index) => (
                                        <ListItem key={index}>
                                            <ListItemText primary={file.name} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        )}
                        <div className="btn-toolbar justify-content-between" style={{ marginTop: "1rem" }}>
                            <div className="btn-group">
                                <Button variant="contained" color="primary">
                                    업로드
                                </Button>
                            </div>
                            <div className="btn-group">
                                <IconButton
                                    color="primary"
                                    onClick={handleMenuOpen}
                                >
                                    <Public fontSize="small" />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <MenuItem onClick={handleMenuClose}>
                                        <Public style={{ marginRight: 8 }} fontSize="small" />
                                        Public
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                        <People style={{ marginRight: 8 }} fontSize="small" />
                                        Friends
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Person style={{ marginRight: 8 }} fontSize="small" />
                                        Just me
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
                <Feed />
            </div>
        </AppTheme>
    );
}