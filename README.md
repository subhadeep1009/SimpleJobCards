# Simple Job Cards Project (React)

A modern and responsive **Job Cards UI** built using **React**.  
This project demonstrates the use of **props**, **reusable components**, and **CSS Grid** to create clean and professional job listing cards similar to real-world job portals.

---

## 🚀 Features

- Reusable Job Card component using **React Props**
- Clean and modern UI design
- Dark background with contrast cards
- Hover effects for better user experience
- Responsive grid layout (5 cards per row on large screens)
- Company logos, job roles, tags, salary, and location display
- Easy to scale and extend for real applications

---

## 🛠 Tech Stack

- **React**
- **JavaScript (ES6)**
- **CSS (Grid & Flexbox)**
- **Vite** (for fast development)

---

## 📂 Project Structure

src/
│── components/
│ └── JobCard.jsx
│── data/
│ └── jobs.js
│── App.jsx
│── main.jsx
│── index.css

yaml
Copy code

---

## 🧩 How Props Are Used

Each job card receives data as props:

```jsx
<JobCard
  logo={job.brandLogo}
  company={job.companyName}
  post={job.post}
  date={job.datePosted}
  tag1={job.tag1}
  tag2={job.tag2}
  salary={job.salary}
  location={job.location}
/>