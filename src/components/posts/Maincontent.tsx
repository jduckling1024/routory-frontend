import { People, Person, Public } from "@mui/icons-material";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Select,
    SelectChangeEvent,
    Tab,
    Tabs,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import api from '../../services/diary/DiaryService';
import AppTheme from "../accounts/shared-theme/AppTheme";
import Feed from "./Feed";

export default function Maincontent(): JSX.Element {
    const [tabValue, setTabValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [data, setData] = useState({
        content: "",
        emotion: "UNDEFINED",
    });

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

    const handleEmotionChange = (event: SelectChangeEvent) => {
        setData({
            ...data,
            emotion: event.target.value as string,
        });
    }

    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            content: event.target.value,
        });
    };

    const handleSubmit = async () => {
        await api.save(data);

        alert("기록을 완료했습니다.");
    }

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
                            <Tab icon = {<EditNoteIcon />} />
                            <Tab icon = {<AttachFileIcon />} />
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
                            <Box component="form" id="post-form">
                                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                                    <InputLabel id="emotion-label">오늘 기분은 어떠신가요?</InputLabel>
                                    <Select
                                        value={data.emotion === "UNDEFINED" ? "" : data.emotion}
                                        labelId="emotion-label"
                                        id="emotion"
                                        name="emotion"
                                        onChange={handleEmotionChange}
                                    >
                                        <MenuItem value="HAPPY">😊 행복</MenuItem>
                                        <MenuItem value="SAD">😢 슬픔</MenuItem>
                                        <MenuItem value="ANGRY">😠 분노</MenuItem>
                                        <MenuItem value="CALM">😌 평온</MenuItem>
                                        <MenuItem value="TIRED">😩 피곤</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    fullWidth
                                    id="message"
                                    name="message"
                                    multiline
                                    rows={3}
                                    placeholder="당신의 이야기를 남겨보세요."
                                    variant="outlined"
                                    onChange={handleContentChange}
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
                                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
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
                                        <People style={{ marginRight: 8 }} fontSize="small" />
                                        전체 공개
                                    </MenuItem>
                                    <MenuItem onClick={handleMenuClose}>
                                        <Person style={{ marginRight: 8 }} fontSize="small" />
                                        나만 보기
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