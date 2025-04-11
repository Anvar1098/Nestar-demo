import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Name: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <Stack>
        <Container className="container">Trend Properties</Container>
      </Stack>
      <Stack>
        <Container className="container">Popular Properties</Container>
      </Stack>
      <Stack>
        <Container className="container">Advertisement</Container>
      </Stack>
      <Stack>
        <Container className="container">Top Properties</Container>
      </Stack>
      <Stack>
        <Container className="container">Top Agents</Container>
      </Stack>
    </Stack>
  );
};

export default withLayoutMain(Name);
