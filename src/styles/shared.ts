import type { CSSProperties } from 'react';

export const FONT_FAMILY = "Verdana, Tahoma, Arial, sans-serif";

export const navButtonStyle: CSSProperties = {
  padding: '6px 14px',
  fontSize: '13px',
  color: '#FFFFFF',
  borderRight: '1px solid #2A4A8C',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
};

export const sidebarBoxStyle: CSSProperties = {
  background: '#FFFFFF',
  border: '1px solid #CCCCCC',
};

export const sidebarHeaderStyle: CSSProperties = {
  background: 'linear-gradient(to bottom, #E0E0E0, #CCCCCC)',
  borderBottom: '1px solid #AAAAAA',
  padding: '5px 8px',
  fontSize: '13px',
  fontWeight: 'bold',
  color: '#333333',
};

export const sidebarLinkStyle: CSSProperties = {
  color: '#0033CC',
  cursor: 'pointer',
  textDecoration: 'underline',
};

export const tableHeaderCellStyle: CSSProperties = {
  textAlign: 'left',
  padding: '6px 8px',
  fontWeight: 'bold',
  borderBottom: '1px solid #CCCCCC',
};

export const tableCellStyle: CSSProperties = {
  padding: '6px 8px',
};

export const inputStyle: CSSProperties = {
  width: '100%',
  padding: '5px',
  border: '1px solid #999999',
  fontSize: '13px',
  fontFamily: FONT_FAMILY,
  boxSizing: 'border-box',
  height: '24px',
  background: '#FFFFFF',
};

export const submitButtonStyle: CSSProperties = {
  background: 'linear-gradient(to bottom, #229922, #007700)',
  color: '#FFFFFF',
  border: '2px outset #006600',
  padding: '6px 20px',
  fontSize: '14px',
  fontWeight: 'bold',
  fontFamily: FONT_FAMILY,
  cursor: 'pointer',
  boxShadow: '1px 1px 2px rgba(0,0,0,0.2)',
};
