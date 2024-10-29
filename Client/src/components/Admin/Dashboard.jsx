import React, { Suspense } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import {TopProducts} from '../../index';
const LazyLoad = ({ Component }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [200, 400, 300, 500, 700, 600, 800, 750, 650, 900, 850, 1000],
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Order',
        data: [100, 300, 200, 400, 600, 500, 700, 650, 600, 800, 750, 900],
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  const doughnutData = {
    labels: ['Women', 'Men', 'Kids', 'Home', 'Wellness'],
    datasets: [
      {
        label: 'Sales by Category',
        data: [22, 34, 22, 20, 7],
        backgroundColor: ['#9dbff9', '#c39bd3', '#f7dc6f', '#82e0aa', '#f1948a'],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <div className="left-dashboard">
        <div className="top-section">
          <div className="dashboard-card">
            <h4>Average Revenue</h4>
            <div className="revenue">
              <h2>$25,565</h2>
              <p className="growth">20% ($20,452)</p>
            </div>
          </div>
          <div className="dashboard-card">
            <h4>Customer Return</h4>
            <div className="return">
              <h2>7,956</h2>
              <p className="decline">15% (6,759)</p>
            </div>
          </div>
        </div>
        <div className="revenue-order-chart dashboard-card">
          <h4>Revenue vs Order</h4>
          <div className="line-chart">
            {/* <Line data={lineData} /> */}
          </div>
        </div>
        <div className="recent-invoice dashboard-card">
          <h4>Recent Invoice</h4>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Id Customer</th>
                <th>Customer Name</th>
                <th>City</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>#6545</td>
                <td>Jane Cooper</td>
                <td>Sydney</td>
                <td>01 Oct | 11:29 am</td>
                <td className="paid">Paid</td>
                <td>$64</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <div className="right-dashboard">
        <div className="dashboard-card sales-category">
          <h4>Sales by Category</h4>
          <div className="category-chart">
            <Doughnut data={doughnutData} />
          </div>
        </div>
        <LazyLoad Component={TopProducts} />
      </div>


    </div>
  );
};

export default Dashboard;
