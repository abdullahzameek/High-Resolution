import React from "react";
import ResolutionsCard from "./ResolutionCard";
import { Grid } from "@material-ui/core";
import resolutionsList from "./resolutionsListCompleted";

const ResCompleted = () => {
  const getResCard = resCardObj => {
    return (
      <Grid item xs={12} sm={4}>
        <ResolutionsCard {...resCardObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={8}>
      {resolutionsList.map(resCardObj=> getResCard(resCardObj))}
    </Grid>
  );
};

export default ResCompleted;