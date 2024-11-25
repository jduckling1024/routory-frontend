import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";

const ProfileCard: React.FC = () => {
    return (
        // <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={12} lg={10}>
                <Card sx={{ overflow: "hidden", textAlign: "center", p: 3 }}>

                    <Avatar
                        sx={{
                            width: 150,
                            height: 150,
                            margin: "0 auto",
                            border: "4px solid white",
                        }}
                    />
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h5">윤진</Typography>
                        <Typography variant="body2" color="text.secondary">
                            jduckling_1024
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 3,
                            width: "fit-content",
                            mx: "auto",
                        }}
                    >
                        프로필 편집
                    </Button>

                    <CardContent sx={{ backgroundColor: "#f8f9fa", textAlign: "left", mt: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            소개
                        </Typography>
                        <Box sx={{ p: 2, backgroundColor: "#fff", borderRadius: 2 }}>
                            <Typography variant="body2" gutterBottom>
                                백엔드 개발자
                            </Typography>
                        </Box>
                    </CardContent>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            backgroundColor: "#f8f9fa",
                            mt: 2,
                            py: 2,
                        }}
                    >
                        {[
                            { label: "프로젝트", value: 0 },
                            { label: "팔로워", value: 99 },
                            { label: "팔로잉", value: 1024 },
                        ].map((stat) => (
                            <Box key={stat.label} textAlign="center">
                                <Typography variant="h5" fontWeight="bold">
                                    {stat.value}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {stat.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                                mt: 3,
                            }}
                        >
                            <Typography variant="h6">프로젝트</Typography>
                            <Typography variant="body2" color="primary" component="a" href="#!">
                                더 보기
                            </Typography>
                        </Box>
                        <Grid container spacing={2}>
                            {[
                                "",
                                "",
                                "",
                                "",
                            ].map((src, index) => (
                                <Grid item xs={6} key={index}>
                                    <Box
                                        component="img"
                                        src={src}
                                        alt={`프로젝트 ${index + 1}`}
                                        sx={{
                                            width: "100%",
                                            borderRadius: 2,
                                        }}

                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        // </Box>
    );
};

export default ProfileCard;