import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ApplicationListItem = ({ application, onEdit, onDelete }) => {
  const { creditCardApplicantName, creditCardApplicantSurname, creditCardApplicantId, creditCardApplicationStatus } = application;

  return (
    <ListItem
      divider
      sx={{
        padding: "16px",
        backgroundColor: "grey.50",
        borderRadius: "8px",
        width: "90%",
        margin: "8px auto",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemText
        primary={
          <Typography
            variant="subtitle1"
            fontWeight="medium"
            color="text.primary"
          >
            {creditCardApplicantName} {creditCardApplicantSurname}
          </Typography>
        }
        secondary={
          <Box component="span" display="flex" flexDirection="column">
            <Typography component="span" variant="body2" color="text.secondary">
              Personal ID: {creditCardApplicantId}
            </Typography>
            <Typography
              component="span"
              variant="body2"
              color="primary.main"
              fontWeight="bold"
            >
              Status: {creditCardApplicationStatus}
            </Typography>
          </Box>
        }
        sx={{ marginRight: "auto" }}
      />

      <ListItemSecondaryAction sx={{ display: "flex", gap: "8px", marginRight: "7.5%" }}>
        <IconButton
          edge="end"
          aria-label="edit"
          onClick={() => onEdit(application)}
          sx={{
            color: "primary.main",
            "&:hover": { color: "primary.dark" },
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDelete(application.id)}
          sx={{
            color: "error.main",
            "&:hover": { color: "error.dark" },
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ApplicationListItem;
