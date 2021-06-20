import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo =({profile, status, updeteStatus}) =>{
  if(!profile) {
    return <Preloader />
  }
    return ( 
    <div>    
    {/*  <div>
        <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"/>
    </div> */}
      <div className={s.descriptionBlok}>
        <img src={profile.photos.large} />
         <div>
           {profile.fullName}
         </div>
         <ProfileStatusWithHooks status={status} updeteStatus={updeteStatus} />
    </div>
</div>
 ) 
}

export default ProfileInfo;