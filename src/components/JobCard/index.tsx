import { HourglassBottom, HourglassTop } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../Theme";

interface Props {
  companyLogo: string;
  companyName: string;
  role: string;
  location: string;
  minsalary: number;
  maxsalary: number;
  minExp: number;
  desc: string;
  currency: string;
}
const JobCard: React.FC<Props> = ({
  companyLogo,
  companyName,
  role,
  location,
  minsalary,
  maxsalary,
  minExp,
  currency,
  desc,
}): JSX.Element => {
  const [isHourglassTop, setIsHourglassTop] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsHourglassTop((prevIsHourglassTop) => !prevIsHourglassTop);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Box
        sx={{
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          gap: "24px",
          borderRadius: "20px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            padding: "6px 12px",
            width: "fit-content",
            borderRadius: "22px",
            border: `1px solid ${theme.colorConstants.borderedGray ?? ""}`,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
          }}
        >
          <Box
            sx={{
              transition: "all 0.5s ease-in-out",
              transformOrigin: "center",
            }}
          >
            {isHourglassTop ? (
              <HourglassTop
                sx={{
                  width: "18px",
                  height: "18px",
                }}
              />
            ) : (
              <HourglassBottom
                sx={{
                  width: "18px",
                  height: "18px",
                }}
              />
            )}
          </Box>
          <Typography
            sx={{
              cursor: "pointer",
              color: theme.colorConstants.mediumGray,
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            Posted 10 days ago
          </Typography>
        </Box>
        <Box display={"flex"} gap={"8px"} alignItems={"center"}>
          <Box
            component={"img"}
            src={companyLogo}
            sx={{
              width: "70px",
              height: "100%",
            }}
          />
          <Box display={"flex"} flexDirection={"column"} gap={"3px"}>
            <Typography
              sx={{
                cursor: "pointer",
                color: theme.colorConstants.black,
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              {companyName}
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                color: theme.colorConstants.black,
                fontSize: "16px",
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              {role}
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                color: theme.colorConstants.mediumGray,
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {location}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            cursor: "pointer",
            color: theme.colorConstants.mediumGray,
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Estimated Salary: {currency} {minsalary}k - {currency} {maxsalary}k
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Typography
            sx={{
              cursor: "pointer",
              color: theme.colorConstants.mediumGray,
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            About company:
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              color: theme.colorConstants.black,
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            About us
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              color: theme.colorConstants.black,
              fontSize: "14px",
              fontWeight: "400",
              overflow: { md: "unset", xs: "scroll" },
              height: { md: "300px", xs: "250px" },
            }}
          >
            {desc}
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
          <Typography
            sx={{
              cursor: "pointer",
              color: theme.colorConstants.mediumGray,
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1.8px",
            }}
          >
            Minimum Experience
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              color: theme.colorConstants.black,
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            {minExp} years
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default JobCard;
