🏥 Healthcare Dashboard

A responsive and modern healthcare dashboard built with React and Tailwind CSS, designed to visualize key health data, appointments, and anatomy highlights in an intuitive and beautiful interface.

---

## 🔗 Live Project

➡️ [Visit healthcare-dashboard](https://healthcare-dashboard-olive.vercel.app/)

This will take you directly to the healthcare-dashboard.

---

🚀 Features
✅ Health Overview with human anatomy highlights

📅 Interactive Calendar with appointment markers

📊 Activity Feed displaying weekly engagement

🩺 Health Status Cards showing system-level diagnostics

📌 Upcoming Appointments with categorized views

🧭 Sidebar Navigation with Lucide icons

👤 Header UI with user info and notifications

---

📂 Project Structure

```css
src/
├── assets/           # Images (e.g., avatar, anatomy)
├── components/       # UI components like Sidebar, Header, Dashboard widgets
│   ├── Header/
│   ├── Sidebar/
│   └── Dashboard/
├── data/             # Static data for cards, calendar, etc.
├── App.js            # Main app wrapper
└── index.js          # Entry point
```

---

🧑‍💻 Tech Stack
- React
- Tailwind CSS
- Lucide Icons
- Modular Component Architecture
- CSS Utility Classes

---

🖼️ Key Components

| Component           | Description                                       |
|---------------------|---------------------------------------------------|
| AnatomySection	    | Highlights parts of a human body with statuses    |
| HealthStatusCards	  | Renders lung/teeth/bone status as cards           |
| CalendarView	      | Interactive calendar with appointment info        |
| ActivityFeed	      | Bar chart showing daily activity                  |
| UpcomingSchedule	  | Next appointments listed by day                   | 
| Header	            | App title, search bar, user avatar, notifications |
| Sidebar	            | Navigation menu with icons                        |

---

🛠️ Setup Instructions
```bash

Clone the Repository

git clone https://github.com/durgeshpd/healthcare-dashboard.git
cd healthcare-dashboard

Install Dependencies

npm install

Start Development Server

npm run dev

```
View in Browser

Visit http://localhost:3000 to explore the dashboard.

---

📁 Sample Data Files

anatomyData.js – Body part positions and health status

calendarData.js – Days, appointments, and calendar highlights

healthStatusCards.js – Info cards for Lungs, Teeth, Bone

scheduleData.js – Upcoming appointments for specific days

navigation.js – Sidebar items with icons

---

🙌 Acknowledgements
Icons by Lucide

UI Framework: Tailwind CSS

Design inspiration from modern health-tech dashboards

---

📬 Contact

Feel free to open an issue or submit a pull request if you have ideas or improvements.
