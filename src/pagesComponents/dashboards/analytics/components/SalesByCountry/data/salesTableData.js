/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Countries flags
import US from "/public/assets/images/icons/flags/US.png";
import DE from "/public/assets/images/icons/flags/DE.png";
import GB from "/public/assets/images/icons/flags/GB.png";
import BR from "/public/assets/images/icons/flags/BR.png";

const salesTableData = [
  {
    country: [US, "united state"],
    sales: 2500,
    value: "$230,900",
    bounce: "29.9%",
  },
  {
    country: [DE, "germany"],
    sales: "3.900",
    value: "$440,000",
    bounce: "40.22%",
  },
  {
    country: [GB, "great britain"],
    sales: "1.400",
    value: "$190,700",
    bounce: "23.44%",
  },
  { country: [BR, "brasil"], sales: 562, value: "$143,960", bounce: "32.14%" },
];

export default salesTableData;
