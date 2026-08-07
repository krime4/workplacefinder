import type { CSSProperties } from 'react';
import type { Route } from '@/App';
import { FONT_FAMILY } from '@/styles/shared';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

interface UnderConstructionPageProps {
  title: string;
  navigate: (r: Route) => void;
}

const pageStyle: CSSProperties = {
  fontFamily: FONT_FAMILY,
  background: '#F4F4F4',
  color: '#333333',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const headerStyle: CSSProperties = {
  width: '100%',
  background: 'linear-gradient(to bottom, #4A6CB4, #2A4A8C)',
  borderBottom: '2px solid #1a3a6c',
  color: '#FFFFFF',
};

const headerInnerStyle: CSSProperties = {
  maxWidth: '760px',
  margin: '0 auto',
  padding: '8px 16px',
};

const contentStyle: CSSProperties = {
  maxWidth: '760px',
  margin: '0 auto',
  padding: '24px 16px',
};

export default function UnderConstructionPage({
  title,
  navigate,
}: UnderConstructionPageProps) {
  const navItems = [
    { label: 'Find Jobs', active: false, onClick: () => navigate({ name: 'home' }) },
    { label: 'Post Resume', active: title === 'Post Resume', onClick: () => navigate({ name: 'post-resume' }) },
    { label: 'Employers', active: title === 'Employers', onClick: () => navigate({ name: 'employers' }) },
    { label: 'Career Advice', active: title === 'Career Advice', onClick: () => navigate({ name: 'career-advice' }) },
  ];

  return (
    <div style={pageStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={headerInnerStyle}>
          <div style={{ fontSize: '28px', fontWeight: 'bold' }}>Work Place Finder</div>
          <div style={{ fontSize: '12px', opacity: 0.9 }}>» Local Jobs. Hiring Now.</div>
        </div>
      </div>

      <TopNav items={navItems} />

      {/* Content */}
      <div style={{ flex: 1 }}>
      <div style={contentStyle}>
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #CCCCCC',
            boxShadow: '3px 3px 6px rgba(0,0,0,0.15)',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(to bottom, #E0E0E0, #CCCCCC)',
              borderBottom: '1px solid #AAAAAA',
              padding: '8px 12px',
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#333333',
            }}
          >
            {title}
          </div>

          <div
            style={{
              padding: '40px 24px',
              textAlign: 'center',
            }}
          >
            {/* Construction GIF placeholder using CSS */}
            <div
              style={{
                fontSize: '48px',
                marginBottom: '16px',
                display: 'inline-block',
                animation: 'wobble 1.5s ease-in-out infinite',
              }}
            >
              ⚠️
            </div>

            <h2
              style={{
                fontSize: '22px',
                fontWeight: 'bold',
                color: '#0033CC',
                marginBottom: '12px',
              }}
            >
              Under Construction
            </h2>

            <p
              style={{
                fontSize: '13px',
                lineHeight: '1.6',
                color: '#666666',
                maxWidth: '400px',
                margin: '0 auto 20px',
              }}
            >
              This section is currently under construction. We are working hard to bring you the{' '}
              {title.toLowerCase()} feature. Please check back soon!
            </p>

            <div
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: '#FFFFCC',
                border: '1px dashed #999999',
                fontSize: '12px',
                color: '#666666',
                marginBottom: '20px',
              }}
            >
              🔨 Pardon our dust — this page is being built. 🔨
            </div>

            <br />

            <span
              style={{ color: '#0033CC', textDecoration: 'underline', fontSize: '13px', cursor: 'pointer' }}
              onClick={() => navigate({ name: 'home' })}
            >
              « Back to all listings
            </span>
          </div>
        </div>
      </div>
      </div>

      <Footer />

      <style>{`
        @keyframes wobble {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
      `}</style>
    </div>
  );
}
