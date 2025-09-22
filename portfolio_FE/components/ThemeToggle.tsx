import React from "react";

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}


const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, onToggle }) => {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 16 }}>
      <span style={{ color: darkMode ? '#fff' : '#222', transition: 'color 0.2s' }}>☀️</span>
      <span style={{ position: 'relative', display: 'inline-block', width: 44, height: 24 }}>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={onToggle}
          style={{ opacity: 0, width: 44, height: 24, margin: 0, position: 'absolute', left: 0, top: 0, zIndex: 2, cursor: 'pointer' }}
        />
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 44,
            height: 24,
            background: darkMode ? '#222' : '#eee',
            borderRadius: 12,
            boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            transition: 'background 0.2s',
            border: '1px solid #888',
          }}
        />
        <span
          style={{
            position: 'absolute',
            top: 2,
            left: darkMode ? 22 : 2,
            width: 20,
            height: 20,
            background: darkMode ? '#444' : '#fff',
            borderRadius: '50%',
            boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
            transition: 'left 0.2s, background 0.2s',
            border: '1px solid #aaa',
          }}
        />
      </span>
      <span style={{ color: darkMode ? '#fff' : '#222', transition: 'color 0.2s' }}>🌙</span>
    </label>
  );
};

export default ThemeToggle;
