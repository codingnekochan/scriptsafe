import PrescriptionOverviewScreen from "@/screens/Presecription/PrescriptionOverviewScreen";
import { recentDB } from "@/services/db";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";

const Prescriptions = () => {
  const [recentsList, setRecentsList] = useState([]);

  const handleAllPatients = async () => {
    const res = await recentDB.getAllPatients();
    setRecentsList(res);
  };
  const handleClick = () => {
    router.push("/stepOne");
  };

  useEffect(() => {
    handleAllPatients();
  }, []);

  const dataProps = {
    recentsList,
    handleClick,
  };
  return <PrescriptionOverviewScreen {...dataProps} />;
};

export default Prescriptions;
