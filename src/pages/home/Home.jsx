import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import UserServices from "../../services/UserServices";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/user/UserAction";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const token = useSelector((state) => state.user?.currentUser?.Token);
  const dispatch = useDispatch();
  const VerifyToken = async () => {
    token && await UserServices.getAllUser()
      .then(() => {
        console.log('Session Valid')
      })
      .catch(() => {
        // dispatch(logout())
      })
  }
  useEffect(() => {
    VerifyToken();
  }, [])

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const getStats = async () => {
    await UserServices.getStats()
      .then((res) => {
        res.data.map((item) => (
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        ))
      })
  };

  useEffect(() => {
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
