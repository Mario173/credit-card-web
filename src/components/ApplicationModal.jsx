import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const ApplicationModal = ({ type, open, onClose, onSave, application }) => {
  const [formValues, setFormValues] = useState({
    creditCardApplicantName: "",
    creditCardApplicantSurname: "",
    creditCardApplicantId: "",
    creditCardApplicationStatus: "",
  });

  useEffect(() => {
    if (application) {
      setFormValues({
        creditCardApplicantName: application.creditCardApplicantName || "",
        creditCardApplicantSurname: application.creditCardApplicantSurname || "",
        creditCardApplicantId: application.creditCardApplicantId || "",
        creditCardApplicationStatus: application.creditCardApplicationStatus || "",
      });
    } else {
      setFormValues({
        creditCardApplicantName: "",
        creditCardApplicantSurname: "",
        creditCardApplicantId: "",
        creditCardApplicationStatus: "",
      });
    }
  }, [application]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(type, formValues);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Box
        sx={{
          width: 400,
          p: 4,
          m: "auto",
          mt: "10%",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" id="modal-title" gutterBottom>
          {application ? "Edit Application" : "New Application"}
        </Typography>

        <TextField
          label="First Name"
          name="creditCardApplicantName"
          value={formValues.creditCardApplicantName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Last Name"
          name="creditCardApplicantSurname"
          value={formValues.creditCardApplicantSurname}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          disabled={type === "edit"}
          label="Personal ID"
          name="creditCardApplicantId"
          value={formValues.creditCardApplicantId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>creditCardApplicationStatus</InputLabel>
          <Select
            name="creditCardApplicationStatus"
            value={formValues.creditCardApplicationStatus}
            onChange={handleChange}
            required
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
            <MenuItem value="Under Review">Under Review</MenuItem>
            <MenuItem value="On Hold">On Hold</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
            <MenuItem value="Approved Pending Activation">
              Approved Pending Activation
            </MenuItem>
            <MenuItem value="Expired">Expired</MenuItem>
            <MenuItem value="Requires Follow Up">Requires Follow Up</MenuItem>
          </Select>
        </FormControl>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ApplicationModal;
