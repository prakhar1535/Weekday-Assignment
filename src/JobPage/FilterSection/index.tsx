import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import FilterBox from "../../components/FilterBox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchJobData } from "../../store/slice/jobData";
import theme from "../../Theme";

const FilterSection = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state);
  useEffect(() => {
    void dispatch(fetchJobData());
  }, [dispatch]);

  if (state.jobs.isLoading) {
    return <>Real thing takes time to load...</>;
  }
  const uniqueJobRoles = Array.from(
    new Set(state.jobs.data.jdList.map((item) => item.jobRole))
  );
  const uniqueJobExperience = Array.from(
    new Set(
      state.jobs.data.jdList
        .map((item) => item.minExp)
        .filter((exp) => exp !== null)
    )
  ).sort((a, b) => a - b);
  const uniqueJobLocations = Array.from(
    new Set(state.jobs.data.jdList.map((item) => item.location))
  );
  const uniqueJobMinBasePay = Array.from(
    new Set(
      state.jobs.data.jdList
        .map((item) => item.minJdSalary)
        .filter((exp) => exp !== null)
    )
  ).sort((a, b) => a - b);

  // Define the range size
  const rangeSize = 10;

  // Create ranges based on the unique minimum base pay values
  const ranges: string[] = [];
  let currentRangeStart: number | null = null;
  let currentRangeEnd: number | null = null;
  uniqueJobMinBasePay.forEach((value) => {
    const rangeStart = Math.floor(value / rangeSize) * rangeSize;
    const rangeEnd = rangeStart + rangeSize;
    if (currentRangeStart === null || rangeStart > currentRangeEnd) {
      // Start a new range
      currentRangeStart = rangeStart;
      currentRangeEnd = rangeEnd;
      ranges.push(`${currentRangeStart}-${currentRangeEnd}`);
    } else {
      // Extend the current range
      currentRangeEnd = rangeEnd;
      ranges[ranges.length - 1] = `${currentRangeStart}-${currentRangeEnd}`;
    }
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <FilterBox heading="Roles">
          <Box
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"6px"}
            gap={"10px"}
            sx={{
              "& :hover": {
                backgroundColor: theme.colorConstants.bgLightBlue,
              },
            }}
          >
            {uniqueJobRoles.map((role, index) => (
              <Typography
                key={index}
                padding={"8px"}
                sx={{
                  cursor: "pointer",
                  color: theme.colorConstants.mediumGray,
                  fontSize: "18px",
                  fontWeight: "400",
                  "& :hover": {
                    backgroundColor: theme.colorConstants.bgLightBlue,
                  },
                }}
              >
                {role}
              </Typography>
            ))}
          </Box>
        </FilterBox>
        <FilterBox heading="Number of Employees">
          <Box
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"6px"}
            gap={"10px"}
            sx={{
              "& :hover": {
                backgroundColor: theme.colorConstants.bgLightBlue,
              },
            }}
          >
            <Typography
              padding={"8px"}
              sx={{
                cursor: "pointer",
                color: theme.colorConstants.mediumGray,
                fontSize: "18px",
                fontWeight: "400",
                "& :hover": {
                  backgroundColor: theme.colorConstants.bgLightBlue,
                },
              }}
            >
              {"less than <5"}
            </Typography>
            <Typography
              padding={"8px"}
              sx={{
                cursor: "pointer",
                color: theme.colorConstants.mediumGray,
                fontSize: "18px",
                fontWeight: "400",
                "& :hover": {
                  backgroundColor: theme.colorConstants.bgLightBlue,
                },
              }}
            >
              {"less than <20"}
            </Typography>
            <Typography
              padding={"8px"}
              sx={{
                cursor: "pointer",
                color: theme.colorConstants.mediumGray,
                fontSize: "18px",
                fontWeight: "400",
                "& :hover": {
                  backgroundColor: theme.colorConstants.bgLightBlue,
                },
              }}
            >
              {"less than <100"}
            </Typography>
            <Typography
              padding={"8px"}
              sx={{
                cursor: "pointer",
                color: theme.colorConstants.mediumGray,
                fontSize: "18px",
                fontWeight: "400",
                "& :hover": {
                  backgroundColor: theme.colorConstants.bgLightBlue,
                },
              }}
            >
              {"greater than >100"}
            </Typography>
          </Box>
        </FilterBox>
        <FilterBox heading="Experience">
          <Box
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"6px"}
            gap={"10px"}
            sx={{
              "& :hover": {
                backgroundColor: theme.colorConstants.bgLightBlue,
              },
            }}
          >
            {uniqueJobExperience.map((exp, index) => (
              <Typography
                key={index}
                padding={"8px"}
                sx={{
                  cursor: "pointer",
                  color: theme.colorConstants.mediumGray,
                  fontSize: "18px",
                  fontWeight: "400",
                  "& :hover": {
                    backgroundColor: theme.colorConstants.bgLightBlue,
                  },
                }}
              >
                {exp}
              </Typography>
            ))}
          </Box>
        </FilterBox>
        <FilterBox heading="Loaction">
          <Box
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"6px"}
            gap={"10px"}
            sx={{
              "& :hover": {
                backgroundColor: theme.colorConstants.bgLightBlue,
              },
            }}
          >
            {uniqueJobLocations.map((location, index) => (
              <Typography
                key={index}
                padding={"8px"}
                sx={{
                  cursor: "pointer",
                  color: theme.colorConstants.mediumGray,
                  fontSize: "18px",
                  fontWeight: "400",
                  "& :hover": {
                    backgroundColor: theme.colorConstants.bgLightBlue,
                  },
                }}
              >
                {location}
              </Typography>
            ))}
          </Box>
        </FilterBox>
        <FilterBox heading="Roles">
          <Box
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"6px"}
            gap={"10px"}
            sx={{
              "& :hover": {
                backgroundColor: theme.colorConstants.bgLightBlue,
              },
            }}
          >
            {ranges.map((range, index) => (
              <Typography
                key={index}
                padding={"8px"}
                sx={{
                  cursor: "pointer",
                  color: theme.colorConstants.mediumGray,
                  fontSize: "18px",
                  fontWeight: "400",
                  "& :hover": {
                    backgroundColor: theme.colorConstants.bgLightBlue,
                  },
                }}
              >
                {range}
              </Typography>
            ))}
          </Box>
        </FilterBox>
      </Box>
    </>
  );
};

export default FilterSection;
