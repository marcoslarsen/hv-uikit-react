import React from "react";
import HvCard from "@hv-ui/react/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const configurationNoMedia = {
  title: "Advanced Server DS120",
  subtitle: "QTFCR27520007"
};

const strings = {
  cellATitle: "Priority",
  cellAContent: "High",
  cellCTitle: "Probability score",
  cellCContent: "98%",
  cellBTitle: "Main Asset",
  cellBContent: "California wonder grain of wonderfullness",
  cellDTitle: "Est. date of failure",
  cellDContent: "30-60 days",
  cellETitle: "UUID",
  cellEContent: "2101caf3-7cd4-1000-bdp95-d8c4971767c"
};

const MultipleActionsStyles = theme => ({
  content: {
    padding: `0 ${theme.spacing.sm}px 0 ${theme.spacing.sm}px`
  },
  item: {
    padding: `0 0 ${theme.spacing.sm}px 0`
  },
  bottomItem: {
    padding: "0"
  },
  label: {
    fontFamily: theme.typography.fontFamily,
    ...theme.typography.subtitle2
  },
  text: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: theme.typography.fontFamily,
    ...theme.typography.body1
  },
  highlightText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: theme.typography.fontFamily,
    ...theme.typography.h3
  }
});

const MultipleActions = () => {
  const {
    cellATitle,
    cellAContent,
    cellBTitle,
    cellBContent,
    cellCTitle,
    cellCContent,
    cellDTitle,
    cellDContent,
    cellETitle,
    cellEContent
  } = strings;

  return (
    <>
      <Grid container>
        <Grid item xs={5} className={MultipleActionsStyles.item}>
          <Typography className={MultipleActionsStyles.label}>
            {cellATitle}
          </Typography>
          <Typography className={MultipleActionsStyles.text}>
            {cellAContent}
          </Typography>
        </Grid>
        <Grid item xs={7} className={MultipleActionsStyles.item}>
          <Typography className={MultipleActionsStyles.label}>
            {cellBTitle}
          </Typography>
          <Typography className={MultipleActionsStyles.text}>
            {cellBContent}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5} className={MultipleActionsStyles.item}>
          <Typography className={MultipleActionsStyles.label}>
            {cellCTitle}
          </Typography>
          <Typography className={MultipleActionsStyles.text}>
            {cellCContent}
          </Typography>
        </Grid>
        <Grid item xs={7} className={MultipleActionsStyles.bottomItem}>
          <Typography className={MultipleActionsStyles.label}>
            {cellDTitle}
          </Typography>
          <Typography className={MultipleActionsStyles.text}>
            {cellDContent}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className={MultipleActionsStyles.bottomItem}>
          <Typography className={MultipleActionsStyles.label}>
            {cellETitle}
          </Typography>
          <Typography className={MultipleActionsStyles.text}>
            {cellEContent}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default (
  <div style={{ width: "500px" }}>
    <HvCard
      HeaderTitle={configurationNoMedia.title}
      Subheader={configurationNoMedia.subtitle}
      InnerCardContent={<MultipleActions />}
      variant="none"
      checkboxValue="value"
      onSelect={event => console.log(`my value is ${event.target.value}`)}
    />
  </div>
);
