import type { CSSProperties } from 'react';

interface FooterProps {
  showWeKnowWhatYouDid?: boolean;
}

const tickerStyle: CSSProperties = {
  background: '#DDDDCC',
  borderTop: '1px solid #BBBBAA',
  padding: '5px 16px',
  fontSize: '11px',
  color: '#555544',
  textAlign: 'center',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

const darkBarStyle: CSSProperties = {
  background: '#333333',
  borderTop: '2px solid #1a1a1a',
  color: '#CCCCCC',
  padding: '10px 16px',
  textAlign: 'center',
};

const innerStyle: CSSProperties = {
  maxWidth: '960px',
  margin: '0 auto',
  fontSize: '12px',
  lineHeight: '1.7',
};

export default function Footer({ showWeKnowWhatYouDid }: FooterProps) {
  return (
    <div>
      {/* Ticker strip */}
      <div style={tickerStyle}>
        ★ New listings posted daily &nbsp;★ Apply online with no account &nbsp;★ Tell a friend about Work Place Finder &nbsp;★
      </div>

      {/* Dark footer bar */}
      <div style={darkBarStyle}>
        <div style={innerStyle}>
          <div>
            <strong style={{ color: '#FFFFFF' }}>Support:</strong> 1-800-WORK-FIND &nbsp;|&nbsp;{' '}
            <strong style={{ color: '#FFFFFF' }}>Email:</strong>{' '}
            <span style={{ color: '#88BBFF', textDecoration: 'underline' }}>
              contact@workplacefinder.com
            </span>
          </div>
          <div style={{ color: '#888888', fontSize: '11px' }}>
            © 2003 Work Place Finder. All rights reserved. &nbsp;|&nbsp;{' '}
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>
            &nbsp;|&nbsp;{' '}
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Terms of Use</span>
          </div>
          <div style={{ color: '#CC5555', fontSize: '11px', marginTop: '4px' }}>
            Nothing will be saved, not even you.
          </div>
          {showWeKnowWhatYouDid && (
            <div style={{ color: '#FF0000', fontSize: '13px', fontWeight: 'bold', marginTop: '4px' }}>
              We know what you did.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
