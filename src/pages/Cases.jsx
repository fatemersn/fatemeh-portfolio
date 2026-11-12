import CaseStudy from "../components/CaseStudy.jsx";
import { smartInvest, couponCreation, foodPro } from "../data/cases.js";

export const SmartInvest = () => <CaseStudy data={smartInvest} />;
export const CouponCreation = () => <CaseStudy data={couponCreation} />;
export const FoodPro = () => <CaseStudy data={foodPro} />;
