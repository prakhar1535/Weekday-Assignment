import { Box, Typography } from "@mui/material";
import FilterSection from "./FilterSection";
import JobListSection from "./JobListSection";
import theme from "../Theme";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { clearFilters } from "../store/slice/jobData";
import IncreaseLimitButton from "../components/LoadMore";

const JobPage = (): JSX.Element => {
  const filters = useSelector((state: RootState) => state.jobs.filters);
  const dispatch = useDispatch();
  const { limit, offset } = useSelector((state: RootState) => state.jobs);
  return (
    <div>
      <Box
        display={"flex"}
        flexDirection={"column"}
        paddingX={"5%"}
        position={"relative"}
        width={"100%"}
        overflow={"hidden"}
      >
        {" "}
        <Box position={"absolute"} width={"100%"} overflow={"hidden"}>
          <FilterSection />
        </Box>
        <Box
          display={"flex"}
          gap={"10px"}
          alignItems={"center"}
          marginTop={"100px"}
        >
          {filters?.map((item, index) => (
            <Box
              padding={"6px"}
              borderRadius={"20px"}
              sx={{
                backgroundColor: theme.colorConstants.borderedGray,
              }}
            >
              <Typography
                padding={"8px"}
                key={index}
                sx={{
                  cursor: "pointer",
                  color: theme.colorConstants.black,
                  fontSize: "16px",
                  fontWeight: "400",
                  "& :hover": {
                    backgroundColor: theme.colorConstants.bgLightBlue,
                  },
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
          {filters && (
            <Box
              padding={"4px"}
              borderRadius={"20px"}
              sx={{
                backgroundColor: theme.colorConstants.softRed,
              }}
            >
              <Typography
                padding={"8px"}
                onClick={() => {
                  dispatch(clearFilters());
                }}
                sx={{
                  cursor: "pointer",
                  color: theme.colorConstants.white,
                  fontSize: "14px",
                  fontWeight: "400",
                  "& :hover": {
                    backgroundColor: theme.colorConstants.black,
                  },
                }}
              >
                Clear Filters
              </Typography>
            </Box>
          )}
        </Box>
        <Box marginTop={"40px"} overflow={"hidden"} width={"100%"}>
          <JobListSection limit={limit} offset={offset} />
        </Box>
        <Box
          marginTop={"40px"}
          display={"flex"}
          alignItems={"center"}
          marginBottom={"80px"}
          justifyContent={"center"}
        >
          <IncreaseLimitButton />
        </Box>
      </Box>
    </div>
  );
};

export default JobPage;
