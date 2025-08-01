import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Chip,
    IconButton,
    Divider,
    Box,
    Stack,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const PostCard = ({ post }) => {
    return (
        <Card sx={{ marginBottom: 3 }}>
            <CardContent>
                {/* Oben: Datum + Favoriten */}
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="text.secondary">
                        {post.date}
                    </Typography>
                    <IconButton>
                        {post.favorite ? (
                            <Favorite sx={{ color: "red" }} />
                        ) : (
                            <FavoriteBorder />
                        )}
                    </IconButton>
                </Stack>

                {/* title */}
                <Typography variant="h5" component="div" sx={{ marginTop: 1 }}>
                    {post.title}
                </Typography>

                {/* description */}
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                    {post.description}
                </Typography>

                {/* categories */}
                <Box sx={{ marginTop: 2 }}>
                    <Chip label={post.category} color="primary" />
                </Box>

                <Divider sx={{ marginY: 2 }} />

                {/* Comments */}
                <Typography variant="subtitle2" gutterBottom>
                    Kommentare:
                </Typography>
                {post.comments && post.comments.length > 0 ? (
                    <Box component="ul" sx={{ paddingLeft: 2 }}>
                        {post.comments.map((c, i) => (
                            <li key={i}>
                                <Typography variant="body2">{c}</Typography>
                            </li>
                        ))}
                    </Box>
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        Keine Kommentare
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default PostCard;

