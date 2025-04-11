# SmartCanteen - College Canteen Website & App

A fully functional, user-friendly web and mobile platform for managing and ordering food from the college canteen. Designed to simplify order handling for canteen owners and offer convenience to students.

---

## ✨ Project Goals

- Allow students to browse menu, place orders, track status, and give feedback.
- Enable canteen staff to manage orders and menu easily with minimal technical effort.
- Work seamlessly across both **web and mobile platforms**.
- Create a soft, clean, responsive UI that is intuitive and multilingual-ready.

---

## 🛠️ Tech Stack

| Layer              | Technology                                |
|--------------------|--------------------------------------------|
| Frontend (Web)     | Next.js + Tailwind CSS                     |
| Frontend (Mobile)  | Flutter                                    |
| Backend            | Node.js + Express.js                       |
| Database           | MongoDB Atlas                              |
| Authentication     | Firebase Auth / JWT (TBD)                  |
| Hosting            | Vercel (Frontend), Railway/Render (Backend)|
| Integrations       | Razorpay (Payments), WhatsApp API, QR Code|

---

## ✅ Features

### For Students / Users
- User login/signup
- Browse categorized menu (with images)
- Add to cart & place order
- Order status tracking (live)
- Past orders & quick reorder
- Feedback & ratings
- Push notification / email updates
- UPI payment support (Razorpay)
- QR Code based digital menu access (**mandatory**)
- Multi-language support (optional)

### For Canteen Owner (Admin Panel)
- Admin login
- Add/edit/delete menu items
- Upload item image
- Mark item as available/unavailable
- View live orders
- Accept/reject orders
- Mark orders as ready
- Receive notifications on new orders
- View feedback and basic analytics

---

## 🗂️ Folder Structure

```
canteen-app/
├── frontend/          # Next.js frontend for students
├── mobile/            # Flutter app (optional phase)
├── backend/           # Node.js backend with Express
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── .env
│   └── server.js
└── README.md
```

---

## 🧩️ Development Roadmap

### Phase 1: Planning & Setup
- [x] Collect canteen info, menu, preferences
- [ ] Design UI mockups (Figma/sketches)
- [ ] Set up GitHub repo and folder structure

### Phase 2: Student Web App
- [ ] Create landing page, login/signup
- [ ] Menu browsing with dummy data
- [ ] Cart & order placement UI
- [ ] Order status tracking page

### Phase 3: Admin Panel
- [ ] Admin login
- [ ] Orders list + Accept/Reject/Ready buttons
- [ ] Menu management interface

### Phase 4: Backend Development
- [ ] Build REST APIs (auth, orders, menu, feedback)
- [ ] Connect frontend to backend
- [ ] Store data in MongoDB Atlas

### Phase 5: Mobile App (Optional)
- [ ] Flutter UI for admin and user
- [ ] Reuse backend APIs

### Phase 6: Polish & Deploy
- [ ] Add real-time notifications (socket.io or Firebase)
- [ ] Responsive design testing
- [ ] Host frontend and backend
- [ ] Final testing with canteen owner

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/college-canteen-app.git
cd college-canteen-app
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create .env file and add:
# MONGODB_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
node server.js
```

## ✨ Future Add-ons
- Scheduled orders
- Order analytics and reports
- Inventory alerts for owner
- SMS fallback for non-smartphone users

---

## 🙋‍♂️ Made By
**Richa Bharti**  
Project Lead | Developer | UI/UX Designer

---

## 📌 License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to fork, modify, and use it for your own canteen projects or startups.

