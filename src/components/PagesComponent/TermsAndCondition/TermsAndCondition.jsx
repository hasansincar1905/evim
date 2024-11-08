"use client";
import React, { useEffect, useState } from "react";
import BreadcrumbComponent from "@/components/Breadcrumb/BreadcrumbComponent";
import { store } from "@/redux/store";
import { t } from "@/utils";
import { settingTranslationApi } from "@/utils/api";
import { useSelector } from "react-redux";
import { CurrentLanguageData } from "@/redux/reuducer/languageSlice";

const TermsAndCondition = () => {
  const settingsData = store.getState().Settings.data;
  const privacy = settingsData?.data?.terms_conditions;

  const [TermsData, setTermsData] = useState("");

  const language = useSelector(CurrentLanguageData);
  const getSettingTranslationData = async () => {
    try {
      const response = await settingTranslationApi.getSettingTranslation({
        setting_id: "terms_conditions",
      });
      const { data } = response.data;
      if (data) {
        setTermsData(data.value);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getSettingTranslationData();
  }, [language]);

  return (
    <section className="aboutus">
      <BreadcrumbComponent title2={t("termsConditions")} />
      <div className="container">
        {/* <div className="main_title">
                    <span>
                        {t('aboutUs')}
                    </span>
                </div> */}
        <div className="page_content">
          <div dangerouslySetInnerHTML={{ __html: TermsData || "" }} />
        </div>
      </div>
    </section>
  );
};

export default TermsAndCondition;
