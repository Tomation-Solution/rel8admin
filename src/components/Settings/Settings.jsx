import React from 'react'
import { SettingsContainer, SettingsHeader, SettingsSubHeader,
     SettingsUpload, SettingsUploadCon, SettingsUploadImg,
      SettingsUploadInput, SettingsUploadLabel } from './Settings.styles'
import UploadImage from '../../assets/UploadImage.png'
import { useState } from 'react'

const Settings = () => {
    const [upload, setUpload] = useState(null)
    console.log(upload)

  return (
    <SettingsContainer>
        <SettingsHeader>
            Upload Database
        </SettingsHeader>
        <SettingsSubHeader>Upload First Level Database</SettingsSubHeader>
        <SettingsUploadCon>
            <SettingsUpload>
                <SettingsUploadLabel htmlFor='uploadImg'>
                    <SettingsUploadImg alt='' src={UploadImage}/>
                </SettingsUploadLabel>
                <SettingsUploadInput id='uploadImg' type={"file"} onChange={(e)=>setUpload(e.target.files[0])}/>
            </SettingsUpload>
        </SettingsUploadCon>
    </SettingsContainer>
  )
}

export default Settings