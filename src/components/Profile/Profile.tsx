import { useEffect, useState } from "react";
import { ProfileContainer, ProfileInfoSection } from "./styles";
import { User } from "../../utils";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        return navigate("/");
      }
    }
  }, [isAuthenticated, user, isLoading]);

  if (isLoading) {
    return <div>page loading...</div>;
  }

  return (
    <ProfileContainer>
      <h2>PERFIL</h2>
      {isAuthenticated && user && (
        <ProfileInfoSection>
          <div className="pfp-container">
            <img src={user.picture} alt="user image" />
          </div>
          <div className="pi-container">
            <p className="p-name">{user.name}</p>
            <a href={`mailto:${user.email}`} className="p-email">
              {user.email}
            </a>
            <a href={`tel:${user.phone_number}`} className="p-phone">
              {user.phone_number}
            </a>
          </div>
        </ProfileInfoSection>
      )}
    </ProfileContainer>
  );
};
