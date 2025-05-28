import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaCamera, FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Accountsetting.scss";

const AccountSettings = () => {
  const [userEmail] = useState(
    localStorage.getItem("userEmail") || "user@example.com"
  );
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [tempImage, setTempImage] = useState(null);
  const [isChangingImage, setIsChangingImage] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

 
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProfileImage = () => {
    if (tempImage) {
      setProfileImage(tempImage);
      localStorage.setItem("profileImage", tempImage);
      setMessage({ text: "Profile picture updated", type: "success" });
    }
    setIsChangingImage(false);
    setTempImage(null);
  };

  const cancelImageChange = () => {
    setIsChangingImage(false);
    setTempImage(null);
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setMessage({ text: "Passwords do not match", type: "error" });
      return;
    }

    if (newPassword.length < 6) {
      setMessage({
        text: "Password must be at least 6 characters",
        type: "error",
      });
      return;
    }

    
    setTimeout(() => {
      setMessage({ text: "Password changed successfully", type: "success" });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setIsChangingPassword(false);
    }, 1000);
  };

  return (
    <div className="account-settings">
      <header className="settings-header">
        <div className="header-user">
          <div className="profile-icon">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-image" />
            ) : (
              <FaUser size={30} />
            )}
          </div>
          <h2>Account Settings</h2>
        </div>
        <Link to="/profile" className="back-link" style={{textDecoration:'none'}}>
          <button className="profile-btn">Back</button>
        </Link>
      </header>

      <div className="settings-main">
        {message.text && (
          <div className={`settings-message ${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="settings-card">
        
          <div className="settings-item">
            <div className="settings-icon">
              <FaUser size={20} />
            </div>
            <div className="settings-content">
              <h3>Profile Picture</h3>
              {isChangingImage ? (
                <div className="image-edit-section">
                  <div className="image-preview">
                    {tempImage ? (
                      <img src={tempImage} alt="Preview" />
                    ) : profileImage ? (
                      <img src={profileImage} alt="Current" />
                    ) : (
                      <div className="image-placeholder">
                        <FaUser size={40} />
                      </div>
                    )}
                  </div>
                  <label className="upload-btn">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      style={{ display: "none" }}
                    />
                    <FaCamera /> Choose Image
                  </label>
                  <div className="edit-actions">
                    <button
                      onClick={saveProfileImage}
                      className="save-btn"
                      disabled={!tempImage}
                    >
                      <FaCheck /> Save
                    </button>
                    <button onClick={cancelImageChange} className="cancel-btn">
                      <FaTimes /> Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="display-section">
                  <div className="current-image">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" />
                    ) : (
                      <div className="image-placeholder">
                        <FaUser size={24} />
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setIsChangingImage(true)}
                    className="edit-btn"
                  >
                    <FaCamera /> Change
                  </button>
                </div>
              )}
            </div>
          </div>

         
          <div className="settings-item">
            <div className="settings-icon">
              <FaUser size={20} />
            </div>
            <div className="settings-content">
              <h3>Email Address</h3>
              <div className="display-section">
                <p>{userEmail}</p>
                <div className="email-note">
                  (Login email cannot be changed)
                </div>
              </div>
            </div>
          </div>

         
          <div className="settings-item">
            <div className="settings-icon">
              <FaLock size={20} />
            </div>
            <div className="settings-content">
              <h3>Password</h3>
              {isChangingPassword ? (
                <div className="edit-section">
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Current password"
                  />
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New password"
                  />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                  />
                  <div className="edit-actions">
                    <button onClick={handlePasswordChange} className="save-btn">
                      <FaCheck /> Update
                    </button>
                    <button
                      onClick={() => {
                        setIsChangingPassword(false);
                        setCurrentPassword("");
                        setNewPassword("");
                        setConfirmPassword("");
                      }}
                      className="cancel-btn"
                    >
                      <FaTimes /> Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="display-section">
                  <p>••••••••</p>
                  <button
                    onClick={() => setIsChangingPassword(true)}
                    className="edit-btn"
                  >
                    <FaLock /> Change
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
