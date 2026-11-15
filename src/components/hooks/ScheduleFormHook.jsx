import { addInterview } from "@/features/interviews/interviewSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useScheduleForm = () => {
  const allApplications = useSelector(
    (state) => state.applications.applications,
  );
  const interviews = useSelector((state) => state.interviews.interviews);
  const [application, setApplication] = useState(
    allApplications.length > 0 ? allApplications[0].id : "",
  );
  const [scheduledDate, setScheduledDate] = useState("");
  const [interviewType, setInterviewType] = useState("");

  const dispatch = useDispatch();
  function handleSubmitInterviewForm(e) {
    e.preventDefault();
    if (!application || !scheduledDate || !interviewType) {
      alert("Please fill in all fields before submitting the form.");
      return;
    }
    const isDuplicate = interviews.some(
      (interview) => String(interview.applicationId) === String(application),
    );

    if (isDuplicate) {
      alert("An interview for this application already exists.");
      return;
    }
    const newInterview = {
      applicationId: application,
      scheduledDate,
      interviewType,
      done: false,
    };

    dispatch(addInterview(newInterview));
    setApplication(allApplications.length > 0 ? allApplications[0].id : "");
    setScheduledDate("");
    setInterviewType("");
  }

  return {
    application,
    setApplication,
    scheduledDate,
    setScheduledDate,
    interviewType,
    setInterviewType,
    handleSubmitInterviewForm,
    allApplications,
  };
};

export default useScheduleForm;
