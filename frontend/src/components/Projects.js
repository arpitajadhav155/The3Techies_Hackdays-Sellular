import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import makeStyles from "@mui/styles/makeStyles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  timelineItem: {
    "&:before": {
      flex: "0 !important",
      padding: "0 !important",
    },
  },
}));

function Projects({ projects }) {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5" gutterBottom style={{ padding: "0 0.5em" }}>
        Projects
      </Typography>
      <Timeline align={`left`}>
        {projects.length === 0 && "No Information Available"}
        {projects.length > 0 &&
          projects.map((p) => (
            <TimelineItem className={classes.timelineItem}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="overline" gutterBottom>
                      {p.startDate.substring(0, 10)} -{" "}
                      {`${p.endDate ? p.endDate.substring(0, 10) : "present"}`}
                    </Typography>
                    <Typography variant="h5" component="h5">
                      {p.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {p.desc}
                    </Typography>
                  </CardContent>
                  {p.link && (
                    <CardActions>
                      <Button
                        size="small"
                        component={Link}
                        to={{ pathname: p.link }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </div>
  );
}

export default Projects;
