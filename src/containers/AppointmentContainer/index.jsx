import React, { useState } from "react";
import UIBox from "../../components/Box/UIBox";
import { Divider, Grid } from "@mui/material";
import appointmentImage from "../../assets/images/barber_sq.svg";
import { BarberImage } from "./ui";
import UIButton from "../../components/Button/UIButton";
import UIPopover from "../../components/Popover/UIPopover";
import UITypogrpahy from "../../components/UITypography/UITypogrpahy";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import StatusView from "./StatusView";
import UIDivider from "../../components/UIDivider";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPackageDetails } from "../../store/actions/packages";
import moment from "moment";
import { getTime } from "../../utils/helper";
import { apiGet } from "../../apis/ApiRequest";
import { ApiEndpoints } from "../../apis/apiEndpoints";
import { toast } from "react-toastify";

const Index = ({ status, item, onCancelClick, isAfter }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // #region popover
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //#endregion

  const handleEditClick = () => {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.getAService}${item?.serviceId}`,
      (res) => {
        dispatch(addPackageDetails(res.data));
      },
      (err) => {
        toast.error(err?.response?.data?.message);
      }
    );

    navigate("/edit-appointment", {
      state: {
        appointment: true,
        isServiceSelected: true,
        serviceId: item?.serviceId,
        barberId: item?.barberId,
      },
    });
  };

  return (
    <UIBox p={3} mx={2} my={2}>
      <Grid container justifyContent="space-around">
        <Grid item xs={4} md={3} lg={3}>
          <BarberImage src={appointmentImage} />
        </Grid>
        <Grid item xs={7} md={8} lg={7}>
          <UITypogrpahy
            type="heading"
            title={item?.barber?.name}
            // sx={{ fontSize: { xs: "18px", md: "24px" } }}
          />
          <UITypogrpahy title="Barber" />
        </Grid>
        <Grid
          item
          xs={1}
          md={1}
          lg={2}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          {!isAfter && (
            <MoreVertRoundedIcon
              sx={{
                color: (theme) => theme.palette.primary.main,
                "&:hover": { cursor: "pointer" },
              }}
              onClick={handleClick}
            />
          )}
        </Grid>
      </Grid>
      <Grid container mt={2}>
        <Grid item xs={12}>
          <Divider color={"#595959"} />
        </Grid>
      </Grid>
      <Grid container mt={2} justifyContent="center">
        <Grid item xs={4}>
          <UITypogrpahy type="subpara" title="Date & Time" />
        </Grid>
        <Grid item xs={8}>
          <UITypogrpahy
            textAlign="end"
            type="subpara"
            title={`${item?.day}, ${item?.date}, ${item?.bookingTimeslot}`}
          />
        </Grid>
        <Grid item xs={11} md={12} mt={4}>
          <StatusView status={status} />
        </Grid>
      </Grid>
      <UIPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
        <UITypogrpahy
          title="Edit"
          sx={{ p: 2, "&:hover": { cursor: "pointer" } }}
          onClick={() => {
            handleEditClick();
          }}
        />

        <UIDivider />
        <UITypogrpahy
          title="Cancel"
          onClick={() => {
            onCancelClick();
            setAnchorEl(null);
          }}
          sx={{ p: 2, "&:hover": { cursor: "pointer" } }}
        />
      </UIPopover>
    </UIBox>
  );
};

export default Index;
