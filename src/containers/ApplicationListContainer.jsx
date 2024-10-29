import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ApplicationList from "../components/ApplicationList";
import { addApplication, deleteApplication, getApplicationList, updateApplication } from "../actions/applicationActions";
import { useState } from "react";
import { Container } from "@mui/material";
import ApplicationModal from "../components/ApplicationModal";
import { toast } from "react-toastify";

const ApplicationListContainer = () => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const { data: applications, isLoading } = useQuery({
    queryKey: "applications",
    queryFn: getApplicationList,
    onSuccess: () => {
      toast.success("Applications loaded successfully!");
    },
    onError: (error) => {
      toast.error(`Failed to load applications: ${error.message}`);
    },
  });

  const addMutation = useMutation({
    mutationFn: addApplication,
    onSuccess: () => {
      queryClient.invalidateQueries("applications");
      toast.success("Application added successfully!");
    },
    onError: (error) => {
      toast.error(`Failed to add application: ${error.message}`);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateApplication,
    onSuccess: () => {
      queryClient.invalidateQueries("applications");
      toast.success("Application updated successfully!");
    },
    onError: (error) => {
      toast.error(`Failed to update application: ${error.message}`);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteApplication,
    onSuccess: () => {
      queryClient.invalidateQueries("applications");
      toast.success("Application deleted successfully!");
    },
    onError: (error) => {
      toast.error(`Failed to delete application: ${error.message}`);
    },
  });

  const handleAction = (type, id) => {
    if (type === "delete") {
      deleteMutation.mutate(id);
      return;
    }
    if (type === "add") {
      setSelectedApplication(null);
    } else {
      const application = applications.find((app) => app.creditCardApplicantId === id);
      setSelectedApplication(application);
    }
    setIsModalOpen(true);
  };

  const handleSave = (type, application) => {
    if (type === "add") {
      addMutation.mutate(application);
    } else {
      updateMutation.mutate(application);
    }
  }

  return (
    <Container>
      <ApplicationList
        applications={applications}
        isLoading={isLoading}
        handleAction={handleAction}
      />
      {isModalOpen && (
        <ApplicationModal
          type={selectedApplication ? "edit" : "add"}
          open={isModalOpen}
          application={selectedApplication}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Container>
  );
};

export default ApplicationListContainer;
