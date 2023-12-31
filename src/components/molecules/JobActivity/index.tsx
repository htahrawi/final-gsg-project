import { StyledAlignFlex } from "@/style/common";
import HelpIcon from "@mui/icons-material/Help";
import { StyledJobActivity } from "./style.js";

const JobActivity = () => {
  return (
    <StyledJobActivity className="activity">
      <h3>Activity on this job</h3>
      <div className="rates">
        <StyledAlignFlex gap="5px">
          <p>Proposal:</p>
          <HelpIcon sx={{ color: "var(--primary-color)", fontSize: 17 }} />
          <span>5 to 10</span>
        </StyledAlignFlex>
        <StyledAlignFlex gap="5px">
          <p>Interviewing</p>
          <span>2</span>
        </StyledAlignFlex>
        <StyledAlignFlex gap="5px">
          <p>Invites sent:</p>
          <span>0</span>
        </StyledAlignFlex>
        <StyledAlignFlex gap="5px">
          <p>Unanswered invites:</p>
          <span>0</span>
        </StyledAlignFlex>
      </div>
      <StyledAlignFlex gap="3px">
        <h3>Upgrade your membership to see the bid range</h3>
        <HelpIcon sx={{ color: "var(--primary-color)", fontSize: 17 }} />
      </StyledAlignFlex>
    </StyledJobActivity>
  );
};

export default JobActivity;
