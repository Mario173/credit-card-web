import React from "react";
import { List, Container, Typography } from "@mui/material";
import ApplicationListItem from "./ApplicationListItem";
import Header from "./Header";

const ApplicationList = ({ applications, isLoading, handleAction }) => {
  return (
    <Container
      maxWidth="md"
      sx={{ width: "80%", margin: "auto", textAlign: "center" }}
    >
      <Header onAdd={() => handleAction("add", null)} />

      {applications?.length > 0 ? (
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 1,
          }}
        >
          {applications.map((app) => (
            <ApplicationListItem
              key={app.creditCardApplicantId}
              application={app}
              onEdit={() => handleAction("edit", app.creditCardApplicantId)}
              onDelete={() => handleAction("delete", app.creditCardApplicantId)}
            />
          ))}
        </List>
      ) : isLoading ? (
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          Fetching data...
        </Typography>
      ) : (
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          No credit card applications available. Please add a new application.
        </Typography>
      )}
    </Container>
  );
};

export default ApplicationList;
