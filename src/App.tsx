import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { NewAnalysis } from './pages/NewAnalysis';
import { History } from './pages/History';
import { Patients } from './pages/Patients';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analysis/new" element={<NewAnalysis />} />
                <Route path="/history" element={<History />} />
                <Route path="/patients" element={<Patients />} />
                <Route path="/settings" element={<div>Settings Page</div>} />
                <Route path="/help" element={<div>Help Page</div>} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;