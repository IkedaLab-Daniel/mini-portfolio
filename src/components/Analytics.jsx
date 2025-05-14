import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import data from '../data.json';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

function Analytics() {
    // Calculate total days
    const totalDays = data.length;

    // Calculate total time spent
    const totalTimeSpent = data.reduce((total, entry) => {
        const [hours, minutes] = entry.timeSpent.split(':').map(Number);
        return total + hours * 60 + minutes; // Convert time to minutes
    }, 0);
    const totalHours = Math.floor(totalTimeSpent / 60);
    const totalMinutes = totalTimeSpent % 60;

    // Calculate most frequently used technologies
    const techFrequency = {};
    data.forEach((entry) => {
        const icons = Array.isArray(entry.icons) ? entry.icons : [entry.icons];
        icons.forEach((icon) => {
            techFrequency[icon] = (techFrequency[icon] || 0) + 1;
        });
    });

    const mostUsedTech = Object.entries(techFrequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5); // Get top 5 most used technologies

    // Prepare data for charts
    const barChartData = {
        labels: data.map((entry) => `Day ${entry.day}`),
        datasets: [
            {
                label: 'Time Spent (Minutes)',
                data: data.map((entry) => {
                    const [hours, minutes] = entry.timeSpent.split(':').map(Number);
                    return hours * 60 + minutes;
                }),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const pieChartData = {
        labels: mostUsedTech.map(([tech]) => tech),
        datasets: [
            {
                data: mostUsedTech.map(([, count]) => count),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    return (
        <div id="analytics">
            <h2>Analytics</h2>
            <div className="analytics-container">
                <div className="stat">
                    <h3>Total Days</h3>
                    <p>{totalDays}</p>
                </div>
                <div className="stat">
                    <h3>Total Time Spent</h3>
                    <p>{totalHours}h {totalMinutes}m</p>
                </div>
                <div className="chart">
                    <h3>Time Spent Per Day</h3>
                    <Bar data={barChartData} />
                </div>
                <div className="chart">
                    <h3>Most Used Technologies</h3>
                    <Pie data={pieChartData} />
                </div>
            </div>
        </div>
    );
}

export default Analytics;