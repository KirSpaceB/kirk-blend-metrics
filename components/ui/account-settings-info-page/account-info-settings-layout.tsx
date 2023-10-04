import React from "react";
import AccountInfoSettingsNav from "./account-info-settings-nav";
import PersonalInfoPageInnerSideBar from "../personal-info-page-inner-sidebar";
import AccountIfoPageOuterSidebar from "./account-info-page-outer-sidebar";
import PersonalInfoInterface from "./personal-info-interface";
export default function AccountInfoSettingsLayout() {
  return (
    <>
      {/* No layout uses positioning */}
      <AccountIfoPageOuterSidebar />
      <PersonalInfoPageInnerSideBar />
      <AccountInfoSettingsNav />
      <PersonalInfoInterface />
    </>
  );
}
