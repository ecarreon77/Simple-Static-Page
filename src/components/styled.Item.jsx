import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

// export const Item = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
export const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.mode === "dark" ? "#fff" : theme.palette.text.secondary,
}));

export const PaperItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: `${theme.shadows[0]}`,
  color: theme.palette.text.secondary,
}));
export const FooterItem = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.common.dark,
}));
export const FooterLinkItem = styled(Box)(({ theme }) => ({
  ...theme.typography.h6,
  fontSize: 15,
  color: theme.palette.common.dark,
}));
