import { Paper } from "@mui/material";

export default function Rightsidebar(): JSX.Element {
  return (
    <>
      <div className="col-md-3">
        <Paper elevation={0}>
          <div className="card-body">
            <div className="h5">My Name</div>
            <div className="h7 text-muted">identification</div>
            <div className="h7">
              자기소개
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="h6 text-muted">팔로워</div>
              <div className="h5">99</div>
            </li>
            <li className="list-group-item">
              <div className="h6 text-muted">팔로잉</div>
              <div className="h5">1024</div>
            </li>
          </ul>
        </Paper>
      </div>
    </>
  );
}