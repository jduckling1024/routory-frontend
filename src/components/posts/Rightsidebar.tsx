import { Paper } from "@mui/material";

export default function Rightsidebar(): JSX.Element {
  return (
    <>
      <div className="col-md-3">
        <Paper elevation={0}>
          <div className="card-body">
            <div className="h5">우측 패널</div>
            <div className="h7 text-muted">여기도</div>
            <div className="h7">
              뭔가가 들어갈 예정
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="h6 text-muted">key 1</div>
              <div className="h5">value 1</div>
            </li>
            <li className="list-group-item">
              <div className="h6 text-muted">key 2</div>
              <div className="h5">value 2</div>
            </li>
          </ul>
        </Paper>
      </div>
    </>
  );
}