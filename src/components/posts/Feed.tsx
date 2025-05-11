import { ChatBubbleOutline } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import UpdateIcon from '@mui/icons-material/Update';
import { Avatar, Button, Chip, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import AppTheme from "../accounts/shared-theme/AppTheme";

export default function Feed(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Menu open/close handlers
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppTheme>
      {/* Second Card */}
      <div className="card gedf-card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <Avatar />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">윤진</div>
                <div className="h7 text-muted">3시간 전</div>
              </div>
            </div>
            <div>
              <div className="btn-group">
                <IconButton
                  color="primary"
                  onClick={handleMenuOpen}
                >
                  <MenuIcon fontSize="small" />
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
                    <UpdateIcon style={{ marginRight: 8 }} fontSize="small" />
                    수정
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <DeleteIcon style={{ marginRight: 8 }} fontSize="small" />
                    삭제
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">
            오늘의 이야기
          </p>
        </div>
        {/* <div className="card-footer" style={{ display: 'flex' }}>
          <Button
            style={{
              textTransform: 'none',
              flexGrow: 1,
              justifyContent: 'center',
            }}
            startIcon={<FavoriteIcon color="primary" />}
          >
            <Typography>Like</Typography>
          </Button>
          <Button
            style={{
              textTransform: 'none',
              flexGrow: 1,
              justifyContent: 'center',
            }}
            startIcon={<ChatBubbleOutline color="primary" />}
          >
            <Typography>Comment</Typography>
          </Button>
        </div> */}
      </div>
    </AppTheme>
  );
}