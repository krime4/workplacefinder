import type { CSSProperties } from 'react';

export interface NavItem {
  label: string;
  active: boolean;
  onClick: () => void;
}

interface TopNavProps {
  items: NavItem[];
}

const navBarStyle: CSSProperties = {
  background: '#0033CC',
  borderBottom: '1px solid #002299',
  borderTop: '1px solid #6688DD',
};

const navInnerStyle: CSSProperties = {
  maxWidth: '960px',
  margin: '0 auto',
  padding: '0 16px',
  display: 'flex',
  gap: '0',
  flexWrap: 'wrap',
};

export default function TopNav({ items }: TopNavProps) {
  return (
    <div style={navBarStyle}>
      <div style={navInnerStyle}>
        {items.map((item, i) => (
          <span
            key={item.label}
            onClick={item.onClick}
            style={{
              padding: '6px 14px',
              fontSize: '13px',
              color: '#FFFFFF',
              borderRight: '1px solid #2A4A8C',
              borderLeft: i === 0 ? '1px solid #2A4A8C' : 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              background: item.active ? '#2A4A8C' : 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2A4A8C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = item.active ? '#2A4A8C' : 'transparent';
            }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
