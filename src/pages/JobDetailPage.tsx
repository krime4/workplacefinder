import { useState, type CSSProperties } from 'react';
import type { Route } from '@/App';
import { jobs } from '@/data/jobs';
import {
  FONT_FAMILY,
  inputStyle,
  submitButtonStyle,
} from '@/styles/shared';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

interface JobDetailPageProps {
  id: number;
  navigate: (r: Route) => void;
}

const GOFILE_LINK = 'https://gofile.io/d/jwhsEQ';

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
  padding: '12px 16px',
};

export default function JobDetailPage({ id, navigate }: JobDetailPageProps) {
  const job = jobs.find((j) => j.id === id);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showModal, setShowModal] = useState(false);

  if (!job) {
    return (
      <div
        style={{
          fontFamily: FONT_FAMILY,
          background: '#F4F4F4',
          minHeight: '100vh',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#0033CC' }}>Job Not Found</h2>
        <p style={{ fontSize: '13px', marginBottom: '16px' }}>
          The job listing you requested could not be located.
        </p>
        <span
          style={{ color: '#0033CC', textDecoration: 'underline', fontSize: '13px', cursor: 'pointer' }}
          onClick={() => navigate({ name: 'home' })}
        >
          « Back to all listings
        </span>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNameChange = (value: string) => {
    setForm((prev) => ({ ...prev, name: value }));
    setShowModal(
      job.title === 'Night Guard' &&
        value.trim().toLowerCase() === 'evan sterling'
    );
  };

  const navItems = [
    { label: 'Find Jobs', active: false, onClick: () => navigate({ name: 'home' }) },
    { label: 'Post Resume', active: false, onClick: () => navigate({ name: 'post-resume' }) },
    { label: 'Employers', active: false, onClick: () => navigate({ name: 'employers' }) },
    { label: 'Career Advice', active: false, onClick: () => navigate({ name: 'career-advice' }) },
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
        <div style={{ marginBottom: '8px', fontSize: '12px' }}>
          <span
            style={{ color: '#0033CC', textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => navigate({ name: 'home' })}
          >
            « Back to all listings
          </span>
        </div>

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
            Job Details
          </div>

          <div style={{ padding: '16px' }}>
            <h1
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#0033CC',
                margin: '0 0 4px 0',
              }}
            >
              {job.title}
            </h1>
            <div style={{ fontSize: '13px', color: '#666666', marginBottom: '16px' }}>
              {job.company} — {job.location}
            </div>

            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '13px',
                marginBottom: '20px',
              }}
            >
              <tbody>
                <tr style={{ borderBottom: '1px solid #EEEEEE' }}>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', width: '140px', verticalAlign: 'top' }}>
                    Salary:
                  </td>
                  <td style={{ padding: '8px 0', color: '#007700', fontWeight: 'bold' }}>
                    {job.salary}
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EEEEEE' }}>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', verticalAlign: 'top' }}>
                    Position Type:
                  </td>
                  <td style={{ padding: '8px 0' }}>{job.type}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EEEEEE' }}>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', verticalAlign: 'top' }}>
                    Location:
                  </td>
                  <td style={{ padding: '8px 0' }}>{job.location}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EEEEEE' }}>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', verticalAlign: 'top' }}>
                    Date Posted:
                  </td>
                  <td style={{ padding: '8px 0' }}>{job.posted}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #EEEEEE' }}>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', verticalAlign: 'top' }}>
                    Job ID:
                  </td>
                  <td style={{ padding: '8px 0' }}>WPF-{String(job.id).padStart(4, '0')}</td>
                </tr>
              </tbody>
            </table>

            <h2
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#333333',
                borderBottom: '1px solid #CCCCCC',
                paddingBottom: '4px',
                marginBottom: '10px',
              }}
            >
              Job Description
            </h2>
            <p style={{ fontSize: '13px', lineHeight: '1.6', marginTop: '0' }}>
              {job.description}
            </p>

            {/* Apply Now Section */}
            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #CCCCCC' }}>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                Apply Now
              </h2>

              {submitted ? (
                <div
                  style={{
                    padding: '16px',
                    background: '#EEFFEE',
                    border: '1px solid #007700',
                    fontSize: '13px',
                  }}
                >
                  <strong style={{ color: '#007700' }}>✓ Application Received!</strong>
                  <br />
                  Thank you for your interest in the <strong>{job.title}</strong> position at{' '}
                  {job.company}. A representative will contact you at{' '}
                  <strong>{form.email || 'the email provided'}</strong> within 3-5 business days.
                  <br />
                  <br />
                  <span
                    style={{ color: '#0033CC', textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={() => navigate({ name: 'home' })}
                  >
                    « Back to all listings
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ fontSize: '13px' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <label
                      style={{ display: 'block', fontWeight: 'bold', marginBottom: '3px' }}
                      htmlFor="name"
                    >
                      Full Name:
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      style={inputStyle}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label
                      style={{ display: 'block', fontWeight: 'bold', marginBottom: '3px' }}
                      htmlFor="email"
                    >
                      Email Address:
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      style={inputStyle}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label
                      style={{ display: 'block', fontWeight: 'bold', marginBottom: '3px' }}
                      htmlFor="phone"
                    >
                      Phone Number:
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      style={inputStyle}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label
                      style={{ display: 'block', fontWeight: 'bold', marginBottom: '3px' }}
                      htmlFor="message"
                    >
                      Why should we hire you?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, message: e.target.value }))
                      }
                      style={{ ...inputStyle, height: 'auto', resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" style={submitButtonStyle}>
                    Submit Application
                  </button>
                  <span style={{ marginLeft: '10px', fontSize: '11px', color: '#666666' }}>
                    (No account required)
                  </span>
                </form>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: '12px',
            fontSize: '11px',
            color: '#666666',
            textAlign: 'center',
          }}
        >
          Questions about this listing? Call <strong>1-800-WORK-FIND</strong> or email{' '}
          <span style={{ color: '#0033CC', textDecoration: 'underline' }}>
            support@workplacefinder.net
          </span>
        </div>
      </div>
      </div>

      <Footer showWeKnowWhatYouDid={showModal} />

      {/* Evan Sterling Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              border: '1px solid #666666',
              boxShadow: '3px 3px 10px rgba(0,0,0,0.3)',
              textAlign: 'center',
              width: '320px',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(to bottom, #4A6CB4, #2A4A8C)',
                borderBottom: '2px solid #1a3a6c',
                padding: '6px 10px',
                fontSize: '11px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                textAlign: 'left',
              }}
            >
              !! Message
            </div>
            <div style={{ padding: '28px 20px 20px' }}>
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#0033CC',
                  marginBottom: '20px',
                  fontFamily: FONT_FAMILY,
                }}
              >
                shhh
              </div>
              <a
                href={GOFILE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '4px 24px',
                  background: 'linear-gradient(to bottom, #EEEEEE, #CCCCCC)',
                  color: '#333333',
                  border: '1px solid #999999',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  fontFamily: FONT_FAMILY,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                leaks
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
