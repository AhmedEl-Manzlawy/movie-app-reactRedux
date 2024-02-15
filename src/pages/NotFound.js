import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../components/Context/languageContext";

const NotFound = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      {lang === "en" ? (
        <div className="container text-light text-center my-5">
          <h1>Ooops!</h1>
          <p>404 This Page Not Found</p>
          <Link className="btn btn-warning" to="/">
            Go Home Page
          </Link>
        </div>
      ) : (
        <div className="container text-light text-center my-5">
          <h1>للأسف!</h1>
          <p>404 هذه الصفحة غير متاحة</p>
          <Link className="btn btn-warning" to="/">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      )}
    </>
  );
};

export default NotFound;
