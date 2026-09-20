import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await register({ name, email, password });
      navigate('/'); 
    } catch (err) {
      setError(err.message || 'Failed to create account');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '4rem auto', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', background: '#121620' }}>
      <h2 style={{ marginBottom: '0.5rem', color: '#fff' }}>Create an Account</h2>
      <p style={{ color: '#8b949e', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Join WorkWay and supercharge your career</p>

      {error && (
        <div style={{ background: 'rgba(255, 68, 68, 0.1)', border: '1px solid #ff4444', color: '#ff6b6b', padding: '0.75rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', color: '#c9d1d9', fontSize: '0.85rem', marginBottom: '0.3rem' }}>Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #30363d', background: '#0d1117', color: '#fff' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', color: '#c9d1d9', fontSize: '0.85rem', marginBottom: '0.3rem' }}>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #30363d', background: '#0d1117', color: '#fff' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', color: '#c9d1d9', fontSize: '0.85rem', marginBottom: '0.3rem' }}>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #30363d', background: '#0d1117', color: '#fff' }}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{ marginTop: '0.5rem', padding: '0.75rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
        >
          {isSubmitting ? 'Creating account...' : 'Create Account'}
        </button>
      </form>

      <p style={{ marginTop: '1.5rem', color: '#8b949e', fontSize: '0.85rem', textAlign: 'center' }}>
        Already have an account? <Link to="/login" style={{ color: '#58a6ff' }}>Log in</Link>
      </p>
    </div>
  );
}

export default Register;
