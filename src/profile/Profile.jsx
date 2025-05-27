import React, { useState, useEffect, useCallback } from "react";
import { FaUser, FaEdit, FaSignOutAlt, FaTimes, FaArrowLeft } from "react-icons/fa"; // Import FaArrowLeft
import { MdSubscriptions } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { FaDownload, FaPlus } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Profile.scss";

const PROFILE_COLORS = ["#3498db", "#2ecc71", "#9b59b6", "#e67e22", "#e74c3c"];
const MAX_PROFILES = 5;

const ProfileModal = ({ isOpen, onClose, onSubmit, isEditing, initialName }) => {
  const [name, setName] = useState(initialName || "");

  useEffect(() => {
    if (isOpen) {
      setName(initialName || "");
      document.getElementById("profile-name-input")?.focus();
    }
  }, [isOpen, initialName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  if (!isOpen) return null;

  return (
    <div className="profile-modal-overlay" role="dialog" aria-modal="true">
      <div className="profile-modal">
        <div className="modal-header">
          <h2>{isEditing ? "Edit Profile" : "Add New Profile"}</h2>
          <button onClick={onClose} className="modal-close" aria-label="Close modal">
            <FaTimes size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="modal-body">
          <input
            id="profile-name-input"
            type="text"
            value={name}
            placeholder="Enter profile name"
            onChange={(e) => setName(e.target.value)}
            aria-label="Profile name"
            required
            minLength={2}
            maxLength={20}
          />
          {name.length === 0 && <p className="error-message">Profile name is required</p>}
        </form>
        <div className="modal-footer">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button onClick={handleSubmit} className="save-btn" disabled={!name.trim()}>
            {isEditing ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({ profile, onEdit, onRemove }) => (
  <div className="profile-card">
    <div
      className="profile-avatar"
      style={{ backgroundColor: profile.color }}
      aria-label={`Profile ${profile.name}`}
    >
      <FaUser size={24} />
    </div>
    <h4>{profile.name}</h4>
    <div className="profile-actions">
      <button onClick={() => onEdit(profile)} className="edit-btn" aria-label={`Edit ${profile.name}`}>
        <FaEdit />
      </button>
      <button onClick={() => onRemove(profile.id)} className="remove-btn" aria-label={`Remove ${profile.name}`}>
        <FaTimes />
      </button>
    </div>
  </div>
);

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [modalState, setModalState] = useState({
    isOpen: false,
    isEditing: false,
    profile: null,
  });
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    try {
      const email = localStorage.getItem("userEmail");
      if (email) setUserEmail(email);

      const savedImage = localStorage.getItem("profileImage");
      if (savedImage) setProfileImage(savedImage);

      const savedProfiles = localStorage.getItem("profiles");
      if (savedProfiles) {
        setProfiles(JSON.parse(savedProfiles));
      } else {
        setProfiles([
          { id: 1, name: "User 1", color: "#090249" },
          { id: 2, name: "User 2", color: "#f58505" },
        ]);
      }
    } catch (error) {
      console.error("Failed to load profile data:", error);
    }
  }, []);

  useEffect(() => {
    if (profiles.length > 0) {
      localStorage.setItem("profiles", JSON.stringify(profiles));
    }
  }, [profiles]);

  const handleSaveProfile = useCallback((name) => {
    if (!name.trim()) return;

    setProfiles((prevProfiles) => {
      if (modalState.isEditing && modalState.profile) {
        return prevProfiles.map((p) =>
          p.id === modalState.profile.id ? { ...p, name } : p
        );
      } else if (prevProfiles.length < MAX_PROFILES) {
        const newProfile = {
          id: Date.now(),
          name,
          color: PROFILE_COLORS[Math.floor(Math.random() * PROFILE_COLORS.length)],
        };
        return [...prevProfiles, newProfile];
      }
      return prevProfiles;
    });

    closeModal();
  }, [modalState]);

  const openModal = (mode, profile = null) => {
    setModalState({
      isOpen: true,
      isEditing: mode === "edit",
      profile,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      isEditing: false,
      profile: null,
    });
  };

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove this profile?")) {
      setProfiles((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        {/* Back Arrow Button */}
        <button className="back-button" onClick={() => navigate('/home')}>
          <FaArrowLeft />
        </button>

        <div className="user-card">
          <div className="profile-user">
            <div className="profile-picture">
              {profileImage ? (
                <img src={profileImage} alt="Profile" />
              ) : (
                <FaUser className="profile-icon" aria-hidden="true" />
              )}
            </div>
            <h2>{userEmail || "Guest"}</h2>
          </div>
        </div>
        <Link to="/accountsetting" className="settings-link" aria-label="Account settings">
          <FiSettings size={28} />
        </Link>
      </header>

      <main className="profile-main">
        <h1>Manage Profiles</h1>

        <div className="profiles-list">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onEdit={() => openModal("edit", profile)}
              onRemove={handleRemove}
            />
          ))}

          {profiles.length < MAX_PROFILES && (
            <div
              className="profile-card add-profile"
              onClick={() => openModal("add")}
              role="button"
              tabIndex={0}
              aria-label="Add new profile"
              onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') openModal("add") }}
            >
              <div className="profile-avatar">
                <FaPlus size={24} />
              </div>
              <h4>Add Profile</h4>
            </div>
          )}
        </div>

        <nav className="profile-links" aria-label="Profile actions">
          <Link to="/presentplan" className="profile-link">
            <MdSubscriptions aria-hidden="true" /> Subscription Plan
          </Link>
          <Link to="/history" className="profile-link">
            <BiHistory aria-hidden="true" /> History
          </Link>
          <Link to="/download" className="profile-link">
            <FaDownload aria-hidden="true" /> Downloads
          </Link>
           <Link to="/accountsetting" className="profile-link">
            <MdSubscriptions aria-hidden="true" /> Account Settings
          </Link>
          <Link to="/" className="profile-link">
            <FaSignOutAlt aria-hidden="true" /> Sign Out
          </Link>

        </nav>
      </main>

      <ProfileModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        onSubmit={handleSaveProfile}
        isEditing={modalState.isEditing}
        initialName={modalState.profile?.name || ""}
      />
    </div>
  );
};

export default Profile;