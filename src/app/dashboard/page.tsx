'use client';
import { useAuthStore } from '@/store/authStore';

const Dashboard = () => {
  const { logout } = useAuthStore();

  return (
    <div>
      DASHBOARD
      <button onClick={() => logout()}>Log out</button>
    </div>
  );
};

export default Dashboard;
