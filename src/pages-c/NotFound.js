import { useNavigate } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-container">
      <div className="content-overlay">
        <h1 className="glitch-text">404</h1>
        <p className="subtitle">页面迷失在数字宇宙中</p>
        <div className="action-buttons">
          <button 
            className="neon-button"
            onClick={() => navigate('/')}
          >
            返回
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
