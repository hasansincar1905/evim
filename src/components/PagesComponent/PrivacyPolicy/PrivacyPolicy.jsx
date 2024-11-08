"use client";
import React, { useEffect, useState } from "react";
import BreadcrumbComponent from "@/components/Breadcrumb/BreadcrumbComponent";
import { store } from "@/redux/store";
import { t } from "@/utils";
import { settingTranslationApi } from "@/utils/api";
import { CurrentLanguageData } from "@/redux/reuducer/languageSlice";
import { useSelector } from "react-redux";

const PrivacyPolicy = () => {
  const settingsData = store.getState().Settings.data;
  const privacy = settingsData?.data?.privacy_policy;
  const [PrivacyPolicyData, setPrivacyPolicyData] = useState("");

  const language = useSelector(CurrentLanguageData);
  const getSettingTranslationData = async () => {
    try {
      const response = await settingTranslationApi.getSettingTranslation({
        setting_id: "privacy_policy",
      });
      const { data } = response.data;
      if (data) {
        setPrivacyPolicyData(data.value);
      }

      console.log("PrivacyPolicyData", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getSettingTranslationData();
  }, [language]);

  return (
    <section className="aboutus">
      <BreadcrumbComponent title2={t("privacyPolicy")} />
      <div className="container">
        {/* <div className="main_title">
                    <span>
                        {t('aboutUs')}
                    </span>
                </div> */}
        <div className="page_content">
          <div dangerouslySetInnerHTML={{ __html: PrivacyPolicyData || "" }} />
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
